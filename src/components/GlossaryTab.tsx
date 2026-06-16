import React from 'react';
import SubpageHeader from './SubpageHeader';
import { motion } from 'motion/react';
import { AppTab } from '../types';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function GlossaryTab({ setActiveTab }: TabProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      <SubpageHeader
        category="Terminology & Knowledge"
        title="Glossary of"
        subtitle="Fragrance Terms."
        backgroundImage="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1920&q=85"
      />

      <div className="w-full max-w-4xl mx-auto px-6 py-16 space-y-6">
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {[
            { term: 'Accord', definition: 'A balanced blend of three or more scents which lose their individual identity to create a completely new, unified fragrance.' },
            { term: 'Top Note', definition: 'The initial scent perceived immediately upon application; usually light, volatile molecules.' },
            { term: 'Heart Note', definition: 'The core character of the fragrance that emerges after the top notes dissipate; often floral or spicy.' },
            { term: 'Base Note', definition: 'The heavy, long-lasting molecules that anchor the scent, emerging hours after application.' },
            { term: 'Sillage', definition: 'The trail or scent left behind by someone wearing a fragrance.' },
            { term: 'Olfactory', definition: 'Relating to the sense of smell.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded border border-[#ece7de] shadow-sm">
              <h3 className="font-bold text-[#1E2B16] mb-2">{item.term}</h3>
              <p className="text-sm text-gray-600">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
