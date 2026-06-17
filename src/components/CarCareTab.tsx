import React from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import SubpageHeader from './SubpageHeader';
import { Car, Fuel, Sparkles, Shield, Compass, Calendar, ArrowRight, Check } from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
  hideHeader?: boolean;
}

export default function CarCareTab({ setActiveTab, hideHeader = false }: TabProps) {
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
          title="Car Care Fragrances"
          subtitle="Automotive Sectors."
          backgroundImage="/website-assets/car-products.jpg"
        />
      )}

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-16">
        
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] block">
              Market Expansion
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1E2B16] font-normal tracking-tight leading-tight">
              Premium Scent Systems for the Detailing & Care Industries
            </h2>
            <p className="text-[#4e5554] text-sm md:text-base leading-relaxed font-light">
              Growing car ownership, an increasing number of luxury vehicles purchased, and increased consumer spending on maintaining these valuable assets have fueled significant growth in high-end car cleaning, protection, and maintenance products.
            </p>
            <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light">
              We create specialized fragrance oils engineered to survive complex chemical bases and high thermal stresses, providing lasting olfactory reminders of cleanliness and prestige.
            </p>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl p-8 shadow-md overflow-hidden flex flex-col justify-between h-full min-h-[300px] text-white group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: `url('/website-assets/car-products.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-[#13200F]/65" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#ebd9bd] flex items-center gap-2">
                <Car className="w-4 h-4 text-[#ebd9bd]" /> SECTOR PROJECTIONS
              </span>
              <blockquote className="font-serif text-white text-base md:text-lg leading-relaxed font-normal italic">
                "The global car care products market was valued at USD 10.2 billion in 2021 and is expected to expand at a compound annual growth rate of 3.6% from 2022 to 2030."
              </blockquote>
            </div>
            <div className="pt-4 border-t border-white/20 relative z-10 flex justify-between items-center text-[10px] text-white/70 font-mono tracking-widest uppercase">
              <span>Grandview Research</span>
              <span>2022 - 2030</span>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] font-bold block mb-1">
              OLFATIVE SPECIALIZATION
            </span>
            <h3 className="font-serif text-2xl text-[#1E2B16] font-normal tracking-tight">
              Aroma Engineering by Application Category
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="card-waxes-shampoos">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Fuel className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Car Waxes &amp; Shampoos</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                This sector has seen massive growth over the last few years as owners look to extend the life of their investment. Although serving a highly functional scrubbing role, the brand value is elevated through enticing, luxurious top-notes.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="card-new-car">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">The "New Car Smell"</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Traditionally relatively simplistic, vehicle scent demands are changing. The authentic New Car Smell—evoking fresh upholstery, plastics, and precision assembly—is a high-demand premium request simulating factory-fresh status.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="card-air-fresheners">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Ambient Air Fresheners</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Vehicle air fresheners utilize scented disks, powders, liquid sprays, and vents. Odour-neutralists targets specific cabins, while premium colognes are integrated for executive-class ambient release.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Grid of Compounds & Core Chem */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-[#1E2B16] text-white rounded-2xl p-8 md:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#ebd9bd] font-bold block">
                ALIGNED PERFORMANCE
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight">
                Chemical Masking &amp; Brand Exclusivity
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
                Highly functional solvents and chemical detergents often leaves harsh base scents that must be masked. Talk to our technical team in the Philippines to discuss how to successfully cover functional chemical smells without losing detergent capacity.
              </p>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
                Our raw compounds are developed alongside <strong>Carvansons UK</strong>, satisfying strict IFRA guidelines and VOC (Volatile Organic Compounds) ratings inside closed cabins.
              </p>
            </div>
            
            <button
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="w-fit px-6 py-2.5 bg-[#b38b4d] hover:bg-[#c29b5d] text-white text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 transition"
            >
              Consult detaling specialists <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#ece7de] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] mb-1 font-bold">
                PROESSSENCES AUTO RANGE
              </span>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16] pb-2 border-b border-[#ece7de] mb-4">
                Automotive Compound Support
              </h4>

              <ul className="space-y-3.5">
                {[
                  'Car Shampoos & Foam Cleaners',
                  'Vehicle Waxes, Sealants & Polishes',
                  'Hanging Cabin Diffusers & Card Melts',
                  'Dashboard Sprays & Leather Enhancers',
                  'Tire & Wheel Silicate Formulations',
                  'Fabric, Carpet & Leather Protectors',
                  'Screenwash and De-icers'
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
              IFRA COMPLIANT &amp; ALLERGEN ASSESSED
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
