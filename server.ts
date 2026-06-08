import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini API Client
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error(
        "GEMINI_API_KEY environment variable is required to generate custom scent profiles. Please configure your key under the Secrets panel in the Settings menu."
      );
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// REST Endpoint: Check API Health & Key Presence
app.get("/api/health", (req, res) => {
  const hasKey = !!process.env.GEMINI_API_KEY;
  res.json({
    status: "ok",
    hasApiKey: hasKey,
    timestamp: new Date().toISOString()
  });
});

// REST Endpoint: Create Bespoke Fragrance Brief via Gemini AI
app.post("/api/create-scent", async (req, res) => {
  try {
    const { productFormat, olfactoryDirections, targetAudience, brandPersonality, inspiration } = req.body;

    if (!productFormat || !inspiration) {
      return res.status(400).json({ error: "Missing required fields (productFormat and inspiration are mandatory)" });
    }

    let ai;
    try {
      ai = getAiClient();
    } catch (keyError: any) {
      return res.status(403).json({ error: keyError.message });
    }

    const systemPrompt = `You are a legendary master perfumer and chief evaluator at Your Company Name, the world-leading global fragrance compounding manufacturer.
Your task is to analyze the user's raw formulation inputs and write a highly professional, chemically informed, and evocative "Bespoke Fragrance Brief".
Maintain our elite reputation by supplying thorough note listings, specific safety advice (including IFRA limits/allergy concerns), and poetic commercial text.
The brief must target compound sales to cosmetic, household or industrial buyers.
Deliver your output strictly in JSON according to the requested schema. Do not output any markdown code blocks outside of the JSON representation.`;

    const prompt = `Create a custom fragrance briefing document based on:
- Target Product Format / Medium: ${productFormat}
- Olfactory Directions Requested: ${olfactoryDirections && olfactoryDirections.length > 0 ? olfactoryDirections.join(", ") : "Perfumer's Choice"}
- Target Consumer Group: ${targetAudience || "Premium Mass Market"}
- Projected Brand Character: ${brandPersonality || "Sophisticated & Modern"}
- Creative Story & Inspiration: "${inspiration}"

Formulate a master-class compound scent with specific olfactory materials.`;

    // Response structure
    const responseSchema = {
      type: "OBJECT",
      properties: {
        themeName: { type: "STRING", description: "A creative, commercial title for the scent direction (e.g. 'Ambiance of Sandalwood & Dewy Lavender')." },
        olfactiveFamily: { type: "STRING", description: "The official perfumery category (e.g., Woody Mossy Fougere, Musky Fruity Floral)." },
        topNotes: {
          type: "ARRAY",
          items: { type: "STRING" },
          description: "2 to 4 volatile top notes providing initial fragrance impact (e.g. Bergamot, Sicilian Lemon Zest)."
        },
        heartNotes: {
          type: "ARRAY",
          items: { type: "STRING" },
          description: "2 to 4 heart or middle notes providing core body and staying power (e.g. Moroccan Rose Petals, Cardamom Pods)."
        },
        baseNotes: {
          type: "ARRAY",
          items: { type: "STRING" },
          description: "2 to 4 heavy base notes acting as fixatives to anchoring the formula (e.g. Amberwood, Oakmoss, Warm Patchouli)."
        },
        description: { type: "STRING", description: "A detailed 2-paragraph perfumer commentary specifying chemical balance, ingredient choices, scent evolution, and ideal aesthetic impression." },
        idealApplications: {
          type: "ARRAY",
          items: { type: "STRING" },
          description: "2 to 3 other applications where this compound excels."
        },
        marketingCopy: { type: "STRING", description: "A highly poetic and catchy commercial slogan or copy." },
        regulatoryAdvice: { type: "STRING", description: "Strict professional guidance regarding IFRA Class limits, allergen labeling (such as Citral or Linalool levels), or thermal/pH stability risks specific to the format." },
        recommendedConcentration: { type: "STRING", description: "Optimal compound loading percentage range (e.g. '6% - 10% for soy wax candles', '15% - 20% for Eau de Parfum')." }
      },
      required: ["themeName", "olfactiveFamily", "topNotes", "heartNotes", "baseNotes", "description", "idealApplications", "marketingCopy", "regulatoryAdvice", "recommendedConcentration"]
    };

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 1.0,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No briefing content was returned from the AI model.");
    }

    const payload = JSON.parse(text.trim());
    return res.json(payload);
  } catch (error: any) {
    console.error("Composer generation failure:", error);
    return res.status(500).json({
      error: error.message || "Failed to generate fragrance brief. Please verify your variables and try again."
    });
  }
});

// Asynchronous bootloader to bypass CommonJS top-level await boundaries
async function startServer() {
  // Vite & Static file integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Start Server strictly binding to host 0.0.0.0 and port 3000 exclusively
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully operative under full-stack configuration: http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Critical server boot failure:", error);
  process.exit(1);
});
