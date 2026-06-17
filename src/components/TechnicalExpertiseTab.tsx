import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppTab } from '../types';
import SubpageHeader from './SubpageHeader';
import { 
  Beaker, 
  Binary, 
  Search, 
  Database, 
  ShieldCheck, 
  GitBranch, 
  FileSpreadsheet, 
  HelpCircle, 
  BookOpen, 
  Cpu, 
  TrendingUp, 
  Layers, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Info 
} from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function TechnicalExpertiseTab({ setActiveTab }: TabProps) {
  const [activeAdvisorySection, setActiveAdvisorySection] = useState<string>('gcms');
  
  // Interactive Custom Scent Sourcing advice state
  const [customApp, setCustomApp] = useState<string>('cosmetics');
  const [customMood, setCustomMood] = useState<string>('luxury');
  const [showBriefStrategy, setShowBriefStrategy] = useState<boolean>(false);

  const getBriefStrategy = (app: string, mood: string) => {
    // Generates a fully-justified, highly professional laboratory formulation approach based on user inputs
    let targetApproach = "";
    let mainAnalysis = "";
    let typicalDosage = "";

    switch (app) {
      case 'cosmetics':
        typicalDosage = "0.5% - 2.0% raw absolute oil";
        mainAnalysis = "GC-MS with skin-allergen screening validation";
        targetApproach = "Skincare compatibility requires strict allergen-free aroma isolation. Scent compounds must maintain absolute chemical neutrality to prevent emulsion breakdown or formula separation.";
        break;
      case 'homecare':
        typicalDosage = "2.0% - 5.0% concentrated compound";
        mainAnalysis = "GC-MS with headspace surfactant molecular compatibility profiling";
        targetApproach = "Surfactants and alkaline chemical bases inside detergents degrade delicate top notes. Formulas require heavy synthetic stabilizers and base-note scent anchor molecules to optimize long-throw longevity.";
        break;
      case 'candles':
        typicalDosage = "6.0% - 10.0% hot-throw specialty concentrate";
        mainAnalysis = "Gas chromatography thermal stability evaluation at high flashpoints";
        targetApproach = "Hot-throw scent performance demands high temperature molecular preservation. Essential botanical oils must be blended with customized high-stability synthetic binders to enable seamless wax dispersion.";
        break;
      case 'aircare':
        typicalDosage = "10.0% - 15.0% carrier-diluted solution";
        mainAnalysis = "Headspace air-diffusion spectrometry with thermal desorption modeling";
        targetApproach = "Aerosols, diffusers, and vaporizers require extremely low-viscosity aroma compounds that atomize effortlessly without building residue or clogging mechanical delivery systems.";
        break;
    }

    let paletteScent = "";
    if (mood === 'luxury') paletteScent = "Sandalwood fractions, custom synthetic musks, white floral absolutes, and warm wood resins.";
    else if (mood === 'fresh') paletteScent = "Cold-pressed citrus, natural aldehydes, fresh-cut grass synthetic molecules, and light ozone builders.";
    else if (mood === 'warm') paletteScent = "Vanillin complexes, true coumarin elements, toasted cardamoms, and balsamic gum resins.";

    return {
      typicalDosage,
      mainAnalysis,
      targetApproach,
      paletteScent
    };
  };

  const strategy = getBriefStrategy(customApp, customMood);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423] pb-24 font-sans"
    >
      <SubpageHeader
        category="Science, Analysis & Scent Sourcing"
        title="Technical Expertise"
        subtitle="& Scientific Performance"
        backgroundImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85"
      />

      {/* STRATEGIC COLLABORATION PARTNER OVERVIEW */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16">
        <div className="bg-white border border-[#E6E0D6] rounded-3xl p-8 md:p-12 shadow-xs space-y-8 text-left relative overflow-hidden">
          
          <div className="absolute top-0 right-0 bg-[#E6E0D6]/20 px-8 py-3 rounded-bl-3xl border-l border-b border-[#E6E0D6]">
            <span className="text-[10px] font-mono tracking-widest text-[#B28A4A] uppercase font-bold">CARVANSONS CO-ALIGNMENT</span>
          </div>

          <div className="max-w-4xl space-y-6">
            <span className="bg-[#596E4E]/10 text-[#596E4E] text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-mono font-bold inline-block">
              Analytical Formulation Partner
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B16] font-normal leading-tight">
              Pioneering Perfumery through <span className="italic font-serif text-[#B28A4A]">Chemical Rigor</span>
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed max-w-4xl font-light">
              There is an immense amount of scientific and technical fragrance expertise that goes into the creation of new fragrances. From the precise process of isolating exact chemical molecules to the meticulous evaluative checking of constituent parts, every formula is ensured to match raw beauty with analytical performance.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed max-w-4xl font-light">
              We operate in close technical partnership with <strong className="text-[#1e2423] font-semibold">Carvansons Ltd</strong>. By leveraging their <strong className="text-[#1e2423] font-semibold">ISO 9001:2015 Compliant Quality Systems</strong> and state-of-the-art laboratory facilities in Lancashire, United Kingdom, fragrance formulation processes enjoy direct access to a world-class manufacturing backbone and an extensive digital fragrance library housing over <strong className="text-[#101b0f] font-bold">7,000 active fragrance compounds</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CORE SCIENTIFIC INSTRUMENTS EXPLORER */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="text-left max-w-2xl space-y-3 mb-10">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block">
            ANALYTICAL SPECTROMETRY
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1E2B16] font-normal leading-tight">
            Carvansons Laboratory Apparatus
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm font-light">
            Through sophisticated chromatography and molecular analysis, Carvansons' technical chemists extract, map, and decode the atomic compounds that define the world's most successful aromas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Navigation Panel */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { id: 'gcms', label: 'GC-MS Chromatography', desc: 'Gas Chromatography Mass Spectrometry profiles and isolates raw natural compounds with atomic precision.', icon: Beaker },
              { id: 'headspace', label: 'Headspace Spectrometry', desc: 'Captures and isolates the volatile atmospheric odor space surrounding living flowers or organic matter.', icon: Cpu },
              { id: 'desorption', label: 'Thermal Desorption', desc: 'Concentrates trace volatile chemicals in air streams to identify delicate micro-elements.', icon: Layers },
              { id: 'database', label: '7,000+ Formula Database', desc: 'Digital system tracking raw chemical profiles, material supply streams, and global prices.', icon: Database }
            ].map(sys => {
              const TabIcon = sys.icon;
              return (
                <button
                  key={sys.id}
                  onClick={() => setActiveAdvisorySection(sys.id)}
                  className={`p-5 rounded-2xl text-left transition-all border select-none group flex flex-col gap-2 ${
                    activeAdvisorySection === sys.id
                      ? 'bg-white border-[#B28A4A] shadow-md ring-1 ring-[#B28A4A]/25'
                      : 'bg-white/50 border-[#E6E0D6] hover:bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-1.5 rounded-lg ${activeAdvisorySection === sys.id ? 'bg-[#B28A4A]/10 text-[#B28A4A]' : 'bg-[#1E2B16]/10 text-[#1E2B16]'}`}>
                      <TabIcon className="w-4 h-4" />
                    </span>
                    <strong className="font-serif text-sm font-normal text-[#1E2B16]">{sys.label}</strong>
                  </div>
                  <p className="text-gray-500 text-xs font-light leading-normal pl-8">
                    {sys.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Interactive Explanation display */}
          <div className="lg:col-span-8 bg-white border border-[#E6E0D6] rounded-3xl p-8 shadow-xs flex flex-col justify-between text-left relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeAdvisorySection === 'gcms' && (
                <motion.div
                  key="gcms"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#B28A4A] uppercase bg-[#B28A4A]/5 px-2.5 py-1 rounded">GC-MS System</span>
                    <span className="text-[10px] font-mono text-gray-400">Model: G3440B Spectrometer</span>
                  </div>

                  <h4 className="font-serif text-2xl text-[#1E2B16] font-normal leading-tight">
                    Gas Chromatography Mass Spectrometry (GC-MS)
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    GC-MS separates, measures, and calculates the discrete compound structures within a fragrance blend. Natural essential oils consist of hundreds of distinct chemical molecules. By vaporizing a solution and sorting ingredients across chemical separation columns, GC-MS reveals the exact molecular makeup of raw material batches to technical analysts.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="border border-[#E6E0D6] p-4 rounded-xl space-y-1">
                      <strong className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider block font-mono">Precision Cloning &amp; Matching</strong>
                      <p className="text-[11px] text-gray-500 leading-normal font-light">Allows our chemists to analyze successful finished fragrance products and match custom base compounds to client specifications.</p>
                    </div>
                    <div className="border border-[#E6E0D6] p-4 rounded-xl space-y-1">
                      <strong className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider block font-mono">Purity Screening</strong>
                      <p className="text-[11px] text-gray-500 leading-normal font-light">Guarantees that raw botanicals do not contain hazardous chemical residues, heavy synthetic diluents, or unwanted chemical adulterants.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeAdvisorySection === 'headspace' && (
                <motion.div
                  key="headspace"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#596E4E] uppercase bg-[#596E4E]/5 px-2.5 py-1 rounded">Headspace Testing</span>
                    <span className="text-[10px] font-mono text-gray-400">Technology: Living Flower Traps</span>
                  </div>

                  <h4 className="font-serif text-2xl text-[#1E2B16] font-normal leading-tight">
                    Headspace Spectrometry Analysis
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    When delicate floral botanicals (like Orchid, Jasmine, or Lily) are picked and distilled, their molecular structure degrades instantly, producing a cooked scent that doesn't resemble the living flower. Headspace spectrometry resolves this by sealing a living plant inside an airtight glass chamber. By capturing the evaporated air and routing it through direct adsorbents, the living flower scent is accurately captured.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="border border-[#E6E0D6] p-4 rounded-xl space-y-1">
                      <strong className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider block font-mono">The Natural "True-Life" Profile</strong>
                      <p className="text-[11px] text-gray-500 leading-normal font-light">Captures the true, fresh profile of botanical scents exactly as they smell in their native environment.</p>
                    </div>
                    <div className="border border-[#E6E0D6] p-4 rounded-xl space-y-1">
                      <strong className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider block font-mono">Living Botanical Extraction</strong>
                      <p className="text-[11px] text-gray-500 leading-normal font-light">Eliminates the need to destroy delicate blooms or rare, endangered flora in order to duplicate their specific aromatic structure.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeAdvisorySection === 'desorption' && (
                <motion.div
                  key="desorption"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#B28A4A] uppercase bg-[#B28A4A]/5 px-2.5 py-1 rounded">Thermal Desorption</span>
                    <span className="text-[10px] font-mono text-gray-400">System: High-Flow Concentrators</span>
                  </div>

                  <h4 className="font-serif text-2xl text-[#1E2B16] font-normal leading-tight">
                    Thermal Desorption Extraction
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    Thermal Desorption focuses trace atmospheric compounds into high-density sample streams. In fine perfumery or environmental scent mapping, scent compounds exist at very low levels in the air. By drawing air over carbon-filled cold tubes, we capture those elements to replicate atmospheric environments like oceans, sea spray, or damp forests.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="border border-[#E6E0D6] p-4 rounded-xl space-y-1">
                      <strong className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider block font-mono">Trace Material Capture</strong>
                      <p className="text-[11px] text-gray-500 leading-normal font-light">Isolates micro-compounds down to parts-per-billion, catching subtle earthy, green, and mineral notes.</p>
                    </div>
                    <div className="border border-[#E6E0D6] p-4 rounded-xl space-y-1">
                      <strong className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider block font-mono">Sillage Evolution trials</strong>
                      <p className="text-[11px] text-gray-500 leading-normal font-light">Monitors how scent molecules release over time on the skin or in indoor spaces over several hours.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeAdvisorySection === 'database' && (
                <motion.div
                  key="database"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-700 uppercase bg-[#e9f5ed] px-2.5 py-1 rounded border border-emerald-100">Formula Library</span>
                    <span className="text-[10px] font-mono text-gray-400">Size: 7,000+ Master Formulations</span>
                  </div>

                  <h4 className="font-serif text-2xl text-[#1E2B16] font-normal leading-tight">
                    Carvansons Digital Formula Registry
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    Carvansons houses a huge digital and physical database of over 7,000 formulated fragrance oils. This library represents decades of fragrance development across all main product types, regulatory periods, and visual trends. When a client submits a project brief, our master perfumers can access this rich history to jumpstart the formulation process.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="border border-[#E6E0D6] p-4 rounded-xl space-y-1">
                      <strong className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider block font-mono">Unparalleled Sillage Heritage</strong>
                      <p className="text-[11px] text-gray-500 leading-normal font-light">Features proven custom formulations across home scents, laundry soaps, luxury cosmetic cremes, and fine French perfumes.</p>
                    </div>
                    <div className="border border-[#E6E0D6] p-4 rounded-xl space-y-1">
                      <strong className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider block font-mono">Climatological Adaptation</strong>
                      <p className="text-[11px] text-gray-500 leading-normal font-light">Enables our advisors to quickly adapt scent models for different regions based on local temperature and humidity needs.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle scientific look */}
            <div className="border-t border-gray-100 pt-6 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[10px] text-gray-400 uppercase tracking-widest">
              <span>Carvansons Manchester Facility Laboratory</span>
              <span>Accreditation: ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS OF OUR QUALITY ASSURANCE */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="bg-[#1E2B16] text-[#FCFBF8] rounded-3xl p-8 md:p-12 shadow-lg text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/2 rounded-full border border-white/5 translate-x-20 -translate-y-20 select-none pointer-events-none" />

          <div className="max-w-4xl space-y-6 relative z-10">
            <span className="text-[9px] uppercase font-mono tracking-widest text-[#ebd9bd] font-bold block">
              HEALTH, SAFETY & OPERATING PROTOCOL
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-tight">
              Safety and Quality Assurance Pillars
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
              Quality Control and Health &amp; Safety are fundamental requirements of everything we do. Strict safety policies and operating procedures are regularly revised, updated, and validated in accordance with latest global legislation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {[
                { title: 'Quality Control Validation', text: 'Every raw material and manufactured batch undergoes density checks, refractive index validation, and sensory comparisons to guarantee consistency.' },
                { title: '100% SDS Safety Traceability', text: 'We issue custom SDS, allergen lists, and IFRA certificates mapping the safe usage limits of your fragrance compounds.' },
                { title: 'Regulatory Compliance Testing', text: 'All fragrances are designed to meet standard restrictions, including REACH, CLP packaging guidelines, and IFRA safety requirements.' }
              ].map((pill, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2 hover:bg-white/10 transition-all">
                  <ShieldCheck className="w-5 h-5 text-[#ebd9bd]" />
                  <h5 className="font-serif text-sm font-medium text-white">
                    {pill.title}
                  </h5>
                  <p className="text-[11px] text-gray-300 font-light leading-relaxed">
                    {pill.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE BRIEF STRATEGIZER (WORKSHEET TOOL) */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="bg-white border border-[#E6E0D6] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block">
                FORMULATION STRATEGIZER
              </span>
              <h3 className="font-serif text-2xl text-[#1E2B16] font-normal leading-tight">
                Preview Scent Development Approach
              </h3>
              <p className="text-gray-500 text-xs font-light">
                Select your intended category and visual theme below. This tool simulates the primary testing and formulation approach that will be used.
              </p>
            </div>

            <div className="space-y-4">
              {/* Product Type select */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase font-bold text-gray-400 block">Product Category</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'cosmetics', label: 'Skincare Cremes' },
                    { id: 'homecare', label: 'Surfactant Soap' },
                    { id: 'candles', label: 'Wax Candles' },
                    { id: 'aircare', label: 'Aerosol Diffuser' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => { setCustomApp(item.id); setShowBriefStrategy(true); }}
                      className={`px-3 py-2 rounded-xl text-xs font-mono transition-all text-left border ${
                        customApp === item.id 
                          ? 'bg-[#1E2B16] text-white border-[#1E2B16]'
                          : 'bg-white text-gray-500 border-[#E6E0D6] hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Olfactive Mood select */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase font-bold text-gray-400 block">Olfactory Theme</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'luxury', label: 'Sensual Wood' },
                    { id: 'fresh', label: 'Bright Green' },
                    { id: 'warm', label: 'Sweet Resin' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => { setCustomMood(item.id); setShowBriefStrategy(true); }}
                      className={`px-2 py-2 rounded-xl text-[10px] font-mono transition-all text-center border ${
                        customMood === item.id 
                          ? 'bg-[#B28A4A] text-white border-[#B28A4A]'
                          : 'bg-white text-gray-500 border-[#E6E0D6] hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-full">
            <div className="bg-[#FAF8F5] border border-[#ece7de] rounded-2xl p-6 h-full flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#ece7de] pb-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B28A4A] font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> Lab Development Protocol
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">Strategic Plan</span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  <p>
                    <strong className="text-gray-800 font-medium font-serif text-[13px] block mb-0.5">Primary Technical Focus:</strong> 
                    {strategy.targetApproach}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-white p-3.5 rounded-lg border border-[#ece7de]">
                      <span className="text-[9px] uppercase font-mono tracking-wider text-gray-400 block">Recommended Load</span>
                      <strong className="font-mono text-xs text-[#1E2B16]">{strategy.typicalDosage}</strong>
                    </div>
                    <div className="bg-white p-3.5 rounded-lg border border-[#ece7de]">
                      <span className="text-[9px] uppercase font-mono tracking-wider text-gray-400 block">Primary analysis Type</span>
                      <strong className="font-mono text-xs text-[#1E2B16]">{strategy.mainAnalysis}</strong>
                    </div>
                  </div>

                  <p className="pt-2">
                    <strong className="text-gray-800 font-medium font-serif text-[13px] block mb-0.5">Target Analytical Palette Ingredients:</strong>
                    <span className="text-gray-500 leading-normal font-mono text-[11px]">{strategy.paletteScent}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#ece7de] flex items-center justify-between text-xs">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-[#B28A4A]" /> Custom briefs receive partner analysis within 48h.
                </span>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E2B16] hover:text-[#B28A4A] flex items-center gap-1"
                >
                  Submit Scent Brief <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ADVISORY CONSULTATION CTA */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        <div className="bg-[#FAF8F5] border border-[#E6E0D6] rounded-3xl p-8 md:p-12 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
          
          <div className="w-12 h-12 rounded-full bg-[#1E2B16] text-[#ebd9bd] flex items-center justify-center mx-auto mb-2">
            <Beaker className="w-6 h-6" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1E2B16]">
              Bring Chemical Precision to Your Scent Journey
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              Consult with our skilled experienced technical teams about your chosen fragrance oils or unique ingredient testing. Our direct alignment with Carvansons means we can guide you on options, run molecular analysis on raw materials, and formulate outstanding fragrance compounds that comply perfectly with standard IFRA health indices.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3 bg-[#1E2B16] text-[#FCFBF8] text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-[#2d3a24] hover:shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              Consult with our Analysts <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setActiveTab('regulation')}
              className="px-6 py-3 bg-white border border-[#E6E0D6] text-[#1e2423] text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-[#fbf9f4] hover:shadow-xs transition-all flex items-center justify-center gap-1.5"
            >
              Review Regulatory Codes <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
