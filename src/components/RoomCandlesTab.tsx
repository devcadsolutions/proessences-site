import React from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import SubpageHeader from './SubpageHeader';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function RoomCandlesTab({ setActiveTab }: TabProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      <SubpageHeader
        category="Fragrance Applications"
        title="Room & Candles"
        subtitle="Fragrances."
        backgroundImage="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1920&q=85"
      />

      <div className="w-full max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Room & Candle Fragrances are big news and fragrance oils for these products have become more diverse over the years. Air fresheners are all about eliminating unpleasant odours in a room and changing the ambience. For candles, it is all about wellbeing, relaxation and mood-setting.
          </p>
          <blockquote className="border-l-4 border-[#b38b4d] pl-6 my-8 italic text-gray-600">
            "The global Air Freshener and Room Fragrance and Candles market is expected to grow by 3.5% annually between 2018 to 2025."
          </blockquote>
          
          <h2 className="font-serif text-2xl text-[#1E2B16] mb-4">Air Fresheners</h2>
          <p>
            This is a product area where we have seen huge growth. Air fresheners can take a wide range of forms, including scented disks, powders, liquid sprays and products targeting specific odours, such as pet smells. These odour-neutralising products breathe freshness and life into environments suffering from poor air circulation.
          </p>
          
          <h2 className="font-serif text-2xl text-[#1E2B16] mb-4">Candle Ambience</h2>
          <p>
            The ambience created in a room by candles can impact your mood, wellbeing, and ability to focus. This sector is wide-ranging, including candles, melts, reed diffusers, incense and other room fragrance solutions. The choice of fragrance for these products can differ vastly depending upon culture, seasonality and geographical location.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white p-8 rounded border border-[#ece7de] shadow-sm">
             <h3 className="font-bold text-[#1E2B16] mb-4">We create fragrance for:</h3>
             <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Sprays/Aerosols</li>
                <li>Room Fragrance</li>
                <li>Electric Air Fresheners</li>
                <li>Gels Air Fresheners</li>
                <li>Candles</li>
                <li>Reed Diffusers</li>
                <li>Wax Melts</li>
             </ul>
           </div>
           <div className="bg-white p-8 rounded border border-[#ece7de] shadow-sm">
             <h3 className="font-bold text-[#1E2B16] mb-4">Our Expertise</h3>
             <p className="text-sm text-gray-600">
               We work with both global household names and smaller, niche businesses to create authentic brand identities through bespoke fragrances. Through our international partnership with Carvansons, we are able to provide global industry insights and advise on the right product for your target market.
             </p>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
