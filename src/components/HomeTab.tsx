import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Leaf, 
  Check, 
  Flame, 
  Compass, 
  UserCheck,
  Home as HomeIcon,
  Gift,
  Citrus,
  Wind,
  Award,
  Users,
  Handshake,
  Heart,
  TrendingUp,
  CheckCircle,
  Gem,
  Activity,
  FileText
} from 'lucide-react';
import { AppTab, BlogArticle } from '../types';
import { BLOGS } from '../data';
import VideoThumbnailImage from './VideoThumbnailImage';

const BACKGROUND_IMAGES = [
  '/hero-section/essential-oil.png',
  '/hero-section/lavender-bottles.png',
  '/hero-section/lemon-oil.png'
];

interface HomeTabProps {
  setActiveTab: (tab: AppTab) => void;
  setSelectedBlog: (blog: BlogArticle | null) => void;
}

export default function HomeTab({ setActiveTab, setSelectedBlog }: HomeTabProps) {
  const [ebookEmail, setEbookEmail] = useState('');
  const [ebookDownloaded, setEbookDownloaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  // Specific blogs for the homepage insights section
  const homeBlogs = React.useMemo(() => {
    const desiredIds = [
      'cosmobeaute-exhibition-2026',
      'perfumery-seminar-workshop-2025',
      'sustainable-booth-design-award-2025'
    ];
    return desiredIds
      .map(id => BLOGS.find(article => article.id === id))
      .filter((article): article is BlogArticle => !!article);
  }, []);

  // Background fade interval for atmospheric depth
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleEbookDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ebookEmail.trim()) return;
    setEbookDownloaded(true);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('intro-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      key="home-tab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col bg-[#FCFBF8] text-[#6F685F] relative font-sans"
    >
      {/* 1. HERO SECTION */}
      <motion.section 
        id="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-screen overflow-hidden text-white flex items-center"
      >
        {/* Background Image Carousel (Fades only, no slide movement to keep text completely legible) */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentBg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.0, ease: 'easeInOut' }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${BACKGROUND_IMAGES[currentBg]}')` }}
            >
              {/* Refined deep forest-green gradient overlay for perfect accessibility contrast and focus on the product bottle, aligned with the logo hue */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C2616]/95 via-[#2C3B24]/85 to-[#1C2616]/40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 flex flex-col justify-center h-full">
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] tracking-tight text-[#FCFBF8]">
              The Leading Distributor of <span className="font-serif italic text-[#D1B37A]">Perfume Oils and Fragrances</span> in the Philippines
            </h1>

            <p className="text-[#C9D8D3] text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-xl">
              Through our exclusive partnership with UK-based Carvansons, we deliver high-quality, locally tailored fragrance solutions for discerning brands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="px-8 py-3.5 rounded-full bg-[#FCFBF8] border border-[#FCFBF8] hover:bg-[#F7F4EE] text-[#1E2B16] text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
              >
                Inquire Now
              </button>
              <button
                onClick={() => { setActiveTab('applications'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="px-8 py-3.5 rounded-full bg-transparent border border-white/80 hover:bg-white/10 hover:border-white text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Soft Scroll Down Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <button 
            onClick={scrollToNext}
            className="group flex flex-col items-center justify-center text-white/50 hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer"
            aria-label="Scroll down"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest opacity-80 mb-2">Scroll Discovery</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-xs transition-colors group-hover:border-white/30">
              <svg className="w-3.5 h-3.5 text-white/70 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
        </div>
      </motion.section>

      {/* 2. SPARKING CONTINUOUS SECTIONS IN THE PRESCRIBED HIERARCHY */}
      <div className="w-full">
        
        {/* SECTION 3: SHORT COMPANY INTRODUCTION (WARM IVORY) */}
        <section 
          id="intro-section"
          className="relative w-full py-20 sm:py-24 border-b border-[#EEE8DD] bg-[#FCFBF8] flex items-center overflow-hidden"
        >
          {/* Subtle background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.04] pointer-events-none" 
            style={{ backgroundImage: "url('/hero-section/citrus-infusediessentialioiliserenity.png')" }}
          />
          <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#B28A4A]">Our Essence</span>
              <p className="font-serif text-xl sm:text-2xl md:text-[28px] text-[#1E2B16] leading-relaxed font-light">
                Proessences is a leading Philippine supplier of premium perfume oils, fragrance oils, essential oils, and bespoke scent solutions for brands, manufacturers, distributors, resellers, product developers, and wholesale clients.
              </p>
              
              <div className="pt-4">
                <button 
                  id="intro-learn-more"
                  onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="inline-flex items-center gap-2 text-[#596E4E] hover:text-[#1E2B16] hover:underline text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none cursor-pointer"
                >
                  <span>Learn More About Us</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: KEY FRAGRANCE APPLICATIONS (WHITE) */}
        <section id="applications-section" className="w-full py-20 sm:py-24 bg-white border-b border-[#EEE8DD]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
            
            {/* Header section with See More link aligned appropriately */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 text-left max-w-2xl">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#B28A4A]">Olfactive Expertise</span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1E2B16] font-normal tracking-tight">
                  Key Fragrance Applications
                </h2>
                <p className="text-[#6F685F] text-sm md:text-base font-light">
                  Our custom perfume compounds are precisely stabilized and tested for optimal visual clarity, viscosity, and sensory longevity.
                </p>
              </div>
              <button
                onClick={() => { setActiveTab('applications'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="text-xs font-bold uppercase tracking-widest text-[#596E4E] hover:text-[#1E2B16] transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 shrink-0 self-start md:self-auto"
              >
                <span>See More Applications</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Premium Three-Card Grid Component */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[28px]">
              {[
                { 
                  id: 'fine-fragrance', 
                  title: 'Perfume & Fine Fragrance', 
                  desc: 'Sophisticated formulas for luxury colognes, perfumes, and premium scent products.', 
                  image: '/hero-section/essential-oil.png',
                  tab: 'applications' as AppTab
                },
                { 
                  id: 'personal-care', 
                  title: 'Personal Care & Beauty', 
                  desc: 'Fragrance solutions for body care, skincare, soaps, and cosmetic products.', 
                  image: '/hero-section/lemon-oil.png',
                  tab: 'personal-care' as AppTab
                },
                { 
                  id: 'room-candles', 
                  title: 'Room & Candles Fragrance', 
                  desc: 'Scent solutions for diffusers, room sprays, candles, and ambient spaces.', 
                  image: '/hero-section/lavender-bottles.png',
                  tab: 'room-candles' as AppTab
                }
              ].map((app) => (
                <div 
                  key={app.id} 
                  id={`app-premium-card-${app.id}`}
                  onClick={() => { setActiveTab(app.tab); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="group rounded-[14px] overflow-hidden relative cursor-pointer shadow-xs hover:shadow-[0_16px_32px_rgba(8,46,42,0.16)] transition-all duration-[450ms] ease-out h-[380px] sm:h-[400px] w-full flex flex-col justify-end"
                >
                  {/* Category Image with Hover Scale and Blur */}
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[450ms] ease-out select-none scale-100 group-hover:scale-103 group-hover:blur-[1.5px]" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gradient overlays to maintain extreme typographic legibility and support elegant states transition */}
                  {/* Default Overlay */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-[450ms] ease-out opacity-100 lg:group-hover:opacity-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(8, 46, 42, 0.08) 0%, rgba(8, 46, 42, 0.28) 100%)'
                    }}
                  />

                  {/* Hover Overlay: Dark botanical-green gradient */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-[450ms] ease-out opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(180deg, rgba(8, 46, 42, 0.18) 0%, rgba(8, 46, 42, 0.62) 55%, rgba(8, 46, 42, 0.88) 100%)'
                    }}
                  />

                  {/* Text Container with dynamic upward movement on hover */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-center items-center p-6 text-center select-none">
                    
                    {/* Category Title: uppercase, elegant, uppercase sans-serif, semibold, size 28px */}
                    <h3 className="font-sans font-semibold text-[28px] tracking-[0.02em] leading-tight text-white uppercase transition-transform duration-[450ms] ease-out lg:translate-y-[24px] lg:group-hover:translate-y-0">
                      {app.title}
                    </h3>

                    {/* Short Description: clean sans-serif, regular weight, size 15px, line-height 1.6 */}
                    <div className="w-full lg:max-h-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:max-h-[120px] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 opacity-100 max-h-[120px] translate-y-0 transition-all duration-[450ms] ease-out mt-3 max-w-[260px] sm:max-w-xs overflow-hidden">
                      <p className="font-sans text-[15px] leading-[1.6] font-normal text-white">
                        {app.desc}
                      </p>
                    </div>

                    {/* CTA: small uppercase sans-serif with increased letter spacing 0.12em, size 12px, weight 600 */}
                    <div className="w-full lg:max-h-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:max-h-10 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 opacity-100 max-h-10 translate-y-0 transition-all duration-[450ms] ease-out mt-6 overflow-hidden">
                      <span className="font-sans text-[12px] font-semibold tracking-[0.12em] text-[#D1B37A] uppercase">
                        Explore Application &rarr;
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: FRAGRANCE SUPPLY PROCESS (SOFT SAGE TINT) */}
        <section 
          id="supply-process" 
          className="w-full py-20 sm:py-24 border-b border-[#EEE8DD] bg-[#F7F4EE]"
        >
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#B28A4A]">Fragrance Supply Process</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1E2B16] font-normal tracking-tight">
                From Product Need to Reliable Supply
              </h2>
              <p className="text-[#6F685F] text-sm md:text-base font-light">
                Proessences helps businesses source fragrance raw materials suited to their product applications and supply requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  step: '01',
                  title: 'Share Your Requirements',
                  desc: 'Tell us your product type, application, preferred scent direction, and quantity needs.',
                  localImage: '/process/fragrance-consultation.png',
                  fallbackImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80'
                },
                {
                  step: '02',
                  title: 'Review Suitable Materials',
                  desc: 'We recommend available fragrance oils, essential oils, aroma chemicals, or related raw materials for your review.',
                  localImage: '/process/perfume-creation-in-workshop.png',
                  fallbackImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
                },
                {
                  step: '03',
                  title: 'Sample & Evaluate',
                  desc: 'Selected samples may be provided for internal testing and product assessment.',
                  localImage: '/process/Focused scientist in a modern lab.png',
                  fallbackImage: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80'
                },
                {
                  step: '04',
                  title: 'Receive Your Selected Materials',
                  desc: 'Once the right material is selected, Proessences provides the fragrance oils, essential oils, or raw materials needed for your product application.',
                  localImage: '/process/perfume-lab-inspect.png',
                  fallbackImage: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f125?auto=format&fit=crop&w=600&q=80'
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="space-y-4 bg-white p-5 rounded-lg border border-[#EEE8DD] hover:border-[#7C8C6A] hover:shadow-[0_10px_24px_rgba(30,43,22,0.08)] hover:scale-[1.01] transition-all duration-300 h-full flex flex-col justify-between overflow-hidden group"
                >
                  <div className="space-y-4">
                    {/* Process Image Column with absolute step counter */}
                    <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-[#F7F4EE] border border-[#EEE8DD]/30">
                      <img 
                        src={item.localImage}
                        onError={(e) => {
                          e.currentTarget.src = item.fallbackImage;
                        }}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#EEE8DD] shadow-xs">
                        <span className="block font-serif text-xs italic text-[#9E7A3D] font-bold">
                           {item.step}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#1E2B16] tracking-tight mb-2 group-hover:text-[#596E4E] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#6F685F] text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <button 
                id="creation-cta-btn"
                onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="px-8 py-3.5 rounded-full bg-[#596E4E] hover:bg-[#43533A] text-white font-bold text-xs tracking-widest uppercase transition-all duration-150 shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#596E4E] focus:outline-none cursor-pointer"
              >
                Start Your Fragrance Project
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHY CHOOSE THE COMPANY (WHITE) */}
        <section id="why-choose-us" className="relative w-full py-20 sm:py-24 bg-[#F4F8F6] border-b border-[#EEE8DD] overflow-hidden">
          {/* Subtle background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.04] pointer-events-none" 
            style={{ backgroundImage: "url('/homepage-pics/WSR_0116.JPG')" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - 40% Width */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#B28A4A]">Our Advantage</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1E2B16] leading-tight font-normal">
                Why Partner with Proessences?
              </h2>
              <p className="text-[#6F685F] text-sm md:text-base leading-relaxed font-light">
                Our exclusive 17-year collaboration with Carvansons brings premium international fragrance expertise directly to the Philippine market, backed by agile local support.
              </p>
            </div>

            {/* Right Column - 60% Width */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "17-Year Collaboration",
                  desc: "A long-standing exclusive partnership bringing world-class UK-based fragrance expertise directly to the Philippines.",
                  icon: Handshake
                },
                {
                  title: "2025 Perfumery Training",
                  desc: "Hosted a successful two-day training for 120 customers, sharing formulation techniques and ingredient storytelling.",
                  icon: Users
                },
                {
                  title: "Local & Regional Supply",
                  desc: "Equipped with a fully air-conditioned warehouse and a dedicated delivery vehicle fleet to efficiently secure raw materials nationwide.",
                  icon: Compass
                },
                {
                  title: "Compliance & Safety",
                  desc: "Dedicated safety officers generate seamless SDS documentation and IFRA certificates for frictionless customs clearance.",
                  icon: ShieldCheck
                }
              ].map((feat, idx) => (
                <div 
                  key={idx} 
                  className="space-y-3 p-6 rounded-lg border border-[#EEE8DD] bg-white hover:border-[#7C8C6A] hover:shadow-[0_10px_24px_rgba(30,43,22,0.08)] hover:scale-[1.01] transition-all duration-300"
                >
                  <h4 className="font-serif text-base font-bold text-[#1E2B16] flex items-center gap-2">
                    <feat.icon className="w-4 h-4 text-[#596E4E] shrink-0" strokeWidth={1.5} /> 
                    <span>{feat.title}</span>
                  </h4>
                  <p className="text-[#6F685F] text-sm leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: QUALITY, COMPLIANCE, AND EXPERTISE (WARM IVORY) */}
        <section 
          id="certifications" 
          className="w-full py-20 sm:py-24 border-b border-[#EEE8DD] bg-[#F7F4EE]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
            <div className="text-center max-w-[620px] mx-auto space-y-3">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#B28A4A]">SECURITY &amp; STANDARDS</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0C3B35] font-normal tracking-tight">
                Quality, Compliance, and Industry Expertise
              </h2>
              <p className="text-[#6F685F] text-sm md:text-base font-light leading-relaxed">
                Every fragrance compound is developed with careful attention to safety, quality, and applicable industry standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
              {[
                {
                  category: 'HALAL CERTIFICATION',
                  title: 'Verified Manufacturing Standards',
                  desc: 'Production processes reviewed against recognized halal manufacturing requirements.',
                  image: '/images/certification/halal.jpg',
                },
                {
                  category: 'INDUSTRY AFFILIATION',
                  title: 'BSOP Formulation Member',
                  desc: 'Connected with professional fragrance formulation and perfumery industry networks.',
                  image: '/images/certification/bsop.jpg',
                },
                {
                  category: 'REGULATORY ALIGNMENT',
                  title: 'IFRA Standards Compliance',
                  desc: 'Fragrance compounds developed with reference to applicable IFRA safety standards.',
                  image: '/images/certification/nfra-logo.jpg',
                }
              ].map((cert, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-[#EEE8DD]/80 rounded-[14px] p-8 md:p-9 flex flex-col justify-between h-full text-center transition-all duration-350 ease-out hover:-translate-y-1.5 hover:border-[#6E968D] hover:shadow-[0_20px_40px_rgba(12,59,53,0.06)] group relative overflow-hidden"
                >
                  {/* Elegant top gold brand accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#B28A4A]/40 to-transparent group-hover:via-[#B28A4A] transition-all duration-300" />
                  
                  {/* Top: Category, Title and Description */}
                  <div className="flex-1 flex flex-col items-center">
                    <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#B28A4A] uppercase mb-2 block">
                      {cert.category}
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-[#0C3B35] leading-snug tracking-tight mb-2.5">
                      {cert.title}
                    </h4>
                    
                    {/* Subtle decorative gold diamond marker */}
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#B28A4A]/25 group-hover:bg-[#B28A4A]/70 transition-colors duration-300 my-1 shrink-0" />
                    
                    <p className="text-[#6F685F] text-xs sm:text-sm leading-relaxed font-light max-w-[260px] mt-2.5">
                      {cert.desc}
                    </p>
                  </div>

                  {/* Bottom: Enlarged Logo - perfectly aligned horizontally and baseline-oriented */}
                  <div className="w-full h-[150px] flex items-center justify-center mt-8 shrink-0">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-300 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: TREND REPORT OR FEATURED RESOURCE (WHITE) */}
        <section id="trend-report" className="w-full py-20 sm:py-24 bg-white border-b border-[#EEE8DD]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#F4F8F6] border border-[#D8E6E1] rounded-xl p-8 md:p-12 shadow-sm">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="text-xs uppercase font-mono tracking-widest text-[#B28A4A] font-bold">
                  Featured Resource
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-[#1E2B16] leading-tight">
                  Spring Summer Fragrance Trend Report
                </h3>
                <p className="text-[#6F685F] text-sm md:text-base leading-relaxed font-light">
                  Explore the key fashion, beauty and cleaning sector trends driving consumer scents. Get insights into minimalist white musks, therapeutic botanical infusions, and sustainable raw sourcing.
                </p>

                {ebookDownloaded ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="bg-[#1E2B16] text-white rounded-lg p-5 flex items-center gap-3 max-w-md border border-[#1E2B16]"
                  >
                    <Check className="text-[#D1B37A] w-5 h-5 flex-shrink-0" />
                    <div className="text-xs text-[#FCFBF8]">
                      <span className="font-bold">Thank you for requesting.</span> Your premium spring-summer trends overview PDF has been dispatched and is download-triggered in your current web session.
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleEbookDownload} className="space-y-4 max-w-md pt-2">
                    <div className="space-y-2">
                      <label 
                        htmlFor="email-field" 
                        className="block text-[10px] font-bold text-[#9A9185] uppercase tracking-widest"
                      >
                        Business Email Address
                      </label>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input 
                          id="email-field"
                          type="email" 
                          required
                          value={ebookEmail}
                          onChange={(e) => setEbookEmail(e.target.value)}
                          placeholder="e.g. buyer@beautybrand.com"
                          className="flex-grow px-5 py-3.5 rounded-full border border-[#EEE8DD] bg-white text-sm text-[#37332E] focus:outline-none focus:ring-2 focus:ring-[#1E2B16] transition-all"
                        />
                        <button 
                          type="submit"
                          id="ebook-submit-btn"
                          className="px-8 py-3.5 bg-[#596E4E] hover:bg-[#43533A] text-white text-xs font-bold rounded-full uppercase tracking-widest transition-all duration-200 cursor-pointer focus:outline-none whitespace-nowrap shadow-xs hover:shadow-md border border-[#596E4E] hover:border-[#43533A]"
                        >
                          Download Trend Report
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>

              {/* Cover Photo */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-[280px] w-full">
                  <div className="absolute inset-0 bg-[#1E2B16]/5 rounded blur-lg" />
                  <div className="relative bg-white p-3 rounded-lg border border-[#EEE8DD] shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1547841243-eacb14453cd9?auto=format&fit=crop&w=800&h=450&q=80" 
                      alt="SS Fragrance Trend Report" 
                      className="rounded w-full h-auto object-cover border border-[#EEE8DD]"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="mt-3 text-center text-[10px] font-mono font-bold text-[#596E4E] uppercase tracking-wider">
                      Olfactive SS Intelligence Forecast
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 9: SELECTED BLOG INSIGHTS (SOFT SAGE TINT) */}
        <section 
          id="blog-insights" 
          className="w-full py-20 sm:py-24 border-b border-[#EEE8DD] relative bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=40')" }}
        >
          {/* Faint botanical overlay reducing visual distraction while keeping everything extremely premium */}
          <div className="absolute inset-0 bg-[#FCFBF8]/95 z-0" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1 max-w-lg text-left">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#B28A4A]">Market Intelligence</span>
                <h3 className="font-serif text-3xl font-normal tracking-tight text-[#1E2B16]">
                  Selected Blog Insights
                </h3>
                <p className="text-[#6F685F] text-sm md:text-base font-light">Recent industry articles, chemical updates, and collection launches from our laboratory.</p>
              </div>
              <button 
                id="blog-view-all"
                onClick={() => { setActiveTab('blog'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="text-xs uppercase font-bold text-[#596E4E] tracking-widest hover:text-[#1E2B16] hover:underline transition-colors cursor-pointer focus:outline-none self-start sm:self-auto"
              >
                <span>View All Insights &rarr;</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {homeBlogs.map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-lg overflow-hidden border border-[#EEE8DD] hover:border-[#7C8C6A] hover:shadow-[0_10px_24px_rgba(30,43,22,0.08)] hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between cursor-pointer group text-left"
                  onClick={() => {
                    setSelectedBlog(article);
                    setActiveTab('blog');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                >
                  <div>
                    <div className="h-44 overflow-hidden relative select-none bg-gray-100">
                      <VideoThumbnailImage 
                        src={article.image} 
                        videoUrl={article.video}
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-[#1E2B16]/90 backdrop-blur-xs px-2.5 py-0.5 rounded text-[9px] font-mono font-semibold tracking-wider text-[#FCFBF8] uppercase">
                        {Array.isArray(article.category) ? article.category.join(' & ') : article.category}
                      </div>
                    </div>
                    <div className="p-6 space-y-2">
                      <h4 className="font-serif text-lg font-bold text-[#1E2B16] group-hover:text-[#B28A4A] transition-colors line-clamp-1 leading-snug">
                        {article.title}
                      </h4>
                      <p className="text-[#6F685F] text-sm line-clamp-2 leading-relaxed font-light">
                        {article.summary}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-3 border-t border-[#EEE8DD]/30 flex items-center justify-between text-[11px] text-[#9A9185] font-mono">
                    <span className="group-hover:text-[#596E4E] transition-colors">{article.date} • {article.readTime}</span>
                    <span className="text-[#596E4E] font-bold uppercase tracking-wider text-[9px] flex items-center gap-1 group-hover:text-[#1E2B16] transition-colors">
                      {article.video ? 'Watch Video' : 'Read Article'} &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: INDUSTRY RECOGNITION & COMMUNITY ENGAGEMENT (WHITE) */}
        <section id="recognition-community-preview" className="w-full py-20 sm:py-24 bg-[#F7F4EE] border-b border-[#EEE8DD]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#B28A4A]">Credibility</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1E2B16] font-normal tracking-tight">
                Industry Recognition & Community Engagement
              </h2>
              <p className="text-[#6F685F] text-sm md:text-base font-light">
                Beyond fragrance solutions, Proessences actively participates in industry events and supports initiatives that contribute to professional growth and meaningful community engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Awards Card */}
              <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#EEE8DD] shadow-sm hover:shadow-[0_10px_24px_rgba(30,43,22,0.08)] hover:scale-[1.01] hover:border-[#7C8C6A] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-44 overflow-hidden rounded-lg mb-6 bg-gray-50 border border-[#EEE8DD]">
                    <img 
                      src="/cosmobeaute-2025/booth.jpg" 
                      alt="Cosmobeauté 2025 Booth Design Award" 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-103"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1E2B16] mb-2 font-normal">Most Creative Booth Award</h3>
                  <p className="text-[#6F685F] text-sm mb-6 leading-relaxed font-light">
                    Proessences received the Most Creative Booth Award during Cosmobeauté Philippines 2025, celebrating our functional sustainability booth and innovative ingredient presentation workspace.
                  </p>
                </div>
                <div>
                  <button 
                    onClick={() => { setActiveTab('awards'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="font-bold text-[#596E4E] hover:text-[#1E2B16] text-xs uppercase tracking-widest transition-colors hover:underline cursor-pointer"
                  >
                    View Awards & Recognition
                  </button>
                </div>
              </div>

              {/* Community Card */}
              <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#EEE8DD] shadow-sm hover:shadow-[0_10px_24px_rgba(30,43,22,0.08)] hover:scale-[1.01] hover:border-[#7C8C6A] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-44 overflow-hidden rounded-lg mb-6 bg-gray-50 border border-[#EEE8DD]">
                    <img 
                      src="/03-2024_ccip_womensmonth/womens-month (5).jpg" 
                      alt="Supporting Meaningful Programs Campaign" 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-103"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1E2B16] mb-2 font-normal">Supporting Meaningful Programs</h3>
                  <p className="text-[#6F685F] text-sm mb-6 leading-relaxed font-light">
                    Explore <strong>Proessences Inc.</strong>'s active involvement in educational outreach, local industry participation, specialized perfumery campaigns, and sustainable community development programs.
                  </p>
                </div>
                <div>
                  <button 
                    onClick={() => { setActiveTab('community'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="font-bold text-[#596E4E] hover:text-[#1E2B16] text-xs uppercase tracking-widest transition-colors hover:underline cursor-pointer"
                  >
                    Explore Community Initiatives
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 11: STRONG INQUIRY CTA */}
        <section 
          id="inquiry-cta"
          className="w-full py-20 bg-[#FCFBF8]"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#1E2B16] text-[#FCFBF8] py-12 md:py-20 px-8 md:px-16 text-center space-y-6 shadow-md border border-[#1E2B16]/20">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=40&q=40')" }} />
              
              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#D1B37A] font-bold block">Bespoke Compounding</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-normal leading-tight text-white tracking-tight">
                  Ready to develop your signature product?
                </h2>
                <p className="text-[#D2DCD0] text-sm md:text-base font-light leading-relaxed max-w-sm mx-auto">
                  Our raw compounding specialists and account partners are ready to guide your formulation. Schedule a consultation callback.
                </p>
                <div className="pt-6">
                  <button
                    id="cta-project-btn"
                    onClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="px-10 py-4 rounded-full bg-[#FCFBF8] border border-[#FCFBF8] hover:bg-[#F7F4EE] hover:border-[#F7F4EE] text-[#1E2B16] text-xs font-bold uppercase tracking-widest transition-all duration-150 cursor-pointer shadow-md hover:shadow-xl hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                  >
                    Schedule a Visit or Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}

