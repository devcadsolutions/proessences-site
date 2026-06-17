import React from 'react';
import SubpageHeader from './SubpageHeader';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import { Sparkles, Wind, Droplets, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
  hideHeader?: boolean;
}

export default function HomeCareTab({ setActiveTab, hideHeader = false }: TabProps) {
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
          title="Home Care &amp; Cleaning"
          subtitle="Fragrances."
          backgroundImage="/website-assets/home-products.jpg"
        />
      )}

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-16">
        
        {/* Intro Grid section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] block">
              Scent Association
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1E2B16] font-normal tracking-tight leading-tight">
              Fragrance for Home Care &amp; Cleaning Products
            </h2>
            <p className="text-[#4e5554] text-sm md:text-base leading-relaxed font-light">
              The demand for Fragrance for Home Care Products has grown dramatically over the last few years. Scent is rapidly becoming one of the most critical factors in the purchasing habits of consumers in the home care and cleaning product market. Cleanliness and the fragrance associated with cleanliness are inextricably linked.
            </p>
            <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light">
              Consumer requirements are mostly driven by the effectiveness of the product to deliver its expected benefit. However, being clean and smelling clean are now seen as equally important when purchasing the right cleaning, laundry, and sanitising products.
            </p>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl p-8 shadow-md overflow-hidden flex flex-col justify-between h-full min-h-[300px] text-white group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: `url('/website-assets/home-products.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-[#13200F]/65" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#ebd9bd] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ebd9bd]" /> REVENUE OUTLOOK
              </span>
              <blockquote className="font-serif text-white text-base md:text-lg leading-relaxed font-normal italic">
                "The Fragrance for Home Care and Laundry Care market is expected to grow annually by 3.40% in the next 4 years. Fragrance is one of the key factors driving brand loyalty and consumer decision making."
              </blockquote>
            </div>
            <div className="pt-4 border-t border-white/20 relative z-10 flex justify-between items-center text-[10px] text-white/70 font-mono tracking-widest uppercase">
              <span>Home Care Insights</span>
              <span>4-Year Forecast</span>
            </div>
          </div>
        </section>

        {/* Detailed subsections */}
        <section className="space-y-8">
          <div className="max-w-2xl mx-auto text-center" id="home-care-header">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block mb-1">
              FUNCTIONAL DESIGN
            </span>
            <h3 className="font-serif text-2xl text-[#1E2B16] tracking-tight">
              Within Scented Home Care &amp; Active Formulations
            </h3>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light mt-2">
              Within this sector lies an abundance of cleaning products, materials, and complex chemical bases. We have broken some of these down into the key areas our master perfumers balance and supply:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="home-care-air-fresheners">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Wind className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Fragrance for Air Fresheners</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                An area of massive growth, taking shapes such as scented disks, gels, liquids, non-aerosol sprays, and chemical neutralizers. These odour-counteracting formulas breathe freshness into stuffy or closed environments, moving from sweet gourmands to deeper, luxurious musks.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="home-care-candles">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Candles &amp; Melt Diffusion</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Creating room ambiance affects mood, wellbeing, and focus. Growth is heavily driven by a holistic focus on mental health, spanning candles, wax melts, reed diffusers, and incense designed to offer calm in stressful home-work environments.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="home-care-fabrics">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Droplets className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Fabric, Surface &amp; Carpet Care</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Fabric cleaning brands rely on olfactive verification. Cleanliness is depicted as a physical scent—consumers expect freshly washed laundry or scrubbed carpets to emit an comforting olfactory signal to differentiate themselves.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="home-care-functional">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Functional Masking Chemicals</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Cleaning products serve deep functional roles in dust or germ removal. The scent left behind acts as an olfactory confirmation of completed labor, instilling an enduring sense of achievement and encouraging long-term brand loyalty.
              </p>
            </div>
          </div>
        </section>

        {/* Support Grid list vs contact */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8">
          
          <div className="lg:col-span-5 bg-white border border-[#ece7de] rounded-2xl p-8 flex flex-col justify-between" id="we-create-home-care">
            <div>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] mb-1 font-bold">
                APPLICATION SECTORS
              </span>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16] pb-2 border-b border-[#ece7de] mb-4">
                We create Fragrance for:
              </h4>

              <ul className="space-y-3.5">
                {[
                  'Fabric Care & Laundry Detergents',
                  'Dishwashing Liquids & Concentrates',
                  'Carpet & Upholstery Care Systems',
                  'Kitchen & Surface Cleaners',
                  'Industrial & Household Sanitizers',
                  'Scented Tissues and Paper Products'
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

            <div className="mt-6 pt-4 border-t border-[#ece7de] text-[10px] text-[#8b7a67] font-mono uppercase tracking-wider">
              STABILIZED SURFACTANT MATRIXES
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FCFBF8] border border-[#ece7de] rounded-2xl p-8 md:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] font-bold block">
                GLOBAL COMPLIANCE
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1E2B16] tracking-tight">
                Connect Cleanliness with Sensory Ambience
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                Consult with our helpful and experienced team about selecting the right premium fragrance representing your cleaning products. We help establish brand identities for both household brands and niche regional startup businesses.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                All finished fragrance products actively follow the strict international <strong>IFRA</strong> Code of Practice, protecting users through secure manufacturing, allergen labelling, and premium safety standards.
              </p>
            </div>

            <button
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="w-fit px-6 py-2.5 bg-[#1E2B16] hover:bg-[#596E4E] text-[#FCFBF8] text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 transition"
            >
              Request home care samples <ArrowRight className="w-4 h-4 text-[#ebd9bd]" />
            </button>
          </div>

        </section>

      </div>
    </motion.div>
  );
}
