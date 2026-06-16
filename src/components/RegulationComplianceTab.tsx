import React from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import SubpageHeader from './SubpageHeader';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function RegulationComplianceTab({ setActiveTab }: TabProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      <SubpageHeader
        category="Compliance & Standards"
        title="Fragrance Regulation"
        subtitle="and Compliance."
        backgroundImage="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1920&q=85"
      />
    </motion.div>
  );
}
