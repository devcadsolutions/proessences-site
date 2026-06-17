import React from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import SubpageHeader from './SubpageHeader';
import { 
  Award, 
  CheckCircle, 
  HelpCircle, 
  ExternalLink, 
  ArrowRight,
  Scale,
  Info
} from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

interface RegulationItem {
  id: string;
  name: string;
  code: string;
  desc: string;
  scope: string;
  link: string;
}

export default function RegulationComplianceTab({ setActiveTab }: TabProps) {
  // Configured with the direct Carvansons partner links and content
  const regulations: RegulationItem[] = [
    {
      id: 'clp',
      name: 'CLP Regulation',
      code: '(EC) No 1272/2008',
      desc: 'European Union Regulation on the Classification, Labelling, and Packaging of chemical substances and mixtures. Essential for determining standard safety hazards on finished goods.',
      scope: 'Household goods, home scent, and commercial air care products.',
      link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32008R1272'
    },
    {
      id: 'reach',
      name: 'REACH chemical standard',
      code: '(EC) No 1907/2006',
      desc: 'EU Framework regarding registration, evaluation, authorization, and restriction of chemical substances. Guarantees raw botanicals meet strict human-health metrics.',
      scope: 'Comprehensive raw chemicals, solvents, absolute oils & synthetic aroma molecules.',
      link: 'https://echa.europa.eu/web/guest/regulations/reach/legislation'
    },
    {
      id: 'cosmetics',
      name: 'Cosmetics Regulation',
      code: '(EC) N° 1223/2009',
      desc: 'The primary regulatory framework governing finished cosmetics and personal care products sold within the EU & UK territory, detailing banned or heavily restricted compounds.',
      scope: 'Perfumes, lotions, hair serums, creams, and make-up compounds.',
      link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R1223-20190813'
    },
    {
      id: 'detergents',
      name: 'Detergents Regulation',
      code: 'No 648/2004',
      desc: 'Dictates rules on biological persistence, surfactant biodegradability, and clear fragrance allergen labeling for domestic washing and surface sanitizing agents.',
      scope: 'Laundry detergents, dish liquids, fabric conditioners, and heavy surface cleaners.',
      link: 'https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2004:104:0001:0035:en:PDF'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423] pb-24 font-sans"
    >
      <SubpageHeader
        category="Safety, Standards & Partnership"
        title="Technical Regulation"
        subtitle="and Compliance."
        backgroundImage="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1920&q=85"
      />

      {/* STRATEGIC COLLABORATION HERO BANNER */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16">
        <div className="bg-white border border-[#E6E0D6] rounded-3xl p-8 md:p-12 shadow-xs space-y-8 text-left relative overflow-hidden">
          
          {/* Subtle branding accent */}
          <div className="absolute top-0 right-0 bg-[#E6E0D6]/20 px-8 py-3 rounded-bl-3xl border-l border-b border-[#E6E0D6]">
            <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">OFFICIAL CO-ALIGNMENT</span>
          </div>

          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-[#596E4E]/10 text-[#596E4E] text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-mono font-medium">
                Regulatory Strategic Partner
              </span>
              <span className="bg-[#B28A4A]/10 text-[#B28A4A] text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-mono font-medium">
                ISO 9001:2015 Compliant
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B16] font-normal leading-tight">
              A World of Fragrance Powered by <span className="italic font-serif text-[#B28A4A]">Secured Compliance</span>
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl font-light">
              Fragrance regulations are a critical part of what we do and we take this responsibility very seriously. We are proud to partner directly with <strong className="text-[#1e2423] font-semibold">Carvansons Ltd</strong>, an esteemed global member of the <strong className="text-[#1e2423] font-semibold">International Fragrance Association (IFRA)</strong>. Together with our technical partner, we strictly apply and execute the IFRA Code of Practice across all stages of manufacturing, compound design, and essential oil processing, complying fully with all safety and environmental regulations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div className="space-y-2">
                <h4 className="font-serif text-lg text-[#1e2423] font-medium flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#B28A4A]" /> ISO 9001:2015 Quality Systems
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                  Carvansons' custom manufacturing facilities have been officially certified as ISO 9001 Compliant. This standard reflects robust quality controls, procedural consistency, chemical absolute batch traceability, and premium client assurance.
                </p>
                <a 
                  href="https://carvansons.co.uk/iso-9001_2015-certificate-expiry-30-10-2026/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-mono uppercase font-bold tracking-wider text-[#B28A4A] hover:text-[#1E2B16] pt-1"
                >
                  Access our ISO Certificate <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-lg text-[#1e2423] font-medium flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#596E4E]" /> In-House Technical Verification
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                  Complementing Carvansons' technical manufacturing capabilities, our corporate compliance services deliver comprehensive allergen screenings, automated SDS generation, custom CLP safety hazard guidance reports, and technical compliance testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE EUROPEAN & GLOBAL CODES */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="text-left max-w-2xl space-y-3 mb-10">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block">
            REGULATORY STANDARDS
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1E2B16] font-normal leading-tight">
            Key Legislative Codes
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm font-light">
            Each formula in our scent catalog is verified against multi-layer chemical and environmental frameworks prior to commercial shipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regulations.map(reg => (
            <div 
              key={reg.id}
              className="bg-white border border-[#E6E0D6] rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-normal text-[#1E2B16] group-hover:text-[#B28A4A] transition-colors">
                      {reg.name}
                    </h4>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-0.5 rounded-sm border border-gray-100 mt-1 inline-block">
                      {reg.code}
                    </span>
                  </div>
                  <Scale className="w-5 h-5 text-gray-300 group-hover:text-[#596E4E] transition-colors" />
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                  {reg.desc}
                </p>
                <div className="text-[11px] font-sans text-gray-500 flex items-center gap-1.5 bg-[#FAF8F5] border border-gray-120 p-2.5 rounded-lg select-none">
                  <Info className="w-3.5 h-3.5 text-[#B28A4A] flex-shrink-0" />
                  <span><strong className="text-gray-700 font-medium">Core Scope:</strong> {reg.scope}</span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-gray-50">
                <a 
                  href={reg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono uppercase tracking-widest text-[#B28A4A] hover:text-[#1E2B16] font-bold inline-flex items-center gap-1 transition-colors"
                >
                  View Legislation <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE DELIVERABLES TIMELINES */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="bg-[#1E2B16] text-[#FCFBF8] rounded-3xl p-8 md:p-12 shadow-lg text-left relative overflow-hidden">
          {/* Decorative graphic background lines */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/2 rounded-full border border-white/5 translate-x-20 -translate-y-20 select-none pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-[9px] uppercase font-mono tracking-widest text-[#ebd9bd] font-bold block">
              OUR DELIVERABLES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-tight">
              Standard Document Portfolio Generated for Every Order
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
              We ensure our business clients are fully prepared for local regulatory filings and supply continuous laboratory updates. We generate and deliver a comprehensive compliance packet for your chosen compounds within 24 hours of batch dispatch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {[
                { title: 'IFRA Certificate', text: 'Documenting safety compliance thresholds across all 12 IFRA product classes.' },
                { title: 'EU/GHS SDS', text: 'Comprehensive safety safety sheets detailing physical properties and hazardous indicators.' },
                { title: 'Allergen Profile', text: 'Essential list of declarable allergens for standard transparency. crucial for cosmetics INCI listings.' },
                { title: 'Custom CLP Matrix', text: 'Exact percentage values customized for packaging print guidelines.' }
              ].map((docItem, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 hover:bg-white/10 transition-all">
                  <CheckCircle className="w-4.5 h-4.5 text-[#ebd9bd]" />
                  <h5 className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                    {docItem.title}
                  </h5>
                  <p className="text-[11px] text-gray-300 font-light leading-normal">
                    {docItem.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* NEED HELP / B2B ADVISORY CONSULTATION CTA */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        <div className="bg-[#FAF8F5] border border-[#E6E0D6] rounded-3xl p-8 md:p-12 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
          
          <div className="w-12 h-12 rounded-full bg-[#1E2B16] text-[#ebd9bd] flex items-center justify-center mx-auto mb-2">
            <HelpCircle className="w-6 h-6" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1E2B16]">
              Need Guidance on Fragrance Regulations?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              Consult with our experienced customer and technical team to align the right aroma compounds for your products. Our industry knowledge and deep understanding of perfumery allergens, CLP labeling, and manufacturing compliance guidelines means we can help advise you on options and suggest what formulations are best suited for your targeted market.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3 bg-[#1E2B16] text-[#FCFBF8] text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-[#2d3a24] hover:shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              Consult with our Team <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="https://www.carvansons.co.uk/what-are-the-82-new-fragrance-allergens/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white border border-[#E6E0D6] text-[#1e2423] text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-[#fbf9f4] hover:shadow-xs transition-all flex items-center justify-center gap-1.5"
            >
              Learn about the 82 allergens <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
