import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import { X } from 'lucide-react';

interface AwardsRecognitionProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function AwardsRecognition({ setActiveTab }: AwardsRecognitionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/cosmobeaute-2025/booth.jpg',
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549421263-504780516145?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#13200F]/95 via-[#1E2E1A]/85 to-transparent" />
        
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
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/95 p-8 md:p-12 rounded border border-[#E6E0D6] shadow-sm grid md:grid-cols-2 gap-10 items-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549421263-504780516145?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center -z-10 opacity-10"></div>
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E2B16]">Cosmobeauté Philippines 2025</h2>
            <h3 className="text-lg font-semibold text-[#596E4E]">Most Creative Booth Award</h3>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">Proessences participated in Cosmobeauté Philippines 2025, a major business-to-business beauty trade event held from 4–6 June 2025 at the World Trade Center Metro Manila.</p>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">As part of the event’s Sustainability Booth Awards, Proessences received the <strong>Most Creative Booth Award</strong>. This recognition reflects the company’s ability to create an engaging and thoughtfully designed exhibition space while supporting the event’s focus on sustainability.</p>
            <div className="bg-[#EFF1ED]/80 p-4 rounded text-[#1E2B16] text-xs grid grid-cols-2 gap-4">
              <div><span className="font-bold block">Event:</span> Cosmobeauté 2025</div>
              <div><span className="font-bold block">Award:</span> Most Creative Booth</div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Milestone ${idx + 1}`} 
                onClick={() => setSelectedImage(img)}
                className="h-60 w-full object-cover rounded cursor-pointer border border-gray-200 hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/95 p-8 md:p-12 rounded border border-[#E6E0D6] shadow-sm flex flex-col gap-8 text-left overflow-hidden"
        >
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E2B16]">Regional cGMP Training and Workshop on Cosmetics</h2>
            <h3 className="text-lg font-semibold text-[#596E4E]">Compliance, Safety &amp; Sponsor Talks</h3>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">
              <strong>Proessences Inc.</strong> proudly joined the Regional Current Good Manufacturing Practices (cGMP) Training and Workshop on Cosmetics and Household/Urban Hazardous Substances, organized by the Mandaue Chamber of Commerce and Industry (MCCI) and the Chamber of Cosmetics Industry of the Philippines (CCIP).
            </p>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">
              Held from August 8–9, 2024 at City Sports Club, Cebu City, the two-day program gathered industry professionals to strengthen awareness on product safety, quality, compliance, and updated manufacturing standards.
            </p>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">
              As part of the event, <strong>Proessences Inc.</strong> was featured in the sponsor talks, supporting the shared goal of helping businesses elevate their manufacturing practices and deliver safe, consistent, and high-quality products to consumers.
            </p>
            <div className="pt-2">
              <a 
                href="https://www.rmanews.net/2024/08/08/mcci-ccip-holds-2-day-training-on-current-good-manufacturing-practices/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#596E4E] hover:text-[#1E2B16] font-mono tracking-wider font-semibold uppercase hover:underline transition-colors"
                id="cgmp-news-link"
              >
                Read Press Coverage 
                <span className="text-xs">↗</span>
              </a>
            </div>
            <div className="bg-[#EFF1ED]/80 p-4 rounded text-[#1E2B16] text-xs grid grid-cols-2 gap-4 max-w-md">
              <div><span className="font-bold block">Organizer:</span> MCCI &amp; CCIP</div>
              <div><span className="font-bold block">Sponsor:</span> <strong>Proessences Inc.</strong> (Speaker)</div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
            <img 
              src="/08-2024_GoodManufacturing Practice/08-2024_GoodManufacturing Practice.jpeg" 
              alt="Regional cGMP Training and Workshop" 
              className="w-full object-cover rounded shadow-md border border-[#E6E0D6] max-h-[480px]"
            />
            <img 
              src="/08-2024_GoodManufacturing Practice/4-2.jpeg" 
              alt="Regional cGMP Sponsor and Attendees" 
              className="w-full object-cover rounded shadow-md border border-[#E6E0D6] max-h-[480px]"
            />
          </div>
        </motion.section>

        <div className="text-center pt-12 border-t border-[#E6E0D6]">
          <p className="text-lg text-[#1E2B16] font-medium mb-8">Partner with a fragrance supplier committed to creativity and industry excellence.</p>
          <button 
            onClick={() => setActiveTab('contact')}
            className="px-8 py-3.5 bg-[#1E2B16] hover:bg-[#596E4E] text-white font-bold rounded-full uppercase tracking-widest text-xs transition-colors shadow-md hover:shadow-lg"
          >
            Contact Proessences
          </button>
        </div>
      </div>
    </motion.div>
  );
}
