import React from 'react';
import SubpageHeader from './SubpageHeader';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import { 
  Sparkles, Leaf, Beaker, Droplets, CheckCircle2, ArrowRight, 
  SearchCode, Info, ListChecks, HelpCircle, Layers
} from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function GuideTab({ setActiveTab }: TabProps) {
  const handleContactClick = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#FBFBFA] text-[#1E2B16]"
    >
      {/* Premium Header */}
      <SubpageHeader
        category="Education & Knowledge Hub"
        title="Essential Oils, Fragrance Oils"
        subtitle="& Aroma Materials"
        backgroundImage="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1920&q=85"
      />

      {/* Main Educational Container */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-24">
        
        {/* HERO DESCRIPTION & INTRO OVERVIEW (Bento Split Layout) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Hero Desc - Left Panel */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#EFF1ED] to-[#E6E0D6]/40 rounded-2xl border border-[#E6E0D6] p-8 md:p-10 flex flex-col justify-center space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#B28A4A] bg-[#fdf5eb]/60 self-start px-2.5 py-1 rounded inline-block">
              Strategic Sourcing Information
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1E2B16] font-normal leading-tight tracking-tight">
              Curate the Ideal Fragrance Matrix for Your Brand
            </h2>
            <p className="text-sm text-[#4E5554] leading-relaxed font-light">
              Choosing the right fragrance material can shape how a product feels, performs, and connects with its market. Proessences supplies essential oils, fragrance oils, aroma chemicals, and related raw materials for businesses developing personal care, home care, fine fragrance, wellness, and other scented products.
            </p>
          </div>

          {/* Intro Section with Premium Arrangement - Right Panel */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E6E0D6] p-6 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="relative w-full rounded-xl overflow-hidden aspect-[16/10] border border-[#E6E0D6]">
              <img 
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80" 
                alt="Aroma vials and scent strips arranged minimalist on desk" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#1E2B16] flex items-center gap-2">
                <Info className="w-4.5 h-4.5 text-[#B28A4A]" />
                Introductory Overview
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6765] leading-relaxed font-light">
                Understanding the difference between essential oils, fragrance oils, natural fragrances, and synthetic aroma materials helps brands make better sourcing decisions. Each material type offers different advantages in scent profile, consistency, availability, performance, and cost.
              </p>
              <p className="text-xs sm:text-sm text-[#5F6765] leading-relaxed font-light">
                This guide gives a simple overview of the main fragrance material categories and how they may support different product applications.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1: NATURAL FRAGRANCES (Alternating layout - Left Text, Right Image) */}
        <section className="bg-white rounded-2xl border border-[#E6E0D6] overflow-hidden max-w-6xl mx-auto shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E6E0D6]">
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EFF1ED] flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-[#596E4E]" />
                </div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E]">Sourcing Category 01</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3.5xl text-[#1E2B16] leading-tight tracking-tight">
                Natural Fragrances
              </h2>
              <p className="text-xs sm:text-sm text-[#4E5554] leading-relaxed font-light">
                Natural fragrances are made from aromatic materials obtained from natural sources such as flowers, fruits, herbs, spices, woods, resins, and other botanicals. These materials are commonly extracted through processes such as distillation, expression, or solvent extraction.
              </p>
              <p className="text-xs sm:text-sm text-[#4E5554] leading-relaxed font-light">
                Natural fragrance materials are often valued for their botanical origin, depth, and character. They are commonly used in personal care, wellness, spa, aromatherapy, room fragrance, and selected premium product applications.
              </p>
              <div className="bg-[#EFF1ED]/40 p-4 sm:p-5 rounded-lg border border-[#E6E0D6]/60 text-xs text-[#5F6765] leading-relaxed font-light italic">
                <strong className="text-[#1E2B16] font-semibold block not-italic mb-1 font-mono text-[10px] uppercase tracking-wider">🔬 Technical Sourcing Note:</strong>
                However, natural materials may vary depending on harvest, climate, source, and availability. They may also contain naturally occurring allergens or restricted components, which should be considered during product development and client-side testing.
              </div>
            </div>
            
            <div className="lg:col-span-5 relative min-h-[300px] bg-gray-50 flex items-stretch">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80" 
                alt="Botanical lavender and dry elements beside oil bottles" 
                className="w-full h-full object-cover min-h-[320px] lg:absolute lg:inset-0"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: ESSENTIAL OILS (Alternating layout - Left Image, Right Text) */}
        <section className="bg-white rounded-2xl border border-[#E6E0D6] overflow-hidden max-w-6xl mx-auto shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-[#E6E0D6]">
            <div className="lg:col-span-5 relative min-h-[300px] bg-gray-50 flex items-stretch">
              <img 
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80" 
                alt="Essential oil glass bottles with pipettes and fresh botanical ingredients" 
                className="w-full h-full object-cover min-h-[320px] lg:absolute lg:inset-0"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EFF1ED] flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-[#B28A4A]" />
                </div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#B28A4A]">Sourcing Category 02</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3.5xl text-[#1E2B16] leading-tight tracking-tight">
                Essential Oils
              </h2>
              <p className="text-xs sm:text-sm text-[#4E5554] leading-relaxed font-light">
                Essential oils are concentrated aromatic oils derived from plant sources. Common examples include lavender oil, peppermint oil, eucalyptus oil, lemongrass oil, tea tree oil, and citrus oils.
              </p>
              <p className="text-xs sm:text-sm text-[#4E5554] leading-relaxed font-light">
                These materials are often used for their natural scent character and association with wellness, freshness, relaxation, or cleanliness. Depending on the product application, essential oils may be used in personal care, massage products, spa products, room fragrance, candles, and selected household products.
              </p>
              <div className="bg-[#fcfbf9] p-4 rounded-lg border border-[#E6E0D6] text-xs text-[#5F6765] leading-relaxed font-light">
                <span className="text-[#1E2B16] font-semibold block mb-1">Key Considerations for Procurement:</span>
                When choosing essential oils, businesses should consider scent profile, intended use, stability, allergen considerations, supply availability, and compatibility with the final product base.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: FRAGRANCE OILS (Alternating layout - Left Text, Right Image) */}
        <section className="bg-white rounded-2xl border border-[#E6E0D6] overflow-hidden max-w-6xl mx-auto shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E6E0D6]">
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EFF1ED] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#596E4E]" />
                </div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E]">Sourcing Category 03</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3.5xl text-[#1E2B16] leading-tight tracking-tight">
                Fragrance Oils
              </h2>
              <p className="text-xs sm:text-sm text-[#4E5554] leading-relaxed font-light">
                Fragrance oils are scent materials created to deliver a specific fragrance profile for product applications. They may be composed of natural materials, synthetic aroma materials, or a combination of both.
              </p>
              <p className="text-xs sm:text-sm text-[#4E5554] leading-relaxed font-light">
                Compared with essential oils, fragrance oils can offer wider scent variety, better consistency, improved performance, and greater flexibility for commercial products. They can be designed to suit different scent directions such as floral, fruity, woody, fresh, gourmand, herbal, citrus, powdery, clean, or luxury-inspired profiles.
              </p>
              <p className="text-xs sm:text-sm text-[#4E5554] leading-relaxed font-light">
                Fragrance oils are commonly used in perfumes, personal care products, soaps, lotions, shampoos, home care products, air fresheners, room sprays, candles, and automotive fragrance products.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative min-h-[300px] bg-gray-50 flex items-stretch">
              <img 
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80" 
                alt="Aesthetic unbranded fragrance bottles in a clean studio setting" 
                className="w-full h-full object-cover min-h-[320px] lg:absolute lg:inset-0"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* SECTION 4: SYNTHETIC AROMA MATERIALS (Alternating layout - Left Image, Right Text) */}
        <section className="bg-white rounded-2xl border border-[#E6E0D6] overflow-hidden max-w-6xl mx-auto shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-[#E6E0D6]">
            <div className="lg:col-span-5 relative min-h-[300px] bg-gray-50 flex items-stretch">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=80" 
                alt="Refined laboratory analytical glassware with clear aroma chemical samples" 
                className="w-full h-full object-cover min-h-[320px] lg:absolute lg:inset-0"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EFF1ED] flex items-center justify-center">
                  <Beaker className="w-4 h-4 text-[#1E2B16]" />
                </div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16]">Sourcing Category 04</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3.5xl text-[#1E2B16] leading-tight tracking-tight">
                Synthetic Aroma Materials
              </h2>
              <p className="text-xs sm:text-sm text-[#4E5554] leading-relaxed font-light">
                Synthetic aroma materials are ingredients produced through chemical or controlled manufacturing processes. Some are designed to replicate scents found in nature, while others create scent effects that may not be easily obtained from natural sources.
              </p>
              <p className="text-xs sm:text-sm text-[#4E5554] leading-relaxed font-light">
                These materials can support better consistency, stability, intensity, shelf life, and supply reliability. They also allow access to a wider range of scent profiles and may help reduce dependency on limited or sensitive natural resources.
              </p>
              <p className="text-xs sm:text-sm text-[#4E5554] leading-relaxed font-light">
                In many commercial products, synthetic aroma materials are used together with natural materials to achieve a balanced, stable, and market-ready scent profile.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: COMPARATIVE CRITERIA (Natural vs Synthetic: Which Is Better?) */}
        <section className="bg-gradient-to-br from-white to-[#EFF1ED]/30 rounded-2xl border border-[#E6E0D6] p-8 md:p-12 lg:p-16 space-y-12 max-w-6xl mx-auto shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#E6E0D6] pb-10">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-[#B28A4A]" />
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#B28A4A]">Balanced Perspective</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3.5xl text-[#1E2B16] leading-tight tracking-tight">
                Natural vs Synthetic: Which Is Better?
              </h2>
              <p className="text-[#4E5554] text-xs sm:text-sm font-light leading-relaxed">
                There is no single best choice between natural and synthetic fragrance materials. The right option depends on the product type, target market, desired scent profile, performance needs, budget, and brand direction.
              </p>
            </div>
            <div className="lg:col-span-5 rounded-lg overflow-hidden border border-[#E6E0D6] shadow-xs aspect-[16/9]">
              <img 
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1000&q=80" 
                alt="Aesthetic botanical oils set alongside amber glass ware" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 bg-white rounded-xl border border-[#E6E0D6] space-y-3">
              <span className="text-[10px] font-mono tracking-widest font-bold text-[#596E4E] uppercase">The Natural Preference</span>
              <h4 className="font-serif text-lg text-[#1E2B16] font-normal">Botanical Positioning</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Natural materials may be preferred for brands focused on botanical, wellness, or nature-inspired positioning, lending genuine earthiness and organic appeal to holistic marketing concepts.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E6E0D6] space-y-3">
              <span className="text-[10px] font-mono tracking-widest font-bold text-[#B28A4A] uppercase">The Synthetic Advantage</span>
              <h4 className="font-serif text-lg text-[#1E2B16] font-normal">Scent Predictability</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Synthetic and blended materials are preferred when consistency, strength, high temperature stability, long shelf-life, cost control, and wider unique scent directions are paramount.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E6E0D6] space-y-3 md:col-span-1">
              <span className="text-[10px] font-mono tracking-widest font-bold text-[#1E2B16] uppercase">The Modern Standard</span>
              <h4 className="font-serif text-lg text-[#1E2B16] font-normal font-medium">The Hybrid Form</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                For many market-ready commercial products, the most practical solution is a balanced approach that utilizes the unique organic elements of natural extractions alongside the stability of synthetic materials.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: DESIGN CHECKLIST (Choosing the Right Material for Your Product) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* List panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E6E0D6] p-8 md:p-12 flex flex-col justify-center space-y-8 shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <ListChecks className="w-4.5 h-4.5 text-[#596E4E]" />
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#596E4E]">Sourcing Checklist</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1E2B16] tracking-tight">
                Choosing the Right Material for Your Product
              </h2>
              <p className="text-[#5F6765] text-xs sm:text-sm font-light leading-relaxed">
                When selecting fragrance materials, businesses should carefully evaluate multiple structural parameters to guarantee compliance, beauty, and product stability:
              </p>
            </div>

            {/* Structured checkbox items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Product application",
                "Desired scent direction",
                "Target market",
                "Quantity requirements",
                "Cost range",
                "Product base compatibility",
                "Stability and performance needs",
                "Allergen or regulatory considerations",
                "Supply availability"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#596E4E] mt-0.5 shrink-0" />
                  <span className="text-xs text-[#1E2B16] font-serif tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#5F6765] leading-relaxed font-light pt-2 border-t border-[#E6E0D6]">
              At <strong>Proessences</strong>, we actively help clients review, explore, and compare appropriate fragrance oils, essential oils, aroma chemicals, and related raw materials based on these exact specifications.
            </p>
          </div>

          {/* Sourcing desk visual image */}
          <div className="lg:col-span-5 bg-white border border-[#E6E0D6] rounded-2xl p-5 flex flex-col justify-between shadow-xs">
            <div className="relative w-full rounded-xl overflow-hidden h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80" 
                alt="Formulation notebooks, scent strips, and perfume samples on a professional desk setting" 
                className="w-full h-full object-cover absolute inset-0"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-4 text-center">
              <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">Evaluation &amp; Advisory Desk</span>
            </div>
          </div>
        </section>

        {/* SECTION 7: CLOSING CALL TO ACTION */}
        <section className="bg-white rounded-2xl border border-[#E6E0D6] p-8 md:p-12 lg:p-16 max-w-5xl mx-auto shadow-sm overflow-hidden relative">
          {/* Subtle floral wash background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1000&q=80" 
              alt="sourcing backdrop" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#B28A4A] bg-[#fdf5eb] px-2.5 py-1 rounded inline-block">
                Sample Procurement Inquiry
              </span>
              <h2 className="font-serif text-2xl md:text-3.5xl text-[#1E2B16] font-normal leading-tight tracking-tight">
                Looking for suitable fragrance materials for your product?
              </h2>
              <p className="text-xs sm:text-sm text-[#4E5554] leading-relaxed font-light">
                Proessences can help you explore available fragrance oils, essential oils, aroma chemicals, and related raw materials for your business needs. Connect with our technical team today to select your consultation samples.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={handleContactClick}
                className="px-8 py-3.5 bg-[#1E2B16] hover:bg-[#596E4E] text-white text-xs font-bold font-mono tracking-widest rounded-full transition-all uppercase cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02] flex items-center gap-2"
              >
                Inquire About Fragrance Materials
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
