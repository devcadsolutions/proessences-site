import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Leaf, 
  Activity, 
  TrendingUp, 
  MessageSquare, 
  Check, 
  Flame, 
  Compass, 
  UserCheck 
} from 'lucide-react';
import { AppTab, BlogArticle } from '../types';
import { BLOGS } from '../data';

const CAROUSEL_SLIDES = [
  {
    tagline: 'Custom Fragrance Compounding Est. 1941',
    heading: (
      <>
        Fragrances Crafted for Products <span className="font-serif italic text-[#ebd9bd]">People Remember.</span>
      </>
    ),
    description: 'We create high-quality fragrance oils and bespoke scent solutions for global brands, manufacturers, and product developers.',
    image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1920&q=85',
  },
  {
    tagline: 'GC-MS Analytical Lab Precision',
    heading: (
      <>
        Where Classical Botany <span className="font-serif italic text-[#ebd9bd]">Meets Pure Science.</span>
      </>
    ),
    description: 'Our state-of-the-art Lancashire chromatography labs isolate raw botanical structures down to parts-per-billion level.',
    image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=1920&q=85',
  },
  {
    tagline: 'Global Supply & Scalability',
    heading: (
      <>
        From 2kg Trial Runs to <span className="font-serif italic text-[#ebd9bd]">Multi-Tonne Shipments.</span>
      </>
    ),
    description: 'With supply depots across Europe, Dubai, Johannesburg, and Manila, we support global brand rollouts of any scale.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1920&q=85',
  }
];

interface HomeTabProps {
  setActiveTab: (tab: AppTab) => void;
  setSelectedBlog: (blog: BlogArticle | null) => void;
}

export default function HomeTab({ setActiveTab, setSelectedBlog }: HomeTabProps) {
  const [ebookEmail, setEbookEmail] = useState('');
  const [ebookDownloaded, setEbookDownloaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleEbookDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ebookEmail.trim()) return;
    setEbookDownloaded(true);
    setTimeout(() => {
      alert("Success! Your Spring Summer Trend Report has been generated. The download is starting in your system.");
    }, 400);
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
      transition={{ duration: 0.35 }}
      className="w-full flex flex-col"
    >
      
      {/* 2. HERO SECTION / FULL VIEWPORT CAROUSEL */}
      <section 
        id="hero-section"
        className="relative w-full h-[calc(100vh-73px)] min-h-[580px] md:min-h-[640px] overflow-hidden text-white flex items-center select-none"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${CAROUSEL_SLIDES[currentSlide].image}')` }}
          >
            {/* Dark luxury gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#021814]/85 to-[#004d44]/50" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left flex flex-col justify-center h-full">
          <div className="max-w-3xl space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-[#b38b4d]/20 border border-[#b38b4d]/30 text-[#f2ede4] text-xs font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> {CAROUSEL_SLIDES[currentSlide].tagline}
                </div>
                
                <h1 className="font-serif text-3.5xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-[#faf8f4]">
                  {CAROUSEL_SLIDES[currentSlide].heading}
                </h1>

                <p className="text-gray-200 text-sm md:text-base max-w-xl leading-relaxed font-light">
                  {CAROUSEL_SLIDES[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-5">
              <button 
                id="hero-btn-primary"
                onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="px-7 py-3 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-semibold text-xs transition-all uppercase tracking-wider shadow cursor-pointer focus:ring-2 focus:ring-[#00876e] focus:outline-none"
              >
                Inquire Online Today
              </button>
              <button 
                id="hero-btn-secondary"
                onClick={() => { setActiveTab('applications'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#ebd9bd] transition-colors focus:underline focus:outline-none"
              >
                Explore Fragrance Applications
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Controls / Indicators at Bottom Right */}
        <div className="absolute bottom-10 right-6 sm:right-12 z-20 flex items-center gap-3">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                currentSlide === idx ? 'w-8 bg-[#ebd9bd]' : 'w-2 bg-white/40 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bouncing Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <button 
            onClick={scrollToNext}
            className="group flex flex-col items-center justify-center text-white/75 hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer"
            aria-label="Scroll down to next section"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest opacity-80 group-hover:opacity-100 transition-opacity mb-2">
              Scroll Down
            </span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* SCROLLABLE MAIN CONTENT AREA */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20 lg:space-y-28">

        {/* 3. SHORT COMPANY INTRODUCTION */}
      <section 
        id="intro-section"
        className="max-w-3xl mx-auto text-center space-y-6 px-4"
      >
        <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Our Essence</span>
        <p className="font-serif text-xl sm:text-2xl md:text-3.5xl text-[#004d44] leading-relaxed font-light">
          Carvansons creates fragrance oils, perfume compounds, and bespoke scent solutions for a wide range of applications. With decades of industry experience and an international network, we help brands develop fragrances that match their products, markets, and customers.
        </p>
        <div className="pt-2">
          <button 
            id="intro-learn-more"
            onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
            className="inline-flex items-center gap-1.5 text-[#00876e] hover:text-[#004d44] text-xs font-bold uppercase tracking-wider transition-colors hover:underline focus:outline-none"
          >
            Learn More About Us
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. KEY FRAGRANCE APPLICATIONS (6 Cards) */}
      <section id="applications-grid-section" className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Sectors We Serve</span>
          <h2 className="font-serif text-2xl md:text-3.5xl text-[#004d44] font-normal tracking-tight">
            Key Fragrance Applications
          </h2>
          <p className="text-gray-500 text-xs md:text-sm font-light">
            Each manufactured compound is clinically tailormade to match viscosity, stability, and evaporation guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 'fine-fragrance',
              title: 'Fine Fragrance',
              desc: 'Artistic and complex compositions developed for premium luxury, cologne, and beauty brands.',
              img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80'
            },
            {
              id: 'personal-care',
              title: 'Personal Care',
              desc: 'Evocative, skin-safe scent creations designed for cosmetics, soaps, creams, and hair care rituals.',
              img: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=800&q=80'
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
              className="bg-white rounded-xl overflow-hidden border border-[#ece7de] hover:border-[#00876e]/35 hover:shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 overflow-hidden relative select-none">
                  <img 
                    src={app.img} 
                    alt={app.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[9px] font-mono tracking-widest text-[#fcfcf9] bg-[#004d44]/75 px-2.5 py-0.5 rounded uppercase">
                    Olfactive Compound
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#004d44] group-hover:text-[#00876e] transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-[#555f5e] text-xs leading-relaxed font-light">
                    {app.desc}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => { setActiveTab('applications'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#00876e] hover:text-[#004d44] uppercase tracking-wider focus:underline focus:outline-none"
                >
                  Explore Specifications &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BESPOKE FRAGRANCE CREATION PROCESS */}
      <section id="creation-process-section" className="bg-[#f0f4f2]/60 rounded-2xl p-8 md:p-14 border border-[#e2ebe7] space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Scent Engineering</span>
          <h2 className="font-serif text-2xl md:text-3.5xl text-[#004d44] font-normal tracking-tight">
            From Brief to Signature Scent
          </h2>
          <p className="text-[#3d5e56] text-xs md:text-sm font-light">
            Our team works with you to develop a fragrance that suits your product, audience, and brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Share Your Brief',
              desc: 'Detail your target product format, raw personality, olfactory wishes, and regulatory compliance scopes.'
            },
            {
              step: '02',
              title: 'Explore Directions',
              desc: 'Our blenders propose artistic test pathways, generating prototype samples to challenge your metrics.'
            },
            {
              step: '03',
              title: 'Refine the Formula',
              desc: 'Adjust compositions under analytical GC-MS profiles to optimize projection, safety margins, and wax/cream holds.'
            },
            {
              step: '04',
              title: 'Finalize Signature',
              desc: 'Deploy bulk compounding, issue IFRA declarations, and finalize fast delivery routes globally.'
            }
          ].map((item, idx) => (
            <div key={idx} className="space-y-3 bg-white/75 p-5 rounded-lg border border-[#e5dfd5]/60">
              <span className="block font-serif text-2xl italic text-[#b38b4d]/80 font-bold border-b border-[#e5dfd5] pb-2">
                {item.step}
              </span>
              <h3 className="font-serif text-sm font-bold text-[#004d44]">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button 
            id="process-cta-btn"
            onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
            className="px-8 py-3 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-semibold text-xs tracking-wider uppercase shadow cursor-pointer focus:ring-2 focus:ring-[#00876e] focus:outline-none"
          >
            Start Your Fragrance Project
          </button>
        </div>
      </section>

      {/* 6. WHY CHOOSE THE COMPANY */}
      <section id="why-choose-us" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-xl p-8 md:p-12 border border-[#ece7de] shadow-sm">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Our Reputation</span>
          <h2 className="font-serif text-2.5xl md:text-3.5xl text-[#004d44] leading-tight font-normal">
            Why Partner with Carvansons?
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
            Founded in 1941, our independent compounding house blends classical botany wisdom with the ultimate scientific precision needed for global consumer brands.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "GC-MS Analytical Lab",
              desc: "Chromatographic profiling that isolates raw components at parts-per-billion level, securing 100% molecular authenticity."
            },
            {
              title: "Volume Scalability",
              desc: "From 2kg trial runs to multi-tonne commercial shipments, our automated blenders support extreme product lifecycles."
            },
            {
              title: "Global Supply Depots",
              desc: "Operational sales hubs in Europe, Dubai, Johannesburg, Manila, and West Africa ensure short lead times and flat rates."
            },
            {
              title: "Compliance Shield",
              desc: "Expert safety officers manage CLP MSDS databases to resolve export barriers across US, EU, and Asian markets."
            }
          ].map((feat, idx) => (
            <div key={idx} className="space-y-1.5 p-4 rounded bg-[#faf9f6] border border-[#e5dfd5]/40">
              <h4 className="font-serif text-xs font-bold text-[#004d44] flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#00876e]" /> {feat.title}
              </h4>
              <p className="text-gray-500 text-[11px] leading-relaxed font-light">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CERTIFICATIONS AND INDUSTRY AFFILIATIONS */}
      <section id="certifications-section" className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Trust & Compliance</span>
          <h2 className="font-serif text-2xl md:text-3xl text-[#004d44] font-normal tracking-tight bg-transparent">
            Quality, Compliance, and Industry Expertise
          </h2>
          <p className="text-gray-500 text-xs font-light">
            Each extract is tested prior to dispatch to secure compliance with major global safety bodies.
          </p>
        </div>

        {/* Clean horizontal row layout on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-6 max-w-5xl mx-auto items-stretch justify-center">
          {[
            {
              title: 'Halal Certification',
              desc: 'Animal-free production pathways compliant with Halal regulations, audited under pure criteria.',
              icon: <Flame className="w-8 h-8 text-emerald-600" />
            },
            {
              title: 'IFRA Standard Compliance',
              desc: 'Strict limits matching modern toxicology amendments by the International Fragrance Association.',
              icon: <UserCheck className="w-8 h-8 text-amber-600" />
            },
            {
              title: 'Pristine Botany Craft',
              desc: 'Decades of classical training ensures highly balanced natural essences and synthetic matrices.',
              icon: <Compass className="w-8 h-8 text-blue-600" />
            }
          ].map((cert, idx) => (
            <div 
              key={idx}
              className="flex-grow md:flex-1 bg-white p-6 rounded-xl border border-[#ece7de] hover:shadow-xs transition-shadow flex flex-col md:flex-row items-start gap-4"
            >
              <div className="w-14 h-14 bg-[#faf9f6] rounded border border-gray-150 flex items-center justify-center p-2 shrink-0">
                {cert.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-sm font-bold text-[#004d44] tracking-tight">{cert.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TREND REPORT OR FEATURED RESOURCE */}
      <section id="trend-report-section" className="bg-[#fcfbf9] border border-[#ece7de] rounded-xl p-6 md:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Ebook Details / Form */}
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] font-bold">
              Featured Resource
            </span>
            <h3 className="font-serif text-2xl md:text-3.5xl font-extrabold tracking-tight text-[#004d44] leading-tight">
              Spring Summer Fragrance Trend Report
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
              Explore the fashion and consumer buyer trends driving the cosmetic, beauty, and cleaning sectors. Receive details on quiet white musks, Amalfi citrus infusions, natural botanical therapeutics, and mood-centric scent receptors.
            </p>

            {ebookDownloaded ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-lg p-4 flex items-center gap-3 max-w-sm"
              >
                <Check className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold">Check your Inbox!</span> The Spring Summer olfactory forecast is preparing to download.
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleEbookDownload} className="space-y-3.5 max-w-md">
                <div className="space-y-1.5 text-left">
                  <label 
                    htmlFor="ebook-email-field" 
                    className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest"
                  >
                    Professional Email Address
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                      id="ebook-email-field"
                      type="email" 
                      required
                      value={ebookEmail}
                      onChange={(e) => setEbookEmail(e.target.value)}
                      placeholder="e.g. buyer@beautybrand.com"
                      className="flex-grow px-4 py-2.5 rounded border border-gray-300 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#00876e]"
                    />
                    <button 
                      type="submit"
                      id="ebook-download-btn"
                      className="px-6 py-2.5 bg-[#004d44] hover:bg-[#00876e] text-white text-xs font-bold rounded uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00876e]"
                    >
                      Download Trend Report
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Ebook Graphic Asset */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[280px]">
              <div className="absolute inset-0 bg-[#004d44]/10 rounded-xl blur group-hover:blur-md transition-all" />
              <div className="relative bg-white p-3 rounded-lg border border-[#e5dfd5] shadow-xs transform rotate-1 group-hover:rotate-0 transition-all duration-350 select-none">
                <img 
                  src="https://images.unsplash.com/photo-1447875226462-764a66e70f10?auto=format&fit=crop&w=500&h=281&q=80" 
                  alt="Spring Summer Fragrance eBook Cover" 
                  className="rounded w-full h-auto object-cover border border-gray-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="mt-3 text-center text-[10px] font-mono font-bold text-[#004d44] uppercase tracking-widest">
                  Olfactive Trends SS Forecast
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. SELECTED BLOG INSIGHTS (3 articles) */}
      <section id="blog-insights-section" className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Market Intelligence</span>
            <h3 className="font-serif text-2xl md:text-3.5xl font-normal tracking-tight text-[#004d44]">
              Selected Blog Insights
            </h3>
            <p className="text-gray-500 text-xs md:text-sm">Recent highlights, aesthetic trends, and releases from our technical blenders.</p>
          </div>
          <button 
            id="home-view-all-blog"
            onClick={() => { setActiveTab('blog'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
            className="text-xs uppercase font-bold text-[#b38b4d] tracking-widest hover:underline hover:text-[#00876e] transition-colors cursor-pointer focus:outline-none"
          >
            View All Insights &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOGS.slice(0, 3).map((article) => (
            <div 
              key={article.id} 
              className="bg-white rounded-xl overflow-hidden border border-[#ece7de] hover:border-[#00876e]/25 hover:shadow-xs transition-all flex flex-col justify-between cursor-pointer group"
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
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" 
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider text-[#00876e]">
                    {article.category}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="font-serif text-base font-bold text-[#004d44] group-hover:text-[#b38b4d] transition-colors line-clamp-1">
                    {article.title}
                  </h4>
                  <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed font-light">
                    {article.summary}
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. STRONG INQUIRY CTA */}
      <section 
        id="strong-inquiry-cta"
        className="relative rounded-2xl overflow-hidden bg-[#004d44] text-[#faf9f6] p-8 md:p-14 text-center space-y-6 shadow"
      >
        <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=40&q=40')" }} />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] font-bold">Custom Formulations</span>
          <h2 className="font-serif text-2xl sm:text-3.5xl md:text-4xl font-normal leading-tight">
            Ready to develop your signature product?
          </h2>
          <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed max-w-lg mx-auto">
            Get technical pricing, safety sheets, and order bespoke trial samples. Connect instantly with our master evaluators.
          </p>
          <div className="pt-4 flex flex-col justify-center items-center">
            <button
              id="cta-project-btn"
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="px-8 py-3 rounded-full bg-white hover:bg-gray-100 text-[#004d44] text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer shadow-xs focus:ring-2 focus:ring-[#b38b4d] focus:outline-none"
            >
              Inquire Online &amp; Submit Scent Brief &rarr;
            </button>
          </div>
        </div>
      </section>

      </div>
    </motion.div>
  );
}
