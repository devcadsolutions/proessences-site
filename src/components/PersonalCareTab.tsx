import React from 'react';
import { motion } from 'motion/react';
import { AppTab } from '../types';
import SubpageHeader from './SubpageHeader';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function PersonalCareTab({ setActiveTab }: TabProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      <SubpageHeader
        category="Fragrance Applications"
        title="Fragrance for Personal Care"
        subtitle="& Beauty Products."
        backgroundImage="https://images.unsplash.com/photo-1549488344-c367f08c028a?auto=format&fit=crop&w=1920&q=85"
      />

      <div className="w-full max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Fragrance for Personal Care & Beauty products is a huge, growing and diverse industry. Consumers are becoming more knowledgeable and aware of the products they use and as a result about the fragrance being used. Product effectiveness and the ingredients used are having a bigger effect on consumer buying habits than ever before.
          </p>
          <blockquote className="border-l-4 border-[#b38b4d] pl-6 my-8 italic text-gray-600">
            "In 2022 the Global Beauty and Personal Care Market is expected to grow by 5.2%. Industry revenue is expected to surpass $120 billion by 2025."
          </blockquote>
          
          <h2 className="font-serif text-2xl text-[#1E2B16] mb-4">Beauty Creams and Face Lotions</h2>
          <p>
            The themes of soothing, rejuvenation and brightening are closely associated with facial products and creams. Fragrances in this sector often emphasize calming, brightness and freshness.
          </p>

          <h2 className="font-serif text-2xl text-[#1E2B16] mb-4">Haircare Products</h2>
          <p>
            Whilst many haircare fragrances are chosen for their zingy, fresh cleaning quality, others are linked to beneficial attributes for nourishing and protecting hair.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white p-8 rounded border border-[#ece7de] shadow-sm">
             <h3 className="font-bold text-[#1E2B16] mb-4">We create fragrance for:</h3>
             <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Deodorants</li>
                <li>Facial tissues and Toilet paper</li>
                <li>Lip balms</li>
                <li>Lotions and Cleansers</li>
                <li>Beard oil and Shaving products</li>
                <li>Soaps and Body creams/washes</li>
                <li>Hair wax, gel, Shampoos and conditioners</li>
             </ul>
           </div>
           <div className="bg-white p-8 rounded border border-[#ece7de] shadow-sm">
             <h3 className="font-bold text-[#1E2B16] mb-4">Fragrance for Soaps and Body</h3>
             <p className="text-sm text-gray-600">
               Soaps have long been seen as an indulgent luxury. Sweet and fresh scents are favored for soap fragrances, with exotic fruit cocktails and decadent gourmands also becoming popular.
             </p>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
