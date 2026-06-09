import React from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';

interface AwardsRecognitionProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function AwardsRecognition({ setActiveTab }: AwardsRecognitionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      {/* COMPACT SUBPAGE HEADER BAR */}
      <section 
        className="relative w-full bg-cover bg-center py-20 md:py-32 overflow-hidden text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549421263-504780516145?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#031512]/95 via-[#031512]/80 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#b38b4d]/10 border border-[#b38b4d]/25 text-[#ebd9bd] text-[10px] font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Industry Prestige
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5.5xl font-normal leading-tight tracking-tight text-[#faf8f5]">
            Awards & <span className="font-serif italic text-[#ebd9bd]">Recognition.</span>
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed font-light">
            Celebrating milestones that reflect our commitment to creativity, thoughtful design, and meaningful industry participation.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 md:py-24 space-y-16">
        <section className="bg-white p-8 md:p-12 rounded border border-[#ece7de] shadow-sm">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#004d44] mb-4">Cosmobeauté Philippines 2025</h2>
          <h3 className="text-lg font-semibold text-[#00876e] mb-6">Proessences Receives the Most Creative Booth Award</h3>
          
          <p className="text-[#555f5e] mb-6 leading-relaxed text-sm font-light">Proessences participated in Cosmobeauté Philippines 2025, a major business-to-business beauty trade event held from 4–6 June 2025 at the World Trade Center Metro Manila.</p>
          <p className="text-[#555f5e] mb-6 leading-relaxed text-sm font-light">The event brought together approximately 6,700 attendees and 155 exhibiting brands and companies. It provided a platform for suppliers, manufacturers, product developers, and industry professionals to discover new products, exchange ideas, and build business connections.</p>
          <p className="text-[#555f5e] mb-8 leading-relaxed text-sm font-light">As part of the event’s Sustainability Booth Awards, Proessences received the <strong>Most Creative Booth Award</strong>. This recognition reflects the company’s ability to create an engaging and thoughtfully designed exhibition space while supporting the event’s focus on sustainability.</p>

          <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f3f0e9] p-6 rounded-md">
            <div><dt className="text-[10px] uppercase font-mono font-bold text-[#004d44] tracking-widest mb-1">Event</dt><dd className="text-sm">Cosmobeauté Philippines 2025</dd></div>
            <div><dt className="text-[10px] uppercase font-mono font-bold text-[#004d44] tracking-widest mb-1">Date</dt><dd className="text-sm">4–6 June 2025</dd></div>
            <div><dt className="text-[10px] uppercase font-mono font-bold text-[#004d44] tracking-widest mb-1">Venue</dt><dd className="text-sm">World Trade Center Metro Manila</dd></div>
            <div><dt className="text-[10px] uppercase font-mono font-bold text-[#004d44] tracking-widest mb-1">Recognition</dt><dd className="text-sm">Most Creative Booth Award</dd></div>
          </dl>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs text-center p-4 border border-dashed border-gray-300">[Official booth photograph placeholder]</div>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs text-center p-4 border border-dashed border-gray-300">[Award presentation photograph placeholder]</div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-[#004d44] mb-8">More Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Future Industry Award', 'Future Recognition', 'Future Event Achievement'].map((title, idx) => (
              <div key={idx} className="border border-[#ece7de] rounded p-8 bg-white flex items-center justify-center h-40">
                <p className="text-gray-400 font-medium text-center text-sm">{title}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-12 border-t border-[#ece7de]">
          <p className="text-lg text-[#004d44] font-medium mb-8">Partner with a fragrance supplier committed to creativity and industry excellence.</p>
          <button 
            onClick={() => setActiveTab('contact')}
            className="px-8 py-3 bg-[#004d44] hover:bg-[#00876e] text-white font-bold rounded-full uppercase tracking-wider text-xs transition-colors"
          >
            Contact Proessences
          </button>
        </div>
      </div>
    </motion.div>
  );
}
