import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import SubpageHeader from './SubpageHeader';
import { 
  Beaker, 
  CheckCircle, 
  HelpCircle, 
  ExternalLink,
  BookOpen,
  ArrowRight,
  Info,
  Layers,
  ShoppingBag,
  Heart,
  Droplet,
  Trash2,
  Sparkles,
  Flame,
  Check
} from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

interface ApplicationMedium {
  id: string;
  name: string;
  desc: string;
  testingMetric: string;
  dosageAdvice: string;
}

export default function SamplesTab({ setActiveTab }: TabProps) {
  const [selectedSamples, setSelectedSamples] = useState<string[]>(['Candles', 'Perfume sprays']);
  const [brevityNote, setBrevityNote] = useState<string>('');
  const [formSubmitted, setShowFormSubmitted] = useState<boolean>(false);

  const applicationMediums: ApplicationMedium[] = [
    {
      id: 'lotions',
      name: 'Body Lotions',
      desc: 'Tested for lipid emulsion safety, separation prevention, color stability, and skin hydration preservation.',
      testingMetric: 'Viscosity and pH compatibility at 40°C thermal stress test over 8 weeks.',
      dosageAdvice: '0.2% - 1.0% formulation focus.'
    },
    {
      id: 'washes',
      name: 'Body Washes',
      desc: 'Tested to prevent cloudiness, preserve clear surfactant consistency, and monitor lather profiles.',
      testingMetric: 'Micellar stability checks and high-charge surfactant compatibility analysis.',
      dosageAdvice: '1.0% - 1.5% formulation focus.'
    },
    {
      id: 'candles',
      name: 'Candles',
      desc: 'Formulated to guarantee perfect fragrance wax absorption, cold-throw intensity, and safe candle burn rate cycles.',
      testingMetric: 'Wick carbonization screening and hot sillage headspace analysis.',
      dosageAdvice: '6.0% - 10.0% formulation focus.'
    },
    {
      id: 'perfume',
      name: 'Perfume sprays',
      desc: 'Formulated for high alcohol solubility, immediate clarity, and optimized heart/base sillage evolution.',
      testingMetric: 'Chilling precipitation threshold checking down to -5°C.',
      dosageAdvice: '15.0% - 25.0% formulation load.'
    },
    {
      id: 'reed-diffuser',
      name: 'Reed Diffusers',
      desc: 'Evaluated for evaporation consistency, volatility curves, and capillary draw through rattan/fiber core systems.',
      testingMetric: 'Low vapour pressure solvent evaluation and olfactory decline curves over 180 days.',
      dosageAdvice: '15.0% - 25.0% formulation focus.'
    },
    {
      id: 'shampoo',
      name: 'Shampoo',
      desc: 'Ensures optimal viscosities are preserved across sodium laureth sulfate surfactant combinations.',
      testingMetric: 'Thermorheology assessment and cloud point stabilization testing.',
      dosageAdvice: '0.5% - 1.2% formulation focus.'
    },
    {
      id: 'soap',
      name: 'Soap',
      desc: 'Tested against high alkaline levels inside cold-process soaps to prevent extreme color discoloration.',
      testingMetric: 'Alkaline hydrolysis survival checks and scent cure tracking over 30 days.',
      dosageAdvice: '1.5% - 3.0% formulation focus.'
    }
  ];

  const handleToggleMedium = (name: string) => {
    if (selectedSamples.includes(name)) {
      setSelectedSamples(selectedSamples.filter(item => item !== name));
    } else {
      setSelectedSamples([...selectedSamples, name]);
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowFormSubmitted(true);
  };

  const handleResetForm = () => {
    setSelectedSamples(['Candles', 'Perfume sprays']);
    setBrevityNote('');
    setShowFormSubmitted(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423] pb-24 font-sans"
    >
      <SubpageHeader
        category="Evaluative Scent Trial Services"
        title="Fragrance Application"
        subtitle="Samples & Scent Testing."
        backgroundImage="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1920&q=85"
      />

      {/* STRATEGIC ADVANTAGE INTRO */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16">
        <div className="bg-white border border-[#E6E0D6] rounded-3xl p-8 md:p-12 shadow-xs space-y-8 text-left relative overflow-hidden">
          
          <div className="absolute top-0 right-0 bg-[#E6E0D6]/20 px-8 py-3 rounded-bl-3xl border-l border-b border-[#E6E0D6]">
            <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">EVALUATIVE SUPPORT</span>
          </div>

          <div className="max-w-4xl space-y-5">
            <span className="bg-[#596E4E]/10 text-[#596E4E] text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-mono font-bold inline-block">
              Testing &amp; Stability Guidance
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B16] font-normal leading-tight">
              Essential base Testing. <span className="italic font-serif text-[#B28A4A]">Flawless Results</span>
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Our fragrance creations are found in a wide range of beautiful commercial products and industrial applications. However, before ordering raw absolute quantities, <strong className="text-[#1e2423] font-semibold">testing your chosen fragrance oils in your exact base application is absolutely essential.</strong>
            </p>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Whether you’re creating an entirely new product or trying out a fresh seasonal scent, you must experience how the fragrance oil interacts with your active ingredients, solvents, and heat factors. Beauty care, personal wellness, cleaning products, candles, or any formulations will contain their own set of unique criteria that ensures your products function appropriately.
            </p>

            <p className="text-[#596E4E] text-xs font-mono font-bold flex items-center gap-1.5 pt-2 select-none border-t border-gray-100">
              <Sparkles className="w-4 h-4 text-[#B28A4A]" /> Co-engineering scent safety powered by Carvansons Ltd
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATION MEDIUMS DETAILS */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 text-left">
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block">
            FORMULATION MATRIX
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1E2B16] font-normal leading-tight">
            Supported Application Types
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm font-light">
            Each medium demands precise chemical adjustments. Carvansons' technical laboratory adjusts molecular weights, flashpoints, and sills to suit your target product base.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applicationMediums.map(med => (
            <div 
              key={med.id}
              className="bg-white border border-[#E6E0D6] rounded-2xl p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#596E4E] inline-block" />
                  <span className="text-[9px] uppercase font-mono tracking-wider text-gray-400 bg-gray-50 px-2.5 py-0.5 rounded border border-gray-100">
                    Active medium
                  </span>
                </div>

                <h4 className="font-serif text-lg font-normal text-[#1E2B16] group-hover:text-[#B28A4A] transition-colors">
                  {med.name}
                </h4>

                <p className="text-gray-600 text-xs font-light leading-relaxed">
                  {med.desc}
                </p>

                <div className="bg-[#FAF8F5] border border-gray-120 p-3 rounded-lg text-[11px] font-sans text-gray-500 space-y-1 select-none">
                  <p><strong className="text-gray-700 font-medium">Testing Rule:</strong> {med.testingMetric}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-50 mt-4 flex items-center justify-between text-[10px] font-mono text-[#B28A4A] font-bold">
                <span>Dose Load:</span>
                <span>{med.dosageAdvice}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY TESTING IN BASE IS EXTREMELY CRITICAL */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="bg-[#1E2B16] text-[#FCFBF8] rounded-3xl p-8 md:p-12 shadow-lg text-left grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/2 rounded-full border border-white/5 translate-x-20 -translate-y-20 select-none pointer-events-none" />

          <div className="lg:col-span-6 space-y-5 relative z-10">
            <span className="text-[9px] uppercase font-mono tracking-widest text-[#ebd9bd] font-bold block">
              STABILITY CO-ASSESSMENT
            </span>
            <h3 className="font-serif text-2xl sm:text-3.5xl font-normal leading-tight">
              Why Testing Scent inside finished Bases is Critical
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
              We provide free-of-charge evaluative samples of all our fragrances because it is extremely important to test, cure, and inspect formulations before committing to bulk purchases.Scent dosage levels affect physical structures, chemical performance, and commercial aesthetics. By requesting a sample formulated in its designated application base, you gain reassurance that your finished line will meet customer expectations.
            </p>

            <ul className="text-xs text-gray-200 font-light space-y-3 pt-2">
              <li className="flex items-start gap-2.5 leading-normal select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] mt-1.5 flex-shrink-0" />
                <span><strong className="text-white font-medium">Oxidative Discoloration:</strong> Natural vanillin, indole, or citrus components react with air and light, changing clear crèmes to dark brown unless matched with stabilization agents.</span>
              </li>
              <li className="flex items-start gap-2.5 leading-normal select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] mt-1.5 flex-shrink-0" />
                <span><strong className="text-white font-medium">Viscosity Breakdown:</strong> Certain synthetic aroma elements act as active chemical solvents, liquefying thick emulsions or breaking personal-care lotion bases.</span>
              </li>
              <li className="text-gray-350 italic text-[11px] pt-1 pl-4">
                Not found the perfect scent matches? Through our partnership, Carvansons' custom applications laboratory is happy to rework, adapt, or fine-tune olfactory directions to fit your exact specifications and base requirements perfectly.
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 h-full w-full min-h-[380px] lg:min-h-[460px] flex items-stretch select-none overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-inner">
            <img 
              src="/website-assets/carvansons-sample-6-bottles.webp" 
              alt="Carvansons Scent Discovery 6-Bottles Sample Box" 
              className="w-full h-full object-contain p-4 md:p-6 rounded-2xl transition-all duration-350 hover:scale-101"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* INTERACTIVE SAMPLE REQUISITION TOOL */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 text-left">
        <div className="bg-white border border-[#E6E0D6] rounded-3xl p-6 sm:p-8 md:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block">
                SAMPLE DISPATCH
              </span>
              <h3 className="font-serif text-2xl text-[#1E2B16] font-normal leading-tight">
                Request Evaluative Scent Samples
              </h3>
            </div>
            
            <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
              Compile your evaluative scent packet by selecting your required application mediums. Our team prepares and dispatches customized sample packs within 24-48 hours.
            </p>

            {/* Checklist Selection */}
            <div className="space-y-2 pt-2">
              <label className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase select-none">
                Target Application Media (Select all that apply)
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Body Lotions',
                  'Body Washes',
                  'Candles & Scent Pots',
                  'Perfume Sprays',
                  'Reed Diffusers',
                  'Shampoo & Hair serums',
                  'Soaps & Detergents'
                ].map((item) => {
                  const isSelected = selectedSamples.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        if (selectedSamples.includes(item)) {
                          setSelectedSamples(selectedSamples.filter(s => s !== item));
                        } else {
                          setSelectedSamples([...selectedSamples, item]);
                        }
                      }}
                      className={`px-3.5 py-2.5 rounded-xl border text-xs font-serif tracking-wide text-left flex items-center justify-between transition-all select-none ${
                        isSelected 
                          ? 'bg-[#1E2B16]/5 border-[#1E2B16] text-[#1E2B16] font-medium'
                          : 'bg-white border-gray-200 text-gray-500 hover:bg-[#FAF8F5] hover:text-black'
                      }`}
                    >
                      <span>{item}</span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                        isSelected ? 'bg-[#1E2B16] border-[#1E2B16] text-[#FCFBF8]' : 'border-gray-300 bg-white'
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-[#ece7de] rounded-xl p-4 text-[11px] text-gray-500 font-light flex items-start gap-2.5 select-none leading-relaxed">
              <Info className="w-4 h-4 text-[#B28A4A] flex-shrink-0 mt-0.5" />
              <span>We provide free 5ml laboratory evaluative samples. Let us know your requirements, and the partner formulation team will recheck the allergen thresholds for your products.</span>
            </div>
          </div>

          <div className="lg:col-span-7 h-full">
            <div className="bg-[#FAF8F5] border border-[#E6E0D6] rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-[#ece7de] pb-4 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B28A4A] flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4" /> Selected Materials Pack
                </span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  {selectedSamples.length} Items Selected
                </span>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleInquirySubmit} className="space-y-5 text-xs text-left">
                  {/* Selected badges listing */}
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSamples.length === 0 ? (
                      <span className="text-gray-400 italic font-light text-[11px]">No active packaging selected. Please select at least one media from left block.</span>
                    ) : (
                      selectedSamples.map(item => (
                        <span 
                          key={item}
                          className="bg-[#1E2B16] text-white font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-2xs border border-white/5"
                        >
                          {item}
                          <button 
                            type="button" 
                            onClick={() => setSelectedSamples(selectedSamples.filter(s => s !== item))}
                            className="hover:text-red-300 font-bold focus:outline-none"
                          >
                            ×
                          </button>
                        </span>
                      ))
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase font-bold text-gray-450 block">Testing Brief / Base Formulation Specifications (Optional)</label>
                    <textarea 
                      value={brevityNote}
                      onChange={(e) => setBrevityNote(e.target.value)}
                      placeholder="Specify your product formulas, target scent notes, active chemical bases, or regional allergen threshold rules..."
                      rows={4}
                      className="w-full bg-white border border-[#E6E0D6] rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-[#596E4E] text-xs font-sans text-gray-700 leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={selectedSamples.length === 0}
                      className={`w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2 ${
                        selectedSamples.length === 0 
                          ? 'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed'
                          : 'bg-[#1E2B16] hover:bg-[#2d3a24] text-white shadow-md hover:shadow-lg'
                      }`}
                    >
                      Request Scent Samples Pack <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-4 max-w-md mx-auto"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl font-normal text-[#1E2B16]">
                      Brief Logged Successfully
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
                      Thank you for submitting your custom scent testing specifications! Our Applications Team will review your parameters against our master database and dispatch your customized 5ml evaluative samples pack within 24-48 hours.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button 
                      onClick={handleResetForm}
                      className="px-6 py-2 border border-[#E6E0D6] bg-white text-[#1e2423] text-[10px] font-mono font-bold uppercase tracking-widest rounded-lg hover:bg-gray-50 shadow-2xs"
                    >
                      Configure Another Pack
                    </button>
                  </div>
                </motion.div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ADVISORY CONSULTATION FOOTNOTE */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        <div className="bg-[#FAF8F5] border border-[#E6E0D6] rounded-3xl p-8 md:p-12 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
          
          <div className="w-12 h-12 rounded-full bg-[#1E2B16] text-[#ebd9bd] flex items-center justify-center mx-auto mb-2">
            <HelpCircle className="w-6 h-6" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1E2B16]">
              Still Need the Right Fragrance?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              Not found the right fragrance matches for your products? We are happy to modify, rework, or re-select scent compounds to ensure immediate compatibility with your base manufacturing procedures. Contact our team to start your custom development brief today.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3 bg-[#1E2B16] text-[#FCFBF8] text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-[#2d3a24] hover:shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              Contact our Team <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('expertise')}
              className="px-6 py-3 bg-white border border-[#E6E0D6] text-[#1e2423] text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-[#fbf9f4] hover:shadow-xs transition-all flex items-center justify-center gap-1.5"
            >
              Explore Scent Science <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
