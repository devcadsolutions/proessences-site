import React from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import SubpageHeader from './SubpageHeader';
import { Compass, Sparkles, Wind, Flame, Check, ArrowRight } from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
  hideHeader?: boolean;
}

export default function RoomCandlesTab({ setActiveTab, hideHeader = false }: TabProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      {!hideHeader && (
        <SubpageHeader
          category="Fragrance Applications"
          title="Room &amp; Candles Fragrances"
          subtitle="Ambient Air."
          backgroundImage="/website-assets/room-fragrance.jpg"
        />
      )}

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-16">
        
        {/* Intro Grid section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] block">
              Atmospheric Design
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1E2B16] font-normal tracking-tight leading-tight">
              Aromatherapy &amp; Evocative Ambiance
            </h2>
            <p className="text-[#4e5554] text-sm md:text-base leading-relaxed font-light">
              Room and Candle Fragrances are big news, and fragrance oils for these aromatic products have become far more diverse over the years. Air fresheners are entirely about eliminating unpleasant odours in a room and changing the ambient atmosphere. For candles, it is all about wellbeing, therapeutic relaxation, and mood setting.
            </p>
            <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light">
              The ambience created in a room can have an enormous impact on your mood, your productiveness, and your ability to focus. This sector has seen massive growth over the last few years, especially with the boom of work-from-home models and home leisure routines.
            </p>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl p-8 shadow-md overflow-hidden flex flex-col justify-between h-full min-h-[300px] text-white group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: `url('/website-assets/room-fragrance.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-[#13200F]/65" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#ebd9bd] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#ebd9bd]" /> MARKET GROWTH
              </span>
              <blockquote className="font-serif text-white text-base md:text-lg leading-relaxed font-normal italic">
                "The global Air Freshener and Room Fragrance and Candles market is expected to grow by 3.5% annually between 2018 to 2025."
              </blockquote>
            </div>
            <div className="pt-4 border-t border-white/20 relative z-10 flex justify-between items-center text-[10px] text-white/70 font-mono tracking-widest uppercase">
              <span>CAGR Outlook</span>
              <span>2018 - 2025</span>
            </div>
          </div>
        </section>

        {/* Detailed Scent Classes Description */}
        <section className="space-y-8">
          <div className="max-w-2xl mx-auto text-center" id="room-candles-classes-heading">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block mb-1">
              ATMOSPHERIC VECTORS
            </span>
            <h3 className="font-serif text-2xl text-[#1E2B16] font-normal tracking-tight">
              Authentic Scent Signatures &amp; Evaporation holds
            </h3>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light mt-2">
              Our candle and room creations are balanced to survive high structural heat and produce maximum throw under both hot and cold conditions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="room-candles-candles">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Candle Fragrance Oils</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Candle oil must tolerate structural wax temperatures up to 85°C during pouring without breaking down. Our oils guarantee great cold throw (how the candle smells unlit) and exceptional hot throw (lit projection), using deep vanillin-free or discoloration-safe components.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="room-candles-air-fresheners">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Wind className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Air Fresheners &amp; Odour-Neutralizers</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Air fresheners target bad odours directly using advanced odor-neutralizing tech. Spanning liquids, aerosols, plug-ins, hanging disks, and powders, we supply a wide scent library—including tropical berries, marine notes, clean linen, and sweet gourmands.
              </p>
            </div>
          </div>
        </section>

        {/* Support Grid List vs CTA Info */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8">
          
          <div className="lg:col-span-12 xl:col-span-5 bg-white border border-[#ece7de] rounded-2xl p-8 flex flex-col justify-between" id="we-create-box-room">
            <div>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] mb-1 font-bold">
                COMPREHENSIVE SUPPORT
              </span>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16] pb-2 border-b border-[#ece7de] mb-4">
                We Create Fragrances For:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-3.5">
                  {[
                    'Soy, Paraffin & Coconut Candles',
                    'Wax Melts & Scented Tarts',
                    'Aromatic Reed Diffusers',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-gray-600 font-light">
                      <span className="w-5 h-5 rounded-full bg-[#faf8f4] text-[#596E4E] flex items-center justify-center flex-shrink-0 border border-[#ece7de]">
                        <Check className="w-3 h-3 stroke-[3px]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3.5">
                  {[
                    'Electric & Gel Air Fresheners',
                    'Non-aerosol Ambient Sprays',
                    'Active Odour-Neutralising Powders',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-gray-600 font-light">
                      <span className="w-5 h-5 rounded-full bg-[#faf8f4] text-[#596E4E] flex items-center justify-center flex-shrink-0 border border-[#ece7de]">
                        <Check className="w-3 h-3 stroke-[3px]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ece7de] text-[10px] text-[#8b7a67] font-mono uppercase tracking-wider">
              FULLY THERMAL &amp; SOLID BASE STABLE
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-7 bg-[#FCFBF8] border border-[#ece7de] rounded-2xl p-8 md:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] font-bold block">
                TECHNICAL ASSISTANCE
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1E2B16] tracking-tight">
                Enhance Your Candle &amp; Diffuser Line
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                Consult with our experienced, helpful team inside Quezon City about matching the perfect, high-stability fragrance compounds designed for your room air products. We help establish unique brand propositions for both corporate names and local candle startup creators.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                All ingredients conform to European master safety regulations and follow the strict international <strong>IFRA</strong> Code of Practice for ambient air and skin contact.
              </p>
            </div>

            <button
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="w-fit px-6 py-2.5 bg-[#1E2B16] hover:bg-[#596E4E] text-[#FCFBF8] text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 transition"
            >
              Request room &amp; candle samples <ArrowRight className="w-4 h-4 text-[#ebd9bd]" />
            </button>
          </div>

        </section>

      </div>
    </motion.div>
  );
}
