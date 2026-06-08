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
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1920&q=85')` }}
        >
          {/* Subtle luxurious custom dark green gradient/overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#021814]/85 to-[#004d44]/50" />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left flex flex-col justify-center h-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#b38b4d]/20 border border-[#b38b4d]/30 text-[#f2ede4] text-xs font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Olfactive Sectors &amp; Standards
            </div>
            
            <h1 className="font-serif text-3.5xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-[#faf8f4]">
              Industrial <span className="font-serif italic text-[#ebd9bd]">Fragrance Applications</span> &amp; Compounding.
            </h1>

            <p className="text-gray-200 text-sm md:text-base max-w-xl leading-relaxed font-light">
              Designing temperature-stable and surfactant-proof fragrance bases for fine perfumes, cosmetic matrices, household soaps, and industrial odor masking.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-5">
              <button 
                onClick={scrollToNext}
                className="px-7 py-3 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-semibold text-xs transition-all uppercase tracking-wider shadow cursor-pointer focus:outline-none"
              >
                Browse Our Applications
              </button>
              <button 
                onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#ebd9bd] transition-colors focus:outline-none"
              >
                Submit Compound Brief &rarr;
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
              Our Sectors
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
      <div id="applications-content" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20 lg:space-y-28">

      {/* Scent Applications Intro Copy */}
      <section className="bg-white rounded-xl p-8 border border-[#ece7de] shadow-xs max-w-4xl mx-auto text-center space-y-4">
        <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">Olfactive Sectors</span>
        <h2 className="font-serif text-2xl md:text-3xl text-[#004d44] font-normal tracking-tight">
          Fragrance Compound Engineering for All Applications
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
          Our fragrance bases can be used in a variety of different commercial applications. Ranging from highly technical &amp; functional surfactant-proof solutions to pure indulgent and sophisticated luxury profiles, the Carvansons team can create any fragrance for any product format.
        </p>
      </section>

      {/* Bento Grid of 6 Applications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {APPLICATIONS.map((app) => {
          const isSelected = selectedApplication?.id === app.id;
          return (
            <div 
              key={app.id} 
              id={`app-card-${app.id}`}
              className={`group rounded-xl overflow-hidden border transition-all cursor-pointer bg-white flex flex-col justify-between ${
                isSelected 
                  ? 'border-[#00876e] ring-2 ring-[#00876e]/10 shadow-sm' 
                  : 'border-[#ece7de] hover:border-[#00876e]/30 hover:shadow-xs shadow-xs'
              }`}
              onClick={() => {
                setSelectedApplication(isSelected ? null : app);
              }}
            >
              {/* Cover Image Block */}
              <div className="relative h-44 bg-gray-100 overflow-hidden border-b border-[#ece7de] select-none">
                {app.imageUrl && (
                  <img 
                    src={app.imageUrl} 
                    alt={app.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-[9px] font-mono tracking-widest uppercase bg-[#004d44]/75 px-2 py-0.5 rounded">
                    {app.id}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#00876e] text-white flex items-center justify-center shadow">
                    {app.id === 'fine-fragrance' && <Flame className="w-3.5 h-3.5" />}
                    {app.id === 'personal-care' && <Sparkles className="w-3.5 h-3.5" />}
                    {app.id === 'household-products' && <Wind className="w-3.5 h-3.5" />}
                    {app.id === 'industrial-products' && <ShieldAlert className="w-3.5 h-3.5" />}
                    {app.id === 'room-fragrance' || app.id === 'candles' ? <Compass className="w-3.5 h-3.5" /> : null}
                    {app.id === 'car-care' && <Car className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>

              {/* Content block */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="font-serif text-base font-bold text-[#004d44] group-hover:text-[#00876e] transition-colors leading-tight">
                    {app.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light line-clamp-2">
                    {app.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-[#b38b4d] font-bold uppercase tracking-wider">
                  <span>{isSelected ? 'Click to collapse specs' : 'View Chemical Specs'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Application Spec Panel */}
      <AnimatePresence>
        {selectedApplication && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#fcfbf9] border border-[#ece7de] rounded-xl p-6 md:p-8 overflow-hidden space-y-6 shadow-inner"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#ece7de]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#b38b4d]">Olfactive Analytical Analysis</span>
                <h3 className="font-serif text-2xl font-bold text-[#004d44]">{selectedApplication.title}</h3>
              </div>
              <button 
                onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="px-5 py-2.5 bg-[#004d44] hover:bg-[#00876e] text-white text-xs font-bold rounded-full uppercase tracking-wider transition-colors cursor-pointer shadow focus:outline-none"
              >
                Enquire regarding {selectedApplication.title}
              </button>
            </div>

            <p className="text-[#4e5554] text-sm leading-relaxed whitespace-pre-line font-light">
              {selectedApplication.longDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Typical Raw Scent Notes:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedApplication.commonNotes.map((note, idx) => (
                    <span key={idx} className="bg-white border border-[#ece7de] text-[#4e5554] text-xs px-2.5 py-1 rounded">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Formulation Requirements:</span>
                <ul className="text-xs text-[#4e5554] space-y-1.5 ml-4 list-disc font-light">
                  {selectedApplication.technicalRequirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 bg-white p-5 rounded border border-[#ece7de] flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-xs uppercase tracking-wider text-[#b38b4d] font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#00876e]" /> Regulatory &amp; IFRA Support
                  </span>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    {selectedApplication.safetyInsights}
                  </p>
                </div>
                <div className="text-[9px] text-gray-400 font-mono tracking-wider">
                  Certified Lancashire Chemical Lab
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brand Copy details layout (Formulation guide split) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8 border-t border-[#ece7de]">
        {/* Left side: Checklist of Sectors */}
        <div className="lg:col-span-4 bg-[#faf9f6]/80 border border-[#ece7de] rounded-xl p-6 shadow-xs">
          <span className="block text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] mb-2 font-bold">Olfactive Portfolio</span>
          <h4 className="font-serif text-base font-bold text-[#004d44] mb-4 pb-2 border-b border-[#ece7de]">Manufacturer Specifications</h4>
          <ul className="space-y-3">
            {[
              'Fine fragrances & Perfumes',
              'Home fragrance applications',
              'Personal care and Beauty products',
              'Household cleaning concentrates',
              'Industrial compounds',
              'Automotive care & air fresheners',
              'Aroma chemicals & essentials guide',
              'Hypoallergenic Pet products'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs text-gray-600 font-light">
                <span className="w-5 h-5 rounded-full bg-white text-[#00876e] flex items-center justify-center flex-shrink-0 border border-[#ebd9bd]">
                  <Check className="w-3 h-3 stroke-[3px]" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Guides and compliance instruction card */}
        <div className="lg:col-span-8 bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h3 className="font-serif text-xl md:text-2xl text-[#004d44] font-normal tracking-tight">
              Finding the Right Compounds for Your Brand Range
            </h3>
            <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light">
              When starting to look at fragrancing your product, there are a wide range of things to consider. One of the most crucial is finding the right molecular compounds suitable for your specific wax, alcohol, or water-base carrier. We consult closely with IFRA to ensure each manufactured compound conforms perfectly to destination standards.
            </p>
          </div>

          {/* Guide Highlight block */}
          <div className="bg-[#faf9f6] border border-[#ece7de] rounded p-4 text-center">
            <p className="text-[#b38b4d] font-serif text-xs font-bold hover:underline cursor-pointer" onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'instant' }); }}>
              Take a look at our Guide to Essential Oils and Fragrance Oils &rarr;
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <p className="text-gray-400 text-xs leading-relaxed font-light italic">
              We help customers understand the complex and ever-changing chemical guidelines for the beauty and industrial sectors, advising on the right formulation for your entire brand lineup.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="px-5 py-2.5 bg-[#004d44] hover:bg-[#00876e] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow focus:outline-none"
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
