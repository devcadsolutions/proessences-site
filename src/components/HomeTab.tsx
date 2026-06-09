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
  UserCheck 
} from 'lucide-react';
import { AppTab, BlogArticle } from '../types';
import { BLOGS } from '../data';
import PremiumDropdown from './PremiumDropdown';

const BACKGROUND_IMAGES = [
  'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1920&q=85', // Botanical oils
  'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=1920&q=85', // Fine glassware & plants
  'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1920&q=85'  // Premium fragrance mist
];

interface HomeTabProps {
  setActiveTab: (tab: AppTab) => void;
  setSelectedBlog: (blog: BlogArticle | null) => void;
}

export default function HomeTab({ setActiveTab, setSelectedBlog }: HomeTabProps) {
  const [ebookEmail, setEbookEmail] = useState('');
  const [ebookDownloaded, setEbookDownloaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  // Background fade interval for visual atmospheric depth without movement distraction
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
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      
      {/* 1. HERO SECTION */}
      <section 
        id="hero-section"
        className="relative w-full h-[calc(100vh-73px)] min-h-[600px] overflow-hidden text-white flex items-center"
      >
        {/* Background Image Carousel (Fades only, no slide movement to keep text legible) */}
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
              {/* Premium dark botanical green tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#031512]/90 via-[#031512]/75 to-transparent md:bg-opacity-50" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 flex flex-col justify-center h-full">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#b38b4d]/10 border border-[#b38b4d]/20 text-[#ebd9bd] text-[10px] font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Established in 1941
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-[#faf8f5]">
              Fragrances Crafted for Products <span className="font-serif italic text-[#ebd9bd]">People Remember.</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light max-w-lg">
              We create high-quality fragrance oils and bespoke scent solutions for brands, manufacturers, and product developers.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6">
              <button 
                id="hero-btn-primary"
                onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="px-8 py-3.5 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-150 cursor-pointer shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#00876e] focus:outline-none"
              >
                Create Your Bespoke Fragrance
              </button>
              <button 
                id="hero-btn-secondary"
                onClick={() => { setActiveTab('applications'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="group flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#faf8f5] hover:text-[#ebd9bd] transition-colors focus:underline focus:outline-none"
              >
                <span>Explore Fragrance Applications</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
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
            <span className="text-[9px] uppercase font-mono tracking-widest opacity-80 mb-2">Scroll Discovery</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-xs transition-colors group-hover:border-white/30">
              <svg className="w-3.5 h-3.5 text-white/70 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* 2. SPARKING CONTINUOUS SECTIONS IN THE PRESCRIBED HIERARCHY */}
      <div className="w-full">
        
        {/* SECTION 3: SHORT COMPANY INTRODUCTION */}
        <section 
          id="intro-section"
          className="w-full py-32 border-b border-[#e9e6df] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596495544253-83935d3d490c?auto=format&fit=crop&w=1920&q=80')" }}
        >
          <div className="w-full h-full bg-[#f3f0e9]/95 py-0 px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Our Essence</span>
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#004d44] leading-relaxed font-light">
                Proessences creates fragrance oils, perfume compounds, and bespoke scent solutions for a wide range of applications. With decades of industry experience and an international network, we help brands develop fragrances that match their products, markets, and customers.
              </p>
              
              <div className="pt-2">
                <button 
                  id="intro-learn-more"
                  onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="inline-flex items-center gap-1 text-[#00876e] hover:text-[#004d44] hover:underline text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none"
                >
                  <span>Learn More About Us</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: KEY FRAGRANCE APPLICATIONS */}
        <section id="applications-section" className="w-full py-32 bg-white border-b border-[#e9e6df]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Olfactive Expertise</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#004d44] font-normal tracking-tight">
                Key Fragrance Applications
              </h2>
              <p className="text-gray-500 text-xs md:text-sm font-light">
                Our custom perfume compounds are precisely stabilized and tested for optimal visual clarity, viscosity, and sensory longevity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 'fine-fragrance',
                  title: 'Fine Fragrance',
                  desc: 'Complex compositions developed for premium luxury, cologne, and beauty brands.',
                  img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80'
                },
                {
                  id: 'personal-care',
                  title: 'Personal Care',
                  desc: 'Evocative, skin-safe scent creations designed for cosmetics, soaps, creams, and hair care.',
                  img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80'
                },
                {
                  id: 'household-products',
                  title: 'Household Products',
                  desc: 'Scents engineered to withstand active clean agents while leaving long-lasting room freshness.',
                  img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
                },
                {
                  id: 'industrial-products',
                  title: 'Industrial Products',
                  desc: 'High chemical resistance formulas combined with advanced malodor counteraction technologies.',
                  img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
                },
                {
                  id: 'room-fragrance',
                  title: 'Home Fragrance',
                  desc: 'Evocative ambient air fresheners, reed diffusers, and technical room-spraying formulas.',
                  img: 'https://images.unsplash.com/photo-1547841243-eacb14453cd9?auto=format&fit=crop&w=800&q=80'
                },
                {
                  id: 'car-care',
                  title: 'Automotive Fragrance',
                  desc: 'Sustained high-temperature ambient release scent solutions designed for vehicle environments.',
                  img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
                }
              ].map((app) => (
                <div 
                  key={app.id}
                  className="bg-[#fafaf7] hover:bg-white rounded-lg overflow-hidden border border-[#ece7de] hover:border-[#00876e]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-44 overflow-hidden relative select-none">
                      <img 
                        src={app.img} 
                        alt={app.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#004d44]/15 opacity-70 group-hover:opacity-40 transition-opacity" />
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="font-serif text-lg font-bold text-[#004d44] group-hover:text-[#00876e] transition-colors">
                        {app.title}
                      </h3>
                      <p className="text-[#555f5e] text-[13px] leading-relaxed font-light">
                        {app.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2">
                    <button 
                      onClick={() => { setActiveTab('applications'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                      className="flex items-center gap-1 text-[11px] font-semibold text-[#00876e] hover:text-[#004d44] uppercase tracking-widest focus:underline focus:outline-none"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: BESPOKE FRAGRANCE CREATION PROCESS */}
        <section 
          id="creation-process" 
          className="w-full py-32 border-b border-[#e9e6df] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603598730999-52467b7e618e?auto=format&fit=crop&w=1920&q=80')" }}
        >
          <div className="w-full h-full bg-[#f3f0e9]/95 py-0 px-6 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-16">
              <div className="text-center max-w-xl mx-auto space-y-3">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Modern Formulation</span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#004d44] font-normal tracking-tight">
                  From Brief to Signature Scent
                </h2>
                <p className="text-gray-500 text-xs md:text-sm font-light">
                  Our team works with you to develop a fragrance that suits your product, audience, and brand.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Share Your Brief',
                    desc: 'Specify your product concept, target audience, sensory notes, and regulatory parameters.'
                  },
                  {
                    step: '02',
                    title: 'Explore Fragrance Directions',
                    desc: 'Our blenders propose artistic pathways and prepare trial samples for evaluation.'
                  },
                  {
                    step: '03',
                    title: 'Refine the Formula',
                    desc: 'Analyze and adjust under GC-MS profiles to optimize projection, longevity, and stability.'
                  },
                  {
                    step: '04',
                    title: 'Finalize Your Signature Scent',
                    desc: 'Scale to production with global batch logistics and complete health & IFRA certifications.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-4 bg-white p-6 rounded border border-[#ece7de] relative">
                    <span className="block font-serif text-3xl italic text-[#b38b4d]/40 font-semibold mb-2">
                      {item.step}
                    </span>
                    <h3 className="font-serif text-sm font-semibold text-[#004d44] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button 
                  id="creation-cta-btn"
                  onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="px-8 py-3 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow focus:ring-2 focus:ring-[#00876e] focus:outline-none"
                >
                  Start Your Fragrance Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHY CHOOSE THE COMPANY */}
        <section id="why-choose-us" className="w-full py-24 bg-white border-b border-[#e1dcd4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Our Advantage</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#004d44] leading-tight font-normal">
                Why Partner with Proessences?
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                Established as an independent compounding house, we harmonize four generations of botanical expertise with state-of-the-art diagnostic labs to deliver robust security for global developers.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "GC-MS Analytical Lab",
                  desc: "Precision gas chromatography systems verify raw component authenticity at the absolute molecular scale."
                },
                {
                  title: "Industrial Scalability",
                  desc: "We confidently manage deliveries ranging from 2kg test pilot iterations to multi-tonne commercial shipments."
                },
                {
                  title: "Global Depot Network",
                  desc: "Strategic distribution and storage hubs across the UK, Dubai, Johannesburg, and Manila optimize transit variables."
                },
                {
                  title: "Compliance & Safety",
                  desc: "Dedicated safety officers generate seamless SDS documentation and IFRA certificates for frictionless customs clearance."
                }
              ].map((feat, idx) => (
                <div key={idx} className="space-y-2 p-5 rounded border border-[#ece7de] bg-[#fafaf7]">
                  <h4 className="font-serif text-[13px] font-semibold text-[#004d44] flex items-center gap-2">
                    <Leaf className="w-3.5 h-3.5 text-[#00876e]" /> {feat.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: CERTIFICATIONS AND INDUSTRY AFFILIATIONS */}
        <section 
          id="certifications" 
          className="w-full py-24 border-b border-[#e1dcd4] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584824370445-22b725c6c5ec?auto=format&fit=crop&w=1920&q=80')" }}
        >
          <div className="w-full h-full bg-[#f3f0e9]/95 py-0 px-6 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Security &amp; Standards</span>
                <h2 className="font-serif text-2xl md:text-3xl text-[#004d44] font-normal tracking-tight">
                  Quality, Compliance, and Industry Expertise
                </h2>
                <p className="text-gray-500 text-xs font-light">
                  All raw compounds undergo thorough validation to ensure safety alignment with leading global boards.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto items-stretch justify-center">
                {[
                  {
                    title: 'Halal Certification',
                    desc: '100% animal-free manufacturing routes verified under strict processing audit criteria.',
                    icon: <Flame className="w-6 h-6 text-[#00876e]" />
                  },
                  {
                    title: 'IFRA Standard Compliance',
                    desc: 'Strict limits matching the latest toxicology updates from the International Fragrance Association.',
                    icon: <UserCheck className="w-6 h-6 text-[#b38b4d]" />
                  },
                  {
                    title: 'Pristine Botany Craft',
                    desc: 'Synthesized with premium natural botanical oils and fully validated, high-purity synthetic matrices.',
                    icon: <Compass className="w-6 h-6 text-[#00876e]" />
                  }
                ].map((cert, idx) => (
                  <div 
                    key={idx}
                    className="flex-1 bg-white p-6 rounded border border-[#ece7de] flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-[#faf8f4] rounded border border-[#ece7de] flex items-center justify-center p-2.5 shrink-0">
                      {cert.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-xs font-bold text-[#004d44] tracking-widest uppercase">{cert.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed font-light">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: TREND REPORT OR FEATURED RESOURCE */}
        <section id="trend-report" className="w-full py-24 bg-white border-b border-[#e1dcd4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#fdfcfb] border border-[#ece7de] rounded-lg p-8 md:p-12">
              
              <div className="lg:col-span-7 space-y-5 text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] font-bold">
                  Featured Resource
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-[#004d44] leading-tight">
                  Spring Summer Fragrance Trend Report
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                  Explore the key fashion, beauty and cleaning sector trends driving consumer scents. Get insights into minimalist white musks, therapeutic botanical infusions, and sustainable raw sourcing.
                </p>

                {ebookDownloaded ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="bg-[#004d44] text-white rounded p-4 flex items-center gap-3 max-w-md border border-[#00876e]"
                  >
                    <Check className="text-[#ebd9bd] w-5 h-5 flex-shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold">Thank you for requesting.</span> Your premium spring-summer trends overview PDF has been dispatched and is download-triggered in your current web session.
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleEbookDownload} className="space-y-4 max-w-md">
                    <div className="space-y-2">
                      <label 
                        htmlFor="email-field" 
                        className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest"
                      >
                        Business Email Address
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2.5">
                        <input 
                          id="email-field"
                          type="email" 
                          required
                          value={ebookEmail}
                          onChange={(e) => setEbookEmail(e.target.value)}
                          placeholder="e.g. buyer@beautybrand.com"
                          className="flex-grow px-4 py-2.5 rounded border border-[#ece7de] bg-white text-xs focus:outline-none focus:ring-1 focus:ring-[#00876e]"
                        />
                        <button 
                          type="submit"
                          id="ebook-submit-btn"
                          className="px-6 py-2.5 bg-[#004d44] hover:bg-[#00876e] text-white text-xs font-bold rounded uppercase tracking-wider transition-colors cursor-pointer focus:outline-none"
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
                  <div className="absolute inset-0 bg-[#004d44]/5 rounded blur-lg" />
                  <div className="relative bg-[#fafaf7] p-3 rounded border border-[#ece7de] shadow-xs">
                    <img 
                      src="https://images.unsplash.com/photo-1547841243-eacb14453cd9?auto=format&fit=crop&w=800&h=450&q=80" 
                      alt="SS Fragrance Trend Report" 
                      className="rounded w-full h-auto object-cover border border-gray-100"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="mt-2.5 text-center text-[9px] font-mono font-bold text-[#004d44] uppercase tracking-wider">
                      Olfactive SS Intelligence Forecast
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 9: SELECTED BLOG INSIGHTS */}
        <section 
          id="blog-insights" 
          className="w-full py-24 border-b border-[#e1dcd4] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1920&q=80')" }}
        >
          <div className="w-full h-full bg-[#f3f0e9]/95 py-0 px-6 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1 max-w-lg text-left">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Market Intelligence</span>
                  <h3 className="font-serif text-3xl font-normal tracking-tight text-[#004d44]">
                    Selected Blog Insights
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm font-light">Recent industry articles, chemical updates, and collection launches from our laboratory.</p>
                </div>
                <button 
                  id="blog-view-all"
                  onClick={() => { setActiveTab('blog'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="text-xs uppercase font-bold text-[#b38b4d] tracking-widest hover:text-[#00876e] hover:underline transition-colors cursor-pointer focus:outline-none self-start sm:self-auto"
                >
                  <span>View All Insights &rarr;</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOGS.slice(0, 3).map((article) => (
                  <div 
                    key={article.id} 
                    className="bg-white rounded overflow-hidden border border-[#ece7de] hover:border-[#00876e]/25 hover:shadow-xs transition-all duration-300 flex flex-col justify-between cursor-pointer group text-left"
                    onClick={() => {
                      setSelectedBlog(article);
                      setActiveTab('blog');
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                  >
                    <div>
                      <div className="h-44 overflow-hidden relative select-none">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-[#0d2a25]/90 backdrop-blur-xs px-2.5 py-0.5 rounded text-[8px] font-mono font-semibold tracking-wider text-white uppercase">
                          {article.category}
                        </div>
                      </div>
                      <div className="p-5 space-y-2">
                        <h4 className="font-serif text-base font-bold text-[#004d44] group-hover:text-[#b38b4d] transition-colors line-clamp-1 leading-snug">
                          {article.title}
                        </h4>
                        <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed font-light">
                          {article.summary}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-3 border-t border-[#ece7de]/30 flex items-center justify-between text-[10px] text-gray-400 font-mono">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Industry Recognition & Community Engagement */}
        <section id="recognition-community-preview" className="w-full py-24 bg-[#faf8f4] border-b border-[#e9e6df]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Credibility</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#004d44] font-normal tracking-tight">
                Industry Recognition & Community Engagement
              </h2>
              <p className="text-gray-500 text-xs md:text-sm font-light">
                Beyond fragrance solutions, Proessences actively participates in industry events and supports initiatives that contribute to professional growth and meaningful community engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-8 border border-[#ece7de] shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-100 rounded mb-6 flex items-center justify-center text-gray-500 text-sm">[Booth photograph placeholder]</div>
                <h3 className="font-serif text-xl font-bold text-[#004d44] mb-2">Most Creative Booth Award</h3>
                <p className="text-[#555f5e] text-sm mb-6">Proessences received the Most Creative Booth Award during Cosmobeauté Philippines 2025.</p>
                <button 
                  onClick={() => { setActiveTab('awards'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="font-bold text-[#00876e] text-xs uppercase tracking-widest hover:underline"
                >View Awards & Recognition</button>
              </div>

              <div className="bg-white rounded-lg p-8 border border-[#ece7de] shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-100 rounded mb-6 flex items-center justify-center text-gray-500 text-sm">[Outreach photograph placeholder]</div>
                <h3 className="font-serif text-xl font-bold text-[#004d44] mb-2">Supporting Meaningful Programs</h3>
                <p className="text-[#555f5e] text-sm mb-6">Explore Proessences’ involvement in industry participation, educational campaigns, and community outreach initiatives.</p>
                <button 
                  onClick={() => { setActiveTab('community'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="font-bold text-[#00876e] text-xs uppercase tracking-widest hover:underline"
                >Explore Community Initiatives</button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: STRONG INQUIRY CTA */}
        <section 
          id="inquiry-cta"
          className="w-full py-20 bg-white"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative rounded-lg overflow-hidden bg-[#004d44] text-[#faf9f6] p-8 md:p-14 text-center space-y-6 shadow-sm border border-[#00876e]/20">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=40&q=40')" }} />
              
              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#ebd9bd] font-bold block">Bespoke Compounding</span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-white tracking-tight">
                  Ready to develop your signature product?
                </h2>
                <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed max-w-md mx-auto">
                  Aquire industrial compounding rates, safety datasheets (SDS), and order bespoke trial batches with our Master blenders.
                </p>
                <div className="pt-4">
                  <button
                    id="cta-project-btn"
                    onClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="px-8 py-3 rounded-full bg-white hover:bg-[#fafaf7] text-[#004d44] text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                  >
                    Start Your Fragrance Project
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
