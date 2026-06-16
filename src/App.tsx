import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Menu, X, HelpCircle, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { AppTab, BlogArticle } from './types';

import ProessencesLogoWithTextSide from '../assets/proessencesLogoWithTextside.png';

// Import modular tab components
import HomeTab from './components/HomeTab';
import AboutTab from './components/AboutTab';
import ApplicationsTab from './components/ApplicationsTab';
import BlogTab from './components/BlogTab';
import ContactTab from './components/ContactTab';
import GlossaryTab from './components/GlossaryTab';
import FaqTab from './components/FaqTab';
import HomeCareTab from './components/HomeCareTab';
import FragranceCollectionsTab from './components/FragranceCollectionsTab';
import RegulationComplianceTab from './components/RegulationComplianceTab';
import GuideTab from './components/GuideTab';
import SamplesTab from './components/SamplesTab';
import AwardsRecognition from './components/AwardsRecognition';
import CommunityInitiatives from './components/CommunityInitiatives';
import PremiumDropdown from './components/PremiumDropdown';
import SimpleDropdown from './components/SimpleDropdown';
import MobileCollapsibleMenuItem from './components/MobileCollapsibleMenuItem';
import BackToTop from './components/BackToTop';
import TabLoading from './components/TabLoading';
import Chatbot from './components/Chatbot';
import PersonalCareTab from './components/PersonalCareTab';
import RoomCandlesTab from './components/RoomCandlesTab';
import CareersTab from './components/CareersTab';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [activeHeritageTab, setActiveHeritageTab] = useState<string>('where');
  const [selectedBlog, setSelectedBlog] = useState<BlogArticle | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState<boolean | null>(null);
  const [previousActiveTab, setPreviousActiveTab] = useState<AppTab | null>(null);

  // Manage tab switching with a small delay for perceived performance
  const handleTabChange = (tab: AppTab) => {
    setIsLoading(true);
    setPreviousActiveTab(activeTab);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => setIsLoading(false), 500); // 500ms min loading time
  };

  // Monitor scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 20; // Triggers on the first scroll of the section
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run immediately on tab change/mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  // Query API capability check on mount
  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setHasApiKey(data.hasApiKey);
      })
      .catch(() => {
        setHasApiKey(false);
      });
  }, []);

  const isHeaderSolid = isScrolled || (activeTab === 'blog' && selectedBlog !== null);

  return (
    <div className="min-h-screen bg-[#FCFBF8] flex flex-col font-sans antialiased text-[#6F685F]">
      
      <Helmet>
        <title>{`Proessences | ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}</title>
        <meta name="description" content={`Proessences World of Fragrance - ${activeTab} page`} />
      </Helmet>

      {isLoading && <TabLoading />}
      <BackToTop />

      {/* HEADER BAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderSolid ? 'bg-[#FCFBF8] shadow-xs border-b border-[#EEE8DD]' : 'bg-transparent'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo Brand Link */}
          <div 
            id="brand-logo-container"
            className="flex items-center gap-3.5 cursor-pointer group" 
            onClick={() => { handleTabChange('home'); setSelectedBlog(null); }}
          >
            <img 
              src={ProessencesLogoWithTextSide} 
              alt="Proessences Logo" 
              className={`h-20 sm:h-[5.5rem] w-auto transition-all duration-300 group-hover:scale-[1.03] ${isHeaderSolid ? '' : 'filter-gold'}`} 
            />
          </div>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {[
              { id: 'home', label: 'Home' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => handleTabChange(tab.id as AppTab)}
                className={`relative py-1.5 text-[11px] font-sans font-normal tracking-widest uppercase transition-colors duration-150 cursor-pointer focus:outline-none ${
                  isHeaderSolid 
                    ? (activeTab === tab.id ? 'text-[#1E2B16]' : 'text-[#6F685F] hover:text-[#1E2B16]')
                    : (activeTab === tab.id ? 'text-[#FCFBF8]' : 'text-[#FCFBF8]/70 hover:text-[#FCFBF8]')
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTabUnderline" 
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-current" 
                  />
                )}
              </button>
            ))}
            <SimpleDropdown 
              label="About Us" 
              items={['Our History', 'Awards & Recognition', 'Community Initiatives', 'Glossary of Fragrance Terms', 'Frequently Asked Questions | Fragrance Creation']} 
              isScrolled={isHeaderSolid}
              onSelect={(item) => {
                if (item === 'Awards & Recognition') handleTabChange('awards');
                else if (item === 'Community Initiatives') handleTabChange('community');
                else if (item === 'Glossary of Fragrance Terms') handleTabChange('glossary');
                else if (item === 'Frequently Asked Questions | Fragrance Creation') handleTabChange('faq');
                else handleTabChange('about');
              }}
            />
            <SimpleDropdown 
              label="Fragrance Oil Creation" 
              items={[
                'Our Fragrance Oil Collections',
                'Fragrance Regulation and Compliance',
                'Our Technical Expertise',
                'Natural Fragrances, Essential Oils and Fragrance Oils – Our Guide',
                'Fragrance Application Samples'
              ]}
              isScrolled={isHeaderSolid}
              onSelect={(item) => {
                if (item === 'Our Fragrance Oil Collections') handleTabChange('collections');
                else if (item === 'Fragrance Regulation and Compliance') handleTabChange('regulation');
                else if (item === 'Our Technical Expertise') handleTabChange('about');
                else if (item.startsWith('Natural Fragrances')) handleTabChange('guide');
                else if (item === 'Fragrance Application Samples') handleTabChange('samples');
              }}
            />
            <SimpleDropdown 
              label="Fragrance Applications" 
              items={[
                'Perfume & Fine Fragrance',
                'Personal Care & Beauty',
                'Home Care & Cleaning',
                'Room & Candles Fragrances',
                'Car Care Fragrances',
                'Flavours'
              ]}
              isScrolled={isHeaderSolid}
              onSelect={(item) => {
                if (item === 'Perfume & Fine Fragrance') handleTabChange('applications');
                else if (item === 'Personal Care & Beauty') handleTabChange('personal-care');
                else if (item === 'Home Care & Cleaning') handleTabChange('home-care');
                else if (item === 'Room & Candles Fragrances') handleTabChange('room-candles');
                else if (item === 'Car Care Fragrances') handleTabChange('applications');
                else if (item === 'Flavours') handleTabChange('applications');
                else handleTabChange('applications');
              }}
            />
            <button
              id="tab-btn-blog"
              onClick={() => handleTabChange('blog')}
              className={`relative py-1.5 text-[11px] font-sans font-normal tracking-widest uppercase transition-colors duration-150 cursor-pointer focus:outline-none ${
                isHeaderSolid 
                  ? (activeTab === 'blog' ? 'text-[#1E2B16]' : 'text-[#6F685F] hover:text-[#1E2B16]')
                  : (activeTab === 'blog' ? 'text-[#FCFBF8]' : 'text-[#FCFBF8]/70 hover:text-[#FCFBF8]')
              }`}
            >
              Blog
              {activeTab === 'blog' && (
                <motion.div 
                  layoutId="activeTabUnderline" 
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-current" 
                />
              )}
            </button>
            <SimpleDropdown 
              label="Contact Us" 
              id="contact-dropdown"
              items={['Inquiry', 'Careers']}
              isScrolled={isHeaderSolid}
              onSelect={(item) => {
                setSelectedBlog(null);
                if (item === 'Careers') {
                  handleTabChange('careers');
                } else {
                  handleTabChange('contact');
                }
              }}
            />
          </nav>
          
           <button 
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             className={`lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-[#596E4E] rounded transition-colors ${
               isHeaderSolid ? 'text-[#1E2B16]' : 'text-[#FCFBF8]'
             }`}
             aria-label="Toggle Navigation Screen"
             id="mobile-menu-burger"
           >
             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </header>

      {/* MOBILE LAYOUT MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed top-[73px] left-0 right-0 bg-[#FCFBF8] border-b border-[#EEE8DD] shadow-lg z-40 p-4 flex flex-col gap-2.5"
            >
              {/* Mobile menu items */}
              <button
                onClick={() => { handleTabChange('home'); setMobileMenuOpen(false); }}
                className="w-full py-3 px-4 text-left text-xs font-semibold tracking-wider uppercase transition-all duration-150 text-[#6F685F] hover:bg-[#F7F4EE] hover:text-[#1E2B16] rounded-lg"
              >
                Home
              </button>

              <MobileCollapsibleMenuItem 
                label="About Us" 
                items={[
                  { label: 'About', action: () => { handleTabChange('about'); setMobileMenuOpen(false); }},
                  { label: 'Awards & Recognition', action: () => { handleTabChange('awards'); setMobileMenuOpen(false); }},
                  { label: 'Community Initiatives', action: () => { handleTabChange('community'); setMobileMenuOpen(false); }},
                  { label: 'Glossary of Fragrance Terms', action: () => { handleTabChange('glossary'); setMobileMenuOpen(false); }},
                  { label: 'Frequently Asked Questions', action: () => { handleTabChange('faq'); setMobileMenuOpen(false); }}
                ]}
              />

              <MobileCollapsibleMenuItem
                label="Fragrance Oil Creation"
                items={[
                  { label: 'Our Fragrance Oil Collections', action: () => { handleTabChange('collections'); setMobileMenuOpen(false); }},
                  { label: 'Fragrance Regulation and Compliance', action: () => { handleTabChange('regulation'); setMobileMenuOpen(false); }},
                  { label: 'Our Technical Expertise', action: () => { handleTabChange('about'); setMobileMenuOpen(false); }},
                  { label: 'Guide to Fragrances', action: () => { handleTabChange('guide'); setMobileMenuOpen(false); }},
                  { label: 'Fragrance Application Samples', action: () => { handleTabChange('samples'); setMobileMenuOpen(false); }}
                ]}
              />

              <MobileCollapsibleMenuItem
                label="Fragrance Applications"
                items={[
                  { label: 'Perfume & Fine Fragrance', action: () => { handleTabChange('applications'); setMobileMenuOpen(false); }},
                  { label: 'Personal Care & Beauty', action: () => { handleTabChange('personal-care'); setMobileMenuOpen(false); }},
                  { label: 'Home Care & Cleaning', action: () => { handleTabChange('home-care'); setMobileMenuOpen(false); }},
                  { label: 'Room & Candles Fragrances', action: () => { handleTabChange('room-candles'); setMobileMenuOpen(false); }},
                  { label: 'Car Care Fragrances', action: () => { handleTabChange('applications'); setMobileMenuOpen(false); }},
                  { label: 'Flavours', action: () => { handleTabChange('applications'); setMobileMenuOpen(false); }}
                ]}
              />

              <button
                onClick={() => { handleTabChange('blog'); setMobileMenuOpen(false); }}
                className="w-full py-3 px-4 text-left text-xs font-semibold tracking-wider uppercase transition-all duration-150 text-[#6F685F] hover:bg-[#F7F4EE] hover:text-[#1E2B16] rounded-lg"
              >
                Blog
              </button>

              <MobileCollapsibleMenuItem
                label="Contact Us"
                items={[
                  { label: 'Inquiry', action: () => { handleTabChange('contact'); setMobileMenuOpen(false); }},
                  { label: 'Careers', action: () => { handleTabChange('careers'); setMobileMenuOpen(false); }}
                ]}
              />
              
              {/* Mobile CTA removed */}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PRIMARY TAB PANELS CONTAINER */}
      <main className="flex-grow w-full">
        <AnimatePresence mode="wait">
          
          {activeTab === 'home' && (
            <HomeTab 
              setActiveTab={handleTabChange} 
              setSelectedBlog={setSelectedBlog} 
            />
          )}

          {activeTab === 'about' && (
            <AboutTab 
              setActiveTab={handleTabChange}
              activeHeritageTab={activeHeritageTab}
              setActiveHeritageTab={setActiveHeritageTab}
            />
          )}

          {activeTab === 'awards' && (
            <AwardsRecognition setActiveTab={handleTabChange} />
          )}

          {activeTab === 'community' && (
            <CommunityInitiatives setActiveTab={handleTabChange} />
          )}

          {activeTab === 'applications' && (
            <ApplicationsTab 
              setActiveTab={handleTabChange} 
            />
          )}

          {activeTab === 'collections' && (
            <FragranceCollectionsTab setActiveTab={handleTabChange} />
          )}

          {activeTab === 'regulation' && (
            <RegulationComplianceTab setActiveTab={handleTabChange} />
          )}

          {activeTab === 'guide' && (
            <GuideTab setActiveTab={handleTabChange} />
          )}

          {activeTab === 'samples' && (
            <SamplesTab setActiveTab={handleTabChange} />
          )}

          {activeTab === 'glossary' && (
            <GlossaryTab setActiveTab={handleTabChange} />
          )}

          {activeTab === 'faq' && (
            <FaqTab setActiveTab={handleTabChange} />
          )}

          {activeTab === 'home-care' && (
            <HomeCareTab setActiveTab={handleTabChange} />
          )}

          {activeTab === 'personal-care' && (
            <PersonalCareTab setActiveTab={handleTabChange} />
          )}

          {activeTab === 'room-candles' && (
            <RoomCandlesTab setActiveTab={handleTabChange} />
          )}

          {activeTab === 'blog' && (
            <BlogTab 
              setActiveTab={handleTabChange}
              selectedBlog={selectedBlog}
              setSelectedBlog={setSelectedBlog}
              previousActiveTab={previousActiveTab}
            />
          )}

          {activeTab === 'contact' && (
            <ContactTab 
              setActiveTab={handleTabChange}
              setActiveHeritageTab={setActiveHeritageTab}
            />
          )}

          {activeTab === 'careers' && (
            <CareersTab 
              setActiveTab={handleTabChange}
            />
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER AREA */}
      <footer className="bg-[#13200F] text-[#D2DCD0] mt-12 py-16 md:py-20 border-t-2 border-[#9E7A3D]/20 relative overflow-hidden">
        {/* Subtle decorative gold leaf border or subtle top line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#9E7A3D]/30 to-transparent" />
        
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={ProessencesLogoWithTextSide} 
                alt="Proessences Logo" 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <p className="text-[#D2DCD0]/90 leading-relaxed text-sm max-w-md font-light">
              Proessences, Inc. is a leading supplier and distributor of fragrances, perfumes, basic aroma chemicals and natural essential oils in the Philippines for CARVANSONS, UK. Since our establishment, we are constantly in pursue of product excellence to create best-selling solutions for our customers.
            </p>
          </div>

          {/* Column 2: Olfactive Portfolio */}
          <div className="md:col-span-6 lg:col-span-3 space-y-5">
            <span className="block font-serif text-sm font-semibold tracking-wider text-[#D1B37A] uppercase">Olfactive Portfolio</span>
            <div className="flex flex-col gap-3 text-sm">
              {[
                { label: 'Fine Fragrances', tab: 'applications' },
                { label: 'Ambient Home Scenting', tab: 'applications' },
                { label: 'Personal & Skincare', tab: 'applications' },
                { label: 'Corporate Heritage', tab: 'about' },
                { label: 'Global Network Map', tab: 'contact' }
              ].map((link, idx) => (
                <button
                  key={idx}
                  id={`footer-link-${idx}`}
                  onClick={() => {
                    handleTabChange(link.tab as AppTab);
                    setSelectedBlog(null);
                  }}
                  className="text-left transition-colors duration-150 cursor-pointer bg-transparent border-none text-[#D2DCD0] hover:text-[#FCFBF8] hover:underline font-light w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Office */}
          <div className="md:col-span-6 lg:col-span-4 space-y-5">
            <span className="block font-[#D1B37A] text-sm font-semibold tracking-wider text-[#D1B37A] uppercase">Office & Contacts</span>
            <div className="text-[#D2DCD0] font-sans leading-relaxed text-sm font-light space-y-3">
              <p>
                <strong className="text-[#FCFBF8]">Proessences Inc.</strong><br />
                10 Neptune Street Bahay Toro, Quezon City 1106, Second District, Philippines.
              </p>
              <div className="space-y-1.5 text-[13px] text-[#D2DCD0]/80 font-mono leading-relaxed pt-1">
                <div>Landline: (02) 8920-9848 / (02) 8920-9735</div>
                <div>CP/WhatsApp: 0918-9859643</div>
                <div>Email: gemma@proessences.com</div>
              </div>
              <div className="flex gap-4.5 pt-2">
                <a 
                  href="https://www.instagram.com/proessencesinc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#D2DCD0] hover:text-[#FCFBF8] transition-colors duration-150 p-1 bg-white/5 rounded-full hover:bg-white/10"
                  aria-label="Instagram Link"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1BFqGReRHW/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#D2DCD0] hover:text-[#FCFBF8] transition-colors duration-150 p-1 bg-white/5 rounded-full hover:bg-white/10"
                  aria-label="Facebook Link"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-xs text-[#7C8C6A] font-mono">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Proessences Ltd. All rights reserved.
          </div>
          <div className="text-center md:text-center text-[#748762]">
            Made by <span className="text-[#a4b494] hover:text-[#FCFBF8] transition-colors duration-150">DevCAD Solutions</span>
          </div>
          <div className="text-center md:text-right">
            <a href="#" className="hover:text-[#FCFBF8] transition-colors duration-150">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}
