import React, { useState } from 'react';
import SubpageHeader from './SubpageHeader';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Wind, ShieldAlert, Award, Compass, Flame, Car, ChevronRight, Check, ShieldCheck } from 'lucide-react';
import { AppTab, FragranceApplication } from '../types';
import { APPLICATIONS } from '../data';
import FineFragranceTab from './FineFragranceTab';
import PersonalCareTab from './PersonalCareTab';
import HomeCareTab from './HomeCareTab';
import RoomCandlesTab from './RoomCandlesTab';
import CarCareTab from './CarCareTab';

interface ApplicationsTabProps {
  setActiveTab: (tab: AppTab) => void;
}

const subTabs = [
  { id: 'grid', label: 'All Categories' },
  { id: 'fine-fragrance', label: 'Perfume & Fine Fragrance' },
  { id: 'personal-care', label: 'Personal Care & Beauty' },
  { id: 'home-care', label: 'Home Care & Cleaning' },
  { id: 'room-candles', label: 'Room & Candles' },
  { id: 'car-care', label: 'Car Care Fragrances' }
] as const;

const headerInfo = {
  grid: {
    category: "Fragrance Applications",
    title: "Fragrance Applications",
    subtitle: "Sectors & Chemistry.",
    backgroundImage: "/website-assets/tones-triangle.png"
  },
  'fine-fragrance': {
    category: "Fragrance Applications",
    title: "Perfume & Fine Fragrance",
    subtitle: "Artistic Creation.",
    backgroundImage: "/website-assets/fine-fragrance.jpg"
  },
  'personal-care': {
    category: "Fragrance Applications",
    title: "Personal Care & Beauty",
    subtitle: "Cosmetic Science.",
    backgroundImage: "/website-assets/personal-care-beauty.jpg"
  },
  'home-care': {
    category: "Fragrance Applications",
    title: "Home Care & Cleaning",
    subtitle: "Fragrances.",
    backgroundImage: "/website-assets/home-products.jpg"
  },
  'room-candles': {
    category: "Fragrance Applications",
    title: "Room & Candles Fragrances",
    subtitle: "Ambient Air.",
    backgroundImage: "/website-assets/room-fragrance.jpg"
  },
  'car-care': {
    category: "Fragrance Applications",
    title: "Car Care Fragrances",
    subtitle: "Automotive Sectors.",
    backgroundImage: "/website-assets/car-products.jpg"
  }
};

export default function ApplicationsTab({ setActiveTab }: ApplicationsTabProps) {
  const [selectedApplication, setSelectedApplication] = useState<FragranceApplication | null>(null);
  const [selectedSubTab, setSelectedSubTab] = useState<string>('grid');

  const scrollToNext = () => {
    const nextSection = document.getElementById('applications-content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentHeader = headerInfo[selectedSubTab as keyof typeof headerInfo] || headerInfo.grid;

  return (
    <motion.div
      key="applications-tab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      <SubpageHeader
        category={currentHeader.category}
        title={currentHeader.title}
        subtitle={currentHeader.subtitle}
        backgroundImage={currentHeader.backgroundImage}
      />

      {/* Sub-tab navigation bar */}
      <div className="w-full bg-[#f4f3ee] border-b border-[#ece7de] sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-start gap-1 overflow-x-auto py-3 no-scrollbar">
          {subTabs.map((tab) => {
            const isActive = selectedSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedSubTab(tab.id);
                  const contentElem = document.getElementById('tab-content-container');
                  if (contentElem) {
                    contentElem.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all whitespace-nowrap focus:outline-none cursor-pointer ${
                  isActive
                    ? 'bg-[#1E2B16] text-[#FCFBF8] shadow-xs'
                    : 'text-[#6F685F] hover:text-[#1E2B16] hover:bg-[#fafaf7]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div id="tab-content-container" className="w-full">
        {selectedSubTab === 'grid' ? (
          <div id="applications-content" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-20">

            {/* Intro summary banner */}
            <section className="bg-white rounded border border-[#ece7de] p-8 md:p-12 space-y-4 max-w-4xl mx-auto text-center animate-fade-in">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] block">Olfactive Sectors</span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#1E2B16] font-normal tracking-tight">
                Custom Industrial Formulation for Global Brands
              </h2>
              <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light max-w-2xl mx-auto">
                From luxury raw fine cologne extractions to highly complex, surfactant-proof household concentrates, partner perfumers adapt formulas to secure exact Projection, Lifespan, and Color stability.
              </p>
            </section>

            {/* Dynamic Responsive Grid of Applications */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {APPLICATIONS.map((app) => {
                const isSelected = selectedApplication?.id === app.id;
                return (
                  <div 
                    key={app.id} 
                    id={`app-card-${app.id}`}
                    className={`group rounded border transition-all duration-300 cursor-pointer bg-white flex flex-col justify-between ${
                      isSelected 
                        ? 'border-[#596E4E] ring-1 ring-[#596E4E]/10 shadow-sm' 
                        : 'border-[#ece7de] hover:border-[#596E4E]/30'
                    }`}
                    onClick={() => {
                      if (app.id === 'fine-fragrance') {
                        setSelectedSubTab('fine-fragrance');
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      } else if (app.id === 'personal-care') {
                        setSelectedSubTab('personal-care');
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      } else if (app.id === 'household-products') {
                        setSelectedSubTab('home-care');
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      } else if (app.id === 'room-fragrance') {
                        setSelectedSubTab('room-candles');
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      } else if (app.id === 'car-care') {
                        setSelectedSubTab('car-care');
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      } else {
                        setSelectedApplication(isSelected ? null : app);
                      }
                    }}
                  >
                    {/* Photo Header */}
                    <div className="relative h-44 bg-gray-50 overflow-hidden border-b border-gray-150 select-none">
                      {app.imageUrl && (
                        <img 
                          src={app.imageUrl} 
                          alt={app.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-[9px] font-mono tracking-widest uppercase bg-[#1E2B16]/80 px-2.5 py-0.5 rounded">
                          {app.id.replace('-', ' ')}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-[#596E4E] text-white flex items-center justify-center shadow-xs">
                          {app.id === 'fine-fragrance' && <Flame className="w-3.5 h-3.5" />}
                          {app.id === 'personal-care' && <Sparkles className="w-3.5 h-3.5" />}
                          {app.id === 'household-products' && <Wind className="w-3.5 h-3.5" />}
                          {app.id === 'industrial-products' && <ShieldAlert className="w-3.5 h-3.5" />}
                          {(app.id === 'room-fragrance' || app.id === 'candles' || app.id === 'home-fragrance') && <Compass className="w-3.5 h-3.5" />}
                          {app.id === 'car-care' && <Car className="w-3.5 h-3.5" />}
                          {app.id === 'flavours' && <Award className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    </div>

                    {/* Information Area */}
                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-1">
                        <h3 className="font-serif text-lg font-semibold text-[#1E2B16] group-hover:text-[#596E4E] transition-colors leading-tight">
                          {app.title}
                        </h3>
                        <p className="text-[#555f5e] text-xs leading-relaxed font-light line-clamp-2">
                          {app.shortDescription}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#ece7de]/60 flex items-center justify-between text-[10px] text-[#b38b4d] font-bold uppercase tracking-widest">
                        <span>EXPLORE FULL DETAILS</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dynamic Detail Sheet Expander */}
            <AnimatePresence>
              {selectedApplication && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#fcfbf9] border border-[#ece7de] rounded p-6 md:p-8 space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#ece7de]">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#b38b4d] font-bold">Olfactive Analysis Forecast</span>
                      <h3 className="font-serif text-2xl font-normal text-[#1E2B16]">{selectedApplication.title}</h3>
                    </div>
                    <button 
                      onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                      className="px-5 py-2 rounded-full bg-[#1E2B16] hover:bg-[#596E4E] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs focus:outline-none"
                    >
                      Inquire parameters &rarr;
                    </button>
                  </div>

                  <p className="text-gray-550 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-light">
                    {selectedApplication.longDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block font-sans">Typical Raw Scent Notes:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedApplication.commonNotes.map((note, idx) => (
                          <span key={idx} className="bg-white border border-[#ece7de] text-[#4e5554] text-xs px-2.5 py-1 rounded">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block font-sans">Formulation Requirements:</span>
                      <ul className="text-xs text-[#4e5554] space-y-1.5 ml-4 list-disc font-light">
                        {selectedApplication.technicalRequirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4 bg-white p-5 rounded border border-[#ece7de] flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="text-xs uppercase tracking-wider text-[#b38b4d] font-bold flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-[#596E4E]" /> Compliance &amp; Standards
                        </span>
                        <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                          {selectedApplication.safetyInsights}
                        </p>
                      </div>
                      <div className="text-[9px] text-gray-400 font-mono tracking-widest uppercase">
                        UK Certified Chemical Facility
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Extra brand specifications detailing split */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-12 border-t border-[#ece7de]">
              {/* List of Sectors */}
              <div className="lg:col-span-4 bg-white border border-[#ece7de] rounded p-6">
                <span className="block text-[10px] uppercase font-mono tracking-widest text-[#b38b4d] mb-1 font-bold">Comprehensive Portfolio</span>
                <h4 className="font-serif text-base font-bold text-[#1E2B16] mb-4 pb-2 border-b border-[#ece7de]">Processed Compounds List</h4>
                <ul className="space-y-3 text-left">
                  {[
                    'Fine Fragrances & Colognes',
                    'Organic Essential Oils & Concentrates',
                    'Home Fragrance & Diffusion Vectors',
                    'Skin-safe Cosmetics & Beauty formulas',
                    'Hypoallergenic Soaps & Detergents',
                    'Stabilized Industrial Neutralizers',
                    'Aerosols & Specialized Chemical Holds',
                    'Aroma chemicals & Custom Aromatics'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-600 font-light">
                      <span className="w-5 h-5 rounded-full bg-[#faf8f4] text-[#596E4E] flex items-center justify-center flex-shrink-0 border border-[#ece7de]">
                        <Check className="w-3 h-3 stroke-[3px]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guide Highlight Column */}
              <div className="lg:col-span-8 bg-white border border-[#ece7de] rounded p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl md:text-2xl text-[#1E2B16] font-normal tracking-tight">
                    Fragrance Sampling & Testing Guide
                  </h3>
                  <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light">
                    Our fragrance creations are used across a wide variety of products. Because every formulation has unique requirements, it is essential to test your chosen fragrance oils in your specific base application. Testing ensures you understand how the fragrance oil interacts with your ingredients and how it affects the final product's performance.
                  </p>
                  <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light">
                    Proessences is here to ensure your selected fragrance is perfectly suited for your final product. Our application process includes evaluating fragrance oils, measuring the impact of quality, aroma, and color on the final product, and supplying samples as requested (oil, cream, spray, or candle).
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-serif text-lg text-[#1E2B16]">Samples available in application types:</h4>
                  <div className="flex flex-wrap gap-2 text-[11px] text-gray-600">
                    {['Perfumes', 'Body Lotions', 'Essential Oils', 'Laundry', 'Household', 'Personal Care', 'Candles', 'Diffusers', 'Matches'].map(app => (
                      <span key={app} className="bg-[#faf8f4] border border-[#ece7de] px-3 py-1 rounded-full">{app}</span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-left">
                    <p className="text-gray-500 text-xs italic mb-4">All products conform to the highest European quality standards. We work on a per-project basis with a guarantee of exclusivity.</p>
                    <button 
                      onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                      className="px-6 py-2.5 bg-[#1E2B16] hover:bg-[#596E4E] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-xs focus:outline-none"
                    >
                      Contact Our Technical Team
                    </button>
                </div>
              </div>
            </section>

          </div>
        ) : (
          <div className="animate-fade-in">
            {selectedSubTab === 'fine-fragrance' && (
              <FineFragranceTab setActiveTab={setActiveTab} hideHeader={true} />
            )}
            {selectedSubTab === 'personal-care' && (
              <PersonalCareTab setActiveTab={setActiveTab} hideHeader={true} />
            )}
            {selectedSubTab === 'home-care' && (
              <HomeCareTab setActiveTab={setActiveTab} hideHeader={true} />
            )}
            {selectedSubTab === 'room-candles' && (
              <RoomCandlesTab setActiveTab={setActiveTab} hideHeader={true} />
            )}
            {selectedSubTab === 'car-care' && (
              <CarCareTab setActiveTab={setActiveTab} hideHeader={true} />
            )}
          </div>
        )}
      </div>

    </motion.div>
  );
}
