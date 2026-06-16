import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Briefcase, 
  FlaskConical, 
  FileText, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  Building,
  CheckCircle2
} from 'lucide-react';
import { AppTab } from '../types';

interface ContactTabProps {
  setActiveTab: (tab: AppTab) => void;
  setActiveHeritageTab: (tabId: string) => void;
}

export default function ContactTab({ setActiveTab, setActiveHeritageTab }: ContactTabProps) {
  const [contactForm, setContactForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: 'Fine Fragrance',
    requirements: ''
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.requirements) {
      return;
    }
    setContactSuccess(true);
    setContactForm({
      name: '',
      company: '',
      email: '',
      phone: '',
      productCategory: 'Fine Fragrance',
      requirements: ''
    });
  };

  const whyWorkWithUs = [
    {
      icon: Sparkles,
      title: "Custom Fragrance Development",
      description: "Tailored fragrance solutions designed around your product requirements."
    },
    {
      icon: ShieldCheck,
      title: "IFRA-Compliant Formulations",
      description: "Developed following recognized industry standards and best practices."
    },
    {
      icon: FlaskConical,
      title: "Technical Expertise",
      description: "Supported by experienced fragrance professionals and technical specialists."
    },
    {
      icon: Briefcase,
      title: "Flexible Production Support",
      description: "Suitable for both product development and commercial manufacturing."
    },
    {
      icon: FileText,
      title: "Documentation & Compliance",
      description: "Technical documents and product support available when required."
    },
    {
      icon: Layers,
      title: "Industry Applications",
      description: "Serving fragrance, personal care, home care, automotive, and industrial sectors."
    }
  ];

  const faqs = [
    {
      q: "Do you provide fragrance samples?",
      a: "Yes. Sample availability depends on the fragrance category and project requirements."
    },
    {
      q: "What industries do you serve?",
      a: "We support fragrance, personal care, home care, automotive, and industrial applications."
    },
    {
      q: "Can you develop a custom fragrance for our brand?",
      a: "Yes. We provide bespoke fragrance development services tailored to your product and target market."
    },
    {
      q: "Do you provide technical documentation?",
      a: "Yes. Documentation may include SDS, IFRA compliance information, and other supporting technical documents where applicable."
    },
    {
      q: "How long does fragrance development take?",
      a: "Development timelines vary depending on project complexity and revision requirements."
    },
    {
      q: "Do you support commercial production volumes?",
      a: "Yes. We support both development projects and commercial manufacturing requirements."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const el = document.getElementById('inquiry-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      key="contact-tab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      {/* SECTION 1: HERO / INTRODUCTION */}
      <section 
        id="hero-section"
        className="relative w-full bg-cover bg-center py-24 md:py-36 overflow-hidden text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=1920&q=85')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2B16]/95 via-[#1E2B16]/85 to-black/40" />
        
        {/* Decorative gold line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#b38b4d]/30 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#b38b4d]/15 border border-[#b38b4d]/30 text-[#ebd9bd] text-[10px] font-mono tracking-widest uppercase px-4 py-1.5 rounded-full backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> B2B Client Partnerships
          </div>
          
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-[#faf8f5] max-w-3xl">
            Request a <span className="font-serif italic text-[#ebd9bd]">Fragrance Consultation</span>
          </h1>

          <p className="text-gray-300 text-xs sm:text-base max-w-2xl leading-relaxed font-light">
            Tell us about your product, fragrance requirements, and business goals. Our team will review your inquiry and recommend the most suitable fragrance solution for your application.
          </p>

          <div className="pt-2">
            <button 
              onClick={scrollToForm}
              className="px-8 py-3 rounded-full bg-[#b38b4d] hover:bg-[#c49d5f] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg focus:outline-none"
            >
              Start Inquiry Form
            </button>
          </div>
        </div>
      </section>

      {/* CORE CONTACT LAYOUT */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-24">

        {/* SECTION 2 & 3: FORM AND TRUST CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Why Work With Us (Section 3) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#B28A4A] bg-[#f5efe2] px-3 py-1 rounded inline-block">Partner Advantage</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2B16] leading-tight">
                Why Partner with Proessences?
              </h2>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                As a leading premium fragrance and essential oil compounding provider, we collaborate closely with brands and manufacturing experts to secure seamless sensory matching and regulatory compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {whyWorkWithUs.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex gap-4 p-5 rounded-xl bg-white border border-[#ece7de] hover:border-[#b38b4d]/40 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1E2B16]/5 flex items-center justify-center shrink-0 text-[#1E2B16]">
                      <IconComponent className="w-5 h-5 text-[#596E4E]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider">{card.title}</h4>
                      <p className="text-gray-500 text-xs font-light leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Inquiry Form (Section 2) */}
          <div id="inquiry-form-section" className="lg:col-span-7 scroll-mt-28">
            <div className="bg-white border border-[#ece7de] rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
              <div className="space-y-2 pb-5 border-b border-gray-100 text-left">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#B28A4A] font-bold block">Consulation Portal</span>
                <h3 className="font-serif text-2xl font-normal text-[#1E2B16]">Fragrance Project Inquiry</h3>
                <p className="text-gray-400 text-xs font-light">Complete our B2B formulation brief to help us accelerate your product compound.</p>
              </div>

              {contactSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#faf8f4] border border-[#ece7de] rounded-xl p-8 text-center space-y-5"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1E2B16] text-[#ebd9bd] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-[#1E2B16] text-xl font-bold">Inquiry Successfully Dispatched</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light font-sans max-w-md mx-auto">
                      Thank you for contacting Proessences. Our experienced fragrance development consultants and laboratory advisors will review your project requirements and connect back with you within 24 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setContactSuccess(false)}
                    className="text-xs font-bold text-[#b38b4d] hover:text-[#1E2B16] underline uppercase tracking-widest transition-colors focus:outline-none"
                  >
                    Submit Another Project Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="comp-coordinator" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] block">Your Name / Contact Person:</label>
                      <input 
                        type="text" 
                        id="comp-coordinator"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Jane Smith"
                        className="w-full px-4 py-2.5 bg-white border border-[#ece7de] text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-[#596E4E]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="comp-company" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] block">Company Name:</label>
                      <input 
                        type="text" 
                        id="comp-company"
                        required
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        placeholder="e.g. Premium Brands Cosmetics"
                        className="w-full px-4 py-2.5 bg-white border border-[#ece7de] text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-[#596E4E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="comp-email" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] block">Business Email Address:</label>
                      <input 
                        type="email" 
                        id="comp-email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="e.g. partner@business.com"
                        className="w-full px-4 py-2.5 bg-white border border-[#ece7de] text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-[#596E4E]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="comp-phone" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] block">Contact Number:</label>
                      <input 
                        type="tel" 
                        id="comp-phone"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="e.g. +63 (02) 8123-4567"
                        className="w-full px-4 py-2.5 bg-white border border-[#ece7de] text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-[#596E4E]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 font-sans">
                    <label htmlFor="comp-category" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] block font-sans">Product Category:</label>
                    <select 
                      id="comp-category"
                      value={contactForm.productCategory}
                      onChange={(e) => setContactForm({ ...contactForm, productCategory: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#ece7de] text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-[#596E4E] font-sans text-gray-700"
                    >
                      <option value="Fine Fragrance">Fine Fragrance</option>
                      <option value="Personal Care">Personal Care</option>
                      <option value="Home Care">Home Care</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Industrial Products">Industrial Products</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="comp-requirements" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] block text-left">Project Requirements:</label>
                    <textarea 
                      id="comp-requirements"
                      required
                      rows={5}
                      value={contactForm.requirements}
                      onChange={(e) => setContactForm({ ...contactForm, requirements: e.target.value })}
                      placeholder="Tell us about your product, fragrance preferences, target market, expected volume, or any specific requirements."
                      className="w-full px-4 py-3 bg-white border border-[#ece7de] text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-[#596E4E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#1E2B16] hover:bg-[#596E4E] text-white text-xs font-mono font-bold uppercase tracking-widest rounded-lg transition-transform duration-100 active:scale-[0.99] cursor-pointer shadow-md focus:outline-none"
                  >
                    Request Consultation
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* SECTION 4 & 5: OFFICE DIRECTORY & GOOGLE MAPS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-8 border-t border-[#ece7de]">
          
          {/* Card Layout Office Info (Section 4) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] bg-[#EFF1ED] px-3 py-1 rounded inline-block">Headquarters</span>
              <h3 className="font-serif text-3xl font-bold text-[#1E2B16]">Proessences Corporate Office</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Connect directly with our administration and distribution desk in Manila to coordinate documentation, custom batch orders, and transport schedules.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-4 text-xs text-gray-750">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1E2B16]/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#596E4E]" />
                  </div>
                  <div>
                    <span className="block font-bold text-gray-400 font-mono text-[9px] uppercase tracking-wider">Office Address:</span>
                    <span className="text-[#1e2423] leading-relaxed">10 Neptune Street, Bahay Toro, Quezon City, Philippines</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1E2B16]/5 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#596E4E]" />
                  </div>
                  <div>
                    <span className="block font-bold text-gray-400 font-mono text-[9px] uppercase tracking-wider">Telephone Numbers:</span>
                    <span className="text-[#1e2423] leading-relaxed block">(02) 8920-9848</span>
                    <span className="text-[#1e2423] leading-relaxed block">(02) 8920-9735</span>
                    <span className="text-[#1e2423] leading-relaxed block">(02) 8920-7326</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1E2B16]/5 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#596E4E]" />
                  </div>
                  <div>
                    <span className="block font-bold text-gray-400 font-mono text-[9px] uppercase tracking-wider">Email Address:</span>
                    <a href="mailto:gemma@proessences.com" className="text-[#b38b4d] hover:underline font-medium">gemma@proessences.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1E2B16]/5 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#596E4E]" />
                  </div>
                  <div>
                    <span className="block font-bold text-gray-400 font-mono text-[9px] uppercase tracking-wider">Business Hours:</span>
                    <span className="text-[#1e2423] block">Monday – Friday</span>
                    <span className="text-[#1e2423] block text-[11px] font-mono text-gray-400 mt-0.5">8:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-150 flex gap-4">
                <a href="https://www.instagram.com/proessencesinc" target="_blank" rel="noopener noreferrer" className="text-xs text-[#596E4E] hover:text-[#1E2B16] font-medium underline">Instagram Page</a>
                <a href="https://www.facebook.com/share/1BFqGReRHW/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#596E4E] hover:text-[#1E2B16] font-medium underline">Facebook Page</a>
              </div>
            </div>
          </div>

          {/* Embedded Google Map (Section 5) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-left">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] bg-[#EFF1ED] px-3 py-1 rounded inline-block">Location Map</span>
              <h3 className="font-serif text-3xl font-bold text-[#1E2B16]">Visit Our Office</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Meet with our team to discuss fragrance development, product applications, and business opportunities.
              </p>
            </div>

            <div className="bg-white border border-[#ece7de] rounded-2xl p-3 shadow-sm h-full min-h-[350px] overflow-hidden flex flex-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.2977755358055!2d121.01824367584558!3d14.667439575440624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b100bb7094bf%3A0xcfda1ae9284ffd2f!2s10%20Neptune%20St%2C%20Project%208%2C%20Quezon%20City%2C%201106%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px', borderRadius: '12px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Proessences Office Location Map"
                id="office-map-iframe"
              />
            </div>
          </div>

        </section>

        {/* SECTION 6: FAQS REDESIGN */}
        <section className="max-w-4xl mx-auto space-y-10 pt-10 border-t border-[#ece7de]">
          <div className="text-center space-y-3">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#B28A4A] bg-[#f5efe2] px-3 py-1 rounded inline-block">Consultation Guide</span>
            <h3 className="font-serif text-3xl font-bold text-[#1E2B16]">Frequently Asked Questions</h3>
            <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
              Find transparent technical information covering fragrance samples, custom development timelines, and manufacturing capacities.
            </p>
          </div>

          <div className="divide-y divide-[#ece7de] border-t border-b border-[#ece7de]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-4 text-left font-sans">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center py-2 text-left font-sans text-sm md:text-base font-semibold text-[#1E2B16] hover:text-[#b38b4d] focus:outline-none transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#596E4E]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 text-xs md:text-sm text-gray-500 leading-relaxed font-light font-sans pt-1">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 7: FINAL CALL-TO-ACTION */}
        <section className="relative rounded-3xl bg-[#1E2B16] text-white p-8 md:p-14 overflow-hidden text-center max-w-5xl mx-auto">
          {/* Subtle decoration lines */}
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80')` }} />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-tr from-[#1E2B16] via-transparent to-black/30 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#FAFAF7] leading-tight">
              Ready to Develop Your <span className="font-serif italic text-[#ebd9bd]">Fragrance?</span>
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
              Whether you're launching a new product or enhancing an existing formulation, our team is ready to help bring your fragrance vision to life.
            </p>
            <div className="pt-2">
              <button 
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#b38b4d] hover:bg-[#ebd9bd] text-white hover:text-[#1E2B16] font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg focus:outline-none"
              >
                Request a Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
