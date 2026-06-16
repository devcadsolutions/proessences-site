import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { AppTab } from '../types';

interface MobileCollapsibleMenuItemProps {
  label: string;
  items: { label: string; action: () => void }[];
  isScrolled?: boolean;
}

export default function MobileCollapsibleMenuItem({ label, items, isScrolled = false }: MobileCollapsibleMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-4 text-left text-xs font-semibold tracking-wider uppercase transition-all duration-150 text-[#6e7776] hover:bg-gray-50 rounded-lg"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-gray-50 mt-1 rounded-lg"
          >
            {items.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="block w-full text-left px-6 py-2.5 text-xs text-gray-600 hover:text-[#596E4E] hover:bg-black/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
