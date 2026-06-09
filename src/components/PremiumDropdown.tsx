import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, FolderClosed } from 'lucide-react';

interface PremiumDropdownProps {
  label?: string;
  placeholder?: string;
  id?: string;
  isScrolled?: boolean;
}

export default function PremiumDropdown({ 
  label = "Scent Selection", 
  placeholder = "Select Scent Profile...",
  id = "premium-custom-dropdown",
  isScrolled = true
}: PremiumDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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
  }, []);

  return (
    <div 
      id={id} 
      ref={dropdownRef} 
      className="relative inline-block w-full max-w-[280px] font-sans text-left"
    >
      {/* Dropdown Label */}
      {label && (
        <label className="block text-[10px] font-mono uppercase tracking-widest text-[#004d44] font-bold mb-1.5 pl-0.5">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        id={`${id}-trigger`}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-11 px-4 flex items-center justify-between rounded-lg border focus:outline-none focus:ring-1 transition-all duration-150 shadow-xs cursor-pointer select-none ${isScrolled ? 'bg-white text-gray-700 hover:bg-[#fafaf7] hover:border-gray-400 border-[#e9e5de] focus:ring-[#00876e]' : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/20 focus:ring-white'}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate opacity-80">{placeholder}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={`shrink-0 ml-2 ${isScrolled ? 'text-[#004d44]' : 'text-white'}`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      {/* Floating Dropdown List Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 mt-2 z-50 bg-white border border-[#ece7de] rounded-lg shadow-md overflow-hidden"
          >
            {/* Elegant Golden Header Accent Bar */}
            <div className="h-[2px] bg-gradient-to-r from-[#004d44] via-[#b38b4d] to-[#00876e]" />

            {/* Content Area - Designed to be elegantly Blank / Custom-Placeholder */}
            <div className="p-6 text-center flex flex-col items-center justify-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#faf8f4] border border-[#ece7de] flex items-center justify-center">
                <FolderClosed className="w-4 h-4 text-[#b38b4d] opacity-80" />
              </div>
              <div className="space-y-1">
                <h5 className="font-serif text-xs font-semibold text-[#004d44]">
                  Olfactive Directory Empty
                </h5>
                <p className="text-[10px] text-gray-400 font-light max-w-[200px] leading-relaxed mx-auto">
                  No active collection criteria populated in this instance. Use this modular template slot to arrange custom routes.
                </p>
              </div>
              <div className="pt-2 w-full">
                <div className="h-6 w-full rounded border border-dashed border-[#ece7de] bg-[#fafaf7] flex items-center justify-center text-[9px] font-mono text-gray-300">
                  empty slot template
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
