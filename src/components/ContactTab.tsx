import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Mail, Phone, Globe2, Award } from 'lucide-react';
import { AppTab } from '../types';
import { REGIONAL_PARTNERS, OTHER_COUNTRIES } from '../data';

interface ContactTabProps {
  setActiveTab: (tab: AppTab) => void;
  setActiveHeritageTab: (tabId: string) => void;
}

export default function ContactTab({ setActiveTab, setActiveHeritageTab }: ContactTabProps) {
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '', productInterest: 'Fine Fragrance' });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('United Kingdom (Headquarters)');
  const [partnerSearchQuery, setPartnerSearchQuery] = useState<string>('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      return;
    }
    setContactSuccess(true);
    setContactForm({ name: '', email: '', phone: '', message: '', productInterest: 'Fine Fragrance' });
  };

  const selectedPartnerDetails = REGIONAL_PARTNERS.find(p => p.country === selectedCountry);

  const filteredPartners = REGIONAL_PARTNERS.filter(p => {
    const search = partnerSearchQuery.toLowerCase();
    return (
      p.country.toLowerCase().includes(search) ||
      p.name.toLowerCase().includes(search) ||
      (p.company || '').toLowerCase().includes(search)
    );
  });

  return (
    <motion.div
      key="contact-tab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      {/* COMPACT SUBPAGE HEADER */}
      <section 
        id="hero-section"
        className="relative w-full bg-cover bg-center py-20 md:py-32 overflow-hidden text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=1920&q=85')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#031512]/95 via-[#031512]/80 to-transparent" />
        
        {/* Decorative gold line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#b38b4d]/20 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#b38b4d]/10 border border-[#b38b4d]/25 text-[#ebd9bd] text-[10px] font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Global Client Desk
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5.5xl font-normal leading-tight tracking-tight text-[#faf8f5]">
            Contact Our <span className="font-serif italic text-[#ebd9bd]">Lancashire Headquarters.</span>
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed font-light">
            Coordinate with compounding chemists, safety officers, or logistics managers directly to schedule raw samples and evaluate test batch rates.
          </p>

          <div className="pt-2">
            <button 
              onClick={() => {
                const nextSection = document.getElementById('contact-content');
                if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-150 cursor-pointer shadow focus:outline-none"
            >
              Access Request Form
            </button>
          </div>
        </div>
      </section>

      {/* CORE CONTACT LAYOUT */}
      <div id="contact-content" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-20">

        {/* Informative Guidance & Warnings Panel */}
        <section className="bg-white rounded border border-[#ece7de] p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          <div className="md:col-span-3 flex justify-center">
            <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center border border-amber-200">
              <ShieldAlert className="w-6 h-6 text-amber-700" />
            </div>
          </div>
          <div className="md:col-span-9 space-y-2 text-left">
            <h4 className="font-serif text-lg font-semibold text-[#004d44]">Industrial Raw Compound Supply</h4>
            <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light">
              Proessences is an industrial bulk fragrance oil manufacturer. We construct raw scented oils for cosmetics, home goods, beauty, and cleaning brands. <span className="font-semibold block sm:inline mt-1 text-amber-800 font-mono text-[11px] uppercase tracking-wider">Please NOTE: We do NOT formulate retail consumer perfume bottles.</span>
            </p>
          </div>
        </section>

        {/* Layout: Form on the Left, Directory on the Right */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Inquiry form column */}
          <div className="lg:col-span-6 bg-white border border-[#ece7de] rounded p-6 md:p-8 space-y-6">
            <div className="space-y-1 pb-3 lg:pb-4 border-b border-gray-100 text-left">
              <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 font-bold block">Compounding Brief</span>
              <h3 className="font-serif text-xl font-normal text-[#004d44]">Custom Compound Briefing</h3>
              <p className="text-gray-400 text-xs font-light">Submit olfactory specifications and volume dimensions below.</p>
            </div>

            {contactSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#faf8f4] border border-[#ece7de] rounded p-6 text-center space-y-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#004d44] text-white flex items-center justify-center mx-auto text-sm">✓</div>
                <div className="space-y-1">
                  <h4 className="font-serif text-[#004d44] text-base">Inquiry Successfully Dispatched</h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-light font-sans">
                    Our technical and laboratory administrators have reviewed your parameters and will respond within 24 business hours with SDS certifications, pricing tiers, and raw sample options.
                  </p>
                </div>
                <button
                  onClick={() => setContactSuccess(false)}
                  className="text-xs font-bold text-[#b38b4d] hover:text-[#004d44] underline uppercase tracking-widest transition-colors focus:outline-none"
                >
                  Submit another compounding brief
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
                <div className="space-y-1.5">
                  <label htmlFor="coordinator-name" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#004d44] block">Coordinator / Enterprise Name:</label>
                  <input 
                    type="text" 
                    id="coordinator-name"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="e.g. Amber Cosmetics Ltd"
                    className="w-full px-4 py-2 bg-white border border-[#ece7de] text-xs rounded focus:outline-none focus:ring-1 focus:ring-[#00876e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="coordinator-email" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#004d44] block">Business Email Address:</label>
                  <input 
                    type="email" 
                    id="coordinator-email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="e.g. procurement@ambercosmetics.com"
                    className="w-full px-4 py-2 bg-white border border-[#ece7de] text-xs rounded focus:outline-none focus:ring-1 focus:ring-[#00876e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="coordinator-interest" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#004d44] block">Target Sector Application:</label>
                  <select 
                    id="coordinator-interest"
                    value={contactForm.productInterest}
                    onChange={(e) => setContactForm({ ...contactForm, productInterest: e.target.value })}
                    className="w-full px-4 py-2 bg-white border border-[#ece7de] text-xs rounded focus:outline-none"
                  >
                    <option value="Fine Fragrance">Fine perfumes &amp; cologne compounds</option>
                    <option value="Personal Care">Beauty care soaps &amp; body cosmetics</option>
                    <option value="Home Fragrance">Ambient reed diffusers &amp; air freshener formats</option>
                    <option value="Household Detergent">Surfactants &amp; laundry cleaning concentrates</option>
                    <option value="Industrial Masking">Industrial Odor Counteraction &amp; chemicals</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="coordinator-message" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#004d44] block">Brief compound parameters (notes, volumes, safety):</label>
                  <textarea 
                    id="coordinator-message"
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Describe desired note families (e.g. woody/citrus), chemical carrier (wax/alcohol), and volume dimensions (min 2kg)..."
                    className="w-full px-4 py-2 bg-white border border-[#ece7de] text-xs rounded focus:outline-none focus:ring-1 focus:ring-[#00876e]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#004d44] hover:bg-[#00876e] text-white text-xs font-bold uppercase tracking-widest rounded transition-colors duration-150 cursor-pointer shadow-xs focus:outline-none"
                >
                  Submit Compound Specifications
                </button>
              </form>
            )}
          </div>

          {/* Directory Contact List & Global depots column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="bg-white border border-[#ece7de] rounded p-6 shadow-xs space-y-4">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e] block">Primary Desk</span>
              <h4 className="font-serif text-lg font-semibold text-[#004d44]">Lancashire Headquarters</h4>
              
              <div className="space-y-3 pt-2 text-xs text-gray-600 font-light">
                <p className="flex items-start gap-2.5">
                  <Globe2 className="w-4 h-4 text-[#00876e] shrink-0" />
                  <span>Knowsley Park Way, Haslingden, Rossendale, Lancashire, BB4 4PW, United Kingdom</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#00876e] shrink-0" />
                  <span>+44 (0) 1706 215335</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#00876e] shrink-0" />
                  <span>sales@proessences.co.uk</span>
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <button
                  onClick={() => { setActiveTab('about'); setActiveHeritageTab('where'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="text-[11px] uppercase font-bold text-[#b38b4d] hover:text-[#00876e] tracking-widest hover:underline transition-colors focus:outline-none"
                >
                  Explore Global Locations Map &rarr;
                </button>
              </div>
            </div>

            {/* Global representative partner list */}
            <div className="bg-white border border-[#ece7de] rounded p-6 shadow-xs space-y-4">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e] block">Representative Partners</span>
              <h4 className="font-serif text-base font-semibold text-[#004d44]">Global Distribution Directory</h4>
              
              <div className="space-y-2">
                <input 
                  type="text" 
                  value={partnerSearchQuery}
                  onChange={(e) => setPartnerSearchQuery(e.target.value)}
                  placeholder="Filter by country, company name..."
                  className="w-full px-4 py-2 bg-[#fafaf7] border border-[#ece7de] text-xs rounded focus:outline-none focus:ring-1 focus:ring-[#00876e]"
                />
              </div>

              <div className="max-h-[220px] overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                {filteredPartners.map((partner, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedCountry(partner.country)}
                    className={`p-3 rounded border text-xs cursor-pointer transition-colors ${
                      selectedCountry === partner.country 
                        ? 'bg-[#faf8f4] border-[#00876e]' 
                        : 'bg-[#fafaf7]/50 border-gray-150 hover:bg-white'
                    }`}
                  >
                    <span className="block font-bold text-[#004d44]">{partner.country}</span>
                    <span className="block text-gray-500 font-light text-[11px]">{partner.name} - {partner.company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

      </div>
    </motion.div>
  );
}
