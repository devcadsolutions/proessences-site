import React, { useState, useMemo } from 'react';
import SubpageHeader from './SubpageHeader';
import { motion, AnimatePresence } from 'motion/react';
import { AppTab } from '../types';
import { Search, X, BookOpen, Sparkles, HelpCircle } from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

const GLOSSARY_ITEMS = [
  {
    term: "Accord",
    definition: "A term used to describe a blend of aromatic chemicals that blend into a particular note E.G., floral, green, rose and used in a formula as an ingredient."
  },
  {
    term: "Agarwood",
    definition: "Also known as Oud, this has been used as a perfumery ingredient for thousands of years. Today, it is one of the most expensive fragrance materials. In its crude form it is a resin that forms on the bark of a tree that has been infected by a virus. The tree is found in the far east and Assam."
  },
  {
    term: "Aldehyde",
    definition: "These are organic compounds found in various natural elements – though modern perfumer uses synthetic versions."
  },
  {
    term: "Allergen Declaration",
    definition: "This is a document provided by a fragrance manufacturer which declares all allergens present in the fragrance and at what level they are present in the fragrance at."
  },
  {
    term: "Allergens",
    definition: "Allergens are fragrance chemicals that are found in most essential oils and in single chemicals that can cause an allergic reaction."
  },
  {
    term: "Amber",
    definition: "Associated with warmth and sensuality. It is often accompanied with exotic flowers and spices."
  },
  {
    term: "Ambergris",
    definition: "Ambergris is also known as whale vomit and is more expensive than oud. It has a unique odour and historically this material was used as a fixative however modern perfumery now uses a synthetic version."
  },
  {
    term: "Aromatic",
    definition: "This refers to herbal, grassy scents. They contain combinations of sage, rosemary, cumin, lavender and other plants."
  },
  {
    term: "Balsamic",
    definition: "This refers to sweet, rich and thick notes."
  },
  {
    term: "Base Notes",
    definition: "The notes give depth to the aroma and create a lasting impression."
  },
  {
    term: "CAS Numbers",
    definition: "This stands for Chemical Abstracts Service which is a unique identifying number for chemicals and essential oils."
  },
  {
    term: "Chypre",
    definition: "This phrase refers to the fragrance family characterised by an accord composed of citrus top notes, a middle centered on cistus labdanum, and a mossy-animalic set of basenotes derived from oakmoss."
  },
  {
    term: "Citrus",
    definition: "This description is used for fragrances that are in the character of Lemon, Lime, Grapefruit, Mandarin and Orange."
  },
  {
    term: "Classic Fragrance",
    definition: "A fragrance that has been popular for many years. As an example, Chanel Number 5 which was first launched in the early 1920’s."
  },
  {
    term: "Eau de Cologne",
    definition: "This type of fragrance is the earliest type of commercial fragrance which were based on essential oils blended with alcohol."
  },
  {
    term: "Essential Oils",
    definition: "Oils which are extracted from plants, wood, leaves, roots, grasses and fruit. The extraction can be by steam, cold-pressed or solvent."
  },
  {
    term: "Floral",
    definition: "Fragrances predominantly reminiscent of flowers such as Rose, Honeysuckle and Jasmin."
  },
  {
    term: "Fougere",
    definition: "Fougere means 'fern-like' in French and describes one of the main fragrance families."
  },
  {
    term: "Fragrance Families",
    definition: "A fragrance family is a classification system that the industry uses to place scents into olfactory groups."
  },
  {
    term: "Fragrance Pyramid",
    definition: "Also known as a fragrance triangle, this is a simple way of describing a fragrance by highlighting the notes throughout the aroma."
  },
  {
    term: "Gourmand",
    definition: "Odours similar to sweet honey and chocolate which are good enough to eat. One of the most successful gourmand fragrances was Angel by Mugler."
  },
  {
    term: "Greens",
    definition: "Fragrances reminiscent of freshly cut grass and snapped leaves in spring."
  },
  {
    term: "Heady",
    definition: "A Fragrance which has a hypnotic effect."
  },
  {
    term: "IFRA Conformity Certificate",
    definition: "IFRA stands for the International Fragrance Association. Issued by the fragrance manufacturer, this certificate advises levels you can safely use the fragrance up to in a number of different product categories."
  },
  {
    term: "INCI Names",
    definition: "The Latin names for chemicals and essential oils."
  },
  {
    term: "International Fragrance Association",
    definition: "IFRA is the global representative body for the fragrance industry. It seeks to represent the collective interest of the industry and promote the safe use of fragrances."
  },
  {
    term: "Layering",
    definition: "When 2-4 fragrances blend together to create a unique fragrance."
  },
  {
    term: "Leather",
    definition: "The scent varies from floral to woody. They are used to mask other unpleasant smells."
  },
  {
    term: "Middle Notes",
    definition: "This is the heart of the aroma and tends to form the foundation of the fragrance."
  },
  {
    term: "Musk",
    definition: "Originally the musky note was provided by glandular secretions from animals such as the musk deer. Today there are a range of powerful synthetic musks available."
  },
  {
    term: "Natural Fragrance",
    definition: "A fragrance created using only essential oils."
  },
  {
    term: "Niche Fragrance",
    definition: "A Fragrance that is exclusive and unique. It often has its own story behind it and stands out from all the classic brands."
  },
  {
    term: "Olfactory",
    definition: "The term which refers to the sense of smell or the act or process of smelling."
  },
  {
    term: "Ozonic",
    definition: "Ozonic fragrances replicate the smells associated with the sea and the sea air."
  },
  {
    term: "Pot Pourri",
    definition: "Historically the term was used to describe a mixture of dried, natural plant materials. For example, lavender heads, orange peel and flower petals."
  },
  {
    term: "Powdery",
    definition: "Scent that come from notes from powdery elements such as iris, musk and vanilla."
  },
  {
    term: "Research Institute for Fragrance Materials",
    definition: "RIFM uses deep and specialist expertise to continually review ingredients, based on potential health or environmental effects as well as real-world insights on people’s use of fragranced products."
  },
  {
    term: "Spicy",
    definition: "Fragrances which have characters that include clove, cinnamon, nutmeg, ginger and pepper."
  },
  {
    term: "Synthetic Fragrance",
    definition: "Fragrances created in a lab, often from petroleum and natural gas."
  },
  {
    term: "Top Note",
    definition: "The first impression of the aroma. This tends to be made up of the more volatile chemicals in the formulation."
  },
  {
    term: "Trickle Down",
    definition: "A word used to describe a fine fragrance that has influenced similar fragrances in other product categories. An example would be Davidoff Cool Water which influenced similar variations in household, air care and automobile products."
  },
  {
    term: "White Floral",
    definition: "This is a subgroup within the floral group which have the most narcotic scent. It’s lush, opulent and intoxicating. It creates intense femininity in fragrances."
  },
  {
    term: "Woody",
    definition: "This refers to earthy, sensual scents which tend to be in the base notes of many men’s fragrances."
  }
];

export default function GlossaryTab({ setActiveTab }: TabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('All');

  // Find all starting letters available in our items list
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    GLOSSARY_ITEMS.forEach(item => {
      const firstLetter = item.term.charAt(0).toUpperCase();
      if (firstLetter && /[A-Z]/.test(firstLetter)) {
        letters.add(firstLetter);
      }
    });
    return ['All', ...Array.from(letters).sort()];
  }, []);

  // Filter items based on search query AND alphabetical button selection
  const filteredItems = useMemo(() => {
    return GLOSSARY_ITEMS.filter(item => {
      const matchesSearch = 
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLetter = 
        selectedLetter === 'All' || 
        item.term.toUpperCase().startsWith(selectedLetter);

      return matchesSearch && matchesLetter;
    });
  }, [searchQuery, selectedLetter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      <SubpageHeader
        category="Terminology & Knowledge Base"
        title="Olfactive"
        subtitle="Glossary & Standards."
        backgroundImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85"
      />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-12">
        
        {/* Intro context section */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] block">Industry Terminology</span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1E2B16]">
            The Language of Scent Creation
          </h2>
          <p className="text-sm font-light text-gray-500 leading-relaxed">
            Perfumery is a delicate overlap of creative mastery and rigid analytical chemistry. 
            This quick reference index summarizes the vital terminology, certifications, and chemical structures 
            referenced across the Proessences inventory.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded border border-[#ece7de] p-6 lg:p-8 space-y-6 max-w-5xl mx-auto">
          {/* Search Input bar */}
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center justify-center text-gray-500">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search terms, chemical standards, definitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#fafaf7] text-[#1e2423] text-sm py-3.5 pl-12 pr-12 rounded focus:outline-none focus:ring-1 focus:ring-[#596E4E]/50 border border-[#ece7de] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-4 flex items-center justify-center text-gray-400 hover:text-[#1e2423]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Alphabetical buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 border-t border-[#ece7de]/60">
            {availableLetters.map(letter => {
              const isSelected = selectedLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded uppercase tracking-wider transition-all focus:outline-none cursor-pointer ${
                    isSelected
                      ? 'bg-[#1E2B16] text-[#FCFBF8] shadow-xs'
                      : 'text-gray-500 hover:text-[#1E2B16] hover:bg-[#fafaf7]'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Glossary Main List - Grid */}
        <div className="max-w-5xl mx-auto min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.term}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white p-6 md:p-8 rounded border border-[#ece7de] hover:border-[#596E4E]/40 hover:shadow-xs transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-lg font-bold text-[#1E2B16] tracking-tight group-hover:text-[#596E4E] transition-colors">
                          {item.term}
                        </h3>
                        <span className="text-[10px] font-mono tracking-wider font-semibold text-[#b38b4d] uppercase px-2 py-0.5 bg-[#faf8f4] rounded border border-[#ece7de]/60">
                          {item.term.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#4e5554] leading-relaxed font-light font-sans">
                        {item.definition}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-center py-20 bg-white rounded border border-[#ece7de] max-w-lg mx-auto space-y-4"
              >
                <div className="w-12 h-12 bg-[#faf8f4] border border-[#ece7de] text-[#b38b4d] rounded-full flex items-center justify-center mx-auto">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-lg text-[#1E2B16]">No terms found</p>
                  <p className="text-xs text-gray-500 font-light max-w-xs mx-auto">
                    We couldn't find matches for "{searchQuery}" under the starting letter "{selectedLetter}". Try expanding your search terms.
                  </p>
                </div>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedLetter('All'); }}
                  className="px-4 py-1.5 border border-[#ece7de] hover:bg-gray-50 text-[11px] font-bold uppercase tracking-wider rounded transition-colors text-xs"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Technical Assistance promo */}
        <section className="bg-white rounded border border-[#ece7de] p-8 md:p-12 space-y-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-xl">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#b38b4d] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Technical Standards Compliance
            </span>
            <h3 className="font-serif text-xl text-[#1E2B16]">
              Looking for exact safety dossiers, IFRA, or allergen values?
            </h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              We supply comprehensive material chemical sheets and certificate documentations (IFRA certificate of conformity, Allergens declaration, and SDS files) on a per-batch basis for bulk orders.
            </p>
          </div>
          <button
            onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
            className="px-6 py-3 whitespace-nowrap bg-[#1E2B16] hover:bg-[#596E4E] text-[#FCFBF8] font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer shadow-xs focus:outline-none"
          >
            Request Dossiers &rarr;
          </button>
        </section>

      </div>
    </motion.div>
  );
}
