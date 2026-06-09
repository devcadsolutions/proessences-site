import React from 'react';
import { motion } from 'motion/react';

export default function TabLoading() {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#faf8f4]/80 backdrop-blur-sm">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="h-12 w-12 border-4 border-[#004d44] border-t-transparent rounded-full"
      />
    </div>
  );
}
