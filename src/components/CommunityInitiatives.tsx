import React from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';

interface CommunityInitiativesProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function CommunityInitiatives({ setActiveTab }: CommunityInitiativesProps) {
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#031512]/95 via-[#031512]/80 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#b38b4d]/10 border border-[#b38b4d]/25 text-[#ebd9bd] text-[10px] font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Community Engagement
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5.5xl font-normal leading-tight tracking-tight text-[#faf8f5]">
            Community <span className="font-serif italic text-[#ebd9bd]">Initiatives.</span>
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed font-light">
            Supporting meaningful programs that encourage education, collaboration, responsible business practices, and community engagement.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 md:py-24 space-y-16">
        <section className="bg-white p-8 md:p-12 rounded border border-[#ece7de] shadow-sm">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e] bg-[#e6f4ef] px-2 py-1 rounded inline-block mb-3">Industry Participation</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#004d44] mb-4">Supporting the Growth of the Philippine Cosmetics Industry</h2>
          
          <p className="text-[#555f5e] leading-relaxed text-sm font-light">Proessences is a member of the Chamber of Cosmetics Industry of the Philippines (CCIP), an organization that supports the development of the local cosmetics industry and promotes the welfare of businesses and consumers.</p>
          <p className="text-[#555f5e] mt-4 leading-relaxed text-sm font-light">Through its industry participation, Proessences contributes to initiatives that encourage collaboration, professional development, responsible business practices, and community engagement.</p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs text-center p-4 border border-dashed border-gray-300">[CCIP-related photograph placeholder]</div>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs text-center p-4 border border-dashed border-gray-300">[Membership materials placeholder]</div>
          </div>
        </section>

        <section className="bg-white p-8 md:p-12 rounded border border-[#ece7de] shadow-sm">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#b38b4d] bg-[#fdf5eb] px-2 py-1 rounded inline-block mb-3">Community Outreach</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#004d44] mb-4">Dalagang Filipina Community Outreach Campaign</h2>
          <h3 className="text-lg font-semibold text-[#00876e] mb-6">Supporting Education and Youth Empowerment</h3>
          
          <p className="text-[#555f5e] leading-relaxed text-sm font-light">In 2024, Proessences supported the CCIP’s <strong>Dalagang Filipina</strong> campaign, a community outreach initiative focused on educating young girls about puberty, feminine hygiene, and proper self-care.</p>
          <p className="text-[#555f5e] mt-4 leading-relaxed text-sm font-light">The program provided practical and age-appropriate guidance to help participants better understand the physical changes they may experience as they grow older. Proessences joined other industry sponsors in supporting this educational initiative.</p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs text-center p-4 border border-dashed border-gray-300">[Official event photograph placeholder]</div>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs text-center p-4 border border-dashed border-gray-300">[Campaign materials placeholder]</div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-[#004d44] mb-8">More Community Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Future Outreach Program', 'Future Industry Partnership', 'Future Educational Initiative'].map((title, idx) => (
              <div key={idx} className="border border-[#e9e6df] rounded p-6 bg-white flex items-center justify-center h-40">
                <p className="text-gray-400 font-medium text-center">{title}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-12 border-t border-[#e9e6df]">
          <p className="text-lg text-[#004d44] font-medium mb-6">Learn more about Proessences and our commitment to meaningful industry participation.</p>
          <button 
            onClick={() => setActiveTab('contact')}
            className="px-8 py-3 bg-[#004d44] hover:bg-[#00876e] text-white font-bold rounded uppercase tracking-wider text-sm transition-colors"
          >
            Contact Proessences
          </button>
        </div>
      </div>
    </motion.div>
  );
}
