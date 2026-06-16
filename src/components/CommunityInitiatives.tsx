import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import { X } from 'lucide-react';

interface CommunityInitiativesProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function CommunityInitiatives({ setActiveTab }: CommunityInitiativesProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const ccipMembershipImages = [
    '/03-2024_ccip_womensmonth/womens-month (1).jpg',
    '/03-2024_ccip_womensmonth/womens-month (3).jpg',
  ];

  const dalagangFilipinaImages = [
    '/03-2024_ccip_womensmonth/womens-month (2).jpg',
    '/03-2024_ccip_womensmonth/womens-month (5).jpg',
    '/03-2024_ccip_womensmonth/womens-month (6).jpg',
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" 
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-gray-300" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Expanded" className="max-h-full max-w-full rounded shadow-2xl" />
        </motion.div>
      )}

      {/* COMPACT SUBPAGE HEADER BAR */}
      <section 
        className="relative w-full bg-cover bg-center py-20 md:py-32 overflow-hidden text-white"
        style={{ backgroundImage: `url('/03-2024_ccip_womensmonth/womens-month (3).jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#13200F]/95 via-[#1E2E1A]/85 to-transparent" />
        
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
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/95 p-8 md:p-12 rounded border border-[#ece7de] shadow-sm grid md:grid-cols-2 gap-10 items-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/ccip/ccip.jpg')] bg-cover bg-center -z-10 opacity-[0.04] blur-[3px]"></div>
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] bg-[#EFF1ED] px-2 py-1 rounded inline-block">Industry Participation</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E2B16]">Supporting the Growth of the Philippine Cosmetics Industry</h2>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">
              <strong>Proessences Inc.</strong> is a member of the Chamber of Cosmetics Industry of the Philippines (CCIP), an organization that supports the development of the local cosmetics industry and promotes the welfare of businesses and consumers.
            </p>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">
              Through its industry participation, <strong>Proessences Inc.</strong> contributes to initiatives that encourage collaboration, professional development, responsible business practices, and community engagement.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-full max-w-sm mx-auto">
            <img 
              src="/ccip/ccip.jpg" 
              alt="CCIP Industry Participation" 
              onClick={() => setSelectedImage('/ccip/ccip.jpg')}
              className="h-60 w-full object-cover rounded cursor-pointer border border-[#ece7de] hover:scale-[1.02] hover:border-[#6E968D] transition-all duration-300 shadow-sm"
            />
            <div className="bg-white p-3 rounded border border-[#ece7de] hover:scale-[1.02] hover:border-[#6E968D] transition-all duration-300 shadow-sm cursor-pointer flex items-center justify-center">
              <img 
                src="/ccip/ccip-logo.jpg" 
                alt="CCIP Logo" 
                onClick={() => setSelectedImage('/ccip/ccip-logo.jpg')}
                className="h-28 object-contain"
              />
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/95 p-8 md:p-12 rounded border border-[#ece7de] shadow-sm grid md:grid-cols-2 gap-10 items-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/03-2024_ccip_womensmonth/womens-month (2).jpg')] bg-cover bg-center -z-10 opacity-5 blur-[2px]"></div>
          <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
            {dalagangFilipinaImages.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Community Outreach ${idx + 1}`} 
                onClick={() => setSelectedImage(img)}
                className={`h-32 md:h-40 w-full object-cover rounded cursor-pointer border border-[#ece7de] hover:scale-[1.02] hover:border-[#B28A4A] transition-all duration-300 shadow-sm ${idx === 0 ? 'col-span-2 h-44 md:h-52' : ''}`}
              />
            ))}
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#b38b4d] bg-[#fdf5eb] px-2 py-1 rounded inline-block">Community Outreach</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E2B16]">Dalagang Filipina Campaign</h2>
            <h3 className="text-sm font-semibold text-[#596E4E]">Supporting Education and Youth Empowerment</h3>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">In 2024, <strong>Proessences Inc.</strong> supported the CCIP’s <strong>Dalagang Filipina</strong> campaign, a community outreach initiative focused on educating young girls about puberty, feminine hygiene, and proper self-care.</p>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">The program provided practical and age-appropriate guidance to help participants better understand the physical changes they experience.</p>
            <div className="bg-[#fdf5eb]/80 p-4 rounded text-[#8a6a3b] text-xs">
              <span className="font-bold">Focus:</span> Education, Hygiene, Youth Empowerment (2024)
            </div>
          </div>
        </motion.section>

        <div className="text-center pt-12 border-t border-[#ece7de]">
          <p className="text-lg text-[#1E2B16] font-medium mb-8">Learn more about <strong>Proessences Inc.</strong> and our commitment to meaningful industry participation.</p>
          <button 
            onClick={() => setActiveTab('contact')}
            className="px-8 py-3 bg-[#1E2B16] hover:bg-[#596E4E] text-white font-bold rounded-full uppercase tracking-wider text-xs transition-colors"
          >
            Contact Proessences
          </button>
        </div>
      </div>
    </motion.div>
  );
}
