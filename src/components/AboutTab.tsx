import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe2, Beaker, Eye, UserCheck, Flame, Compass, Award } from 'lucide-react';
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
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      {/* COMPACT SUBPAGE HEADER BAR */}
      <section 
        id="hero-section"
        className="relative w-full bg-cover bg-center py-20 md:py-32 overflow-hidden text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1920&q=85')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#031512]/95 via-[#031512]/80 to-transparent" />
        
        {/* Subtle decorative gold leaf trace */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#b38b4d]/20 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#b38b4d]/10 border border-[#b38b4d]/25 text-[#ebd9bd] text-[10px] font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Corporate Heritage &amp; Innovation
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5.5xl font-normal leading-tight tracking-tight text-[#faf8f5]">
            Corporate History &amp; <span className="font-serif italic text-[#ebd9bd]">Perfumer Customization.</span>
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed font-light">
            Since 1941, Proessences has synthesized traditional perfume theory with high-grade GC-MS raw materials science to secure market distinctiveness for developers.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <button 
              onClick={scrollToNext}
              className="px-6 py-2.5 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-150 cursor-pointer shadow focus:outline-none"
            >
              Discover Our Heritage
            </button>
            <button 
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#ebd9bd] transition-colors focus:outline-none select-none"
            >
              Request Custom Compound &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* MAIN ABOUT CONTENT */}
      <div id="about-content" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-24">

        {/* Company Profile Card */}
        <section className="bg-white rounded border border-[#ece7de] p-8 md:p-12 space-y-4 max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e] block">Company Profile</span>
          <h2 className="font-serif text-2xl md:text-3xl text-[#004d44] font-normal tracking-tight">
            Who We Are
          </h2>
          <p className="text-[#4e5554] leading-relaxed text-sm font-light max-w-2xl mx-auto">
            Proessences creates high-quality fragrance oils and bespoke scent solutions for global brands. Balancing traditional perfumery with advanced diagnostic science, we help clients build memorable scent profiles across home, cosmetics, personal care, and industrial sectors. 
          </p>
        </section>

        {/* Alternate split layout: Laboratory Video banner and Narrative */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Cover Illustration */}
          <div className="lg:col-span-6 bg-white border border-[#ece7de] rounded p-4 flex flex-col justify-center">
            <div className="relative w-full rounded overflow-hidden border border-gray-150 aspect-video select-none group cursor-pointer flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Analytical Chromatography Lab" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
              <div className="relative z-10 w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[9px] border-l-[#004d44] border-b-[5px] border-b-transparent ml-1" />
              </div>
              <span className="absolute bottom-3 text-[9px] uppercase font-mono tracking-widest text-white bg-black/65 px-2.5 py-1 rounded">
                Watch Laboratory Compounding
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 text-left">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#ebd9bd]">Our Legacy</span>
            <h2 className="font-serif text-2xl text-[#004d44] font-normal tracking-tight">
              A Legacy of Fragrance Artistry
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
              As a fourth-generation family business founded in Haslingden, England in 1941, our values remain rooted in organic chemistry, rigorous standards, and personalized service. We synthesize classical botanical traditions with precise diagnostic insights to protect your target market launch.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="text-xs uppercase font-bold text-[#b38b4d] hover:text-[#00876e] tracking-widest transition-colors hover:underline focus:outline-none"
              >
                Inquire Regarding Scent Customization &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* Heritage Tabs Content */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Tab selectors */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
            {HERITAGE_TABS.map((item) => (
              <button
                key={item.id}
                id={`heritage-tab-${item.id}`}
                onClick={() => setActiveHeritageTab(item.id)}
                className={`flex-grow sm:flex-1 lg:flex-grow-0 flex items-center gap-3 py-3 px-4 rounded text-left text-xs font-semibold tracking-wider uppercase transition-all duration-150 cursor-pointer ${
                  activeHeritageTab === item.id 
                    ? 'bg-[#004d44] text-white shadow-xs' 
                    : 'bg-white text-gray-500 border border-[#ece7de] hover:bg-white hover:text-[#1e2423] hover:border-gray-400'
                }`}
              >
                <span className="shrink-0">
                  {item.id === 'where' && <Globe2 className="w-3.5 h-3.5" />}
                  {item.id === 'what' && <Beaker className="w-3.5 h-3.5" />}
                  {item.id === 'approach' && <Eye className="w-3.5 h-3.5" />}
                  {item.id === 'people' && <UserCheck className="w-3.5 h-3.5" />}
                </span>
                <span>{item.title}</span>
              </button>
            ))}
          </div>

          {/* Desktop/Tablet Panel */}
          <div className="lg:col-span-8 bg-white border border-[#ece7de] rounded p-6 md:p-8 min-h-[280px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {HERITAGE_TABS.map((item) => {
                if (item.id !== activeHeritageTab) return null;
                return (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 text-left"
                  >
                    <h3 className="font-serif text-xl font-normal text-[#004d44]">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-light">
                      {item.content}
                    </p>
                    
                    {item.id === 'where' && (
                      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="relative rounded overflow-hidden border border-gray-100 bg-gray-50 p-1 shadow-xs select-none">
                          <img 
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80" 
                            alt="Global networks map" 
                            className="w-full h-auto object-cover rounded"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                        </div>
                        <div className="space-y-2">
                          <span className="block text-[10px] font-mono uppercase tracking-wider text-[#b38b4d] font-bold">Depots &amp; Offices:</span>
                          <p className="text-xs text-gray-400 leading-relaxed font-light">
                            Our Lancashire base is backed by deep storing capacities in secondary shipping nodes, which guarantees continuous raw chemical supply lines across five continents.
                          </p>
                        </div>
                      </div>
                    )}

                    {item.id === 'what' && (
                      <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                        <div className="p-3 bg-[#fafaf7] rounded border border-[#ece7de]">
                          <span className="block font-bold text-xs text-[#00876e]">2kg - Multi-tonne</span>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">Compounding Capacity</span>
                        </div>
                        <div className="p-3 bg-[#fafaf7] rounded border border-[#ece7de]">
                          <span className="block font-bold text-xs text-[#00876e]">IFRA Compliant</span>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">100% Certified bases</span>
                        </div>
                        <div className="p-3 bg-[#fafaf7] rounded border border-[#ece7de]">
                          <span className="block font-bold text-xs text-[#00876e]">ISO 9001:2015</span>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">Audited Facility</span>
                        </div>
                        <div className="p-3 bg-[#fafaf7] rounded border border-[#ece7de]">
                          <span className="block font-bold text-xs text-[#00876e]">GC-MS Validation</span>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">In-house Chromatography</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* Timeline historical narrative milestones */}
        <section className="bg-white rounded border border-[#ece7de] p-8 md:p-12 space-y-10 max-w-4xl mx-auto">
          <div className="text-center max-w-sm mx-auto space-y-1">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Four Generations</span>
            <h3 className="font-serif text-2xl text-[#004d44] font-normal">Our Journey</h3>
            <p className="text-xs text-gray-400 font-light font-sans">Engineering fragrance compounds for global consumer brands.</p>
          </div>

          <div className="relative border-l border-[#b38b4d]/30 pl-8 ml-4 sm:ml-12 space-y-10 max-w-2xl mx-auto text-left">
            {[
              { year: '1941', title: 'The Founding Year', desc: 'Proessences begins operation in Rossendale, developing high-purity natural bases for essential UK home manufacturers.' },
              { year: '1974', title: 'Bulk Compounding Modernization', desc: 'Installed heavy mechanized blending systems to process volume inquiries and secure institutional scale.' },
              { year: '2019', title: 'Chromatographic Automation Lab', desc: 'Inaugurated dedicated chromatography facilities to accelerate SDS paperwork turnarounds and export checks.' },
              { year: '2026', title: 'Global Air-freight Networks', desc: 'Launched integrated depots in Middle East, Africa, and Southeast Asia to minimize ocean shipping timelines.' }
            ].map((milestone, idx) => (
              <div key={idx} className="relative group space-y-1">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-[#b38b4d] border border-white ring-4 ring-[#b38b4d]/10 transition-transform group-hover:scale-110" />
                <span className="font-mono text-xs font-bold text-[#b38b4d] bg-[#fafaf7] border border-[#ece7de] px-2 py-0.5 rounded-sm inline-block">
                  {milestone.year}
                </span>
                <h4 className="font-serif text-sm font-semibold text-[#004d44] pl-2 inline-block">{milestone.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-light pl-2">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional partnerships & certifications */}
        <section className="bg-white border border-[#ece7de] rounded p-8 space-y-8 max-w-5xl mx-auto">
          <div className="text-center max-w-md mx-auto space-y-1">
            <h3 className="font-serif text-base font-bold text-[#004d44]">Professional Affiliations</h3>
            <p className="text-xs text-gray-450 font-sans">All raw materials and processed perfume vectors strictly adhere to chemical guidelines.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {[
              { title: 'IFRA Safety Audit', icon: <UserCheck className="w-6 h-6 text-amber-600" /> },
              { title: 'Halal Certified', icon: <Flame className="w-6 h-6 text-emerald-600" /> },
              { title: 'ISO 9001:2015 Class', icon: <Beaker className="w-6 h-6 text-blue-600" /> },
              { title: 'Global Port Storage', icon: <Globe2 className="w-6 h-6 text-purple-600" /> }
            ].map((badge, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center space-y-2 group text-center"
              >
                <div className="w-14 h-14 rounded bg-[#fafaf7] border border-[#ece7de] flex items-center justify-center transform group-hover:scale-[1.02] duration-200">
                  {badge.icon}
                </div>
                <span className="text-[10px] text-gray-500 font-mono group-hover:text-[#00876e] transition-colors">
                  {badge.title}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
}
