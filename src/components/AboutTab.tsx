import React from 'react';
import { motion } from 'motion/react';
import { Globe2, Beaker, Eye, UserCheck, Flame, Compass } from 'lucide-react';
import { AppTab } from '../types';
import { HERITAGE_TABS } from '../data';

interface AboutTabProps {
  setActiveTab: (tab: AppTab) => void;
  activeHeritageTab: string;
  setActiveHeritageTab: (tabId: string) => void;
}

export default function AboutTab({ setActiveTab, activeHeritageTab, setActiveHeritageTab }: AboutTabProps) {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about-content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      key="about-tab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full flex flex-col"
    >
      {/* IMMERSIVE FULL-VIEWPORT HERO */}
      <section 
        id="hero-section"
        className="relative w-full h-[calc(100vh-73px)] min-h-[580px] md:min-h-[640px] overflow-hidden text-white flex items-center select-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1920&q=85')` }}
        >
          {/* Subtle luxurious custom dark green gradient/overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#021814]/85 to-[#004d44]/50" />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left flex flex-col justify-center h-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#b38b4d]/20 border border-[#b38b4d]/30 text-[#f2ede4] text-xs font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Corporate Heritage &amp; Innovation
            </div>
            
            <h1 className="font-serif text-3.5xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-[#faf8f4]">
              A Trusted Companion in <span className="font-serif italic text-[#ebd9bd]">Bespoke Fragrance Creation.</span>
            </h1>

            <p className="text-gray-200 text-sm md:text-base max-w-xl leading-relaxed font-light">
              Since 1941, Carvansons has blended traditional perfumery principles with advanced GC-MS liquid chromatography to supply some of the world's most recognizable brands.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-5">
              <button 
                onClick={scrollToNext}
                className="px-7 py-3 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-semibold text-xs transition-all uppercase tracking-wider shadow cursor-pointer focus:outline-none"
              >
                Discover Our Heritage
              </button>
              <button 
                onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#ebd9bd] transition-colors focus:outline-none"
              >
                Submit Compound Inquiry &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Bouncing Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <button 
            onClick={scrollToNext}
            className="group flex flex-col items-center justify-center text-white/75 hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer"
            aria-label="Scroll down to next section"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest opacity-80 group-hover:opacity-100 transition-opacity mb-2">
              Our Journey
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
      <div id="about-content" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20 lg:space-y-28">

      {/* Scent Overview (Who We Are) */}
      <section className="bg-white rounded-xl p-8 md:p-12 border border-[#ece7de] shadow-xs space-y-5 max-w-4xl mx-auto">
        <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e] block text-center">Company Profile</span>
        <h2 className="font-serif text-2.5xl md:text-3.5xl text-[#004d44] font-normal tracking-tight text-center">
          Who We Are
        </h2>
        <p className="text-[#4e5554] leading-relaxed text-sm md:text-base font-light text-center">
          Carvansons is an established and trusted Fragrance Manufacturer. We innovate, develop, and manufacture high-quality fragrance compounds and custom odoriferous substances. We supply brands and manufacturers of finished products worldwide with premium fragrance oils that help build unmatched identity and brand recognition. Our passion for chemistry and aesthetics is apparent in everything we do, from our craft-focused creativity and technical expertise to our meticulous regulatory support.
        </p>
      </section>

      {/* Loop Video and Heritage Column (2-Column Grid) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
        {/* Left side: Video Player Image block */}
        <div className="lg:col-span-6 bg-white border border-[#ece7de] rounded-xl p-5 shadow-xs flex flex-col justify-center">
          <div className="relative w-full rounded-lg overflow-hidden border border-gray-150 shadow-inner bg-gray-50 aspect-video select-none group cursor-pointer flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
              alt="Company Overview Analytical Lab" 
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
            <div className="relative z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <div className="w-0 h-0 border-t-6 border-t-transparent border-l-10 border-l-[#004d44] border-b-6 border-b-transparent ml-1" />
            </div>
            <span className="absolute bottom-4 z-10 text-[9px] uppercase font-mono font-bold tracking-widest text-[#fcfcf9] bg-black/60 px-3 py-1 rounded">
              Watch Laboratory Compounding
            </span>
          </div>
        </div>

        {/* Right side: Our Heritage */}
        <div className="lg:col-span-6 bg-[#faf9f6] border border-[#ece7de] rounded-xl p-6 md:p-8 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#ebd9bd]">Our Legacy</span>
            <h2 className="font-serif text-xl md:text-2xl text-[#004d44] font-normal tracking-tight">
              A Legacy of Fragrance Artistry
            </h2>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
              Our fourth-generation heritage is just one of many reasons that make our compounding house unique. Established in 1941, Carvansons continues to explore, inspire, and lead the way in industrial aromatics.
              <br /><br />
              Our foundation is built on organic chemistry, market foresight, and customer proximity—ideals that remain steadfast at the core of our technical work.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-[#ece7de] flex items-center justify-between">
            <button 
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="text-xs uppercase font-bold text-[#b38b4d] tracking-widest hover:text-[#00876e] transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none focus:underline"
            >
              Request Custom Compound &rarr;
            </button>
            <span className="text-[10px] font-mono text-gray-400">Est. 1941 Lancashire</span>
          </div>
        </div>
      </section>

      {/* Showcase Heritage Tabs */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Visual Tab Selector buttons */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col flex-wrap gap-2.5">
          {HERITAGE_TABS.map((item) => (
            <button
              key={item.id}
              id={`heritage-tab-${item.id}`}
              onClick={() => setActiveHeritageTab(item.id)}
              className={`flex-grow lg:flex-grow-0 flex items-center justify-center lg:justify-start gap-3 py-3 px-5 rounded-lg text-left text-xs font-semibold tracking-wider transition-all uppercase duration-150 cursor-pointer ${
                activeHeritageTab === item.id 
                  ? 'bg-[#004d44] text-white shadow-xs' 
                  : 'bg-white text-gray-500 border border-[#e9e6df] hover:bg-gray-55 hover:text-[#1e2524]'
              }`}
            >
              <span className="hidden sm:inline-block">
                {item.id === 'where' && <Globe2 className="w-4 h-4" />}
                {item.id === 'what' && <Beaker className="w-4 h-4" />}
                {item.id === 'approach' && <Eye className="w-4 h-4" />}
                {item.id === 'people' && <UserCheck className="w-4 h-4" />}
              </span>
              {item.title}
            </button>
          ))}
        </div>

        {/* Displaying tab content */}
        <div className="lg:col-span-8 bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 shadow-xs min-h-[300px] flex flex-col justify-between">
          <div>
            {HERITAGE_TABS.map((item) => {
              if (item.id !== activeHeritageTab) return null;
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-normal text-[#004d44]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed whitespace-pre-line font-light">
                    {item.content}
                  </p>
                  
                  {item.id === 'where' && (
                    <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-6 relative rounded overflow-hidden border border-gray-150 bg-gray-50 p-1 shadow-xs mx-auto select-none">
                        <img 
                          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                          alt="Global networks map" 
                          className="w-full h-auto object-cover rounded"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                      </div>
                      <div className="md:col-span-6 space-y-2">
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-[#b38b4d] font-bold">Sales &amp; Compounds Depots:</span>
                        <p className="text-xs text-gray-400 leading-relaxed font-light">
                          Our Lancashire manufacturing facility is supported by storage capacities and sales offices located in key global regional hubs—providing fast delivery worldwide.
                        </p>
                      </div>
                    </div>
                  )}

                  {item.id === 'what' && (
                    <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                      <div className="p-3 bg-[#faf9f6] rounded border border-[#ece7de]">
                        <span className="block font-bold text-xs text-[#00876e]">2kg - Multi-tonne</span>
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">Compounding Limits</span>
                      </div>
                      <div className="p-3 bg-[#faf9f6] rounded border border-[#ece7de]">
                        <span className="block font-bold text-xs text-[#00876e]">IFRA Standard</span>
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">100% Certified</span>
                      </div>
                      <div className="p-3 bg-[#faf9f6] rounded border border-[#ece7de]">
                        <span className="block font-bold text-xs text-[#00876e]">ISO 9001 Facility</span>
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">Operational Lab</span>
                      </div>
                      <div className="p-3 bg-[#faf9f6] rounded border border-[#ece7de]">
                        <span className="block font-bold text-xs text-[#00876e]">HPLC &amp; GC-MS</span>
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">Analytical Validation</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory support & affiliations logos row */}
      <section className="bg-white border border-[#ece7de] rounded-xl p-8 space-y-6 max-w-6xl mx-auto shadow-xs">
        <div className="text-center max-w-md mx-auto space-y-1">
          <h3 className="font-serif text-lg font-bold text-[#004d44]">Professional Affiliations</h3>
          <p className="text-xs text-gray-400">All raw materials and processed perfume vectors strictly adhere to chemical guidelines.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {[
            { title: 'IFRA safety standards', icon: <UserCheck className="w-7 h-7 text-amber-600" /> },
            { title: 'Halal certified extracts', icon: <Flame className="w-7 h-7 text-emerald-600" /> },
            { title: 'Classical perfumery blenders', icon: <Beaker className="w-7 h-7 text-blue-600" /> },
            { title: 'International distribution hubs', icon: <Globe2 className="w-7 h-7 text-purple-600" /> }
          ].map((badge, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center space-y-2 group text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-[#faf9f6] border border-gray-150 flex items-center justify-center transform group-hover:scale-[1.03] duration-150">
                {badge.icon}
              </div>
              <span className="text-[10px] text-gray-500 font-mono tracking-wide group-hover:text-[#00876e] transition-colors">
                {badge.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Large premium visual decorative banner */}
      <section 
        className="relative rounded-2xl overflow-hidden min-h-[220px] flex items-center bg-cover bg-center select-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1600&q=80')` }}
      >
        <div className="absolute inset-0 bg-[#071900]/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent" />
        <div className="relative z-10 w-full text-center p-6 bg-black/15 backdrop-blur-[1px] py-12">
          <p className="text-[#faf8f4] font-serif text-lg md:text-xl font-normal tracking-wide uppercase">
            Compounded in Lancashire • Shipped to Brands Worldwide
          </p>
        </div>
      </section>

      {/* TIMELINE CHRONOLOGY HISTORIC MAP */}
      <section className="bg-white rounded-xl p-8 md:p-10 border border-[#ece7de] shadow-xs space-y-8 max-w-4xl mx-auto">
        <div className="text-center max-w-sm mx-auto">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Our Chronology</span>
          <h3 className="font-serif text-2xl text-[#004d44] font-normal mt-1">Our Journey</h3>
          <p className="text-xs text-gray-400 font-light leading-relaxed mt-1">Pioneering sensory formulations across four family generations.</p>
        </div>
        <div className="relative border-l-2 border-[#b38b4d]/30 pl-6 ml-4 space-y-8 max-w-2xl mx-auto">
          {[
            { year: '1941', title: 'The Founding Year', desc: 'Carvansons is established in Lancashire, UK, formulating high-grade raw essences for regional industrial partners.' },
            { year: '1974', title: 'Fourth-Generation Leadership', desc: 'Expansion into heavy bulk mechanical blending machinery, supporting larger commercial contracts in London and Europe.' },
            { year: '2019', title: 'Chromatographic GC-MS Depots', desc: 'Creation of modern analytics labs, giving fully compliant IFRA safety clearances to cosmetic export partners.' },
            { year: '2026', title: 'International Air Networks', desc: 'Launching dedicated logistics networks and local distributor centers in Middle East, Africa, and Southeast Asia.' }
          ].map((milestone, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#b38b4d] border-2 border-white ring-4 ring-[#b38b4d]/10 transition-transform group-hover:scale-110" />
              <span className="font-mono text-xs font-bold text-[#b38b4d] bg-[#faf9f6] border border-[#ece7de] px-2 py-0.5 rounded mr-2 inline-block">
                {milestone.year}
              </span>
              <h4 className="font-serif text-sm font-bold text-[#004d44] inline-block">{milestone.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light mt-1">{milestone.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </div>
    </motion.div>
  );
}
