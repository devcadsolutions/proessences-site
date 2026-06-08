import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { AppTab, BlogArticle } from '../types';
import { BLOGS } from '../data';

interface BlogTabProps {
  setActiveTab: (tab: AppTab) => void;
  selectedBlog: BlogArticle | null;
  setSelectedBlog: (blog: BlogArticle | null) => void;
}

export default function BlogTab({ setActiveTab, selectedBlog, setSelectedBlog }: BlogTabProps) {
  return (
    <motion.div
      key="blog-tab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full flex flex-col"
    >
      {selectedBlog ? (
        /* SINGLE READ ARTICLE VIEW */
        <div className="space-y-6 max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#b38b4d] font-bold">Olfactive Editorial</span>
            <button
              onClick={() => setSelectedBlog(null)}
              id="blog-back-btn"
              className="px-4 py-1.5 border border-[#ece7de] bg-white text-[#555f5e] text-xs font-semibold rounded-full uppercase tracking-wider hover:bg-gray-50 cursor-pointer shadow-xs transition-colors focus:outline-none"
            >
              &larr; Back to Insights
            </button>
          </div>

          <article className="bg-white border border-[#ece7de] rounded-xl overflow-hidden shadow-xs p-6 md:p-10 space-y-6">
            <div className="h-[240px] md:h-[380px] overflow-hidden rounded-lg relative select-none">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#004d44] text-white px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider">
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

            {/* Custom Scent call to action */}
            <div className="pt-4">
              <div className="bg-[#faf9f6]/95 p-6 rounded-xl border border-[#ece7de] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
                <div className="space-y-1">
                  <h4 className="font-serif font-normal text-[#004d44] text-lg">Inspired by this formulation story?</h4>
                  <p className="text-xs text-gray-400 font-light">Reach out to our Lancashire technical team to request physical samples matching these compounds.</p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    setSelectedBlog(null);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="px-5 py-2.5 bg-[#004d44] hover:bg-[#00876e] text-white text-xs font-bold rounded-full uppercase tracking-wider transition-all duration-150 cursor-pointer shadow-xs whitespace-nowrap focus:outline-none"
                >
                  Inquire Online Today
                </button>
              </div>
            </div>
          </article>
        </div>
      ) : (
        /* ARTICLES FEED LIST */
        <div className="flex flex-col">
          {/* IMMERSIVE FULL-VIEWPORT HERO */}
          <section 
            id="hero-section"
            className="relative w-full h-[calc(100vh-73px)] min-h-[580px] md:min-h-[640px] overflow-hidden text-white flex items-center select-none"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1920&q=85')` }}
            >
              {/* Subtle luxurious custom dark green gradient/overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#021814]/85 to-[#004d44]/50" />
            </div>

            {/* Hero Text Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left flex flex-col justify-center h-full">
              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#b38b4d]/20 border border-[#b38b4d]/30 text-[#f2ede4] text-xs font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ebd9bd] animate-pulse" /> Olfactive Insights
                </div>
                
                <h1 className="font-serif text-3.5xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-[#faf8f4]">
                  Olfactive Insights &amp; <span className="font-serif italic text-[#ebd9bd]">Market Intelligence.</span>
                </h1>

                <p className="text-gray-200 text-sm md:text-base max-w-xl leading-relaxed font-light">
                  Explore formulation reviews, chromatography highlights, and chemical advisories prepared by our development chemists and master blenders.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-5">
                  <button 
                    onClick={() => {
                      const nextSection = document.getElementById('blog-content');
                      if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-7 py-3 rounded-full bg-[#004d44] hover:bg-[#00876e] text-white font-semibold text-xs transition-all uppercase tracking-wider shadow cursor-pointer focus:outline-none"
                  >
                    View Editorial Feed
                  </button>
                  <button 
                    onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#ebd9bd] transition-colors focus:outline-none"
                  >
                    Contact Headquarters &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Bouncing Scroll Down Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
              <button 
                onClick={() => {
                  const nextSection = document.getElementById('blog-content');
                  if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex flex-col items-center justify-center text-white/75 hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer"
                aria-label="Scroll down to next section"
              >
                <span className="text-[10px] uppercase font-mono tracking-widest opacity-80 group-hover:opacity-100 transition-opacity mb-2">
                  Read Insights
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
          <div id="blog-content" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20 lg:space-y-28">

          {/* Scent Blog Intro Copy */}
          <section className="bg-white rounded-xl p-8 border border-[#ece7de] shadow-xs max-w-4xl mx-auto text-center space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00876e]">The Editorial Feed</span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#004d44] font-normal tracking-tight">
              A Glimpse into Global Fragrance Trends
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
              Explore formulation reviews, chromatography highlights, organic chemistry advisories, and wellness developments drafted on-site by our development blenders.
            </p>
          </section>

          {/* 6 Authentic Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOGS.map((article) => (
              <div 
                key={article.id} 
                className="group bg-white rounded-xl overflow-hidden border border-[#ece7de] hover:border-[#00876e]/35 transition-all flex flex-col justify-between cursor-pointer text-left shadow-xs"
                onClick={() => {
                  setSelectedBlog(article);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
              >
                <div>
                  <div className="h-52 overflow-hidden relative select-none">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#004d44]/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[9px] uppercase font-mono font-bold tracking-wider text-[#faf9f6]">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="font-serif text-base font-bold text-[#004d44] group-hover:text-[#00876e] transition-colors leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed font-light">
                      {article.summary}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-mono">
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
