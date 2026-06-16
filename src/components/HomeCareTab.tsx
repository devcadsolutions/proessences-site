import React from 'react';
import SubpageHeader from './SubpageHeader';
import { motion } from 'motion/react';
import { AppTab } from '../types';

interface TabProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function HomeCareTab({ setActiveTab }: TabProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col bg-[#fafaf7] text-[#1e2423]"
    >
      <SubpageHeader
        category="Fragrance Applications"
        title="Home Care & Cleaning"
        subtitle="Products."
        backgroundImage="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1920&q=85"
      />

      <div className="w-full max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            The demand for fragrance for Home Care Products has grown dramatically over the last few years. It is also rapidly becoming one of the most critical factors in the purchasing habits of consumers in the home care and cleaning product market.
          </p>
          <blockquote className="border-l-4 border-[#b38b4d] pl-6 my-8 italic text-gray-600">
            "The Fragrance for Home Care and Laundry Care market is expected to grow annually by 3.40% in the next 4 years. Fragrance is one of the key factors driving brand loyalty and consumer decision-making."
          </blockquote>
          
          <h2 className="font-serif text-2xl text-[#1E2B16] mb-4">Functional & Enticing Scents</h2>
          <p>
            Consumer requirements are still mostly driven by the effectiveness of the product to deliver its expected benefit. However, cleanliness and the fragrance associated with cleanliness are inextricably linked. Being clean and smelling clean are now seen as equally important when purchasing the right cleaning and sanitising products.
          </p>

          <h2 className="font-serif text-2xl text-[#1E2B16] mb-4">Candles and Home Care Fragrance</h2>
          <p>
            The ambience created in a room can have an impact on your mood, your wellbeing and your ability to focus. This sector has seen massive growth over the last few years, especially whilst so many people have worked from home. Growth of this sector has also been driven by greater focus on mental health. This sector is very wide-ranging, including products like candles, melts, reed diffusers, incense and other room fragrance solutions. This sector is so diverse and the choice of fragrance for these products can differ vastly.
          </p>

          <h2 className="font-serif text-2xl text-[#1E2B16] mb-4">Fragrance for Fabric, Surface and Carpet Care</h2>
          <p>
            Fabric cleaning companies have always linked the concept of fragrance to cleanliness. Advertising for this industry regularly depicts consumers smelling freshly washed clothing to demonstrate that the product is now "clean". Many of these products specifically use the scent of their product to differentiate themselves from competitors.
          </p>

          <h2 className="font-serif text-2xl text-[#1E2B16] mb-4">Functional Fragrance for Cleaning Products</h2>
          <p>
            Scent is everywhere in home care products. Products in this sector are very purpose driven. These purposes can include carpet care, fabric care, dust or dirt removal. The product needs to leave a lasting reminder that the job has been done. The scent left behind is an olfactory confirmation to the user that the job has been completed successfully. Bright fresh fragrances give a sense of cleanliness and freshness, creating real brand loyalty and identity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white p-8 rounded border border-[#ece7de] shadow-sm">
             <h3 className="font-bold text-[#1E2B16] mb-4">We create fragrance for:</h3>
             <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Fabric Care</li>
                <li>Dishwashing products</li>
                <li>Carpet Care</li>
                <li>Cleaning Products</li>
                <li>Surface Care</li>
                <li>Scented Tissues/Paper</li>
             </ul>
           </div>
           <div className="bg-white p-8 rounded border border-[#ece7de] shadow-sm">
             <h3 className="font-bold text-[#1E2B16] mb-4">Fragrance for Air Fresheners</h3>
             <p className="text-sm text-gray-600">
               Air fresheners take a wide range of forms including scented disks, powders, liquid sprays and odour-neutralisers. Fragrances in this sector are becoming more diverse, exploring sweet gourmand notes through to darker, musky scents.
             </p>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
