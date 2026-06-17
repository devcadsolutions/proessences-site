import React from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import SubpageHeader from './SubpageHeader';
import { Flame, Sparkles, Cherry, Shield, Compass, ArrowRight, Check, Droplet } from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
  hideHeader?: boolean;
}

export default function FineFragranceTab({ setActiveTab, hideHeader = false }: TabProps) {
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
          title="Perfume & Fine Fragrance"
          subtitle="Artistic Creation."
          backgroundImage="/website-assets/fine-fragrance.jpg"
        />
      )}

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-16">
        
        {/* Intro Grid section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] block">
              Market Acceleration
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1E2B16] font-normal tracking-tight leading-tight">
              Bespoke Perfume Oil &amp; Elixir Design
            </h2>
            <p className="text-[#4e5554] text-sm md:text-base leading-relaxed font-light">
              The Perfume and Fine Fragrance market is driven by the creation and development of exciting, unique, and new fragrances to attract different consumer groups across the world. A successful brand identity for a final product hinges upon securing the absolute perfect, long-lasting scent for your intended consumer.
            </p>
            <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light">
              Fine Fragrances are often a complex myriad of different fragrance notes that evoke powerful memories and emotions. Finding the right fragrance can help you exude confidence and bring balance and control to an often busy, stressful world.
            </p>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl p-8 shadow-md overflow-hidden flex flex-col justify-between h-full min-h-[300px] text-white group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: `url('/website-assets/fine-fragrance.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-[#13200F]/65" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#ebd9bd] flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#ebd9bd]" /> VALUE PROJECTIONS
              </span>
              <blockquote className="font-serif text-white text-base md:text-lg leading-relaxed font-normal italic">
                "The Worldwide Perfume and Fine Fragrance market value is expected to increase by 16% annually between 2020 to 2026 driven by changing fashion trends."
              </blockquote>
            </div>
            <div className="pt-4 border-t border-white/20 relative z-10 flex justify-between items-center text-[10px] text-white/70 font-mono tracking-widest uppercase">
              <span>Industry Forecasts</span>
              <span>2020 - 2026</span>
            </div>
          </div>
        </section>

        {/* CURATED FINE FRAGRANCE GALLERY */}
        <section className="space-y-8 pt-4">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#B28A4A] bg-[#fbf5eb] px-2.5 py-1 rounded inline-block">
              Visual Exhibition
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1E2B16] tracking-tight">
              Curated Aromatic Inspirations
            </h3>
            <p className="text-[#4e5554] text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
              Explore Carvansons' master compounding laboratory, raw oil reserves, and finished haute-perfumery collections. Every vessel represents decades of olfactory expertise and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bespoke Perfumery",
                subtitle: "Haute Formulations",
                desc: "High-sillage fragrance compositions developed with custom ingredients and advanced chromatography.",
                image: "/website-assets/fine-fragrance (1).jpg",
                tag: "Creation"
              },
              {
                title: "Raw Olfactory Oils",
                subtitle: "Artisanal Concentrates",
                desc: "Premium, pure grade concentrates optimized for longevity, skin affinity, and complex note layering.",
                image: "/website-assets/fine-fragrance (2).jpg",
                tag: "Reserve"
              },
              {
                title: "The Perfumer's Table",
                subtitle: "Sensory Compounding",
                desc: "Where state-of-the-art laboratory sciences meet high-end classical French perfumery concepts.",
                image: "/website-assets/fine-fragrance (3).jpg",
                tag: "Precision"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#ece7de] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden bg-[#faf8f4]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#1E2B16] text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-xs z-10">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow space-y-2">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#B28A4A] font-semibold block">
                      {item.subtitle}
                    </span>
                    <h4 className="font-serif text-lg font-normal text-[#1E2B16]">
                      {item.title}
                    </h4>
                    <p className="text-gray-550 text-xs leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Scent Classes Description */}
        <section className="space-y-6 max-w-4xl mx-auto text-center py-6">
          <h3 className="font-serif text-2xl md:text-3xl text-[#1E2B16]">Fine Fragrance Creation &amp; Lighter Vectors</h3>
          <p className="text-gray-550 text-xs sm:text-sm leading-relaxed font-light">
            The rising popularity of lighter-scented products, especially among younger consumers, and the availability of affordable body splashes, body mists, and body sprays are expected to boost the sales of perfume and fragrance products. Our premium fine fragrance formulations encompass notes such as delicate florals, marine, fresh accords, sweet gourmands, rich leathers, and smooth musks.
          </p>
        </section>

        {/* Dynamic Scent Accord Families Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white border border-[#ece7de] rounded-2xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="accord-family-floral">
            <span className="text-[9px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block">
              CLASSIC ACCORD
            </span>
            <h4 className="font-serif text-xl font-bold text-[#1E2B16] flex items-center gap-2">
              <Sparkles className="w-4 w-4 text-[#B28A4A]" /> Floral Fragrances
            </h4>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
              Floral fragrances have long been used in the creation of perfumes, utilizing a wide range of both strong and subtle accords. Historically built around jasmine, lavender, and rose, modern iterations now include fresh peony, lily, daisy, poppy, iris, orange blossom, and tuberose. These playful notes lift emotions and bloom as the scent develops.
            </p>
          </div>

          <div className="bg-white border border-[#ece7de] rounded-2xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="accord-family-citrus">
            <span className="text-[9px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block">
              ZESTY ACCORD
            </span>
            <h4 className="font-serif text-xl font-bold text-[#1E2B16] flex items-center gap-2">
              <Droplet className="w-4 w-4 text-[#B28A4A]" /> Citrus Fragrances
            </h4>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
              Citrus accords are synonymous with colognes and perfumes that exude freshness, energy, and zest. Popular citrus notes include Sicilian lemon, grapefruit, lime, elemi, bergamot, lemongrass, verbena, and mandarin. These zesty, zingy notes add life when blended with deeper woods or musks to create an elegant, sparkling quality.
            </p>
          </div>

          <div className="bg-white border border-[#ece7de] rounded-2xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="accord-family-woody">
            <span className="text-[9px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block">
              EARTHY ACCORD
            </span>
            <h4 className="font-serif text-xl font-bold text-[#1E2B16] flex items-center gap-2">
              <Compass className="w-4 w-4 text-[#B28A4A]" /> Woody Fragrances
            </h4>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
              Wood fragrance notes are extremely versatile, ranging from creamy white woods to earthy, rugged agar. Suitable for male, female, and unisex perfumes, wood notes include sandalwood, cedar, birch, and agar (oud). They are often paired with warm ambers and subtle musks that flourish inside the final dry-down of a perfume.
            </p>
          </div>

          <div className="bg-white border border-[#ece7de] rounded-2xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="accord-family-leather">
            <span className="text-[9px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block">
              ANCIENT ACCORD
            </span>
            <h4 className="font-serif text-xl font-bold text-[#1E2B16] flex items-center gap-2">
              <Flame className="w-4 w-4 text-[#B28A4A]" /> Leather Fragrances
            </h4>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
              Leather fragrance notes have been around for thousands of years and are constantly being reinvented. Ranging from smoky and tobacco scents to lighter floral accents, leather can assume a delicate, gentle feminine guise or a deeper, dominating masculine presence depending on the compounding chemicals.
            </p>
          </div>

        </section>

        {/* We Create List vs CTA Info */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8">
          
          <div className="lg:col-span-5 bg-white border border-[#ece7de] rounded-2xl p-8 flex flex-col justify-between" id="we-create-box">
            <div>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] mb-1 font-bold">
                COMPREHENSIVE SPECS
              </span>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16] pb-2 border-b border-[#ece7de] mb-4">
                Olfactory Concentration Ranges
              </h4>

              <ul className="space-y-3.5">
                {[
                  'Parfum (High sillage & concentrate holds)',
                  'Eau de Toilette (Light everyday projection)',
                  'Aftershaves (Soothing skin-neutralizing solvents)',
                  'Cologne (Fresh, volatile, citrus-forward blends)',
                  'Perfumes (Complex multi-faceted note matrices)',
                  'Body Splashes, Mists, and Sprays'
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
              FORMULATED FOR SUPERIOR RETENTION
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FCFBF8] border border-[#ece7de] rounded-2xl p-8 md:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] font-bold block">
                PARTNERSHIP & INTEGRITY
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1E2B16] tracking-tight">
                Refine Your Brand's Olfactive Signature
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                Consult with our helpful and experienced team in the Philippines to discover the right fragrance for your product. We work with both household names and smaller, niche business operators to help them create a unique proposition and strong brand loyalty.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                All ingredients are manufactured under strict safety controls. We apply the <strong>IFRA</strong> Code of Practice to the manufacturing and handling of all fragrance materials.
              </p>
            </div>

            <button
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="w-fit px-6 py-2.5 bg-[#1E2B16] hover:bg-[#596E4E] text-[#FCFBF8] text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 transition"
            >
              Request perfume oil samples <ArrowRight className="w-4 h-4 text-[#ebd9bd]" />
            </button>
          </div>

        </section>

      </div>
    </motion.div>
  );
}
