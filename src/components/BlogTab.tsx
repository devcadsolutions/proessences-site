import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { AppTab, BlogArticle } from '../types';
import { BLOGS } from '../data';

interface BlogTabProps {
  setActiveTab: (tab: AppTab) => void;
  selectedBlog: BlogArticle | null;
  setSelectedBlog: (blog: BlogArticle | null) => void;
}

export default function BlogTab({ setActiveTab, selectedBlog, setSelectedBlog }: BlogTabProps) {
  const scrollToNext = () => {
    const nextSection = document.getElementById('blog-content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      key="blog-tab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      {selectedBlog ? (
        /* SINGLE READ ARTICLE VIEW */
        <div className="space-y-6 max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#b38b4d] font-bold">Olfactive Editorial</span>
            <button
              onClick={() => setSelectedBlog(null)}
              id="blog-back-btn"
              className="px-4 py-1.5 border border-[#ece7de] bg-white text-[#555f5e] text-xs font-semibold rounded-full uppercase tracking-wider hover:bg-[#fafaf7] cursor-pointer shadow-xs transition-colors focus:outline-none flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Insights
            </button>
          </div>

          <article className="bg-white border border-[#ece7de] rounded overflow-hidden p-6 md:p-10 space-y-6">
            <div className="h-[240px] md:h-[350px] overflow-hidden rounded relative select-none">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#004d44] text-white px-2.5 py-1 rounded text-[9px] font-mono uppercase tracking-wider">
                  {selectedBlog.category}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-400 font-mono uppercase">
              <span>Published: {selectedBlog.date}</span>
              <span>•</span>
              <span>{selectedBlog.readTime}</span>
            </div>

            <h2 className="font-serif text-2xl md:text-3.5xl font-normal text-[#004d44] leading-tight">
              {selectedBlog.title}
            </h2>

            <div className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line space-y-4 font-light text-justify">
              {selectedBlog.content}
            </div>

            <div className="pt-6 border-t border-[#ece7de] flex flex-wrap gap-2 items-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold mr-2">Core Tags:</span>
              {selectedBlog.tags.map((tag, tIdx) => (
                <span key={tIdx} className="bg-[#faf9f6] border border-[#ece7de] text-[10px] font-mono uppercase px-2.5 py-1 rounded text-[#b38b4d] font-semibold">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Custom Scent Call to Action */}
            <div className="pt-4">
              <div className="bg-[#faf8f4] p-6 rounded border border-[#ece7de] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
                <div className="space-y-1">
                  <h4 className="font-serif font-normal text-[#004d44] text-base">Inspired by this formulation story?</h4>
                  <p className="text-xs text-gray-450 font-light font-sans">Reach out to our Lancashire technical team to request trial batch samples.</p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    setSelectedBlog(null);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="px-5 py-2 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer shadow-xs whitespace-nowrap focus:outline-none"
                >
                  Start Your Fragrance Project
                </button>
              </div>
            </div>
          </article>
        </div>
      ) : (
        /* ARTICLES FEED LIST */
        <div className="flex flex-col">
          {/* COMPACT SUBPAGE HEADER */}
          <section 
            id="hero-section"
            className="relative w-full bg-cover bg-center py-20 md:py-32 overflow-hidden text-white"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1920&q=85')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#031512]/95 via-[#031512]/80 to-transparent" />
            
            {/* Subtle decorative gold line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#b38b4d]/20 to-transparent" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#b38b4d]/10 border border-[#b38b4d]/25 text-[#ebd9bd] text-[10px] font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Scent Intelligence &amp; Forecasts
              </div>
              
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5.5xl font-normal leading-tight tracking-tight text-[#faf8f5]">
                Olfactive Insights &amp; <span className="font-serif italic text-[#ebd9bd]">Market Intelligence.</span>
              </h1>

              <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed font-light">
                Explore formulation guides, chromatography findings, raw material spotlights, and regulatory updates written by our development chemists.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <button 
                  onClick={scrollToNext}
                  className="px-6 py-2.5 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-150 cursor-pointer shadow focus:outline-none"
                >
                  View Editorial Feed
                </button>
                <button 
                  onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#ebd9bd] transition-colors focus:outline-none select-none"
                >
                  Contact Our Blenders &rarr;
                </button>
              </div>
            </div>
          </section>

          {/* SCROLLABLE MAIN FEED */}
          <div id="blog-content" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-16">

            {/* Intro summary banner */}
            <section className="bg-white rounded border border-[#ece7de] p-8 md:p-12 space-y-4 max-w-4xl mx-auto text-center">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e] block">Chemical Analysis Diary</span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#004d44] font-normal tracking-tight">
                A Comprehensive View of Modern Scent Development
              </h2>
              <p className="text-[#4e5554] text-xs sm:text-sm leading-relaxed font-light max-w-2xl mx-auto">
                Discover the raw botanical extractions, chemical formulation standards, and commercial perfume trajectories shaping global markets inside the Lancashire lab.
              </p>
            </section>

            {/* Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOGS.map((article) => (
                <div 
                  key={article.id} 
                  className="group bg-white rounded overflow-hidden border border-[#ece7de] hover:border-[#00876e]/25 transition-all duration-300 flex flex-col justify-between cursor-pointer text-left"
                  onClick={() => {
                    setSelectedBlog(article);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                >
                  <div>
                    <div className="h-44 overflow-hidden relative select-none">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-[#004d44]/90 backdrop-blur-xs px-2.5 py-0.5 rounded text-[8px] uppercase font-mono font-bold tracking-widest text-white">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-5 space-y-2">
                      <h4 className="font-serif text-base font-bold text-[#004d44] group-hover:text-[#b38b4d] transition-colors leading-snug line-clamp-1">
                        {article.title}
                      </h4>
                      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed font-light">
                        {article.summary}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-3 border-t border-[#ece7de]/30 flex items-center justify-between text-[10px] text-gray-400 font-mono">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </motion.div>
  );
}
