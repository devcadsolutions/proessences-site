import React, { useState, useMemo } from 'react';
import SubpageHeader from './SubpageHeader';
import { motion, AnimatePresence } from 'motion/react';
import { AppTab } from '../types';
import { Search, X, ChevronDown, HelpCircle, Mail, Sparkles, MessageSquare } from 'lucide-react';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

const FAQ_DATA: FaqCategory[] = [
  {
    id: "fragrance-creation",
    title: "Fragrance Creation",
    items: [
      {
        q: "Do you provide samples?",
        a: "Yes, we provide free of charge samples of all fragrances as it is extremely important to test formulations before you purchase. Please give feedback to these samples once you have evaluated as we can always rework or re-select a fragrance to help ensure compatibility with your bases and manufacturing processes.\n\nWhen requesting samples, it is important for Proessences / Carvansons to know the products and potential future products the aromas will be used in, along with the dosage levels you aim to work at. Furthermore, if you can advise on any legislative and formulation preferences you would like the formulations to conform to, we can keep this in mind whilst formulating and selecting."
      },
      {
        q: "Can you provide advice on the best perfumes for my product?",
        a: "We are experts at supporting customers with fragrance selections. With over 80 years of heritage and experience, we have extensive knowledge about fragrance development and how you can create a signature scent that sets your product apart. Talk to one of our advisors today."
      },
      {
        q: "What fragrances are suitable for skin care, beauty and personal care applications?",
        a: "Selecting fragrance for skincare and personal care products can be complex. We are able to provide allergen-free and skincare-specific fragrances. We can also re-formulate and adapt fragrances to make them suitable for skincare and personal care uses. We can provide advice and guidance on skincare fragrances to ensure the scent you select is fit for its intended use."
      },
      {
        q: "Do you have a brochure of scents?",
        a: "As a specialist in bespoke fragrance creation, we are constantly developing new fragrances. As a result, we are unable to offer a general brochure of our fragrances. We maintain an extensive, active library of fragrances. If we don't already have the exact fragrance you require, we can easily formulate or recreate it. We are also able to work from a customer brief or provide a selection of suitable options that you may wish to consider. For further information on our aromas please contact our team."
      },
      {
        q: "Do you offer bespoke fragrances?",
        a: "Yes, Proessences provides a unique and bespoke fragrance creation service tailored to meet any brief requirement. Our talented evaluators and creative perfumers constantly identify new and exciting trends and raw materials to offer a world of fragrance that supports and compliments your business. Contact us to send your fragrance brief."
      },
      {
        q: "What is a fragrance oil made up of?",
        a: "Fragrances can be formulated in three main pathways:\n• Fully natural, made using essential oils\n• Created using only synthetic aromatic materials\n• A blend of both essential oils and synthetic elements\n\nMost fragrances tend to be an intentional mix of essential oils and synthetic aromatic materials. Whichever option you choose, we can always formulate or recommend capabilities to an exact brief and IFRA requirements."
      },
      {
        q: "What are allergens?",
        a: "Some chemicals used to create fragrances are classed as allergens. Allergenic chemicals can occur from some synthetic aromatic materials but also naturally within essential oils. All our fragrances are submitted with Allergen Declarations which will advise any allergens present in the formulations along with their inclusion levels.\n\nChemicals, natural and synthetic, are constantly retested by IFRA for safety in use. We maintain a large range of allergen-free fragrances for sensitive applications."
      },
      {
        q: "What products can I use your fragrances in?",
        a: "Our fragrances are used in a wide range of products—virtually anything which requires a signature scent. We produce fragrances for consumer products (fine fragrance, home fragrance, household, and personal care), along with industrial formulas, automotive applications, and custom ambient space diffusion."
      },
      {
        q: "Can you trademark a fragrance?",
        a: "Technically yes, you can trademark a smell, however, it is rare to do so, as you will have to provide and publish a full list of all the fragrance chemicals and components included in the scent. As a result, this then could be found by competitors or those wishing to replicate the scent. They would only need to change one small element and the scent could in theory be confirmed as a brand new scent."
      }
    ]
  },
  {
    id: "fragrance-development",
    title: "Development & Manufacturing",
    items: [
      {
        q: "How much fragrance oil should I add to my products?",
        a: "All products have different fragrance requirements and thresholds. It is worth taking your time and testing different dosages of the fragrance in your product. All fragrances supplied are issued with IFRA Conformity Certificates—this is an extremely important document when deciding on your fragrance dosage, as it advises what level you can safely use the aroma up to in different product categories. Please note the IFRA certificate does not recommend an actual dosage you should be using, but just a maximum safety limit.\n\nA large aspect of dosage is down to your personal preference, cost, and the amount of aroma your base can hold. If your base has a natural smell to it, you may find you have to add a higher dosage of aroma to cover the smell of the base. Overdosing could cause issues with your product's chemical manufacture and functionality. Please don't hesitate to contact us for recommended dosage levels."
      },
      {
        q: "Can I mix fragrance oils together?",
        a: "Yes, blending fragrances together is a great way to create new scents. We can advise on how this can be done safely and to the best effect. Please note any amendments to commercial formulations will require fresh reassessments and technical hazard documents."
      },
      {
        q: "Can you provide fragrance descriptions?",
        a: "Yes, we can offer fragrance olfactory triangles and lists of top, middle, and base notes upon request of any formulations. We can also advise on how you can best describe your fragrance for use in your brand marketing."
      },
      {
        q: "What is a fragrance flashpoint?",
        a: "The flashpoint of a fragrance is the temperature at which it becomes combustible if exposed to a spark or open flame. The flashpoint for each configuration is located on the CLP Safety Data Sheet under Section 9 (Physical and Chemical Properties). Should you require testing or stabilization at a specific temperature, our chemical team can support this."
      },
      {
        q: "How long will a fragrance oil last?",
        a: "We advise a technical shelf-life of 18 months for fragrances, as long as they are kept in a cool, dry place, out of direct sunlight, and headspace within containers is kept to a minimum. We recommend decanting bulk aromas into smaller containers to limit oxygen exposure and reduce oxidization.\n\n*Please note: Although the formal shelf life is 18 months, we recommend using your fragrance within 12 months of formulation to ensure you receive the most vibrant olfactory impact."
      },
      {
        q: "How do I know if your fragrance is safe to use?",
        a: "We are active conforming standard followers of the International Fragrance Association (IFRA) and comply with all regulatory requirements. We apply the strict IFRA Code of Practice to our processes, and conform strictly to COSHH and CLP for the handling, labeling, and shipping of all aromatic compounds."
      },
      {
        q: "How long does it take for my fragrance(s) to be manufactured?",
        a: "The fragrances we create are made strictly to order. This ensures that the product is fresh and specifically compounded for your requirements, maintaining its potency for the maximum duration.\n\nWe aim to manufacture and pack orders within 10 working days from order confirmation or receipt of payment. Note that this is a guide and is subject to change based on seasonal demand, raw botanical material availability, and other chemical processing factors."
      },
      {
        q: "Will I own my fragrance formulations?",
        a: "All newly created custom formulas are intellectual property. The exception is if clients come to our facility with a fully complete pre-existing formulation sheet identifying exact raw materials and inclusion levels to be mixed in bulk."
      }
    ]
  },
  {
    id: "my-order",
    title: "My Order & Shipping",
    items: [
      {
        q: "How long does it take for my order to be delivered?",
        a: "We always endeavour to fulfill and ship your orders as quickly as possible. Once the 10-day manufacturing window is complete, local or global cargo shipping begins. If your order is highly time-sensitive, please state your required arrival window when confirming your order, and we will do our best to meet your milestones."
      },
      {
        q: "How do I track my order?",
        a: "You can track your order status and batch processing coordinates by reaching out to our dedicated client services desk at sales@proessences.com (or via the inquiry screen on this portal)."
      },
      {
        q: "Do you do returns?",
        a: "Due to fragrance formulations being bespoke compounds manufactured to order specifically for product types and requirements, we do not operate a general returns policy. If you believe there is a problem with the compound quality upon receipt of an order, please contact our technical desk within 7 days of delivery, and we will initiate an investigation with our partner lab.\n\nWe accept raw material returns only if partner quality assurance verifies that a compound package is physically or chemically defective."
      },
      {
        q: "Can I make changes to an order?",
        a: "Please contact our order processing office immediately if changes are required after submitting an order. While we cannot guarantee changes can be made once batch compounding has begun at the UK manufacturing facility, we will make every effort to assist and resolve issues where possible."
      }
    ]
  }
];

export default function FaqTab({ setActiveTab }: TabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Filter Categories & Items based on search and selected tab
  const filteredData = useMemo(() => {
    return FAQ_DATA.map(category => {
      // If we are looking at a specific category, and it doesn't match, return empty items
      if (activeCategory !== 'all' && category.id !== activeCategory) {
        return { ...category, items: [] };
      }

      // Filter individual items within the category
      const matchedItems = category.items.filter(item => {
        const matchesSearch = 
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
      });

      return {
        ...category,
        items: matchedItems
      };
    }).filter(cat => cat.items.length > 0);
  }, [activeCategory, searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      <SubpageHeader
        category="Support & Guidance"
        title="Frequently Asked"
        subtitle="Questions & Guidelines."
        backgroundImage="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1920&q=85"
      />

      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-12">
        
        {/* Intro Summary Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] block">Information Center</span>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-[#1E2B16]">
            Navigating the World of Specialty Scent Manufacture
          </h2>
          <p className="text-xs sm:text-sm font-light text-gray-500 leading-relaxed">
            With over 80 years of shared fragrance heritage, we help advise our customers 
            on selection, compliance, dosage, and delivery matrices. Browse our index below 
            to answers for common industry queries.
          </p>
        </div>

        {/* Interactive Filter Control & Search Section */}
        <div className="bg-white rounded border border-[#ece7de] p-6 lg:p-8 space-y-6 shadow-xs max-w-4xl mx-auto">
          {/* Dynamic Search Box */}
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center justify-center text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search frequently asked questions, ordering help, or storage guidelines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#fafaf7] text-[#1e2423] text-sm py-3 px-11 rounded focus:outline-none focus:ring-1 focus:ring-[#596E4E]/50 border border-[#ece7de] transition-colors"
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

          {/* Tab Filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 border-t border-[#ece7de]/60">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all focus:outline-none cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#1E2B16] text-[#FCFBF8] shadow-xs'
                  : 'text-[#6F685F] hover:text-[#1E2B16] hover:bg-[#fafaf7]'
              }`}
            >
              All Topics
            </button>
            {FAQ_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all focus:outline-none cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1E2B16] text-[#FCFBF8] shadow-xs'
                    : 'text-[#6F685F] hover:text-[#1E2B16] hover:bg-[#fafaf7]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions main list container */}
        <div className="max-w-4xl mx-auto space-y-12 min-h-[250px]">
          <AnimatePresence mode="popLayout">
            {filteredData.length > 0 ? (
              filteredData.map((category) => (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <h3 className="font-serif text-lg text-[#1E2B16] font-semibold border-b border-[#ece7de] pb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#596E4E]"></span>
                    {category.title}
                  </h3>

                  <div className="space-y-3">
                    {category.items.map((item, index) => {
                      const itemKey = `${category.id}-${index}`;
                      const isExpanded = !!expandedItems[itemKey];

                      return (
                        <div
                          key={index}
                          className="bg-white rounded border border-[#ece7de] overflow-hidden transition-all duration-300 hover:border-[#1E2B16]/30"
                        >
                          {/* Accordion Header */}
                          <button
                            onClick={() => toggleItem(itemKey)}
                            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                          >
                            <span className="font-serif text-[14px] sm:text-[15px] font-medium text-[#1E2B16] leading-tight">
                              {item.q}
                            </span>
                            <span className={`w-8 h-8 rounded-full bg-[#faf8f4] border border-[#ece7de] flex items-center justify-center text-gray-500 transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180 bg-[#1E2B16]/5 text-[#1E2B16] border-[#1E2B16]/20' : ''}`}>
                              <ChevronDown className="w-4 h-4" />
                            </span>
                          </button>

                          {/* Accordion Content with framer-motion */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                              >
                                <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 border-t border-[#ece7de]/40 leading-relaxed font-light whitespace-pre-line bg-[#fafcfb]/60">
                                  {item.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 bg-white rounded border border-[#ece7de] p-8 max-w-md mx-auto space-y-4"
              >
                <div className="w-12 h-12 bg-[#faf8f4] border border-[#ece7de] text-[#b38b4d] rounded-full flex items-center justify-center mx-auto">
                  <HelpCircle className="w-5 h-5 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-lg text-[#1E2B16]">No questions found</p>
                  <p className="text-xs text-gray-400 font-light max-w-xs mx-auto">
                    We couldn't find any questions matching "{searchQuery}" under this category.
                  </p>
                </div>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="px-4 py-1.5 border border-[#ece7de] hover:bg-gray-50 text-[11px] font-bold uppercase tracking-wider rounded transition-colors text-xs cursor-pointer focus:outline-none"
                >
                  Reset all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Technical Assistance panel */}
        <section className="bg-white rounded border border-[#ece7de] p-8 md:p-12 space-y-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-xl">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#596E4E] flex items-center gap-1.5/60">
              <Sparkles className="w-3.5 h-3.5" /> Technical Help Desk
            </span>
            <h3 className="font-serif text-xl font-normal text-[#1E2B16]">
              Have a question that hasn't been answered?
            </h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              If you have a customized chemical base parameter, require special packaging configurations, 
              or want to consult directly on safety declarations, our technical team is fully available.
            </p>
          </div>
          <button
            onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
            className="px-6 py-3 whitespace-nowrap bg-[#1E2B16] hover:bg-[#596E4E] text-[#FCFBF8] font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer shadow-xs focus:outline-none"
          >
            Ask a Question &rarr;
          </button>
        </section>

      </div>
    </motion.div>
  );
}
