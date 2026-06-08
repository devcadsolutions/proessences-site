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
      alert("Please populate the name, email, and brief specifications message fields.");
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
      transition={{ duration: 0.35 }}
      className="w-full flex flex-col"
    >
      {/* IMMERSIVE FULL-VIEWPORT HERO */}
      <section 
        id="hero-section"
        className="relative w-full h-[calc(100vh-73px)] min-h-[580px] md:min-h-[640px] overflow-hidden text-white flex items-center select-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=1920&q=85')` }}
        >
          {/* Subtle luxurious custom dark green gradient/overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#021814]/85 to-[#004d44]/50" />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left flex flex-col justify-center h-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#b38b4d]/20 border border-[#b38b4d]/30 text-[#f2ede4] text-xs font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Contact Headquarters
            </div>
            
            <h1 className="font-serif text-3.5xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-[#faf8f4]">
              Connect with Our <span className="font-serif italic text-[#ebd9bd]">Technical Teams</span>
            </h1>

            <p className="text-gray-200 text-sm md:text-base max-w-xl leading-relaxed font-light">
              Speak directly with our compounding chemists, regulatory advisers, or commercial logistics teams about sample dispatching and industrial specifications.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-5">
              <button 
                onClick={() => {
                  const nextSection = document.getElementById('contact-content');
                  if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-semibold text-xs transition-all uppercase tracking-wider shadow cursor-pointer focus:outline-none"
              >
                Access Contact Desk
              </button>
              <button 
                onClick={() => { setActiveTab('applications'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#ebd9bd] transition-colors focus:outline-none"
              >
                Browse Applications &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Bouncing Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <button 
            onClick={() => {
              const nextSection = document.getElementById('contact-content');
              if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex flex-col items-center justify-center text-white/75 hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer"
            aria-label="Scroll down to next section"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest opacity-80 group-hover:opacity-100 transition-opacity mb-2">
              Start Form
            </span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* SCROLLABLE MAIN CONTENT AREA */}
      <div id="contact-content" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20 lg:space-y-28">

      {/* Grid Content Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column holding forms and Lancashire HQ info */}
        <div className="lg:col-span-12 xl:col-span-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 space-y-6 xl:col-span-5 xl:flex xl:flex-col xl:space-y-6 text-left">
          
          {/* Scent Warning Informative box */}
          <div className="bg-[#fff9eb] border border-[#ebd9bd] rounded-xl p-5 space-y-2 text-gray-750 shadow-xs col-span-2">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
              <ShieldAlert className="w-4.5 h-4.5 text-amber-600 flex-shrink-0" /> Industrial Formulation Guide
            </div>
            <p className="text-gray-500 text-xs font-light leading-relaxed">
              Carvansons is a global perfume manufacturer creating high-quality, bespoke fragrance compounds and essential oils for brand clients worldwide.
            </p>
            <p className="text-[#a16b18] text-xs font-bold leading-relaxed border-t border-amber-200/55 pt-2 mt-2 font-mono">
              COMPLIANCE NOTE: We supply bulk fragrance oils to industrial manufacturers. We DO NOT manufacture retail perfumes.
            </p>
          </div>

          {/* Form Block */}
          <div className="bg-white border border-[#ece7de] rounded-xl p-6 shadow-xs space-y-5">
            <div className="space-y-1 pb-3 border-b border-gray-100">
              <h3 className="font-serif text-base font-bold text-[#004d44] flex items-center gap-2">
                <Mail className="w-4.5 h-4.5 text-[#00876e]" /> Compound Inquiry Brief
              </h3>
              <p className="text-[11px] text-gray-400 font-light">
                Submit specific parameters directly to our Lancashire compounding blenders.
              </p>
            </div>

            {contactSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#faf9f6]/90 border border-emerald-500/20 text-[#004d44] rounded-lg p-6 space-y-4 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#00876e] flex items-center justify-center mx-auto text-xl font-bold">✓</div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-sm text-[#004d44]">Query Successfully Sent</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    Our technical administrators have received your aromatic specifications and will respond within 24 business hours with SDS parameters, regulatory checklists, and sampling rates.
                  </p>
                </div>
                <button
                  onClick={() => setContactSuccess(false)}
                  className="text-xs font-bold uppercase tracking-wider hover:underline text-[#b38b4d] cursor-pointer bg-transparent border-none p-0 focus:outline-none"
                >
                  Submit another compounding brief
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                
                <div className="space-y-1">
                  <label htmlFor="comp-name" className="uppercase tracking-widest text-[9px] text-gray-400 font-bold block">Company / Coordinator Name:</label>
                  <input 
                    type="text" 
                    id="comp-name"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="e.g. Amber Cosmetics Ltd"
                    className="w-full px-3 py-2 rounded border border-[#ece7de] text-xs focus:outline-none focus:ring-1 focus:ring-[#00876e] bg-[#faf9f6]/60 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="comp-email" className="uppercase tracking-widest text-[9px] text-gray-400 font-bold block">Business Email Address:</label>
                  <input 
                    type="email" 
                    id="comp-email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="e.g. buyer@ambercosmetics.co.uk"
                    className="w-full px-3 py-2 rounded border border-[#ece7de] text-xs focus:outline-none focus:ring-1 focus:ring-[#00876e] bg-[#faf9f6]/60 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="interest" className="uppercase tracking-widest text-[9px] text-gray-400 font-bold block">Primary Medium Sector:</label>
                  <select
                    id="interest"
                    value={contactForm.productInterest}
                    onChange={(e) => setContactForm({ ...contactForm, productInterest: e.target.value })}
                    className="w-full px-3 py-2 rounded border border-[#ece7de] text-xs focus:outline-none bg-white font-medium"
                  >
                    <option value="Fine Fragrance font-normal text-left shadow-none">Fine Perfumes &amp; Aromas (Class 4)</option>
                    <option value="Candle Care">Scented Wax Candles (Class 11)</option>
                    <option value="Skin/Nail Cosmetics">Personal Care and Beauty products</option>
                    <option value="Surfactant/Household detergent">Soaps &amp; Surfactants</option>
                    <option value="Industrial Masking">Industrial Odor Counteraction</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="uppercase tracking-widest text-[9px] text-gray-400 font-bold block">Fragrance brief parameters (notes, requirements):</label>
                  <textarea 
                    id="message"
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Describe compound attributes, volume targets (e.g., minimum weight 2kg), and regulatory compliance zones..."
                    className="w-full px-3 py-2 rounded border border-[#ece7de] text-xs focus:outline-none focus:ring-1 focus:ring-[#00876e] bg-[#faf9f6]/60 font-light"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-btn"
                  className="w-full py-2.5 bg-[#004d44] hover:bg-[#00876e] text-white leading-tight font-bold rounded-lg uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Brief Specification
                </button>

              </form>
            )}
          </div>

          {/* Lancashire Office Details */}
          <div className="bg-[#faf9f6] border border-[#ece7de] rounded-xl p-6 shadow-xs space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#ebd9bd] font-bold block">
              Global Headquarters
            </span>
            <div className="space-y-1.5">
              <h4 className="font-serif text-lg font-bold text-[#004d44] leading-tight mt-1">
                Carvansons Ltd Head Office
              </h4>
              <p className="text-gray-500 text-xs font-light leading-relaxed font-mono">
                Knowsley Park Way,<br />
                Knowsley Road Industrial Estate,<br />
                Haslingden, Rossendale, Lancashire,<br />
                BB4 4RS, United Kingdom.
              </p>
            </div>

            <div className="border-t border-[#ece7de] pt-3 space-y-1.5 text-xs font-semibold text-gray-500 font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00876e]" />
                <span>+44 161 766 3768</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00876e]" />
                <a href="mailto:technical@carvansons.co.uk" className="hover:underline text-[#004d44]">technical@carvansons.co.uk</a>
              </div>
            </div>

            <div className="border-t border-[#ece7de] pt-3 text-[10px] space-y-2">
              <span className="text-gray-400 font-bold block uppercase tracking-wider text-[8px]">Information Guides:</span>
              <div className="flex flex-wrap gap-x-4 gap-y-1 font-serif text-[#b38b4d] font-bold">
                <span onClick={() => { setActiveTab('about'); setActiveHeritageTab('approach'); }} className="hover:underline cursor-pointer">Compounding FAQ</span>
                <span onClick={() => { setActiveTab('about'); setActiveHeritageTab('what'); }} className="hover:underline cursor-pointer">Terms &amp; Deliveries</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right side: Accounts Offices and Maps Search */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left">
          
          <div className="bg-white border border-[#ece7de] rounded-xl p-6 shadow-xs space-y-5">
            <div className="space-y-1 pb-2 border-b border-gray-150">
              <h3 className="font-serif text-lg font-normal text-[#004d44]">
                Global Distribution Network
              </h3>
              <p className="text-xs text-gray-400 font-light font-sans">
                Find authorized Account coordinators and local dispatch yards holding Carvansons compounds worldwide.
              </p>
            </div>

            {/* Filter Search Input */}
            <div className="space-y-1">
              <label htmlFor="partner-search" className="text-[9px] uppercase tracking-wider text-gray-400 font-bold block">
                Filter distributors by name or country:
              </label>
              <input 
                type="text"
                id="partner-search"
                value={partnerSearchQuery}
                onChange={(e) => setPartnerSearchQuery(e.target.value)}
                placeholder="e.g. South Africa, Helen, Dubai..."
                className="w-full px-3 py-2 rounded-lg border border-[#ece7de] text-xs focus:outline-none focus:ring-1 focus:ring-[#004d44] bg-[#faf9f6]/40"
              />
            </div>

            {/* Quick dropdown element */}
            <div className="space-y-1">
              <label htmlFor="country-select" className="text-[9px] uppercase tracking-wider text-gray-400 font-bold block">
                Quick-select region:
              </label>
              <select
                id="country-select"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-[#ece7de] font-serif font-bold text-[#004d44] focus:outline-none"
              >
                {REGIONAL_PARTNERS.map((p, pIdx) => (
                  <option key={pIdx} value={p.country}>
                    {p.country}
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Partner Details */}
            {selectedPartnerDetails && (
              <motion.div
                key={selectedCountry}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#faf9f6] border border-[#e5dfd5] rounded-xl p-5 space-y-4"
              >
                <div className="pb-3 border-b border-[#e5dfd5] flex flex-wrap justify-between items-start gap-3">
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-[#b38b4d] font-bold block">Account Coordinator</span>
                    <h4 className="font-serif text-lg font-bold text-[#004d44] mt-0.5">{selectedPartnerDetails.name}</h4>
                    {selectedPartnerDetails.company && (
                      <span className="block text-[10px] uppercase font-bold tracking-wide text-gray-400 mt-1">{selectedPartnerDetails.company}</span>
                    )}
                  </div>
                  
                  {selectedCountry.includes('Headquarters') ? (
                    <span className="bg-[#004d44] text-white text-[9px] uppercase tracking-wider px-2.5 py-1 font-mono rounded font-bold">
                      COOPERATIVE HEADQUARTERS
                    </span>
                  ) : (
                    <span className="bg-[#004d44]/5 text-[#004d44] border border-[#004d44]/15 text-[9px] uppercase px-2.5 py-1 font-mono rounded font-bold">
                      Depot Compound Hub
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-gray-500">
                  {selectedPartnerDetails.address && (
                    <div className="space-y-1">
                      <span className="text-gray-400 uppercase tracking-widest font-bold block text-[8px]">Distribution Dock:</span>
                      <p className="font-light">{selectedPartnerDetails.address}</p>
                    </div>
                  )}
                  
                  <div className="space-y-1.5 font-mono">
                    <span className="text-gray-400 uppercase tracking-widest font-bold block text-[8px] font-sans">Representative contact:</span>
                    {selectedPartnerDetails.phone && (
                      <p className="text-[11px] font-semibold text-gray-500 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#00876e]" /> {selectedPartnerDetails.phone}</p>
                    )}
                    <p className="text-[11px] font-semibold text-[#00876e] flex items-center gap-1.5 hover:underline">
                      <Mail className="w-3.5 h-3.5" /> 
                      <a href={`mailto:${selectedPartnerDetails.email}`}>{selectedPartnerDetails.email}</a>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Directory directory and agencies list map */}
          <div className="bg-white border border-[#ece7de] rounded-xl p-6 shadow-xs space-y-4">
            <div className="pb-2 border-b border-gray-100">
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#ebd9bd] font-bold block">International Support directory</span>
              <h3 className="font-serif text-base font-bold text-[#004d44]">Sales Agencies &amp; Distribution Offices Directory</h3>
            </div>

            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {filteredPartners.map((partner, pIdx) => {
                const isSelected = selectedCountry === partner.country;
                return (
                  <div 
                    key={pIdx}
                    onClick={() => {
                      setSelectedCountry(partner.country);
                      const selectElem = document.getElementById('country-select') as HTMLSelectElement;
                      if (selectElem) selectElem.value = partner.country;
                    }}
                    className={`p-3 rounded border transition-all cursor-pointer flex items-center justify-between gap-4 text-xs ${
                      isSelected 
                        ? 'bg-[#00876e]/10 border-[#00876e] shadow-xs font-semibold' 
                        : 'bg-white border-[#ece7de] hover:border-[#00876e]/20 text-gray-500 hover:text-[#1e2524]'
                    }`}
                  >
                    <div>
                      <div className="font-bold flex items-center gap-1">
                        {partner.country === 'United Kingdom (Headquarters)' && <Award className="w-3.5 h-3.5 text-[#b38b4d]" />}
                        <span>{partner.country}</span>
                      </div>
                      <span className="block text-[10px] text-gray-400 mt-0.5">
                        Coordinator: {partner.name} {partner.company ? `(${partner.company})` : ''}
                      </span>
                    </div>
                    <span className={`text-[9px] tracking-wide uppercase px-2 py-0.5 rounded font-mono font-bold ${
                      isSelected ? 'bg-[#004d44] text-white shadow-xs' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {isSelected ? 'Active' : 'inspect'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* General Dispatch / Fast-Freight supported zones */}
          <div className="bg-[#faf9f6] border border-[#ece7de] rounded-xl p-6 shadow-xs space-y-3">
            <h4 className="font-serif text-xs font-bold text-[#004d44] uppercase tracking-wider">Fast-Freight Dispatch Zones</h4>
            <p className="text-gray-400 text-xs leading-relaxed font-light font-sans">
              Compounds conform perfectly to hazardous SDS and sea/air directives to dispatch to custom warehouses across:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {OTHER_COUNTRIES.map((ctry, idx) => (
                <span 
                  key={idx} 
                  className="bg-white border border-[#e5dfd5] text-[#b38b4d] font-mono text-[9px] px-2.5 py-1 rounded select-none font-bold uppercase transition-transform hover:scale-[1.01]"
                >
                  {ctry}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
      </div>
    </motion.div>
  );
}
