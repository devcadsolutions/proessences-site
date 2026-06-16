import React from 'react';
import SubpageHeader from './SubpageHeader';
import { motion } from 'motion/react';
import { AppTab } from '../types';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function FaqTab({ setActiveTab }: TabProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      <SubpageHeader
        category="Help & Information"
        title="Frequently Asked"
        subtitle="Questions."
        backgroundImage="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1920&q=85"
      />

      <div className="w-full max-w-4xl mx-auto px-6 py-16 space-y-6">
        <div className="space-y-4 text-left max-w-2xl mx-auto">
          {[
            { q: 'How long do custom fragrance oils typically last?', a: 'Properly stored in a cool, dark place, our high-quality fragrance oils have a shelf life of 18–24 months.' },
            { q: 'Can you replicate a specific scent profile?', a: 'Yes. In partnership with Carvansons, we specialize in precisely recreating specific scent profiles based on your requirements.' },
            { q: 'Are your fragrances vegan and cruelty-free?', a: 'We prioritize ethical sourcing and offer a wide range of synthetic and plant-derived materials that are entirely cruelty-free.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded border border-[#ece7de] shadow-sm">
              <h3 className="font-bold text-[#1E2B16] mb-2">{item.q}</h3>
              <p className="text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
