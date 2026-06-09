import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Menu, X, HelpCircle, ArrowRight } from 'lucide-react';
import { AppTab, BlogArticle } from './types';

// Import modular tab components
import HomeTab from './components/HomeTab';
import AboutTab from './components/AboutTab';
import ApplicationsTab from './components/ApplicationsTab';
import BlogTab from './components/BlogTab';
import ContactTab from './components/ContactTab';
import AwardsRecognition from './components/AwardsRecognition';
import CommunityInitiatives from './components/CommunityInitiatives';
import PremiumDropdown from './components/PremiumDropdown';
import SimpleDropdown from './components/SimpleDropdown';
import BackToTop from './components/BackToTop';
import TabLoading from './components/TabLoading';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [activeHeritageTab, setActiveHeritageTab] = useState<string>('where');
  const [selectedBlog, setSelectedBlog] = useState<BlogArticle | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState<boolean | null>(null);

  // Manage tab switching with a small delay for perceived performance
  const handleTabChange = (tab: AppTab) => {
    setIsLoading(true);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => setIsLoading(false), 500); // 500ms min loading time
  };

  // Monitor scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div className="min-h-screen bg-[#faf8f4] flex flex-col font-sans antialiased text-[#1e2524]">
      
      <Helmet>
        <title>{`Proessences | ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}</title>
        <meta name="description" content={`Proessences World of Fragrance - ${activeTab} page`} />
      </Helmet>

      {isLoading && <TabLoading />}
      <BackToTop />

      {/* HEADER BAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm border-b border-[#e9e5de]' : 'bg-transparent'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo Brand Link */}
          <div 
            id="brand-logo-container"
            className="flex items-center gap-3.5 cursor-pointer group" 
            onClick={() => { handleTabChange('home'); setSelectedBlog(null); }}
          >
            <div className={`h-11 w-11 flex items-center justify-center font-serif font-bold text-xl rounded-lg border transition-transform group-hover:scale-[1.03] ${isScrolled ? 'bg-[#004d44] text-[#fbfaf6] border-[#00876e]/20' : 'bg-white/20 backdrop-blur-sm text-white border-white/20'}`}>
              C
            </div>
            <div>
              <span className={`font-serif text-base lg:text-lg font-bold tracking-tight block leading-none ${isScrolled ? 'text-[#004d44]' : 'text-white'}`}>
                Proessences
              </span>
              <p className={`text-[9px] tracking-wider font-medium mt-1 ${isScrolled ? 'text-gray-400' : 'text-white/70'}`}>
                A World of Fragrance
              </p>
            </div>
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
                className={`relative py-1.5 text-[11px] font-sans font-medium tracking-widest uppercase transition-colors duration-150 cursor-pointer focus:outline-none ${
                  isScrolled 
                    ? (activeTab === tab.id ? 'text-[#004d44] font-semibold' : 'text-gray-500 hover:text-[#004d44]')
                    : (activeTab === tab.id ? 'text-white font-semibold' : 'text-white/70 hover:text-white')
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
              isScrolled={isScrolled}
              onSelect={(item) => {
                if (item === 'Awards & Recognition') handleTabChange('awards');
                else if (item === 'Community Initiatives') handleTabChange('community');
                else handleTabChange('about');
              }}
            />
            <SimpleDropdown 
              label="Bespoke Fragrance Oil Creation" 
              items={[
                'Our Fragrance Oil Collections',
                'Fragrance Regulation and Compliance',
                'Our Technical Expertise',
                'Natural Fragrances, Essential Oils and Fragrance Oils – Our Guide',
                'Fragrance Application Samples'
              ]}
              isScrolled={isScrolled}
              onSelect={() => handleTabChange('applications')}
            />
            <SimpleDropdown 
              label="Fragrance Applications" 
              items={[
                'Car Care Fragrances',
                'Home Care & Cleaning',
                'Perfume & Fine Fragrance',
                'Personal Care and Beauty',
                'Room and Candles Fragrances'
              ]}
              isScrolled={isScrolled}
              onSelect={() => handleTabChange('applications')}
            />
            <button
              id="tab-btn-blog"
              onClick={() => handleTabChange('blog')}
              className={`relative py-1.5 text-[11px] font-sans font-medium tracking-widest uppercase transition-colors duration-150 cursor-pointer focus:outline-none ${
                isScrolled 
                  ? (activeTab === 'blog' ? 'text-[#004d44] font-semibold' : 'text-gray-500 hover:text-[#004d44]')
                  : (activeTab === 'blog' ? 'text-white font-semibold' : 'text-white/70 hover:text-white')
              }`}
            >
              Fragrance Blog
              {activeTab === 'blog' && (
                <motion.div 
                  layoutId="activeTabUnderline" 
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-current" 
                />
              )}
            </button>
            <SimpleDropdown 
              label="Contact Us" 
              items={['Careers']}
              isScrolled={isScrolled}
              onSelect={() => handleTabChange('contact')}
            />
          </nav>
          
           <button 
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             className="lg:hidden p-2 text-[#004d44] focus:outline-none focus:ring-2 focus:ring-[#00876e] rounded"
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
              className="lg:hidden fixed top-[73px] left-0 right-0 bg-white border-b border-[#e9e6df] shadow-lg z-40 p-4 flex flex-col gap-2.5"
            >
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'applications', label: 'Fragrance Applications' },
                { id: 'blog', label: 'Fragrance News Blog' },
                { id: 'contact', label: 'Contact Technical HQ' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  id={`mobile-tab-btn-${tab.id}`}
                  onClick={() => {
                    handleTabChange(tab.id as AppTab);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-3 text-left px-4 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-150 ${
                    activeTab === tab.id 
                      ? 'bg-[#faf8f4] text-[#00876e] border-l-4 border-[#00876e]' 
                      : 'text-[#6e7776] hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              
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
              setActiveTab={setActiveTab} 
              setSelectedBlog={setSelectedBlog} 
            />
          )}

          {activeTab === 'about' && (
            <AboutTab 
              setActiveTab={setActiveTab}
              activeHeritageTab={activeHeritageTab}
              setActiveHeritageTab={setActiveHeritageTab}
            />
          )}

          {activeTab === 'awards' && (
            <AwardsRecognition setActiveTab={setActiveTab} />
          )}

          {activeTab === 'community' && (
            <CommunityInitiatives setActiveTab={setActiveTab} />
          )}

          {activeTab === 'applications' && (
            <ApplicationsTab 
              setActiveTab={setActiveTab} 
            />
          )}

          {activeTab === 'blog' && (
            <BlogTab 
              setActiveTab={setActiveTab}
              selectedBlog={selectedBlog}
              setSelectedBlog={setSelectedBlog}
            />
          )}

          {activeTab === 'contact' && (
            <ContactTab 
              setActiveTab={setActiveTab}
              setActiveHeritageTab={setActiveHeritageTab}
            />
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER AREA */}
      <footer className="bg-[#0b1c19] text-gray-300 mt-12 py-14 border-t-2 border-[#b38b4d]/20 relative overflow-hidden">
        {/* Subtle decorative gold leaf border or subtle top line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#b38b4d]/30 to-transparent" />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 text-xs">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center bg-[#004d44] text-[#faf8f4] font-serif font-bold text-base p-1 rounded border border-[#00876e]/20">
                C
              </div>
              <span className="font-serif text-lg font-bold tracking-tight text-white uppercase">
                Proessences
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-[12px] max-w-sm font-light">
              Proessences is a global perfume and fragrance base manufacturer creating high-quality bespoke fragrance compounds and essential oils since 1941. We serve diverse client products in home, beauty, personal care, and industrial sectors worldwide.
            </p>
          </div>

          {/* Useful links columns */}
          <div className="md:col-span-3 space-y-4">
            <span className="block font-serif text-sm font-semibold tracking-wide text-white uppercase">Olfactive Portfolio</span>
            <div className="flex flex-col gap-2.5 text-gray-400 text-[12px]">
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
                  className="text-left hover:text-white hover:underline p-0.5 transition-colors cursor-pointer bg-transparent border-none text-gray-400 font-light"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal and Registration */}
          <div className="md:col-span-4 space-y-4">
            <span className="block font-serif text-sm font-semibold tracking-wide text-[#c4a46c] uppercase">Corporate HQ</span>
            <p className="text-gray-400 font-mono leading-relaxed text-[11px] font-light">
              <strong className="text-gray-350">Proessences Ltd</strong><br />
              Knowsley Park Way,<br />
              Knowsley Road Industrial Estate,<br />
              Haslingden, Rossendale, Lancashire,<br />
              BB4 4RS, United Kingdom.<br />
              <span className="inline-block mt-2">Phone: +44 161 766 3768</span>
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-mono">
          <div>
            © {new Date().getFullYear()} Proessences Ltd. Registered in England & Wales Reg No: 08656189. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>|</span>
            <span onClick={() => { handleTabChange('contact'); }} className="hover:text-white transition-colors cursor-pointer">Local Distribution Map</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
