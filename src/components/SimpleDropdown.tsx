import React, { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div 
      id={id} 
      ref={dropdownRef} 
      className="relative inline-block text-left"
    >
      <button
        type="button"
        id={`${id}-trigger`}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 py-1.5 text-[11px] font-sans font-normal tracking-widest uppercase transition-colors duration-150 ${isScrolled ? 'text-gray-500 hover:text-[#1E2B16]' : 'text-white/70 hover:text-white'} cursor-pointer focus:outline-none`}
      >
        {label}
        <ChevronDown className={`w-3 h-3 ${isScrolled ? 'text-[#1E2B16]' : 'text-white'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="absolute left-0 mt-2 z-50 min-w-[250px] bg-white/60 backdrop-blur-sm border-t-2 border-t-[#596E4E] shadow-lg rounded-b-lg"
          >
            {items.map((item, index) => (
              <button
                key={index}
                className="block w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-black/5 transition-colors"
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
