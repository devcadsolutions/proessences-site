import React from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import SubpageHeader from './SubpageHeader';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function SamplesTab({ setActiveTab }: TabProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      <SubpageHeader
        category="Bespoke Creation"
        title="Fragrance Application"
        subtitle="Samples."
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=85"
      />

      <div className="w-full max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Our fragrance creations are found in a wide range of products and applications. Testing your chosen fragrance oils in your base application is essential to ensure a successful final product.
          </p>
          <p>
            Whether you're creating a new product or trying out a new scent, it's important to know how the fragrance oil will interact with your ingredients and what effect it may have on your final product.
          </p>
          
          <h2 className="font-serif text-2xl text-[#1E2B16] mb-4">The Application Process</h2>
          <p>
            We collaborate closely with you to ensure the fragrance you select is suitable for your intended final product. Our comprehensive evaluation process includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>Evaluating fragrance oil to ensure the sample blends accordingly.</li>
            <li>Measuring the impact on quality, aroma, and colour in the final product.</li>
            <li>Supplying samples in their oil form, or as a cream, spray, or candle upon request.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white p-8 rounded border border-[#ece7de] shadow-sm">
             <h3 className="font-bold text-[#1E2B16] mb-4">We provide application samples for:</h3>
             <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Body Lotions & Washes</li>
                <li>Candles & Reed Diffusers</li>
                <li>Perfume sprays</li>
                <li>Shampoo & Soap</li>
             </ul>
           </div>
           <div className="bg-white p-8 rounded border border-[#ece7de] shadow-sm">
             <h3 className="font-bold text-[#1E2B16] mb-4">Need the right fragrance?</h3>
             <p className="text-sm text-gray-600 mb-4">
               Not found the right scent for your product? We are happy to rework or re-select a fragrance to ensure compatibility with your bases and manufacturing processes.
             </p>
             <button 
                onClick={() => setActiveTab('contact')}
                className="w-full py-2 bg-[#596E4E] text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-[#43533A] transition-colors"
              >
                Contact Us
             </button>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
