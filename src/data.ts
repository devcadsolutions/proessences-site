import { BlogArticle, RegionalPartner, FragranceApplication } from './types';

export const METRICS = [
  { label: 'Year Established', value: '1941' },
  { label: 'Core Ownership', value: 'Family Owned & Operated' },
  { label: 'Regional Networks', value: '35+ Countries' },
  { label: 'Combined Perfumer Expertise', value: '50+ Years' },
];

export const HERITAGE_TABS = [
  {
    id: 'where',
    title: 'Where We Are',
    icon: 'Globe2',
    content: `Our global headquarters and state-of-the-art manufacturing facility is based in Rossendale, United Kingdom, supported by an international network of sales offices, regional distributors, and modern warehousing hubs.

We operate direct distribution and technical partner presence across key territories including Europe, Dubai (Middle East), South Africa, West Africa (Ghana & Nigeria), and Southeast Asia (Philippines, Thailand, Malaysia, Indonesia).`,
  },
  {
    id: 'what',
    title: 'What We Do',
    icon: 'Briefcase',
    content: `We create, manufacture, and distribute high-quality fragrance compounds on a global scale, fully compliant with IFRA (International Fragrance Association) guidelines.

Our fragrances are developed and manufactured for any application, ranging from fine perfumes to highly technical and functional household or industrial product specifications.

With an extensive botanical and synthetic ingredient library, we couple traditional craftsmanship with advanced analytical facilities (GC-MS, HPLC). Our blenders handle production runs ranging from small 2kg trial batches to multiple tonnes, tailoring delivery meticulously to your brand's specifications.`,
  },
  {
    id: 'approach',
    title: 'Our Approach',
    icon: 'Eye',
    content: `Our approach originates from our established family culture and core values. We combine centuries-old perfumery wisdom with forward-looking molecular synthesis. Placing the customer and their regulatory comfort at the absolute focus of our labor, we deliver not just fragrance compounds, but commercial identity and long-term product partnership.`,
  },
  {
    id: 'people',
    title: 'Our People',
    icon: 'Users',
    content: `We recognize that our people—our analytical chemists, master perfumers, safety regulatory officers, and skilled blenders—are our greatest asset.

Working together in our technical laboratories, they share an unwavering commitment to quality. The combination of intense curiosity and meticulous chemical discipline results in a highly collaborative team producing world-class fragrance bases.`,
  },
];

export const APPLICATIONS: FragranceApplication[] = [
  {
    id: 'fine-fragrance',
    title: 'Fine Fragrance',
    icon: 'Flame',
    imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1547841243-eacb14453cd9?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
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
  }
];

export const BLOGS: BlogArticle[] = [
  {
    id: 'fruit-splash-household-collection',
    title: 'Fruit Splash Household Fragrance Collection',
    category: 'Collections',
    tags: ['Fruit Splash', 'Household Care', 'Cleaning Products', 'Fresh Accord'],
    summary: 'Bright, colorful scents designed especially for household cleaning products. This fragrance collection has been created to bring energy, freshness, and a touch of joy to everyday home and workspace sanitization products.',
    content: `Meet the Fruit Splash Household Collection. Bright, colorful scents designed especially for household cleaning products. This fragrance collection has been created to bring energy, freshness and a touch of joy to everyday spaces.

Our design philosophy for the Fruit Splash range was simple: to move beyond traditional lemon cleaners and introduce vibrant, multitudinal profiles. We've merged fresh sparkling mandarin, pink grapefruit, and sweet melons into robust surfactant accords.

These formulations are engineered to cut through chemical bases, neutralize malodors, and leave an uplifted feeling in any living area or office space. CLP-compliant, IFRA certified, and tested strictly for longevity and coloration metrics inside modern cleaning emulsions.`,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    date: 'April 2026',
    readTime: '3 min read'
  },
  {
    id: 'lip-fragrances-good-enough-to-eat',
    title: 'Lip Fragrances – Why Lip Products Smell So Authentic',
    category: 'Research & Development',
    tags: ['Cosmetics', 'Lip Fragrances', 'Food Grade', 'Compliance'],
    summary: 'Fragrance plays a powerful role in the appeal of cosmetics. Learn how safe, food-grade lip fragrances are meticulously developed to elevate brand loyalty and safety simultaneously.',
    content: `Fragrance plays a powerful role in the appeal of lip products and food-grade lip fragrances are becoming more and more sought after. Whether it's a lip balm, gloss, lipstick or lip oil, the right scent can transform a lip product.

In this guide, our analytical cosmetic department explores suitable fragrance options, raw material pathways, and flavor enhancement.

Formulating for direct skin-ingestion contact means adhering to extremely tight safety margins. In our laboratories, each olfactive base undergoes stringent testing for food-grade suitability and low-irritant sensitization loops, while maintaining maximum volatilization and throw to make sure it smells mouthwateringly delicious.`,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    date: 'April 2026',
    readTime: '5 min read'
  },
  {
    id: 'cloud-dancer-fragrance-collection',
    title: 'Cloud Dancer Collection: Embracing Calm & Serenity',
    category: 'Collections',
    tags: ['Cloud Dancer', 'Pantone 2026', 'Clarity', 'Wellness'],
    summary: 'Inspired by a core theme of clinical silence and natural purity, the Cloud Dancer collection delivers quiet cashmere, sweet milk, and pristine cotton blossoms to match wellness-oriented beauty lines.',
    content: `Pantone has named Cloud Dancer as its Colour of the Year for 2026. This creamy white colour reflects a desire for calm, clarity and fresh starts, offering “a calming influence” and a blank-canvas backdrop for creativity, design and self-expression.

To embody this aesthetic, our master perfume blenders have designed the Cloud Dancer Fragrance Collection.

It represents a blanket of pure serenity: top notes of pristine cotton blossoms and fresh sweet milk accord, gliding into middle notes of white powdery iris and soft cedar, resting on premium cashmere musks, dry amber, and clean linen accents. High stability makes it an elegant choice for ambient scenting, soy candles, and high-end bath oils.`,
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
    date: 'April 2026',
    readTime: '4 min read'
  }
];

export const REGIONAL_PARTNERS: RegionalPartner[] = [
  {
    country: 'United Kingdom (Headquarters)',
    company: 'Proessences Ltd',
    name: 'Main Technical and Compound Manufacture Hub',
    address: 'Knowsley Park Way, Knowsley Road Industrial Estate, Haslingden, Rossendale, Lancashire, BB4 4RS, United Kingdom',
    phone: '+44 161 766 3768',
    email: 'hello@proessences.co.uk',
    website: 'https://proessences.co.uk'
  },
  {
    country: 'United Arab Emirates / Middle East',
    name: 'Middle East Hub',
    company: 'Proessences Middle East',
    address: 'Business Towers, Jumeirah Lake Towers, Dubai, United Arab Emirates',
    phone: '+971 4 456 7890',
    email: 'dubai@proessences.co.uk'
  },
  {
    country: 'South Africa',
    name: 'Southern Africa Representative',
    company: 'Proessences South Africa',
    address: 'Commercial Hub, Eagle Canyon Office Park, Randburg, Johannesburg, South Africa',
    phone: '+27 (11) 456 7890',
    email: 'safrica@proessences.co.uk'
  },
  {
    country: 'Ghana & West Africa',
    name: 'West Africa Representative',
    company: 'Proessences West Africa',
    address: 'Airport Residential Area, Accra, Ghana',
    phone: '+233 302 456 7890',
    email: 'ghana@proessences.co.uk'
  },
  {
    country: 'Southeast Asia Distribution',
    name: 'East Asia Technical Center',
    company: 'Proessences Southeast Asia',
    address: 'CBD Towers, Makati City, Manila, Philippines',
    phone: '+63 2 8456 7890',
    email: 'manila@proessences.co.uk'
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
