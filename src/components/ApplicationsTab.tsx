import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Wind, ShieldAlert, Award, Compass, Flame, Car, ChevronRight, Check, ShieldCheck } from 'lucide-react';
import { AppTab, FragranceApplication } from '../types';
import { APPLICATIONS } from '../data';

interface ApplicationsTabProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function ApplicationsTab({ setActiveTab }: ApplicationsTabProps) {
  const [selectedApplication, setSelectedApplication] = useState<FragranceApplication | null>(null);

  const scrollToNext = () => {
    const nextSection = document.getElementById('applications-content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      key="applications-tab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      {/* COMPACT SUBPAGE HEADER */}
      <section 
        id="hero-section"
        className="relative w-full bg-cover bg-center py-20 md:py-32 overflow-hidden text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1920&q=85')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#031512]/95 via-[#031512]/80 to-transparent" />
        
        {/* Subtle decorative gold leaf line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#b38b4d]/20 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#b38b4d]/10 border border-[#b38b4d]/25 text-[#ebd9bd] text-[10px] font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Scent Performance &amp; Formulations
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5.5xl font-normal leading-tight tracking-tight text-[#faf8f5]">
            Fragrance Application <span className="font-serif italic text-[#ebd9bd]">Sectors &amp; Chemistry.</span>
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed font-light">
            Designing viscosity-stable, heat-tolerant, and surfactant-safe essential oil complexes matching rigorous commercial metrics.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <button 
              onClick={scrollToNext}
              className="px-6 py-2.5 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-150 cursor-pointer shadow focus:outline-none"
            >
              Browse Applications Specs
            </button>
            <button 
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#ebd9bd] transition-colors focus:outline-none select-none"
            >
              Submit Custom Project Brief &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* APPLICATIONS LAYOUT CONTAINER */}
      <div id="applications-content" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-20">

        {/* Intro summary banner */}
        <section className="bg-white rounded border border-[#ece7de] p-8 md:p-12 space-y-4 max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e] block">Olfactive Sectors</span>
          <h2 className="font-serif text-2xl md:text-3xl text-[#004d44] font-normal tracking-tight">
            Custom Industrial Formulation for Global Brands
          </h2>
          <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light max-w-2xl mx-auto">
            From luxury raw fine cologne extractions to highly complex, surfactant-proof household concentrates, our perfumers adapt formulas to secure exact Projection, Lifespan, and Color stability.
          </p>
        </section>

        {/* Dynamic Responsive Grid of Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APPLICATIONS.map((app) => {
            const isSelected = selectedApplication?.id === app.id;
            return (
              <div 
                key={app.id} 
                id={`app-card-${app.id}`}
                className={`group rounded border transition-all duration-300 cursor-pointer bg-white flex flex-col justify-between ${
                  isSelected 
                    ? 'border-[#00876e] ring-1 ring-[#00876e]/10 shadow-sm' 
                    : 'border-[#ece7de] hover:border-[#00876e]/30'
                }`}
                onClick={() => {
                  setSelectedApplication(isSelected ? null : app);
                }}
              >
                {/* Photo Header */}
                <div className="relative h-44 bg-gray-50 overflow-hidden border-b border-gray-150 select-none">
                  {app.imageUrl && (
                    <img 
                      src={app.imageUrl} 
                      alt={app.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-[9px] font-mono tracking-widest uppercase bg-[#004d44]/80 px-2.5 py-0.5 rounded">
                      {app.id.replace('-', ' ')}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#00876e] text-white flex items-center justify-center shadow-xs">
                      {app.id === 'fine-fragrance' && <Flame className="w-3.5 h-3.5" />}
                      {app.id === 'personal-care' && <Sparkles className="w-3.5 h-3.5" />}
                      {app.id === 'household-products' && <Wind className="w-3.5 h-3.5" />}
                      {app.id === 'industrial-products' && <ShieldAlert className="w-3.5 h-3.5" />}
                      {(app.id === 'room-fragrance' || app.id === 'candles' || app.id === 'home-fragrance') && <Compass className="w-3.5 h-3.5" />}
                      {app.id === 'car-care' && <Car className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </div>

                {/* Information Area */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-semibold text-[#004d44] group-hover:text-[#00876e] transition-colors leading-tight">
                      {app.title}
                    </h3>
                    <p className="text-[#555f5e] text-xs leading-relaxed font-light line-clamp-2">
                      {app.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#ece7de]/60 flex items-center justify-between text-[10px] text-[#b38b4d] font-bold uppercase tracking-widest">
                    <span>{isSelected ? 'Collapse specs' : 'View Specifications'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Sheet Expander */}
        <AnimatePresence>
          {selectedApplication && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="bg-[#fcfbf9] border border-[#ece7de] rounded p-6 md:p-8 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#ece7de]">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#b38b4d] font-bold">Olfactive Analysis Forecast</span>
                  <h3 className="font-serif text-2xl font-normal text-[#004d44]">{selectedApplication.title}</h3>
                </div>
                <button 
                  onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="px-5 py-2 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs focus:outline-none"
                >
                  Inquire parameters &rarr;
                </button>
              </div>

              <p className="text-gray-550 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-light">
                {selectedApplication.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block font-sans">Typical Raw Scent Notes:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedApplication.commonNotes.map((note, idx) => (
                      <span key={idx} className="bg-white border border-[#ece7de] text-[#4e5554] text-xs px-2.5 py-1 rounded">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block font-sans">Formulation Requirements:</span>
                  <ul className="text-xs text-[#4e5554] space-y-1.5 ml-4 list-disc font-light">
                    {selectedApplication.technicalRequirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 bg-white p-5 rounded border border-[#ece7de] flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-xs uppercase tracking-wider text-[#b38b4d] font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#00876e]" /> Compliance &amp; Standards
                    </span>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                      {selectedApplication.safetyInsights}
                    </p>
                  </div>
                  <div className="text-[9px] text-gray-400 font-mono tracking-widest uppercase">
                    UK Certified Chemical Facility
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Extra brand specifications detailing split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-12 border-t border-[#ece7de]">
          {/* List of Sectors */}
          <div className="lg:col-span-4 bg-white border border-[#ece7de] rounded p-6">
            <span className="block text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] mb-1 font-bold">Comprehensive Portfolio</span>
            <h4 className="font-serif text-base font-bold text-[#004d44] mb-4 pb-2 border-b border-[#ece7de]">Processed Compounds List</h4>
            <ul className="space-y-3 text-left">
              {[
                'Fine Fragrances & Colognes',
                'Organic Essential Oils & Concentrates',
                'Home Fragrance & Diffusion Vectors',
                'Skin-safe Cosmetics & Beauty formulas',
                'Hypoallergenic Soaps & Detergents',
                'Stabilized Industrial Neutralizers',
                'Aerosols & Specialized Chemical Holds',
                'Aroma chemicals & Custom Aromatics'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-600 font-light">
                  <span className="w-5 h-5 rounded-full bg-[#faf8f4] text-[#00876e] flex items-center justify-center flex-shrink-0 border border-[#ece7de]">
                    <Check className="w-3 h-3 stroke-[3px]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guide Highlight Column */}
          <div className="lg:col-span-8 bg-white border border-[#ece7de] rounded p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-xl md:text-2xl text-[#004d44] font-normal tracking-tight">
                Aligning Scent Performance with Brand Metrics
              </h3>
              <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light">
                When adding scents to consumer ranges, formulation compatibility with the active delivery carrier is paramount. An incorrect compound can trigger separation, clouding, or rapid evaporation. Our blenders crosscheck all components against physical parameters to guarantee absolute compound stability.
              </p>
            </div>

            <div className="bg-[#faf8f4] border border-[#ece7de] rounded p-4 text-center">
              <p 
                className="text-[#b38b4d] font-serif text-xs font-bold hover:underline cursor-pointer" 
                onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              >
                Read our essential guide to olfactory chemistry &amp; standards &copy;
              </p>
            </div>

            <div className="space-y-4 pt-2 text-left">
              <p className="text-gray-400 text-xs leading-relaxed font-light italic">
                We advise and handle CLP label registrations, MSDS declarations, and compliance certificates for exporters globally.
              </p>
              <div>
                <button 
                  onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="px-6 py-2.5 bg-[#004d44] hover:bg-[#00876e] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-xs focus:outline-none"
                >
                  Contact Our Technical Team
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
