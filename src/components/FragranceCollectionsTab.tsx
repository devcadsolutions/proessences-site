import React, { useState, useMemo } from 'react';
import SubpageHeader from './SubpageHeader';
import { motion, AnimatePresence } from 'motion/react';
import { AppTab } from '../types';
import { 
  Search, 
  Compass, 
  Check, 
  CheckSquare, 
  Square, 
  ShoppingBag, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Info,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

interface ScentCollection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  idealApplications?: string[];
  tags: string[];
  image: string;
  category: 'Fine' | 'Personal' | 'Home' | 'Natural';
}

const COLLECTIONS_DATA: ScentCollection[] = [
  {
    id: 'fruit-splash',
    title: 'The Fruit Splash Household Collection',
    subtitle: 'Bright, colourful scents designed especially for household cleaning products',
    description: `Fruity-inspired fragrances continue to grow in popularity within the household product sector, offering a balance of freshness and subtle sweetness that helps reduce harsh chemical odours while leaving behind a light, long-lasting scent that feels both clean and uplifting.

Meet the Fruit Splash Household Collection. Bright, colourful scents designed especially for household cleaning products. This fragrance collection has been created to bring energy, freshness and a touch of joy to everyday spaces.

This vibrant range blends juicy fruity notes with playful gourmand sweetness, resulting in fragrances that feel clean, uplifting, and irresistibly inviting.`,
    idealApplications: ['Multipurpose cleaners', 'Dishwashing liquids', 'Laundry detergents', 'Room fresheners', 'Fabric sprays'],
    tags: ['Fresh', 'Citrus', 'Clean', 'Household', 'Fruit Splash'],
    image: '/collections/Fruit-Splash-cleaning-collection-1.jpg',
    category: 'Home'
  },
  {
    id: 'cloud-dancer',
    title: 'The Cloud Dancer Collection',
    subtitle: 'Calming influence embodying the Pantone Colour of the Year 2026',
    description: `Pantone has named Cloud Dancer as its Colour of the Year for 2026. This creamy white colour reflects a desire for calm, clarity and fresh starts, offering “a calming influence” and a blank-canvas backdrop for creativity, design and self-expression.

The Cloud Dancer Collection is a collection of six fragrances created to embody the Pantone Colour of the Year.

These scents have been created and selected for their airy, light or creamy scent directions and lean into the trend for skin-scents, lactonic notes and decadent gourmands.

The collection features scents with soft and gentle scents, musky, milky or vanilla notes.`,
    idealApplications: ['Soy candles', 'Luxury laundry elixirs', 'Body lotions', 'Reed diffusers', 'Fabric conditioners'],
    tags: ['Clean', 'Cozy', 'Musky', 'Candles', 'Powdery', 'Cloud Dancer'],
    image: '/collections/Cloud-Dancer-Collection-1.jpg',
    category: 'Home'
  },
  {
    id: 'luscious-lip',
    title: 'The Luscious Lip Fragrance Collection',
    subtitle: 'Emotive feel-good lip care ritual & flavor safe',
    description: `The Luscious Lip Collection is perfect for a wide range of different lip products from beauty and makeup brands through to more caring, soothing and protection-based products.

The perfect fragrance can transform a simple lip care product into an emotive feel-good ritual. It can create an instant emotional connection, making the product feel luxurious, fun, or soothing, without overwhelming the senses.

Our collection of six new fragrances are perfect for all different applications and have been designed to be flavour safe.

Please note: Our collection box contains six 5mg fragrance oil samples for use in a final product.`,
    idealApplications: ['Lip balms', 'Lip glosses', 'Cosmetic oils', 'Face masks', 'Dental care'],
    tags: ['Sweet', 'Gourmand', 'Cosmetics', 'Fruity', 'Lip Gloss', 'Luscious Lip'],
    image: '/collections/Lip-Collection-1.jpg',
    category: 'Personal'
  },
  {
    id: 'paris-collection',
    title: 'The Paris Fragrance Collection',
    subtitle: 'Inspired by the vast cultural heritage of Paris and France',
    description: `The Paris Collection is inspired by the vast cultural heritage of Paris and France.

It is a love letter to the inspiration and etymology behind many of the world’s finest fragrances.

Each fragrance within the collection is inspired by the cultural richness of Paris and seeks to capture the elegance, luxury, and artistry of the city.

The art, music and foods of Paris have inspired countless artists and perfumers alike, and this collection reflects the unique balance of elegance, emotion and innovation that defines this enigmatic city.

Please note: Our collections are a small sample of 6 pure fragrance oils for use in a final product.`,
    idealApplications: ['Fine Perfume (EDP/EDT)', 'Luxury line mists', 'High-end room perfumes', 'Premium bar soaps'],
    tags: ['Luxury', 'Floral', 'Fine Scent', 'Sophisticated', 'Paris'],
    image: '/collections/Paris-Collection-1.jpg',
    category: 'Fine'
  },
  {
    id: 'k-perfume',
    title: 'K Perfume',
    subtitle: 'The turning point for Korean fine fragrances',
    description: `In recent years, South Korea has solidified itself as a global force in beauty and skincare — a reputation driven by innovative formulations, trendsetting products, and a cultural influence. Yet for much of that time, perfume remained something of a backwater in the K‑beauty story.

Traditionally, the Korean fragrance market was dominated by imported Western brands like Chanel, Jo Malone, Diptyque, and Byredo — beloved for their refined compositions — while domestic offerings were limited or seen as less sophisticated. But 2025 feels like a turning point: Korean fragrance is no longer just a niche curiosity, it’s beginning to claim a place in both domestic mass culture and the global mainstream.`,
    idealApplications: ['Intimate body mists', 'Hair serums', 'Calming face creams', 'Minimalist room sprays'],
    tags: ['Tea', 'Woody', 'Minimalist', 'Asian Influence', 'K-Beauty', 'K Perfume'],
    image: '/collections/k-perfume.jpg',
    category: 'Fine'
  },
  {
    id: 'beauty-boosters',
    title: 'Beauty Booster Fragrance Collection',
    subtitle: 'Sensorial attributes linking dermal efficacy and wellness',
    description: `Beauty products with strong sensorial attributes and linkages are making waves in the beauty industry.

Texture, feel and scent are proving to be critical in consumer buying decisions. These products engage multiple senses such as smell, touch, sight and motion and this is becoming a key product selling point for brands. This leans heavily into the neuro-cosmetics trend.

Driven by social media platforms like TikTok, consumers now seek immersive experiences that go beyond efficacy to deliver emotional and sensorial pleasure. While fragrance remains central, texture, visual appeal and tactile sensations are increasingly influential, prompting formulators to design products that engage the senses.`,
    idealApplications: ['Moisturizing skin creams', 'Anti-aging serums', 'Clay face masks', 'Gentle cleansing oils'],
    tags: ['Skincare', 'Herbal', 'Sensorial', 'Soothing', 'Beauty Boosters'],
    image: '/collections/Beauty-Boosters.jpg',
    category: 'Personal'
  },
  {
    id: 'natural-blends',
    title: 'Natural Blends Essential Oil Fragrance Collection',
    subtitle: 'Enhancing well-being with pure plant-based formulations',
    description: `Driven by our desire to be closer to nature and enhance our well-being, essential oil blends continue to be in demand.

Growing consumer interest in natural, plant-based wellness products has seen this market thrive. As a result, brands are keen to incorporate essential oil blends into personal care, home cleaning and home fragrance.

And whilst these natural essential oil blends continue to garner interest, the practicalities of these scents are hard to convey to consumers, especially when these oils are more suited to specific product types than others.`,
    idealApplications: ['Aromatherapy diffusers', 'Luxury soy wax candles', 'Organic body oils', 'Restorative bath salts'],
    tags: ['Aromatherapy', 'Herbaceous', 'Organic', 'Natural Blends'],
    image: '/collections/Natural-Blend-Collections-1.jpg',
    category: 'Natural'
  },
  {
    id: 'sugar-rush',
    title: 'The Sugar Rush Fine Fragrance Collection',
    subtitle: 'Irresistible gourmand whimsy elevations',
    description: `The Sugar Rush Collection is a playful yet sophisticated fine fragrance line that captures the irresistible allure of life’s sweetest indulgences.

The Sugar Rush Collection elevates everyday experiences into sweet, whimsical escapes. From fruity and childlike sugar-coated dreams to deep, indulgent blends, each fragrance invites you on a captivating journey.`,
    idealApplications: ['Holiday candles', 'Sweet body scrubs', 'Confectionery soaps', 'Rich room diffusers'],
    tags: ['Dessert', 'Vanilla', 'Sweet Accent', 'Cozy', 'Pastry', 'Sugar Rush'],
    image: '/collections/Slide1.jpg',
    category: 'Personal'
  },
  {
    id: 'luxe-locks',
    title: 'The Luxe Locks Haircare Fragrance Collection',
    subtitle: 'High-Performance Scentification of hair lipid fibers',
    description: `Hair, the crown you never take off!

Scentification has become a major talking point within personal care circles. Luxurious, long-lasting fragrances are being incorporated into hair products to enhance the experience.

This trend merges wellness and indulgence, turning routine care into a sensorial ritual. With fragrance now considered just as important as performance, scentified shampoos, conditioners and hair mists not only pamper the hair but also create a personal scent signature that lasts all day, leaving hair not only looking beautiful, but smelling exquisite.`,
    idealApplications: ['Premium shampoos', 'Hydrating hair conditioners', 'Hair serums & leave-in oils'],
    tags: ['Hair Care', 'Tropical', 'Gardenia', 'Affinity', 'Luxe Locks'],
    image: '/collections/Slide1-1.jpg',
    category: 'Personal'
  }
];

export default function FragranceCollectionsTab({ setActiveTab }: TabProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCollection, setSelectedCollection] = useState<ScentCollection | null>(null);
  const [selectedSamples, setSelectedSamples] = useState<string[]>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Filter and search logic
  const filteredCollections = useMemo(() => {
    return COLLECTIONS_DATA.filter(col => {
      // Category matches
      const categoryMatch = 
        selectedCategory === 'All' ||
        (selectedCategory === 'Fine' && col.category === 'Fine') ||
        (selectedCategory === 'Personal' && col.category === 'Personal') ||
        (selectedCategory === 'Home' && col.category === 'Home') ||
        (selectedCategory === 'Natural' && col.category === 'Natural');

      if (!categoryMatch) return false;

      // Text matches
      if (!searchTerm) return true;
      const term = searchTerm.toLowerCase();
      
      const titleMatch = col.title.toLowerCase().includes(term);
      const subtitleMatch = col.subtitle.toLowerCase().includes(term);
      const descriptionMatch = col.description.toLowerCase().includes(term);
      const tagsMatch = col.tags.some(tag => tag.toLowerCase().includes(term));

      return titleMatch || subtitleMatch || descriptionMatch || tagsMatch;
    });
  }, [searchTerm, selectedCategory]);

  const toggleSampleSelection = (colTitle: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedSamples(prev => {
      if (prev.includes(colTitle)) {
        return prev.filter(item => item !== colTitle);
      } else {
        return [...prev, colTitle];
      }
    });
  };

  const handleRequestPreFill = () => {
    if (selectedSamples.length === 0) return;
    
    // Convert array of titles into bullet points formatted text
    const sampleTextStr = selectedSamples.map(title => `- ${title}`).join('\n');
    localStorage.setItem('selected_collection_samples', sampleTextStr);
    
    // Reset selection & go to Contact tab
    setSelectedSamples([]);
    setActiveTab('contact');
  };

  const clearAllSelected = () => {
    setSelectedSamples([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423] pb-16 font-sans"
    >
      <SubpageHeader
        category="Fragrance Collections"
        title="Our Fragrance Oil"
        subtitle="Collections."
        backgroundImage="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=1920&q=85"
      />

      {/* INTRODUCTION HERO CARD */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-6 text-left" id="collections-top">
        <div className="bg-white border border-[#E6E0D6] rounded-2xl p-8 md:p-12 shadow-xs relative overflow-hidden">
          <div className="space-y-4 max-w-4xl">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1E2B16] font-normal leading-tight">
              Scent Experience & <span className="font-serif italic text-[#B28A4A]">Discovery</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl font-light">
              Our Fragrance Oil Collections are a great way to experience our fragrances. Our collections cover a wide range of product types, fragrance trends and scent directions. Find your target compounds and begin compounding.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#1E2B16] font-mono uppercase tracking-widest pt-1">
              <span className="flex items-center gap-1.5 bg-[#fbf9f4] border border-[#ece7de] px-3 py-1.5 rounded-md">
                <Check className="w-3.5 h-3.5 text-[#596E4E]" /> Free Evaluative Samples
              </span>
              <span className="flex items-center gap-1.5 bg-[#fbf9f4] border border-[#ece7de] px-3 py-1.5 rounded-md">
                <Check className="w-3.5 h-3.5 text-[#596E4E]" /> IFRA standard compliant
              </span>
              <span className="flex items-center gap-1.5 bg-[#fbf9f4] border border-[#ece7de] px-3 py-1.5 rounded-md">
                <Check className="w-3.5 h-3.5 text-[#596E4E]" /> Fast B2B Delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH CONTROL BAR */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="bg-white border border-[#E6E0D6] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
          
          {/* Quick Categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: 'All', label: 'All Categories' },
              { id: 'Fine', label: 'Fine Fragrance' },
              { id: 'Personal', label: 'Personal & Beauty' },
              { id: 'Home', label: 'Home & Air Care' },
              { id: 'Natural', label: 'Natural & Essential Oils' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 sm:px-3 sm:py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all uppercase select-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#596E4E] ${
                  selectedCategory === cat.id
                    ? 'bg-[#1E2B16] text-white font-medium shadow-xs'
                    : 'bg-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-96 flex-shrink-0">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search collections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-[#fcfbf9] border border-[#ece7de] text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-[#596E4E] font-mono"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
        
        {/* Active search status */}
        {(searchTerm || selectedCategory !== 'All') && (
          <div className="text-left text-xs text-gray-500 mt-3 font-mono">
            Showing {filteredCollections.length} of {COLLECTIONS_DATA.length} collections
            {selectedCategory !== 'All' && <span> in "{selectedCategory}" category</span>}
            {searchTerm && <span> matching "{searchTerm}"</span>}
          </div>
        )}
      </section>

      {/* COLLECTIONS GRID LAYOUT */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        {filteredCollections.length === 0 ? (
          <div className="bg-white border border-[#E6E0D6] rounded-2xl p-16 text-center space-y-4 max-w-xl mx-auto">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-gray-700">No Collections Located</h3>
            <p className="text-xs text-gray-500 leading-normal max-w-sm mx-auto">
              We couldn't find any fragrance profiles matching "{searchTerm}".
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="px-4 py-2 bg-[#1E2B16] text-[#FCFBF8] text-xs font-mono uppercase tracking-widest rounded-lg"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredCollections.map((col, index) => {
              const isSelected = selectedSamples.includes(col.title);
              // Extract the first paragraph as a summary preview on cards
              const firstParagraph = col.description.split('\n\n')[0] || col.description;
              
              return (
                <motion.div
                  key={col.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  onClick={() => setSelectedCollection(col)}
                  className="bg-white rounded-2xl border border-[#E6E0D6] shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between h-full group text-left cursor-pointer"
                >
                  <div className="space-y-0">
                    {/* Header Image Area */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 border-b border-gray-100">
                      <img 
                        src={col.image} 
                        alt={col.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-95" />
                      
                      {/* Scent family badge */}
                      <span className="absolute top-4 left-4 bg-[#1E2B16] text-white text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-xs backdrop-blur-xs">
                        {col.category} Suite
                      </span>

                      {/* Add to Basket button on card */}
                      <button
                        onClick={(e) => toggleSampleSelection(col.title, e)}
                        className={`absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95 ${
                          isSelected 
                            ? 'bg-[#B28A4A] text-white ring-2 ring-white'
                            : 'bg-[#1E2B16]/85 hover:bg-[#1E2B16] text-white backdrop-blur-xs'
                        }`}
                        title={isSelected ? "Remove from Sample List" : "Add to Sample Request"}
                      >
                        {isSelected ? <Check className="w-6 h-6 animate-pulse" /> : <PlusIcon className="w-5.5 h-5.5" />}
                      </button>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-serif text-lg sm:text-xl font-normal text-white leading-tight">
                          {col.title}
                        </h3>
                      </div>
                    </div>

                    {/* Scent brief description */}
                    <div className="p-6">
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light line-clamp-4">
                        {firstParagraph}
                      </p>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="px-6 py-4.5 border-t border-gray-100 bg-[#fafcf9] flex items-center justify-between gap-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedCollection(col); }}
                      className="text-[10px] font-mono uppercase tracking-widest text-[#B28A4A] hover:text-[#1E2B16] font-bold py-2 px-1 flex items-center gap-1 transition-all duration-200"
                    >
                      View Details <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => toggleSampleSelection(col.title, e)}
                      className={`text-[9px] font-mono tracking-widest uppercase px-4 py-2.5 sm:px-3 sm:py-2.5 rounded-lg font-bold transition-all border flex items-center gap-1.5 active:scale-95 ${
                        isSelected
                          ? 'bg-[#1E2B16] text-[#FCFBF8] border-[#1E2B16]'
                          : 'bg-white text-[#1E2B16] border-[#E6E0D6] hover:bg-[#faf9f4]'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <CheckSquare className="w-3.5 h-3.5 text-[#ebd9bd]" /> Selected
                        </>
                      ) : (
                        <>
                          <Square className="w-3.5 h-3.5 text-gray-300" /> Choose Sample
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* COMPACT FLOATING CART DRAWER */}
      <AnimatePresence>
        {selectedSamples.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4"
          >
            <div className="bg-[#1E2B16] text-white border border-[#404c38] rounded-2xl py-3.5 px-5 shadow-2xl flex items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-full bg-[#ebd9bd] text-[#1E2B16] flex items-center justify-center font-bold font-mono text-sm shadow-inner">
                  {selectedSamples.length}
                </div>
                <div>
                  <h4 className="text-xs font-mono tracking-wider font-semibold text-[#ebd9bd] uppercase">Sample Suite Request</h4>
                  <p className="text-[10px] text-gray-300 font-light truncate max-w-xs md:max-w-md">
                    {selectedSamples.join(', ')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={clearAllSelected}
                  className="p-1 px-2.5 rounded-lg text-xs text-gray-400 hover:text-white transition-all font-mono tracking-widest uppercase hover:bg-white/10 text-[9px]"
                >
                  Clear
                </button>
                <button
                  onClick={handleRequestPreFill}
                  className="bg-[#ebd9bd] text-[#1E2B16] font-mono text-[9px] font-bold tracking-widest uppercase px-4 py-2 rounded-lg hover:bg-[#faf6eb] hover:shadow-md transition-all flex items-center gap-1.5"
                >
                  Proceed <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DETAIL DRAWER MODAL */}
      <AnimatePresence>
        {selectedCollection && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1e2423]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedCollection(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              transition={{ type: 'spring', damping: 26 }}
              className="bg-[#fafaf7] text-[#1e2423] rounded-3xl w-full max-w-5xl p-6 md:p-8 lg:p-10 shadow-2xl relative flex flex-col md:flex-row gap-8 border border-[#ece7de] max-h-[92vh] overflow-y-auto md:overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCollection(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-[#E6E0D6] flex items-center justify-center text-gray-400 hover:text-black hover:shadow-xs transition-all z-25 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column Image & Context (Scroll container with custom scroll bar) */}
              <div className="w-full md:w-1/2 flex flex-col space-y-6 md:max-h-[78vh] md:overflow-y-auto pr-2 scrollbar-thin">
                {/* Visual Image container with NO CROPPING and Enlarge Ability */}
                <div 
                  onClick={() => setLightboxImage(selectedCollection.image)}
                  className="w-full h-80 rounded-2xl overflow-hidden bg-white border border-[#E6E0D6] relative flex items-center justify-center p-4 shadow-2xs select-none cursor-zoom-in group"
                  title="Click to view full uncropped image"
                >
                  <img 
                    src={selectedCollection.image} 
                    alt={selectedCollection.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain rounded-xl transition-transform duration-350 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-black/5 transition-colors duration-200" />
                  <div className="absolute bottom-3 right-3 bg-[#1e2423]/90 text-[#ebd9bd] text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm flex items-center gap-1 border border-white/10">
                    <Sparkles className="w-3 h-3" /> Tap to Enlarge
                  </div>
                  <span className="absolute bottom-3 left-3 bg-[#1e2423]/95 text-white text-[8px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-sm border border-white/10 shadow-sm">
                    {selectedCollection.category} Suite
                  </span>
                </div>

                {selectedCollection.idealApplications && (
                  <div className="space-y-2 text-left">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block">
                      Product Alignment
                    </span>
                    <h4 className="font-serif text-lg text-[#1E2B16] font-normal border-b border-gray-200 pb-2">
                      Ideal Applications
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-1.5 text-xs text-gray-600 font-light list-inside leading-normal pt-1">
                      {selectedCollection.idealApplications.map((app, i) => (
                        <li key={i} className="truncate select-none flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B28A4A] inline-block flex-shrink-0" /> {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Scent Discovery Sample Box Interactive Explanation Card */}
                <div className="bg-[#FAF8F5] border border-[#ece7de] rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-2xs text-left">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-[#596E4E]/10 text-[#596E4E]">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <h5 className="font-serif text-sm font-normal text-[#1E2B16] leading-none">
                      The Scent Discovery Box
                    </h5>
                  </div>

                  {/* Photo of the Premium Sample Box */}
                  <div className="relative w-full h-64 sm:h-72 rounded-xl bg-white border border-[#E6E0D6] flex items-center justify-center overflow-hidden hover:border-[#1E2B16]/30 transition-all shadow-xs group">
                    <img 
                      src="/website-assets/carvansons-sample-6-bottles.webp" 
                      alt="Carvansons Scent Discovery 6-Bottles Sample Box"
                      className="w-full h-full object-contain p-2.5 transition-transform duration-350 hover:scale-[1.01]"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                    Designed in alignment with our partner <strong className="text-gray-700 font-medium">Carvansons</strong>, our customized evaluative collection case houses six <strong className="text-gray-700 font-medium">5ml amber laboratory specimen containers</strong> filled with our pure oils, presented in a velvet-lined secure display and testing cartridge. Essential for evaluative longevity trials and base formulation testing.
                  </p>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => {
                      toggleSampleSelection(selectedCollection.title);
                      setSelectedCollection(null);
                    }}
                    className={`w-full py-3 px-4 rounded-xl font-mono text-[10px] font-bold tracking-widest uppercase transition-all shadow-xs border flex items-center justify-center gap-2 ${
                      selectedSamples.includes(selectedCollection.title)
                        ? 'bg-[#1E2B16] text-[#FCFBF8] border-[#1E2B16] hover:bg-[#1E2B16]/95'
                        : 'bg-white text-[#1E2B16] border-[#E6E0D6] hover:bg-[#faf9f4]'
                    }`}
                  >
                    {selectedSamples.includes(selectedCollection.title) ? (
                      <>
                        <CheckSquare className="w-4 h-4 text-[#ebd9bd]" /> Added to Samples
                      </>
                    ) : (
                      <>
                        <Square className="w-4 h-4 text-gray-300" /> Request Sample Box
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column Scent Elements & Description */}
              <div className="w-full md:w-1/2 flex flex-col justify-between py-1 text-left md:max-h-[78vh] md:overflow-y-auto pr-2 scrollbar-thin">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#B28A4A] font-bold block mb-1">
                      {selectedCollection.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1E2B16] leading-tight">
                      {selectedCollection.title}
                    </h3>
                  </div>

                  {/* Dynamic Multi-paragraph copy provided by user */}
                  <div className="space-y-4 border-l-2 border-[#E6E0D6] pl-4 py-1">
                    {selectedCollection.description.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx} className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Clean Certification Badge */}
                  <div className="bg-[#FAF8F5] border border-[#ece7de] rounded-xl p-4 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#596E4E] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[10px] font-mono uppercase font-bold text-[#1E2B16] tracking-wider mb-0.5">Compliant B2B Formulation</h5>
                      <p className="text-[11px] text-gray-500 font-sans leading-normal">
                        Our premium compound samples are 100% compliant with international IFRA regulatory standards & safety regulations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-5 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[11px] text-gray-400 font-light flex items-center gap-1 select-none">
                    <Info className="w-3.5 h-3.5" /> Free 6-sample evaluative custom boxes available.
                  </span>
                  <button
                    onClick={() => {
                      localStorage.setItem('selected_collection_samples', `- ${selectedCollection.title}`);
                      setSelectedCollection(null);
                      setActiveTab('contact');
                    }}
                    className="text-[10px] font-mono uppercase tracking-widest text-[#B28A4A] font-bold hover:text-[#1E2B16] flex items-center gap-1 transition-colors group self-start sm:self-auto"
                  >
                    Direct Brief Request <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transform duration-200" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Lightbox for uncropped image scaling (Mobile Friendly) */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-150 flex items-center justify-center p-4 sm:p-6 md:p-12 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-full max-h-[85vh] flex items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image itself - Containment, No cropping */}
              <img
                src={lightboxImage}
                alt="Enlarged scent visual"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />

              {/* Close Button overlay */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white/80 hover:text-white transition-colors p-2 text-xs font-mono tracking-widest uppercase flex items-center gap-1.5 focus:outline-none"
              >
                <X className="w-5 h-5 bg-black/40 rounded-full p-1" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// PlusIcon mini helper for quick visual
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}
