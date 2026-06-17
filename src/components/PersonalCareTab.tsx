import React from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import SubpageHeader from './SubpageHeader';
import { Sparkles, Heart, ShieldAlert, Droplets, Check, ArrowRight } from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
  hideHeader?: boolean;
}

export default function PersonalCareTab({ setActiveTab, hideHeader = false }: TabProps) {
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
          title="Personal Care &amp; Beauty"
          subtitle="Cosmetic Science."
          backgroundImage="/website-assets/personal-care-beauty.jpg"
        />
      )}

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-16">
        
        {/* Intro Grid section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] block">
              Dermal Safety &amp; Artistry
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1E2B16] font-normal tracking-tight leading-tight">
              Fragrance for Personal Care &amp; Beauty Products
            </h2>
            <p className="text-[#4e5554] text-sm md:text-base leading-relaxed font-light">
              Fragrance for Personal Care and Beauty products is a huge, growing, and diverse global industry. Consumers are becoming more knowledgeable and aware of the ingredients in the products they use and as a result, about the specific fragrances being selected. Product effectiveness and pure ingredient profiles have a bigger impact on consumer purchasing habits than ever before.
            </p>
            <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light">
              Because of this, manufacturers explore unique ways to market their ranges—directly highlighting what makes their formulations unique, skin-safe, and botanically refreshing.
            </p>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl p-8 shadow-md overflow-hidden flex flex-col justify-between h-full min-h-[300px] text-white group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: `url('/website-assets/personal-care-beauty.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-[#13200F]/65" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#ebd9bd] flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#ebd9bd]" /> SECTOR EXPANSION
              </span>
              <blockquote className="font-serif text-white text-base md:text-lg leading-relaxed font-normal italic">
                "In 2022 the Global Beauty and Personal Care Market is expected to grow by 5.2%. Industry revenue is expected to surpass $120 billion by 2025."
              </blockquote>
            </div>
            <div className="pt-4 border-t border-white/20 relative z-10 flex justify-between items-center text-[10px] text-white/70 font-mono tracking-widest uppercase">
              <span>Global statistics</span>
              <span>2022 - 2025</span>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="space-y-8">
          <div className="max-w-2xl mx-auto text-center" id="personal-care-sub-heading">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block mb-1">
              OLFATIVE PERFORMANCE
            </span>
            <h3 className="font-serif text-2xl text-[#1E2B16] tracking-tight font-normal">
              What Fragrances for Personal Care Work Best?
            </h3>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light mt-2">
              Personal care covers wide-ranging functional formulations that undergo distinct chemical environments. Our chemistry experts analyze pH values and surfactant levels to supply tailored perfume oils matching specific products:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="personal-care-creams">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Creams &amp; Face Lotions</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                The themes of soothing, rejuvenation, and brightening are globally associated with skin creams. Fragrances in this sector emphasize calming, light floral accents like rose water, hibiscus, cucumber, and fresh aloe vera.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="personal-care-haircare">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Droplets className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Haircare Formulations</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Haircare oils rely on fresh, zingy, "just-washed" attributes that nourish and protect. Botanical chamomile and rosewood serve as moisturising agents, while spearmint, tea tree, and juniper soothe the scalp.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="personal-care-soaps-cl">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Fragrance for Soaps</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Soaps have been seen as an indulgent luxury since ancient Egypt. Sweet vanilla, soothing coconut, exotics, zesty citric combinations, and rich gourmands are favored to create a premium, moisturizing sensory experience.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="personal-care-deodorant">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Deodorant Technologies</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Masking old perspiration smells is replaced by botanical deodorizing tea tree, eucalyptus, and green lemongrass. Playful, sparkling, and natural fruit or floral accords are favored to create refreshingly clean daily holds.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="personal-care-washes">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Droplets className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Body Washes &amp; Shea Creams</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Shower gels must make users feel invigorated, leaving a long-lasting active aroma lingering after showering. Tropical mango, coconut, and rich shea/cocoa butters are ideal for nourishing body washes, bath soaks, and lotions.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-xl p-6 md:p-8 space-y-4 hover:shadow-xs transition" id="personal-care-shaving">
              <div className="w-10 h-10 rounded-full bg-[#1E2B16]/5 flex items-center justify-center text-[#596E4E]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Beard Oils &amp; Shaving Gels</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                Men's grooming requires high chemical stability to ensure soothing qualities inside high pH shaving lathers. Creamy sandalwood, patchouli, cedarwood, and cool mint oils protect skin barriers while smelling executive-ready.
              </p>
            </div>
          </div>
        </section>

        {/* Support Grid List vs CTA Info */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8">
          
          <div className="lg:col-span-5 bg-white border border-[#ece7de] rounded-2xl p-8 flex flex-col justify-between" id="we-create-box-personal">
            <div>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] mb-1 font-bold">
                COMPREHENSIVE SUPPORT
              </span>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16] pb-2 border-b border-[#ece7de] mb-4">
                Personal Care Applications
              </h4>

              <ul className="space-y-3.5">
                {[
                  'Skin-safe Cosmetics & Beauty Creams',
                  'Cosmetics Toilet Soaps & Glycerin Bars',
                  'Invigorating Shampoos & Hair Conditioners',
                  'Daily Deodorants & Roll-on Sticks',
                  'Moisturizing Face Lotions & Syrups',
                  'Facial Tissues & Fragrant Toilet Paper',
                  'Beard Oils & Shaving Foams'
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
              DERMALLY TESTED &amp; ALCOHOL COMPATIBLE
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FCFBF8] border border-[#ece7de] rounded-2xl p-8 md:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] font-bold block">
                COMPLIANCE SECURITY
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1E2B16] tracking-tight">
                Premium Bespoke Fragrances Made Safe
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                Consult with our experienced, helpful team inside our Quezon City headquarters about the perfect allergen-safe fragrance profiles suited for your beauty products. We work with national household names and local niche companies.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                We strictly apply the <strong>IFRA</strong> Code of Practice to the manufacturing, testing, and distribution of all regional cosmetic-grade fragrance ingredients.
              </p>
            </div>

            <button
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="w-fit px-6 py-2.5 bg-[#1E2B16] hover:bg-[#596E4E] text-[#FCFBF8] text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 transition"
            >
              Request cosmetics samples <ArrowRight className="w-4 h-4 text-[#ebd9bd]" />
            </button>
          </div>

        </section>

      </div>
    </motion.div>
  );
}
