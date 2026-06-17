import { BlogArticle, RegionalPartner, FragranceApplication } from './types';

export const METRICS = [
  { label: 'Scent Reference Library', value: '7,000+ Fragrance Oils' },
  { label: 'Core Ownership', value: 'Philippine Supplier' },
  { label: 'Regional Networks', value: 'Exclusive Partner of Carvansons, UK' },
  { label: 'Combined Perfumer Expertise', value: '50+ Years' },
];

export const HERITAGE_TABS = [
  {
    id: 'where',
    title: 'Where We Are',
    icon: 'Globe2',
    content: `Proessences operates in the Philippines, providing corporate representation, client consultation, and nationwide distribution from our Quezon City headquarters. 

Our physical inventory and raw material supply are secured through our strategic partnership with CARVANSONS, UK, whose extensive manufacturing facility is based in Rossendale, United Kingdom. This distribution model ensures local brands have rapid, reliable access to premium international fragrance compounds.`,
  },
  {
    id: 'what',
    title: 'What We Do',
    icon: 'Briefcase',
    content: `Proessences is a leading Philippine supplier of premium perfume oils, fragrance oils, essential oils, and bespoke scent solutions. We supply high-quality, fully compliant fragrance compounds tailored for brands, manufacturers, distributors, resellers, product developers, and wholesale clients.

We provide scents for diverse applications—from fine perfumes and personal care products to home care, candle, and industrial bases.

Through our distribution network and partnership with CARVANSONS, UK, we provide clients with access to a vast, state-of-the-art fragrance library, analytical testing services, and scalability from small trial orders to bulk wholesale supply.`,
  },
  {
    id: 'approach',
    title: 'Our Approach',
    icon: 'Eye',
    content: `Proessences is built on a foundation of trust, quality, and strong client partnership. We look beyond basic transactions to provide genuine business consultancy and collaborative scent selection. By putting the user's regulatory requirements and business goals at the heart of our service, we deliver premium scents that strengthen your brand identity and long-term market success.`,
  },
  {
    id: 'people',
    title: 'Our People',
    icon: 'Users',
    content: `Our dedicated team in the Philippines includes sales consultants, customer support specialists, and technical advisors committed to serving your business. 

Supported by the master perfumers, analytical chemists, and regulatory experts of our UK partner, CARVANSONS, we combine local market agility with global fragrance innovation to deliver outstanding product performance.`,
  },
];

export const APPLICATIONS: FragranceApplication[] = [
  {
    id: 'fine-fragrance',
    title: 'Fine Fragrance',
    icon: 'Flame',
    imageUrl: '/website-assets/fine-fragrance.jpg',
    shortDescription: 'Artistic and complex compositions developed for premium luxury, cologne, and beauty brands.',
    longDescription: 'Fine perfumery demands the highest standard of artistic composition and raw ingredient purity. We develop intricate colognes, Eaux de Toilette, and rich Eaux de Parfum. Our master perfumers balance citrus or green headnotes, jasmine or iris hearts, and deep, lasting foundations of amber, patchouli, and precious wood resins.',
    commonNotes: ['Bergamot Zest', 'Jasmine Sambac', 'Sandalwood', 'Pink Pepper', 'Damask Rose', 'Precious Oud', 'Vetiver Roots'],
    technicalRequirements: [
      'High purity cosmetic-grade ethanol compatibility',
      'Long-lasting sillage & longevity retention studies',
      'Strict color stability over long temperature loops',
      'Allergen declarations for finished cosmetics labeling'
    ],
    safetyInsights: 'Formulated in absolute compliance with IFRA Class 4 standards for skin contact cosmetics, minimizing known skin sensitizers.'
  },
  {
    id: 'personal-care',
    title: 'Personal Care',
    icon: 'Sparkles',
    imageUrl: '/website-assets/personal-care-beauty.jpg',
    shortDescription: 'Evocative, skin-safe scent creations designed for cosmetics, soaps, creams, and hair care rituals.',
    longDescription: 'Personal care fragrance requires robust chemical stability. Scents must withstand surfactant levels, high pH environments, and active chemical ingredients while delivering an evocative sensory experience during hot showers, personal hygiene routines or luxurious daily skin creams.',
    commonNotes: ['Aloe Vera', 'Jasmine', 'Lavender', 'Almond Oil Accord', 'Honey Sweet', 'Ylang-Ylang'],
    technicalRequirements: [
      'Surfactant-safe (no clouding or thinning in liquid formulas)',
      'Highly stable against discoloration caused by vanillin content',
      'Substantivity on moist hair shafts and dermal layers',
      'Emulsion-stable under high shearing manufacturing conditions'
    ],
    safetyInsights: 'Optimized for IFRA Class 5 (Skin Creams) and Class 9 (Rinse-off soaps). Free from prohibited ingredients.'
  },
  {
    id: 'household-products',
    title: 'Household Products',
    icon: 'Container',
    imageUrl: '/website-assets/home-products.jpg',
    shortDescription: 'Scents engineered to withstand active clean agents while leaving long-lasting room freshness.',
    longDescription: 'Household products require scents that can cut through harsh active chemicals, chlorine bases, or alkaline surfactants. They need to deliver long-lasting freshness to signify cleanliness to the end consumer.',
    commonNotes: ['Zesty Citrus', 'Fresh Pine Sap', 'Peppermint Leaf', 'Eucalyptus', 'Green Apple', 'Lavender Meadows'],
    technicalRequirements: [
      'High chemical resistance (stable in extreme pH < 3 or pH > 11)',
      'Compatible with active enzymes, bleaching agents, and disinfectants',
      'Effective malodor counteraction (MOC) technologies',
      'Homogenous dispersibility in liquid detergents and multi-surface sprays'
    ],
    safetyInsights: 'IFRA Class 10A compliant. Formulated to be biodegradable and safe for greywater disposal.'
  },
  {
    id: 'industrial-products',
    title: 'Industrial Products',
    icon: 'ShieldAlert',
    imageUrl: '/website-assets/industrial.png',
    shortDescription: 'High chemical resistance formulas combined with advanced malodor counteraction technologies.',
    longDescription: 'Industrial fragrances require extremely robust chemical shielding and specialized malodor counteraction (MOC) technologies to cover heavy chemical solvent bases, functional plastics, and high-temp rubber extrusions.',
    commonNotes: ['Menthol Frost', 'Citrus Peel Concentrate', 'Herbal Pine Sap', 'Eucalyptus Leaf', 'Wintergreen Scent'],
    technicalRequirements: [
      'Industrial surfactant compatibility',
      'Malodor coverage and extraction parameters',
      'Ultra-high temperature molecular stability',
      'Safe storage and flashpoint optimization'
    ],
    safetyInsights: 'Formulated in absolute compliance with chemical handling directives and safety mandates.'
  },
  {
    id: 'room-fragrance',
    title: 'Home Fragrance',
    icon: 'Wind',
    imageUrl: '/website-assets/room-fragrance.jpg',
    shortDescription: 'Evocative ambient air fresheners, reed diffusers, and technical room-spraying formulas.',
    longDescription: 'Our air freshener room solutions include scented disks, gel vectors, active powders, non-aerosol liquid sprays, and specialized chemical odor neutralizers developed to remain highly active in air ducts, laundry cabinets, and open lobbies.',
    commonNotes: ['Crisp Eucalyptus', 'Ocean Breeze Accord', 'Fresh Cotton', 'Clean Linen', 'Bergamot Leaf'],
    technicalRequirements: [
      'Controlled evaporation rates for hanging liquid/gel matrices',
      'Temperature resistant inside packaging casings',
      'Solubility in VOC-compliant carrier bases',
      'Effective airborne projection parameters'
    ],
    safetyInsights: 'IFRA Class 11 compliant. Fully optimized for CLP (Classification, Labelling and Packaging) and safety data sheet (SDS) generation.'
  },
  {
    id: 'car-care',
    title: 'Automotive Fragrance',
    icon: 'Car',
    imageUrl: '/website-assets/car-products.jpg',
    shortDescription: 'Sustained high-temperature ambient release scent solutions designed for vehicle environments.',
    longDescription: 'Automotive olfactory vectors undergo significant thermal stressing. Formulations target high ambient heat within glass cabins, controlled release on hanging cards, and homogeneous dispersion in high-foaming water washes, cleaning wax emulsions, and wheel silicates.',
    commonNotes: ['Active New Leather', 'Sandalwood Citrus', 'Arctic Mint Wind', 'Cherry Rush', 'Espresso Bean'],
    technicalRequirements: [
      'Controlled evaporation rates for air intake venting',
      'Temperature resistant up to 75°C inside hot dashboard casings',
      'Aerosol packaging propulsion compliance',
      'Compatibility with high-foaming water washes and silicates'
    ],
    safetyInsights: 'Compliant with VOC (Volatile Organic Compound) limits for passenger cabins. Non-toxic on leather or fabric splatters.'
  },
  {
    id: 'flavours',
    title: 'Flavours',
    icon: 'Award',
    imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'High-quality, food-grade flavouring substances tailored for oral care, pharmaceuticals, and culinary applications.',
    longDescription: 'Our flavour development focuses on sensory authenticity, absolute chemical purity, and strict safety profiling. We compound food-grade flavours that elevate oral hygiene lines, pharmaceutical suspensions, syrups, and customized culinary application requirements.',
    commonNotes: ['Cool Peppermint', 'Spearmint Leaf', 'Sweet Cherry Extractions', 'Fresh Orange Oil', 'Creamy Vanilla'],
    technicalRequirements: [
      'Strict food-grade chemical composition checks',
      'High thermal threshold for baking and extrusion processing',
      'Homogeneous solubility inside water, syrup, or alcohol vehicles',
      'GRAS (Generally Recognized as Safe) ingredient compliance'
    ],
    safetyInsights: 'Optimized in adherence with international food safety standards and GRAS regulations for oral administration.'
  }
];

export const BLOGS: BlogArticle[] = [
  {
    id: 'cgmp-training-workshop-2024',
    title: 'Regional cGMP Training and Workshop on Cosmetics',
    category: ['Workshops & Events', 'Corporate News'],
    tags: ['cGMP', 'Training', 'Workshop', 'MCCI', 'CCIP', 'Cosmetics', 'Compliance'],
    summary: '**Proessences Inc.** proudly joined the Regional Current Good Manufacturing Practices (cGMP) Training and Workshop, supporting businesses in delivering safe and high-quality products.',
    content: `**Proessences Inc.** proudly joined the Regional Current Good Manufacturing Practices (cGMP) Training and Workshop on Cosmetics and Household/Urban Hazardous Substances, organized by the Mandaue Chamber of Commerce and Industry (MCCI) and the Chamber of Cosmetics Industry of the Philippines (CCIP).

Held from August 8–9, 2024 at City Sports Club, Cebu City, the two-day program gathered industry professionals to strengthen awareness on product safety, quality, compliance, and updated manufacturing standards.

As part of the event, **Proessences Inc.** was featured in the sponsor talks, supporting the shared goal of helping businesses elevate their manufacturing practices and deliver safe, consistent, and high-quality products to consumers.

This participation reflects **Proessences Inc.**’ continued commitment to the fragrance, cosmetics, and personal care industries through education, collaboration, and industry advancement.

Read full event coverage on RMA News:
https://www.rmanews.net/2024/08/08/mcci-ccip-holds-2-day-training-on-current-good-manufacturing-practices/`,
    image: '/08-2024_GoodManufacturing Practice/08-2024_GoodManufacturing Practice.jpeg',
    date: 'August 2024',
    readTime: '3 min read',
    isGalleryPost: true,
    galleryImages: [
      '/08-2024_GoodManufacturing Practice/08-2024_GoodManufacturing Practice.jpeg',
      '/08-2024_GoodManufacturing Practice/4-2.jpeg'
    ]
  },
  {
    id: 'isipca-perfumery-study-tour-2025',
    title: 'ISIPCA Perfumery Study Tour: Honoring Bernadette Lim & Gemma Guino',
    category: ['Workshops & Events', 'Corporate News'],
    tags: ['ISIPCA', 'Versailles', 'Perfumery Study Tour', 'CCIP', 'Asia Perfume Foundation', 'Proessences'],
    summary: 'Proessences Inc. and CCIP celebrate Bernadette Lim and Gemma Guino for completing the intensive 3-day study tour at ISIPCA in Versailles, France.',
    content: `Proessences Inc., in partnership with the Chamber of Cosmetics Industry of the Philippines (CCIP), is incredibly thrilled to congratulate our esteemed industry leaders, **Bernadette Lim** (General Manager of BC Fragrance & Aromatics Mfg. Corporation) and **Gemma Guino** (General Manager of Proessences Inc.), for completing the prestigious 3-day Perfumery Study Tour at the world-renowned **ISIPCA** in Versailles, France!

The hands-on course was successfully completed last May 27-28, 2025, in close cooperation with the Asia Perfume Foundation. This immersive scientific and artistic curriculum offered a rare, top-tier opportunity to refine formulation techniques, decode advanced fragrance accords, and gain profound insights into the delicate balance of beauty science and olfactive artistry.

ISIPCA is globally recognized as one of the world's premier fragrance and cosmetics post-graduate institutions. By participating in this intensive study program, our GMs continue to push the boundaries of fragrance innovation, directly connecting advanced European standards with regional development circles.

Please browse the photos below to explore their direct laboratory trials, sensory evaluation loops, and milestone achievements in Versailles!`,
    image: '/06-2025_ISIPCA/isipca- (1).jpg',
    date: 'May 2025',
    readTime: '3 min read',
    isGalleryPost: true,
    galleryImages: [
      '/06-2025_ISIPCA/isipca- (1).jpg',
      '/06-2025_ISIPCA/isipca- (2).jpg'
    ]
  },
  {
    id: 'ccip-womens-month-caravan-2024',
    title: 'CCIP "Dalagang Filipina" Women\'s Month Caravan',
    category: ['Workshops & Events', 'Corporate News'],
    tags: ['ccipwomen', 'ccipwomensmonth', 'chamberofcosmeticsph', 'CCIP50th', 'Dalagang Filipina', 'ProessencesInc'],
    summary: 'CCIP is proud to present our "Dalagang Filipina" caravan in time for Women\'s Month, providing self-care and feminine hygiene education to grade school students of Pasig Elementary School.',
    content: `Chamber of Cosmetics Industry of the Philippines (CCIP) is incredibly proud to present our "Dalagang Filipina" caravan in celebration of Women's Month! 

The exclusive community outreach event was held on March 22, 2024, to provide comprehensive self-care and feminine hygiene education to the energetic grade school students of Pasig Elementary School in Candaba, Pampanga. Sharing smiles, hygiene kits, and essential wellness insights, we stood together to support and empower the next generation of resilient Filipinas.

We extend our deepest gratitude to all our supportive CCIP members and sponsors who generously backed this milestone event. Your commitment to community development and wellness has made a lasting, beautifully positive impact.

Special thanks to:
Ever Bilena • DjmGrandeur • Hello Glow • UL Skin Sciences • Johnson & Johnson • Zizmore • Proessences Inc. • Connell Caldic • Ds Cosmeceutical Manufacturing Laboratory • Christian Cosmetics Science • Amway • Amchem • Green Cross Philippines • Marklene • Juvic Incorporated

✨ **Official Hashtags:** #ccipwomen #ccipwomensmonth #chamberofcosmeticsph #CCIP50th`,
    image: '/03-2024_ccip_womensmonth/womens-month (2).jpg',
    date: 'March 2024',
    readTime: '2 min read',
    isGalleryPost: true,
    galleryImages: [
      '/03-2024_ccip_womensmonth/womens-month (1).jpg',
      '/03-2024_ccip_womensmonth/womens-month (2).jpg',
      '/03-2024_ccip_womensmonth/womens-month (3).jpg',
      '/03-2024_ccip_womensmonth/womens-month (4).jpg',
      '/03-2024_ccip_womensmonth/womens-month (5).jpg',
      '/03-2024_ccip_womensmonth/womens-month (6).jpg'
    ]
  },
  {
    id: 'learning-perfumery-seminar-workshop-2024',
    title: 'Learning Perfumery: Seminar & Workshop 2024',
    category: ['Workshops & Events', 'Exhibitions'],
    tags: ['Seminar', 'Workshop', 'Learning Perfumery', 'Proessences', 'Olfactory Artistry'],
    summary: 'A detailed look back at the highly interactive and exclusive Learning Perfumery Seminar and Workshop, where cosmetic Chemists, formulators, and brand owners refined their olfactory techniques.',
    content: `We are incredibly thrilled to share the comprehensive photo highlights of the Learning Perfumery: Seminar and Workshop—an intense hands-on olfactory training event designed for professional cosmetics formulators, cosmetic chemists, brand founders, and sensory artists.

Over the course of this highly engaged masterclass, participants worked alongside our seasoned perfumers to dissect the molecular layers of aroma compounds. From exploring raw isolate science to blending complex heart notes, the seminar paired theoretical raw material knowledge with direct compounding laboratory exercises.

Topics focused heavily on advanced fragrance stability, understanding vapor pressure dynamics for active skin-contact cosmetics, green science extraction methods, and maintaining strict IFRA formulation safety parameters. 

Attendees formulated their own custom accord series, putting theoretical structural rules into action. The creative atmosphere of fragrance trials, sensory panels, and joint olfactory evaluation sessions made this a unforgettable industry milestone.

Browse our curated, high-definition photo gallery below to explore behind-the-scenes moments of laboratory precision, active compounding trials, and collaborative olfactory magic.`,
    image: '/04-2024_Learning Perfumery - Seminar and Workshop/474559055_486657421150719_1838629810286881788_n.jpg',
    date: 'April 2024',
    readTime: '3 min read',
    isGalleryPost: true,
    galleryImages: [
      '/04-2024_Learning Perfumery - Seminar and Workshop/474559055_486657421150719_1838629810286881788_n.jpg',
      '/04-2024_Learning Perfumery - Seminar and Workshop/474640522_486658507817277_8056181248876724171_n.jpg',
      '/04-2024_Learning Perfumery - Seminar and Workshop/474688422_486657684484026_6190114950844941693_n.jpg',
      '/04-2024_Learning Perfumery - Seminar and Workshop/474694121_486658514483943_3445064785403195191_n.jpg',
      '/04-2024_Learning Perfumery - Seminar and Workshop/474726455_486658431150618_1017969812262930907_n.jpg',
      '/04-2024_Learning Perfumery - Seminar and Workshop/474812371_486658691150592_5845353959700923097_n.jpg',
      '/04-2024_Learning Perfumery - Seminar and Workshop/474855076_486657367817391_6805258327396273540_n.jpg',
      '/04-2024_Learning Perfumery - Seminar and Workshop/474898574_486658287817299_2543705234973774014_n.jpg',
      '/04-2024_Learning Perfumery - Seminar and Workshop/474936820_486657634484031_6348522456931994875_n.jpg',
      '/04-2024_Learning Perfumery - Seminar and Workshop/474976865_486658387817289_4679730348528360762_n.jpg'
    ]
  },
  {
    id: 'cosmobeaute-exhibition-2025',
    title: 'Cosmobeauté 2025: Happening Now at the World Trade Center',
    category: 'Exhibitions',
    tags: ['cosmobeautephilippines', 'cosmobeaute2025', 'Exhibitions', 'Pasay City', 'World Trade Center'],
    summary: 'Cosmobeauté 2025 is happening now at the World Trade Center in Pasay City! Please visit our Booth at B38. See you there!',
    content: `Cosmobeauté 2025 is happening now at the World Trade Center in Pasay City!

We are absolutely excited to welcome cosmetics formulators, brand founders, cosmetic chemists, and scent designers to our creative space. Explore our premium fragrance collections, botanical distillates, high-performance home hygiene scent solutions, and sustainable beauty compliance insights.

Please visit our Booth at B38. See you there!

📍 **Location:**
Cosmobeauté Philippines
World Trade Center, Pasay City

✨ **Booth Number:** B38
📅 **Event Dates:** November 2025
💬 **Featured Tags:** #cosmobeautephilippines #cosmobeaute2025`,
    image: '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (1).jpg',
    date: 'November 2025',
    readTime: '2 min read',
    isGalleryPost: true,
    galleryImages: [
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (1).jpg',
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (2).jpg',
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (3).jpg',
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (4).jpg',
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (5).jpg',
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (6).jpg',
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (7).jpg',
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (8).jpg',
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (9).jpg',
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (10).jpg',
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (11).jpg',
      '/cosmobeaute-exhibition-2025/cosmobeaute-2025- (12).jpg'
    ]
  },
  {
    id: 'sustainable-booth-design-award-2025',
    title: 'Recognizing Excellence in Sustainable Booth Design',
    category: ['Awards & Landmarks', 'Exhibitions'],
    tags: ['Cosmobeauté', 'Award', 'Sustainability', 'Booth Design', 'Proessences'],
    summary: 'We extend our congratulations to Proessences Inc. for winning the Sustainability Booth Design Creative Award at Cosmobeauté Philippines 2025, contributing to a greener future.',
    content: `We are absolutely thrilled and deeply honored to announce that Proessences Inc. has been awarded the prestigious Creative Award for Sustainability Booth Design at Cosmobeauté Philippines 2025!

This highly coveted industry recognition celebrates outstanding achievement in eco-friendly design, low-impact exhibition layout, and creative presentation in the beauty and wellness sector. Our custom-crafted pavilion beautifully consolidated reclaimed timber layers, biodegradable finishes, warm energy-efficient LEDs, and vibrant live botanical installations. This thoughtful design seamlessly highlighted our commitment to circular beauty practices and advanced green fragrance chemistry.

We extend our sincere thanks to the judges, the Cosmobeauté organizers, our hard-working setup and design team, and the thousands of cosmetics formulators and partners who visited our creative pavilion. Thank you for contributing to a more sustainable, responsible, and beautiful future in the fragrance, cosmetics, and wellness industry!`,
    image: '/cosmobeaute-2025/booth.jpg',
    date: 'November 2025',
    readTime: '2 min read'
  },
  {
    id: 'perfumery-seminar-workshop-2025',
    title: "Carvansons' Perfumery Seminar and Workshop 2025",
    category: 'Workshops & Events',
    tags: ['Seminar', 'Workshop', 'Perfumery Masterclass', 'Formulation', 'Carvansons'],
    summary: "A look back at the milestone success of the Perfumery Seminar and Workshop by Carvansons, where cosmetic formulators, master chemists, and industry leaders completed intensive hands-on scent trials.",
    content: `We are delighted to share the highlights of the Perfumery Seminar and Workshop 2025—a landmark industry gathering hosted by Carvansons that brought together leading cosmetics formulators, cosmetic chemists, brand founders, and sensory designers.

This high-caliber workshop combined interactive technical seminar units with hands-on fragrance compounding practice. Over several action-packed days, attendees explored advanced olfactory structures, gas chromatography diagnostics (GC-MS, HPLC), sustainable raw material extraction pathways, and rigorous safety compliance workflows (IFRA standards and CLP documentation).

Working directly with master perfumers from Carvansons, participants tested premium botanical extracts, pure essential oils, and next-generation synthetic aromachemical bases to develop their own complex accords. They also gained deep scientific insights into surfactant-stable and temperature-resilient scent behaviors across fine fragrance, personal care, and home care applications.

Below, we are proud to present the curated behind-the-scenes masterclass photo gallery. Browse the interactive photos to experience the creativity, rigorous chemical laboratory precision, and collaborative environment that defines this landmark event by Carvansons.`,
    image: '/10-2025_workshop/workshop-2025- (1).jpg',
    date: 'October 2025',
    readTime: '4 min read',
    isGalleryPost: true,
    galleryImages: [
      '/10-2025_workshop/workshop-2025- (1).jpg',
      '/10-2025_workshop/workshop-2025- (2).jpg',
      '/10-2025_workshop/workshop-2025- (3).jpg',
      '/10-2025_workshop/workshop-2025- (4).jpg',
      '/10-2025_workshop/workshop-2025- (5).jpg',
      '/10-2025_workshop/workshop-2025- (6).jpg',
      '/10-2025_workshop/workshop-2025- (7).jpg',
      '/10-2025_workshop/workshop-2025- (8).jpg',
      '/10-2025_workshop/workshop-2025- (9).jpg',
      '/10-2025_workshop/workshop-2025- (10).jpg'
    ]
  },
  {
    id: 'cosmobeaute-exhibition-2026',
    title: 'Join Proessences at Cosmobeauté 2026: Elevating Fragrance Artistry',
    category: 'Exhibitions',
    tags: ['Cosmobeauté', 'Exhibition', 'Beauty Trade Show', 'Scent Innovation'],
    summary: 'We are thrilled to announce Proessences’ participation in the upcoming Cosmobeauté 2026 exhibition. Visit our booth to experience our newest bespoke scent collections, active natural oils, and safe cosmetic perfume formulations.',
    content: `Proessences is proud to announce our participation in the prestigious Cosmobeauté 2026 Exhibition, the region’s premier beauty trade showcase. This season, our master perfumers and cosmetic technical formulators will unite to showcase our latest breakthroughs in bespoke fragrance design and green science synthesis.

At our custom pavilion, visitors can embark on an immersive olfactory journey, experiencing our latest natural oils, high-stability household ranges, and advanced cosmetic-grade fragrance solutions designed with food-grade safety and IFRA standards.

Whether you are looking to design a signature scent for premium cosmetics, luxury personal care, or modern home hygiene products, our experts will be on hand to discuss collaborative development and tailored compliance formulations. Come and discover your brand's next signature scent with Proessences.

**Event Highlights:**
• Live Olfactory Mapping & Selection Workshops
• Premium Cosmetic & Food-Grade Fragrance Demonstration
• Green Science & Sustainable Scent Development Consultations

We invite all beauty brand owners, cosmetic chemists, and product developers to visit us. Stay tuned for further updates as we count down to the trade event of the season!`,
    image: '/cosmobeaute-exhibition-2025/certification/web-assets/06-26/cosmobeaute_poster.jpg',
    date: 'June 2026',
    readTime: '3 min read'
  },
  {
    id: 'christmas-greeting-company',
    title: 'A Warm Holiday Greeting: Celebrating Togetherness & Scent Artistry',
    category: 'Corporate News',
    tags: ['Christmas', 'Holiday Greeting', 'Company Milestones', 'Gratitude'],
    summary: 'As the festive season blooms, Proessences extends our warmest Christmas greetings to our valued partners, clients, and friends. Watch our special team video message.',
    content: `As the festive season surrounds us, the entire team at Proessences extends our warmest, most heartfelt Christmas and holiday greetings to our esteemed partners, loyal clients, and friends.

This year has been defined by incredible milestones, creative exhibition accolades, and meaningful community collaborations. We are immensely grateful for the trusted relationships that have allowed us to supply and match premium fragrance formulations throughout the year.

To commemorate this special season, we invite you to view our special holiday greeting video. We are truly appreciative of the opportunity to be your local scent solutions partner.

Wishing you a restful holiday season, a Merry Christmas, and a prosperous, beautifully scented New Year!`,
    image: '/cosmobeaute-exhibition-2025/certification/web-assets/06-26/cosmobeaute_poster.jpg',
    date: 'December 2025',
    readTime: '2 min read',
    video: '/christmas-greetings.mp4',
    isPinned: true
  }
];

export const REGIONAL_PARTNERS: RegionalPartner[] = [
  {
    country: 'Philippines (Headquarters)',
    company: 'Proessences',
    name: 'Main Office and Distribution Center',
    address: '10 Neptune St, Bahay Toro, Project 8, Quezon City, 1106 Metro Manila, Philippines',
    phone: '(02) 8920-9848',
    email: 'gemma@proessences.com',
    website: 'https://proessences.com'
  }
];

export const OTHER_COUNTRIES = [
  'Azerbaijan', 'Belgium', 'Bosnia', 'Canada', 'China', 'Czech Republic',
  'Denmark', 'Finland', 'France', 'Germany', 'Hong Kong', 'Hungary', 'Israel',
  'Italy', 'Jamaica', 'Jordan', 'Korea', 'Lithuania', 'Macedonia',
  'Netherlands', 'New Zealand', 'Norway', 'Portugal', 'Romania', 'Spain',
  'Sri Lanka', 'Switzerland', 'Sweden', 'Taiwan', 'Turkey', 'Tunisia',
  'Vietnam', 'Ukraine', 'USA'
];
