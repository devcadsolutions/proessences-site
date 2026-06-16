import React, { useRef, useState, useEffect } from 'react';
import SubpageHeader from './SubpageHeader';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe2, Beaker, Eye, UserCheck, Flame, Compass, Award, Handshake, 
  ShieldCheck, Heart, TrendingUp, CheckCircle, Users, Truck, Warehouse,
  Play, Pause, Volume2, VolumeX, Maximize2
} from 'lucide-react';
import { AppTab } from '../types';
import { HERITAGE_TABS } from '../data';

interface AboutTabProps {
  setActiveTab: (tab: AppTab) => void;
  activeHeritageTab: string;
  setActiveHeritageTab: (tabId: string) => void;
}

export default function AboutTab({ setActiveTab, activeHeritageTab, setActiveHeritageTab }: AboutTabProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoSrc, setVideoSrc] = useState('/office-video/office-video.mp4');
  const [videoError, setVideoError] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setVideoError(false);
      }).catch((err) => {
        console.log("Video play failed or auto-play prevented:", err);
      });
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercentage = clickX / width;
    const newTime = clickPercentage * duration;
    videoRef.current.currentTime = newTime;
    setProgress(clickPercentage * 100);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const onTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    setCurrentTime(current);
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  const onLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const onVideoEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  // Reset states when source swaps
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setVideoError(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      key="about-tab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      <SubpageHeader
        category="Corporate Heritage & Innovation"
        title="Corporate History &"
        subtitle="Perfumer Customization."
        backgroundImage="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1920&q=85"
      />

      {/* MAIN ABOUT CONTENT */}
      <div id="about-content" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-24">

        {/* SECTION 1: WHO WE ARE & OFFICE VIDEO BANNER */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Column 1: Video Player */}
          <div className="lg:col-span-7 bg-white border border-[#ece7de] rounded-xl p-5 flex flex-col justify-between shadow-sm space-y-4">
            <div className="relative w-full rounded-lg overflow-hidden border border-gray-150 aspect-video bg-black group select-none flex items-center justify-center">
              <video 
                ref={videoRef}
                src={videoSrc}
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={onVideoEnded}
                onError={() => {
                  setVideoError(true);
                }}
                className="w-full h-full object-cover"
                playsInline
              />
              
              {/* Custom Poster Overlay */}
              {!isPlaying && (
                <div 
                  onClick={handlePlayPause}
                  className="absolute inset-0 w-full h-full cursor-pointer flex flex-col justify-between p-6 sm:p-8 z-10"
                >
                  <img 
                    src="/office-video/cover-page-office.jpg" 
                    alt="Proessences Office and Facilities" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 group-hover:bg-black/70 transition-colors duration-300" />
                  
                  {/* Introduction Header inside Poster */}
                  <div className="relative z-20 text-left space-y-1.5 max-w-sm">
                    <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#B28A4A] bg-[#fdf5eb]/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full inline-block">
                      Workspace Showcase
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-white font-normal leading-tight tracking-tight drop-shadow-xs">
                      Take a Virtual Tour of Our Manila Facilities, Office &amp; Warehouse
                    </h3>
                  </div>

                  {/* Decorative Play Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E2B16] fill-current ml-1" />
                    </div>
                  </div>

                  <div className="relative z-20 flex justify-between items-center text-white text-[9px] font-mono tracking-widest uppercase">
                    <span>Proessences Inc. Headquarters</span>
                    <span className="bg-[#B28A4A] text-white px-2 py-0.5 rounded font-bold">Click to Play</span>
                  </div>
                </div>
              )}

              {/* Minimalist In-Play controls wrapper */}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col gap-2">
                  {/* Progress Bar */}
                  <div 
                    onClick={handleProgressClick}
                    className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer relative"
                  >
                    <div 
                      className="absolute left-0 top-0 h-full bg-[#B28A4A] rounded-full" 
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Operational Controls */}
                  <div className="flex items-center justify-between text-white text-xs font-mono">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={handlePlayPause}
                        className="hover:text-[#B28A4A] transition-colors"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button 
                        onClick={handleMuteToggle}
                        className="hover:text-[#B28A4A] transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                    </div>

                    <button 
                      onClick={handleFullscreen}
                      className="hover:text-[#B28A4A] transition-colors"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Video Label */}
            <div className="flex items-center justify-between gap-4 pt-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#596E4E] font-semibold">Proessences Facility &amp; Office Tour</span>
            </div>

            {/* Hint message if video fails to load */}
            {videoError && (
              <div className="bg-[#faf5eb] border border-[#f0e3cc] p-3 rounded text-xs text-[#8a6a3b] text-center leading-relaxed">
                <span className="font-semibold block mb-0.5">💡 Video Playback Tip:</span>
                Plays directly from your local source <code className="font-mono bg-white px-1 py-0.5 rounded text-red-500">public/office-video/office-video.mp4</code>.
              </div>
            )}
          </div>

          {/* Column 2: Narrative Introductory */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#B28A4A] bg-[#fdf5eb] px-2.5 py-1 rounded self-start">Company Profile</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1E2B16] font-normal leading-tight tracking-tight">
              A Legacy of Fragrance Artistry
            </h2>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">
              At <strong>PROESSENCES INC.</strong>, we serve as the premier Philippine supplier and distributor of premium perfume oils, fragrance oils, essential oils, and basic aroma chemicals. 
            </p>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">
              Through our strategic collaboration with <strong>CARVANSONS, UK</strong>, we help local cosmetics brands, soap formulators, home care ventures, and fine fragrance businesses access world-class scent compounds backed by rapid, reliable local supply channels.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="text-xs uppercase font-bold text-[#b38b4d] hover:text-[#596E4E] tracking-widest transition-colors hover:underline focus:outline-none flex items-center gap-1"
              >
                Inquire Regarding Scent Customization &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT SETS US APART (ELEGANT 4-CARD GRID) */}
        <section className="bg-white rounded-2xl border border-[#E6E0D6] p-8 md:p-12 lg:p-16 space-y-12 max-w-5xl mx-auto shadow-xs">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#1E2B16] bg-[#EFF1ED] px-2.5 py-1 rounded inline-block">Official Summary</span>
            <h2 className="font-serif text-3xl text-[#1E2B16] font-normal tracking-tight">So, What Sets Us Apart?</h2>
            <p className="text-[#555f5e] leading-relaxed text-sm font-light">
              Here at PROESSENCES, we pride ourselves on being the exclusive partner of Carvansons UK in the Philippines. While CARVANSONS crafts the finest perfume compounds, we serve as the stable bridge that brings these high-quality creations directly to discerning clients across the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-[#EFF1ED]/40 rounded border border-[#E6E0D6] space-y-3 hover:border-gray-400 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#E6E0D6]">
                <Award className="w-5 h-5 text-[#1E2B16]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Exclusive Partnership</h4>
              <p className="text-xs text-[#555f5e] leading-relaxed font-light">
                Our exclusive partnership with CARVANSONS UK guarantees unmatched batch-to-batch predictability, international quality controls, and full safety documentation (IFRA compliance).
              </p>
            </div>

            <div className="p-6 bg-[#EFF1ED]/40 rounded border border-[#E6E0D6] space-y-3 hover:border-gray-400 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#E6E0D6]">
                <Beaker className="w-5 h-5 text-[#1E2B16]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Extensive Perfume Library</h4>
              <p className="text-xs text-[#555f5e] leading-relaxed font-light">
                Retrieve from an international catalog of thousands of master-formulated aroma oils, giving Philippine startups and industrial businesses access to unrivaled scent references.
              </p>
            </div>

            <div className="p-6 bg-[#EFF1ED]/40 rounded border border-[#E6E0D6] space-y-3 hover:border-gray-400 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#E6E0D6]">
                <Warehouse className="w-5 h-5 text-[#1E2B16]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Freshness &amp; Controlled Storage</h4>
              <p className="text-xs text-[#555f5e] leading-relaxed font-light">
                Our fully air-conditioned warehouse facilities keep all raw chemical bases and organic essential oils stored at perfectly controlled temperatures, preserving purity.
              </p>
            </div>

            <div className="p-6 bg-[#EFF1ED]/40 rounded border border-[#E6E0D6] space-y-3 hover:border-gray-400 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#E6E0D6]">
                <Truck className="w-5 h-5 text-[#1E2B16]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E2B16]">Industry-Leading Delivery</h4>
              <p className="text-xs text-[#555f5e] leading-relaxed font-light">
                We maintain an agile, dedicated delivery fleet to fulfill wholesale distribution and trial sampling batches throughout the Philippines with speed and care.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: PARTNERSHIP COMPLIANCE & GLOBAL STANDARDS */}
        <section className="bg-white rounded-xl border border-[#E6E0D6] p-8 md:p-12 space-y-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B28A4A]">Global Audited Manufacturing</span>
              <h3 className="font-serif text-2xl text-[#1E2B16]">Certified Safety standards</h3>
              <p className="text-[#555f5e] leading-relaxed text-xs sm:text-sm font-light">
                We work strictly with CARVANSONS, UK—a world-class fragrance manufacturer whose active affiliation with key global standard organizations ensures extreme compliance and product integrity. Their manufacturing follows <strong>IFRA</strong> guidelines, <strong>ISO 9001:2015</strong> quality systems, and holds certifications from the <strong>Halal Food Council of Europe</strong> and the <strong>British Society of Perfumers</strong>.
              </p>
            </div>
            
            {/* Certifications badges column */}
            <div className="md:col-span-5 grid grid-cols-3 gap-4 items-center justify-center justify-items-center bg-[#EFF1ED]/30 p-6 rounded-lg border border-[#E6E0D6]">
              {[
                { title: 'BSOP', src: '/cosmobeaute-exhibition-2025/certification/bsop.jpg' },
                { title: 'Halal', src: '/cosmobeaute-exhibition-2025/certification/halal.jpg' },
                { title: 'NFRA', src: '/cosmobeaute-exhibition-2025/certification/nfra-logo.jpg' }
              ].map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center group text-center">
                  <div className="w-20 h-20 flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={badge.src} 
                      alt={badge.title} 
                      className="max-w-full max-h-full object-contain filter hover:brightness-105" 
                      onError={(e) => {
                        // Fallback placeholder if custom local image is missing
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-[8px] font-mono uppercase tracking-widest text-[#596E4E] mt-1">{badge.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: COMPANY VALUES */}
        <section className="bg-[#EFF1ED]/70 rounded-2xl border border-[#E6E0D6] p-8 md:p-12 lg:p-16 space-y-12 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#1E2B16]">Corporate Values</span>
            <h2 className="font-serif text-3xl md:text-3xl text-[#1E2B16] font-normal tracking-tight animate-fade-in">
              Built on Trust, Quality, and Partnership
            </h2>
            <p className="text-[#6F7880] text-sm font-light max-w-xl mx-auto">
              Our core corporate beliefs dictate how we treat customers, sustain supplier honesty, and validate scent formulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Handshake, title: "Customer Commitment", desc: "We build lasting relationships and create meaningful value for every client." },
              { icon: Award, title: "Quality Sourcing", desc: "We deliver reliable products and attentive service that consistently meet high standards." },
              { icon: ShieldCheck, title: "Integrity & Compliance", desc: "We act with honesty, transparency, and strict adherence to physical safety benchmarks." },
              { icon: Users, title: "Collaborative Teamwork", desc: "We coordinate across design and sales to fulfill orders with extreme accuracy." },
              { icon: Heart, title: "Respect for People", desc: "We value our employees, support their safety, and recognize local talent." },
              { icon: TrendingUp, title: "Continual Development", desc: "We refine sensory distributions with focus, grit, and scientific excellence." },
            ].map((value, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-[12px] border border-[#E6E0D6] shadow-xs hover:border-[#b68a3a]/40 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 w-9 h-9 rounded-full bg-[#EFF1ED] flex items-center justify-center">
                    <value.icon className="w-4 h-4 text-[#1E2B16]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1E2B16] mb-1.5">{value.title}</h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: HERITAGE TECHNICAL DETAILS & CORRELATION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Tab selectors */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
            {HERITAGE_TABS.map((item) => (
              <button
                key={item.id}
                id={`heritage-tab-${item.id}`}
                onClick={() => setActiveHeritageTab(item.id)}
                className={`flex-grow sm:flex-1 lg:flex-grow-0 flex items-center gap-3 py-3 px-4 rounded text-left text-xs font-semibold tracking-wider uppercase transition-all duration-150 cursor-pointer ${
                  activeHeritageTab === item.id 
                    ? 'bg-[#1E2B16] text-white shadow-xs' 
                    : 'bg-white text-gray-500 border border-[#E6E0D6] hover:bg-white hover:text-[#1e2423] hover:border-gray-400'
                }`}
              >
                <span className="shrink-0">
                  {item.id === 'where' && <Globe2 className="w-3.5 h-3.5" />}
                  {item.id === 'what' && <Beaker className="w-3.5 h-3.5" />}
                  {item.id === 'approach' && <Eye className="w-3.5 h-3.5" />}
                  {item.id === 'people' && <UserCheck className="w-3.5 h-3.5" />}
                </span>
                <span>{item.title}</span>
              </button>
            ))}
          </div>

          {/* Desktop/Tablet Panel */}
          <div className="lg:col-span-8 bg-white border border-[#E6E0D6] rounded p-6 md:p-8 min-h-[280px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {HERITAGE_TABS.map((item) => {
                if (item.id !== activeHeritageTab) return null;
                return (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 text-left"
                  >
                    <h3 className="font-serif text-xl font-normal text-[#1E2B16]">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-light">
                      {item.content}
                    </p>
                    
                    {item.id === 'where' && (
                      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="relative rounded overflow-hidden border border-gray-100 bg-gray-50 p-1 shadow-xs select-none">
                          <img 
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80" 
                            alt="Global networks map" 
                            className="w-full h-auto object-cover rounded"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                        </div>
                        <div className="space-y-2">
                          <span className="block text-[10px] font-mono uppercase tracking-wider text-[#b38b4d] font-bold">Supply &amp; Distribution:</span>
                          <p className="text-xs text-gray-400 leading-relaxed font-light">
                            The Lancashire facility of our partner, Carvansons UK, maintains extensive warehouse capacities and global shipping networks to guarantee continuous raw material supply lines for our local Philippine distribution.
                          </p>
                        </div>
                      </div>
                    )}

                    {item.id === 'what' && (
                      <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                        <div className="p-3 bg-[#fafaf7] rounded border border-[#ece7de]">
                          <span className="block font-bold text-xs text-[#596E4E]">2kg - Multi-tonne</span>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">Compounding Capacity</span>
                        </div>
                        <div className="p-3 bg-[#fafaf7] rounded border border-[#ece7de]">
                          <span className="block font-bold text-xs text-[#596E4E]">IFRA Compliant</span>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">100% Certified bases</span>
                        </div>
                        <div className="p-3 bg-[#fafaf7] rounded border border-[#ece7de]">
                          <span className="block font-bold text-xs text-[#596E4E]">ISO 9001:2015</span>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">Audited Facility</span>
                        </div>
                        <div className="p-3 bg-[#fafaf7] rounded border border-[#ece7de]">
                          <span className="block font-bold text-xs text-[#596E4E]">GC-MS Validation</span>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">In-house Chromatography</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* SECTION 6: THE PROESSENCES PROMISE FOOTER CTA */}
        <section className="bg-white rounded border border-[#E6E0D6] p-8 md:p-12 lg:p-16 max-w-4xl mx-auto text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h4 className="font-serif text-2xl italic text-[#1E2B16]">The PROESSENCES Promise</h4>
            <p className="text-sm font-medium text-[#596E4E]">
              "Expertly crafted scents that capture the essence of your vision."
            </p>
            <p className="text-xs text-gray-400 font-light mt-1">
              Experience the unmatched art and science of international perfumery with PROESSENCES.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="px-8 py-3 bg-[#1E2B16] hover:bg-[#596E4E] text-white text-xs font-bold font-mono tracking-widest rounded-full transition-colors uppercase cursor-pointer shadow-sm hover:shadow-md"
            >
              Call Us Now for Free Samples!
            </button>
          </div>
        </section>

      </div>
    </motion.div>
  );
}

