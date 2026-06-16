import React from 'react';

interface SubpageHeaderProps {
  category: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function SubpageHeader({ category, title, subtitle, backgroundImage }: SubpageHeaderProps) {
  return (
    <section 
      className="relative w-full bg-cover bg-center py-20 md:py-24 overflow-hidden text-white border-b border-[#b38b4d]/20"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-[#13200F]/90" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#b38b4d]/10 border border-[#b38b4d]/25 text-[#ebd9bd] text-[10px] font-mono tracking-widest uppercase px-3.5 py-1 rounded-full backdrop-blur-xs">
          {category}
        </div>
        
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#faf8f5]">
          {title} <span className="font-serif italic text-[#ebd9bd]">{subtitle}</span>
        </h1>
      </div>
    </section>
  );
}
