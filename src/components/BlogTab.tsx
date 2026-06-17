import React from 'react';
import SubpageHeader from './SubpageHeader';
import { motion } from 'motion/react';
import { ChevronRight, ArrowLeft, Pin, Film, ChevronLeft, X, Maximize2 } from 'lucide-react';
import { AppTab, BlogArticle } from '../types';
import { BLOGS } from '../data';
import VideoThumbnailImage from './VideoThumbnailImage';

const WORKSHOP_IMAGES = [
  {
    src: '/workshop/workshop-2025- (1).jpg',
    title: 'Raw Botanical Sorting & Sifting',
    desc: 'Careful visual check of dried buds and resins before cold maceration workflows start.'
  },
  {
    src: '/workshop/workshop-2025- (2).jpg',
    title: 'HPLC & GC-MS Formulation Analysis',
    desc: 'Verifying oil volatile constituents and allergen percentage reports on high-performance computers.'
  },
  {
    src: '/workshop/workshop-2025- (3).jpg',
    title: 'Micro-Batch Pipette Compounding',
    desc: 'Crafting the primary trials of bespoke fragrance formulas with clinical decimal accuracy.'
  },
  {
    src: '/workshop/workshop-2025- (4).jpg',
    title: 'Scent Sifting & Raw Distillates',
    desc: 'Assessing natural extraction yields from the steam distiller for high-purity absolutes.'
  },
  {
    src: '/workshop/workshop-2025- (5).jpg',
    title: 'Sensory Panel Smelling Evaluators',
    desc: 'Blind smelling panels grading dry-down phases on visual scent blotters across time metrics.'
  },
  {
    src: '/workshop/workshop-2025- (6).jpg',
    title: 'Collaborative Brand Scent Ideation',
    desc: 'Brand partners participating in custom blending masterclasses for upcoming product rollouts.'
  },
  {
    src: '/workshop/workshop-2025- (7).jpg',
    title: 'High-Speed Homogenization Vessel',
    desc: 'Blending fragrance concentrate with high-purity alcohol inside clean stainless steels.'
  },
  {
    src: '/workshop/workshop-2025- (8).jpg',
    title: 'Finished Product Laboratory Sealing',
    desc: 'Quality control batch labeling and airtight sealing of fragrance oils before distribution.'
  },
  {
    src: '/workshop/workshop-2025- (9).jpg',
    title: 'Aroma-Chemical Compound Repository',
    desc: 'Storing high-grade aromachemical raw materials under strict climate-controlled conditions.'
  },
  {
    src: '/workshop/workshop-2025- (10).jpg',
    title: 'Olfactive Mapping & Scent Boards',
    desc: 'Brainstorming notes, moods, and olfactory accords on visual canvas boards for upcoming designs.'
  }
];

const renderMarkdown = (text: string) => {
  if (!text) return null;
  const parts = text.split('**');
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="font-bold text-[#1E2B16]">{part}</strong>;
    }
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const subParts = part.split(urlPattern);
    if (subParts.length > 1) {
      return (
        <React.Fragment key={index}>
          {subParts.map((subPart, subIdx) => {
            if (subPart.match(urlPattern)) {
              return (
                <a 
                  key={subIdx} 
                  href={subPart} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#596E4E] hover:text-[#1E2B16] font-semibold underline break-all"
                >
                  {subPart}
                </a>
              );
            }
            return subPart;
          })}
        </React.Fragment>
      );
    }
    return part;
  });
};

interface BlogTabProps {
  setActiveTab: (tab: AppTab) => void;
  selectedBlog: BlogArticle | null;
  setSelectedBlog: (blog: BlogArticle | null) => void;
  previousActiveTab?: AppTab | null;
}

export default function BlogTab({ setActiveTab, selectedBlog, setSelectedBlog, previousActiveTab }: BlogTabProps) {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [activeImageIndex, setActiveImageIndex] = React.useState<number | null>(null);

  // Derive active gallery images for the selected blog post dynamically
  const currentGalleryImages = React.useMemo(() => {
    if (!selectedBlog || !selectedBlog.isGalleryPost) return [];
    if (selectedBlog.galleryImages) {
      return selectedBlog.galleryImages.map((src, idx) => ({
        src,
        title: `${selectedBlog.title} - Image ${idx + 1}`,
        desc: `Behind-the-scenes event highlights`
      }));
    }
    return WORKSHOP_IMAGES;
  }, [selectedBlog]);

  const handleNextImage = React.useCallback(() => {
    if (currentGalleryImages.length === 0) return;
    setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % currentGalleryImages.length : 0));
  }, [currentGalleryImages]);

  const handlePrevImage = React.useCallback(() => {
    if (currentGalleryImages.length === 0) return;
    setActiveImageIndex((prev) => (prev !== null ? (prev - 1 + currentGalleryImages.length) % currentGalleryImages.length : currentGalleryImages.length - 1));
  }, [currentGalleryImages]);

  React.useEffect(() => {
    if (activeImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'Escape') {
        setActiveImageIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handleNextImage, handlePrevImage]);

  // Derive all unique categories dynamically
  const categories = React.useMemo(() => {
    const cats: string[] = [];
    BLOGS.forEach(block => {
      if (Array.isArray(block.category)) {
        cats.push(...block.category);
      } else {
        cats.push(block.category);
      }
    });
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  // Split pinned and regular articles
  const pinnedArticles = React.useMemo(() => {
    return BLOGS.filter(b => b.isPinned);
  }, []);

  const regularArticles = React.useMemo(() => {
    return BLOGS.filter(b => !b.isPinned);
  }, []);

  // Filter based on active category
  const filteredPinned = React.useMemo(() => {
    if (selectedCategory === 'All') return pinnedArticles;
    return pinnedArticles.filter(b => {
      if (Array.isArray(b.category)) {
        return b.category.includes(selectedCategory);
      }
      return b.category === selectedCategory;
    });
  }, [selectedCategory, pinnedArticles]);

  const filteredRegular = React.useMemo(() => {
    if (selectedCategory === 'All') return regularArticles;
    return regularArticles.filter(b => {
      if (Array.isArray(b.category)) {
        return b.category.includes(selectedCategory);
      }
      return b.category === selectedCategory;
    });
  }, [selectedCategory, regularArticles]);

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
        <div className="space-y-6 max-w-4xl mx-auto px-6 pt-[110px] pb-12 md:pt-[135px] md:pb-16">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#b38b4d] font-bold flex items-center gap-1.5">
              {selectedBlog.isPinned && <Pin className="w-3.5 h-3.5 text-[#b38b4d] fill-current" />}
              {selectedBlog.isPinned ? 'Featured Editorial' : 'Olfactive Editorial'}
            </span>
            <button
              onClick={() => {
                setSelectedBlog(null);
              }}
              id="blog-back-btn"
              className="px-4 py-1.5 border border-[#ece7de] bg-white text-[#555f5e] text-xs font-semibold rounded-full uppercase tracking-wider hover:bg-[#fafaf7] cursor-pointer shadow-xs transition-colors focus:outline-none flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Insights
            </button>
          </div>

          <article className="bg-white border border-[#ece7de] rounded overflow-hidden p-6 md:p-10 space-y-6">
            <div className="h-[240px] md:h-[350px] overflow-hidden rounded relative select-none">
              <VideoThumbnailImage 
                src={selectedBlog.image} 
                videoUrl={selectedBlog.video}
                alt={selectedBlog.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#1E2B16] text-white px-2.5 py-1 rounded text-[9px] font-mono uppercase tracking-wider">
                  {Array.isArray(selectedBlog.category) ? selectedBlog.category.join(' & ') : selectedBlog.category}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-400 font-mono uppercase">
              <span>Published: {selectedBlog.date}</span>
              <span>•</span>
              <span>{selectedBlog.readTime}</span>
            </div>

            <h2 className="font-serif text-2xl md:text-3.5xl font-normal text-[#1E2B16] leading-tight">
              {selectedBlog.title}
            </h2>

            {/* INTEGRATED VIDEO PLAYER SECTION */}
            {selectedBlog.video && (
              <div className="my-8 p-4 md:p-6 bg-[#faf9f5] border border-[#ece7de] rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E2B16] font-mono">
                  <Film className="w-4 h-4 text-[#596E4E] animate-pulse" />
                  <span>Interactive Scent Team Presentation</span>
                </div>
                
                <div className="relative rounded-lg overflow-hidden shadow-md border border-[#ece7de] bg-black aspect-video max-w-3xl mx-auto">
                  <video 
                    controls 
                    playsInline
                    className="w-full h-full object-contain"
                    poster={selectedBlog.image}
                    preload="metadata"
                  >
                    {/* Multi-fallback to guarantee playback across formats */}
                    <source src={selectedBlog.video} type="video/mp4" />
                    <source src="/christmas-greetings.mp4" type="video/mp4" />
                    <source src="/media/christmas/video.mp4" type="video/mp4" />
                    <source src="/media/christmas/christmas.mp4" type="video/mp4" />
                    <source src="/media/christmas/christmas-greeting.mp4" type="video/mp4" />
                    <source src="/media/christmas/video.MOV" type="video/quicktime" />
                    <source src="/media/christmas/christmas.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-[11px] text-[#6F685F] font-sans italic text-center">
                  *If the video does not play instantly, ensure the browser supports the MP4 codec.
                </p>
              </div>
            )}

            <div className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line space-y-4 font-light text-justify">
              {renderMarkdown(selectedBlog.content)}
            </div>

            {/* If this is a gallery post, show the lightbox masonry grid here */}
            {selectedBlog.isGalleryPost && currentGalleryImages.length > 0 && (
              <div className="pt-8 border-t border-[#ece7de] space-y-6">
                <div className="text-center md:text-left space-y-1.5">
                  <h4 className="font-serif text-lg md:text-xl text-[#1E2B16] font-normal tracking-tight">
                    Interactive Event Photo Gallery
                  </h4>
                  <p className="text-gray-500 text-xs font-light max-w-xl">
                    Click any thumbnail below to launch the fully interactive high-definition lightbox viewer with left/right keyboard support and infinite-loop gallery control.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
                  {currentGalleryImages.map((img, index) => (
                    <div 
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className="group relative aspect-square bg-[#ece7de] rounded-lg overflow-hidden border border-[#ece7de] hover:border-[#1E2B16]/20 shadow-xs hover:shadow-md cursor-pointer transition-all duration-300"
                    >
                      <img 
                        src={img.src} 
                        alt={img.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-3xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                        <div className="flex justify-between items-start w-full">
                          <span className="text-[9px] font-mono font-semibold text-[#b38b4d] bg-black/30 px-1.5 py-0.5 rounded">
                            {(index + 1).toString().padStart(2, '0')} / {currentGalleryImages.length}
                          </span>
                          <Maximize2 className="w-3.5 h-3.5 text-white/80" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                  <h4 className="font-serif font-normal text-[#1E2B16] text-base">Ready to Develop Your Own Signature Scent?</h4>
                  <p className="text-xs text-gray-600 font-light font-sans">
                    Collaborate with <strong>Proessences Inc.</strong> and Carvansons UK to create custom, market-ready fragrance formulations. Connect with our Manila team to request trial batch samples and coordinate technical documentation.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    setSelectedBlog(null);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="px-5 py-2 rounded-full bg-[#1E2B16] hover:bg-[#596E4E] text-white text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer shadow-xs whitespace-nowrap focus:outline-none"
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
          <SubpageHeader
            category="Scent Intelligence & Forecasts"
            title="Olfactive Insights &"
            subtitle="Market Intelligence."
            backgroundImage="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1920&q=85"
          />

          {/* SCROLLABLE MAIN FEED */}
          <div id="blog-content" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-16">

            {/* Categories Navigation Tab Row */}
            <div className="flex flex-wrap justify-center border-b border-[#ece7de] pb-6 gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#1E2B16] text-white font-bold shadow-xs' 
                        : 'bg-white hover:bg-[#eff1ed] border border-[#ece7de] text-[#555f5e] hover:text-[#1E2B16]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Pinned / Featured Announcements */}
            {filteredPinned.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#B28A4A] bg-[#fdf5eb] px-3 py-1 rounded inline-flex items-center gap-1.5 border border-[#B28A4A]/20">
                    📌 Pinned Announcement
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  {filteredPinned.map((article) => (
                    <div 
                      key={article.id}
                      onClick={() => {
                        setSelectedBlog(article);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className="group bg-white rounded-xl overflow-hidden border-2 border-[#b38b4d]/30 hover:border-[#596E4E] transition-all duration-300 flex flex-col md:flex-row cursor-pointer text-left shadow-xs hover:shadow-md"
                    >
                      <div className="md:w-5/12 h-64 md:h-auto overflow-hidden relative select-none shrink-0">
                        <VideoThumbnailImage 
                          src={article.image} 
                          videoUrl={article.video}
                          alt={article.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101" 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-[#1E2B16] px-2.5 py-0.5 rounded text-[8px] uppercase font-mono font-bold tracking-widest text-white shadow-xs">
                          {Array.isArray(article.category) ? article.category.join(' & ') : article.category}
                        </div>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4 text-left">
                        <div className="space-y-3">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#B28A4A] font-bold">Featured Announcement</span>
                          <h3 className="font-serif text-xl md:text-2xl font-normal text-[#1E2B16] group-hover:text-[#b38b4d] transition-colors leading-snug">
                            {article.title}
                          </h3>
                          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                            {article.summary}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-[#ece7de]/60 flex items-center justify-between text-[10px] text-gray-400 font-mono">
                          <span className="flex items-center gap-1 text-[#596E4E] font-bold uppercase transition-colors group-hover:text-[#1E2B16]">
                            Read greeting video <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </span>
                          <div className="space-x-2">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Post Grid (Regular articles) */}
            <div className="space-y-6">
              {filteredRegular.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-gray-400">
                    Articles &amp; Research ({filteredRegular.length})
                  </span>
                </div>
              )}
              {filteredRegular.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredRegular.map((article) => (
                    <div 
                      key={article.id} 
                      className="group bg-white rounded overflow-hidden border border-[#ece7de] hover:border-[#596E4E]/25 transition-all duration-300 flex flex-col justify-between cursor-pointer text-left shadow-xs hover:shadow-sm"
                      onClick={() => {
                        setSelectedBlog(article);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                    >
                      <div>
                        <div className="h-44 overflow-hidden relative select-none">
                          <VideoThumbnailImage 
                            src={article.image} 
                            videoUrl={article.video}
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101" 
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3 bg-[#1E2B16]/90 backdrop-blur-xs px-2.5 py-0.5 rounded text-[8px] uppercase font-mono font-bold tracking-widest text-white">
                            {Array.isArray(article.category) ? article.category.join(' & ') : article.category}
                          </div>
                        </div>
                        <div className="p-5 space-y-2">
                          <h4 className="font-serif text-base font-bold text-[#1E2B16] group-hover:text-[#b38b4d] transition-colors leading-snug line-clamp-1">
                            {article.title}
                          </h4>
                          <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed font-light font-sans">
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
              ) : (
                <div className="text-center py-12 bg-white rounded border border-[#ece7de]">
                  <p className="text-sm font-light text-gray-400">No other articles found in this category.</p>
                </div>
              )}
            </div>



          </div>
        </div>
      )}

       {/* LIGHTBOX MODAL OVERLAY */}
      {activeImageIndex !== null && currentGalleryImages.length > 0 && (
        <div 
          className="fixed inset-0 z-[1100] bg-black/95 md:backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 select-none"
          id="lightbox-container"
          onClick={(e) => {
            // Click outside to close (only on the container, not the image or control buttons)
            if (e.target === e.currentTarget || (e.target as HTMLElement).id === "lightbox-img-wrapper") {
              setActiveImageIndex(null);
            }
          }}
        >
          {/* Top Bar: Slide counter & Close Button */}
          <div className="w-full flex justify-between items-center z-10">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#B28A4A] bg-black/40 px-3 py-1 rounded">
              {String(activeImageIndex + 1).padStart(2, '0')} <span className="text-gray-500">/</span> {String(currentGalleryImages.length).padStart(2, '0')}
            </span>
            
            <button 
              onClick={() => setActiveImageIndex(null)}
              className="p-2 bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 text-white rounded-full transition-all focus:outline-none flex items-center justify-center cursor-pointer"
              title="Close Lightbox (Esc)"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Area: Image wrapper with Prev / Next Navigation overlay */}
          <div 
            id="lightbox-img-wrapper"
            className="relative flex-grow flex items-center justify-center max-w-5xl mx-auto w-full my-4"
          >
            {/* Left Control Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-2 md:left-4 z-25 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 hover:border-white/30 backdrop-blur-xs transition-all cursor-pointer focus:outline-none flex items-center justify-center hover:scale-105 active:scale-95"
              aria-label="Previous Slide (Arrow Left)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Interactive Slide Image */}
            <img 
              key={activeImageIndex}
              src={currentGalleryImages[activeImageIndex].src} 
              alt={currentGalleryImages[activeImageIndex].title} 
              className="max-h-[60vh] md:max-h-[75vh] max-w-full object-contain mx-auto rounded-lg select-all shadow-2xl border border-white/5"
              referrerPolicy="no-referrer"
            />

            {/* Right Control Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-2 md:right-4 z-25 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 hover:border-white/30 backdrop-blur-xs transition-all cursor-pointer focus:outline-none flex items-center justify-center hover:scale-105 active:scale-95"
              aria-label="Next Slide (Arrow Right)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Slide Dots Indicator */}
          <div className="w-full max-w-3xl mx-auto text-center space-y-4 z-10">
            {/* Slide Dots Quick Navigation Strip */}
            <div className="flex justify-center items-center gap-1.5 pt-1">
              {currentGalleryImages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveImageIndex(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                    dotIdx === activeImageIndex 
                      ? 'w-6 bg-[#b38b4d]' 
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
