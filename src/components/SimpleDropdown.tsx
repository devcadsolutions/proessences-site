import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface SimpleDropdownProps {
  label: string;
  items: string[];
  id?: string;
  isScrolled?: boolean;
  onSelect?: (item: string) => void;
}

export default function SimpleDropdown({ 
  label, 
  items, 
  id = "simple-nav-dropdown",
  isScrolled = true,
  onSelect
}: SimpleDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      id={id} 
      ref={dropdownRef} 
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        id={`${id}-trigger`}
        className={`flex items-center gap-1 py-1.5 text-[11px] font-sans font-medium tracking-widest uppercase transition-colors duration-150 ${isScrolled ? 'text-gray-500 hover:text-[#004d44]' : 'text-white/70 hover:text-white'} cursor-pointer focus:outline-none`}
      >
        {label}
        <ChevronDown className={`w-3 h-3 ${isScrolled ? 'text-[#004d44]' : 'text-white'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 z-50 min-w-[250px] bg-white border-t-2 border-t-[#00876e] shadow-lg"
          >
            {items.map((item, index) => (
              <button
                key={index}
                className="block w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100 last:border-b-0 transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  if (onSelect) onSelect(item);
                }}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
