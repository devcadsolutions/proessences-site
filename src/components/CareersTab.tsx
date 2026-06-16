import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Heart, Award, ArrowRight, User, Mail, Link as LinkIcon, FileText, CheckCircle2 } from 'lucide-react';
import { AppTab } from '../types';

interface CareersTabProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function CareersTab({ setActiveTab }: CareersTabProps) {
  const [applyForm, setApplyForm] = useState({
    name: '',
    email: '',
    role: 'Laboratory Chemist',
    portfolio: '',
    coverLetter: ''
  });
  const [success, setSuccess] = useState(false);

  const rolesList = [
    {
      title: 'Senior Perfumer / Olfactive Designer',
      department: 'Research & Olfactive Arts',
      location: 'Technical HQ - Quezon City',
      type: 'Full-time',
      desc: 'Formulate bespoke fragrance compounds across fine perfumery, personal cosmetics, and home care applications. Bring 8+ years of expert GC-MS analysis, safety rule compliance, and raw chemical design mastery.',
    },
    {
      title: 'QC Laboratory Chemist',
      department: 'Quality Assurance & Science',
      location: 'Technical HQ - Quezon City',
      type: 'Full-time',
      desc: 'Validate physical and chemical characteristics of all inbound and manufactured batches. Manage key equipment including densitometers, polarimeters, and refractive index monitors to secure absolute consistency.',
    },
    {
      title: 'Regulatory Affairs & Documentation Specialist',
      department: 'Global Safety & Compliance',
      location: 'Technical HQ - Quezon City',
      type: 'Full-time',
      desc: 'Author SDS checklists and guarantee strict conformity to ASEAN Cosmetic Directive (ACD), IFRA limits, and safety standards. Guide international clients through raw ingredient validation procedures.',
    },
    {
      title: 'B2B Fragrance Account Manager',
      department: 'Corporate Sales & Partnerships',
      location: 'Global Office - Quezon City',
      type: 'Full-time',
      desc: 'Establish powerful linkages with brand procurement officers, cosmetics product startups, and industrial chemists. Formulate professional corporate pitches and steer client compounding briefs.',
    }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyForm.name || !applyForm.email || !applyForm.coverLetter) {
      return;
    }
    setSuccess(true);
    setApplyForm({
      name: '',
      email: '',
      role: 'Laboratory Chemist',
      portfolio: '',
      coverLetter: ''
    });
  };

  return (
    <motion.div
      key="careers-tab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
      id="careers-top"
    >
      {/* COMPACT SUBPAGE HEADER */}
      <section 
        className="relative w-full bg-cover bg-center py-20 md:py-32 overflow-hidden text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581093588401-fbb62a02f125?auto=format&fit=crop&w=1920&q=85')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#13200F]/95 via-[#1E2E1A]/85 to-transparent" />
        
        {/* Decorative gold line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#b38b4d]/20 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#b38b4d]/10 border border-[#b38b4d]/25 text-[#ebd9bd] text-[10px] font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Join the Pioneers
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5.5xl font-normal leading-tight tracking-tight text-[#faf8f5]">
            Where Science Meets <span className="font-serif italic text-[#ebd9bd]">Olfactive Artistry.</span>
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed font-light">
            Embark on a rewarding journey at Proessences. Work with seasoned master perfumers, top-tier research chemists, and global trade experts to craft the world's most evocative fragrances.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById('openings-section');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded-full bg-[#1E2B16] hover:bg-[#596E4E] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-150 cursor-pointer shadow focus:outline-none"
            >
              Explore Openings
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('apply-section');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded-full bg-transparent border border-white/35 hover:bg-white/10 hover:border-white text-white font-semibold text-xs tracking-wider uppercase transition-all duration-150 cursor-pointer focus:outline-none"
            >
              Submit CV Directly
            </button>
          </div>
        </div>
      </section>

      {/* BODY CONTENT */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-24">
        
        {/* SECTION 1: CULTURE & VALUES */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] bg-[#EFF1ED] px-2 py-1 rounded inline-block">Our Values</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2B16]">
              A Creative Ecosystem Grounded in Rigor and Inspiration
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              At Proessences, we cultivate a workspace where technical genius and unbridled imagination thrive in balance. Whether optimizing safety protocols under IFRA directives or sourcing premium botanical notes from natural farms, each team member is key to our global quality story.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-[#b38b4d]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5 text-[#b38b4d]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#1E2B16]">Human-Centered Care</h4>
                  <p className="text-gray-500 text-[11px] font-light">Comprehensive medical health covers, parental wellness loops, and lifelong technical training.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-[#596E4E]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-3.5 h-3.5 text-[#596E4E]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#1E2B16]">Award-Winning Innovation</h4>
                  <p className="text-gray-500 text-[11px] font-light">Work inside labs recognized by regional cosmetics networks for major breakthroughs in sustainability.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded border border-[#ece7de] p-6 text-left space-y-4 shadow-xs">
              <span className="font-serif text-[15px] font-bold tracking-wider text-[#b38b4d] uppercase block">History</span>
              <div>
                <h4 className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider">Establishment & Heritage</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed font-light mt-1">[Company details are currently being finalized]</p>
              </div>
            </div>

            <div className="bg-white rounded border border-[#ece7de] p-6 text-left space-y-4 shadow-xs">
              <span className="font-serif text-3xl text-[#596E4E] font-bold">100%</span>
              <div>
                <h4 className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider">IFRA & safety Compliant</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed font-light mt-1">Uncompromising emphasis on safety matrices, SDS sheets, and clean cosmetic engineering.</p>
              </div>
            </div>

            <div className="bg-white rounded border border-[#ece7de] p-6 text-left space-y-4 shadow-xs">
              <span className="font-serif text-[15px] font-bold tracking-wider text-[#b38b4d] uppercase block">Distribution</span>
              <div>
                <h4 className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider">Local & Regional Network</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed font-light mt-1">[Company details are currently being finalized]</p>
              </div>
            </div>

            <div className="bg-white rounded border border-[#ece7de] p-6 text-left space-y-4 shadow-xs">
              <span className="font-serif text-3xl text-[#596E4E] font-bold">Green</span>
              <div>
                <h4 className="text-xs font-bold text-[#1E2B16] uppercase tracking-wider">Eco-Friendly Protocols</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed font-light mt-1">Pioneers of biodegradable compound extraction and solar-powered chemical laboratory operations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: OPENINGS LIST */}
        <section id="openings-section" className="space-y-10 scroll-mt-24">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] bg-[#EFF1ED] px-2 py-1 rounded inline-block">Active Openings</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2B16]">Explore Available Positions</h2>
            <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
              We recruit globally minded thinkers, chemists, and commercial partners who hold a deep appreciation for the finer sensory details.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {rolesList.map((itm, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#ece7de] rounded p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#6E968D] transition-colors duration-300 shadow-xs"
              >
                <div className="space-y-3 text-left max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                      {itm.department}
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-[#EBF4F0] text-[#1E2B16] px-2 py-0.5 rounded">
                      {itm.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1E2B16]">
                    {itm.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">
                    {itm.desc}
                  </p>
                  <p className="text-[10px] text-gray-400 font-mono">
                    📍 {itm.location}
                  </p>
                </div>
                <div className="shrink-0 flex items-center">
                  <button 
                    onClick={() => {
                      setApplyForm(prev => ({ ...prev, role: itm.title }));
                      const element = document.getElementById('apply-section');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#1E2B16] border border-[#1E2B16]/25 hover:border-[#1E2B16] rounded transition-all duration-150 cursor-pointer focus:outline-none"
                  >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: DIRECT APPLICATIONS PORTAL */}
        <section id="apply-section" className="bg-white border border-[#ece7de] rounded p-8 md:p-12 max-w-3xl mx-auto space-y-8 scroll-mt-24 shadow-sm">
          <div className="text-center max-w-xl mx-auto space-y-2 pb-4 border-b border-gray-100">
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#b38b4d] font-bold block">Submit Application</span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1E2B16]">Global Talents Portal</h3>
            <p className="text-gray-400 text-xs font-light">Complete the form below to file your candidacy immediately.</p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#faf8f4] border border-[#ece7de] rounded p-8 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#1E2B16] text-white flex items-center justify-center mx-auto text-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-[#1E2B16] text-lg font-bold">Candidacy Successfully Lodged</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-light font-sans max-w-md mx-auto">
                  Our Human Resources department has received your profile and CV overview. We will coordinate directly with our lab executives and contact you back should your credentials align.
                </p>
              </div>
              <button
                onClick={() => setSuccess(false)}
                className="text-xs font-bold text-[#b38b4d] hover:text-[#1E2B16] underline uppercase tracking-widest transition-colors focus:outline-none"
              >
                File another application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleApplySubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5ClassName">
                  <label htmlFor="appl-name" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] block">Full Name:</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      id="appl-name"
                      required
                      value={applyForm.name}
                      onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full pl-9 pr-4 py-2 bg-white border border-[#ece7de] text-xs rounded focus:outline-none focus:ring-1 focus:ring-[#596E4E]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="appl-email" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] block">Email Address:</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input 
                      type="email" 
                      id="appl-email"
                      required
                      value={applyForm.email}
                      onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                      placeholder="e.g. john.doe@mail.com"
                      className="w-full pl-9 pr-4 py-2 bg-white border border-[#ece7de] text-xs rounded focus:outline-none focus:ring-1 focus:ring-[#596E4E]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="appl-role" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] block">Position of Interest:</label>
                  <select 
                    id="appl-role"
                    value={applyForm.role}
                    onChange={(e) => setApplyForm({ ...applyForm, role: e.target.value })}
                    className="w-full px-4 py-2 bg-white border border-[#ece7de] text-xs rounded focus:outline-none"
                  >
                    <option value="Senior Perfumer">Senior Perfumer / Olfactive Designer</option>
                    <option value="Laboratory Chemist">QC Laboratory Chemist</option>
                    <option value="Regulatory Specialist">Regulatory Affairs & Documentation Specialist</option>
                    <option value="B2B Account Manager">B2B Fragrance Account Manager</option>
                    <option value="General Internship">General Laboratory Internship</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="appl-portfolio" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] block">LinkedIn or Resume URL:</label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input 
                      type="url" 
                      id="appl-portfolio"
                      value={applyForm.portfolio}
                      onChange={(e) => setApplyForm({ ...applyForm, portfolio: e.target.value })}
                      placeholder="e.g. https://linkedin.com/in/username"
                      className="w-full pl-9 pr-4 py-2 bg-white border border-[#ece7de] text-xs rounded focus:outline-none focus:ring-1 focus:ring-[#596E4E]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="appl-letter" className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] block">Cover Note / Expertise Overview:</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                  <textarea 
                    id="appl-letter"
                    required
                    rows={4}
                    value={applyForm.coverLetter}
                    onChange={(e) => setApplyForm({ ...applyForm, coverLetter: e.target.value })}
                    placeholder="Provide a quick overview of your background, academic qualifications, and industrial experiences..."
                    className="w-full pl-9 pr-4 py-3 bg-white border border-[#ece7de] text-xs rounded focus:outline-none focus:ring-1 focus:ring-[#596E4E]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#1E2B16] hover:bg-[#596E4E] text-white text-xs font-bold uppercase tracking-widest rounded transition-colors duration-150 cursor-pointer shadow-xs focus:outline-none"
              >
                Submit Application To HR
              </button>
            </form>
          )}
        </section>

      </div>
    </motion.div>
  );
}
