import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'product', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const MarqueeRow = ({ label, isHovered }) => {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 z-0 bg-brand-teal flex items-center overflow-hidden pointer-events-none"
      style={{ willChange: 'opacity' }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ willChange: 'transform' }}
        className="flex whitespace-nowrap items-center h-full"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span 
              className="text-4xl md:text-7xl lg:text-8xl font-bold uppercase text-white px-6 tracking-[-0.05em] leading-[0.75]"
              style={{ fontFamily: "var(--font-sitka)", paddingTop: '0.1em' }}
            >
              {label}
            </span>
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/20 flex items-center justify-center mx-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white transform rotate-45">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export const MenuOverlay = ({ isOpen, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: 0, duration: 1.5 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{ willChange: 'transform' }}
          className="fixed inset-0 z-[100] bg-brand-arctic flex flex-col overflow-hidden"
        >
          {/* Subtle Grid / Background lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
             <div className="grid grid-cols-4 h-full w-full">
                <div className="border-r border-black h-full" />
                <div className="border-r border-black h-full" />
                <div className="border-r border-black h-full" />
             </div>
          </div>

          <div className="relative z-10 w-full flex-1 flex flex-col justify-center py-20">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className="relative w-full border-b border-black/5 first:border-t overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Marquee Background on Hover */}
                <MarqueeRow label={item.label} isHovered={hoveredIndex === index} />

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                  className="relative z-10 py-4 md:py-5 lg:py-6 flex flex-col items-center"
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="group flex flex-col items-center gap-0 w-full"
                  >
                    {/* Hide static content when marquee is active */}
                    <div className={`flex flex-col items-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                      <span 
                        className="text-4xl md:text-7xl lg:text-8xl font-bold uppercase tracking-[-0.05em] leading-[0.75] text-black"
                        style={{ fontFamily: "var(--font-sitka)", paddingTop: '0.1em' }}
                      >
                        {item.label}
                      </span>
                    </div>
                  </button>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Social / Footer */}
          <div className="relative z-20 pb-10 flex flex-col items-center gap-4">
             <div className="flex gap-8">
                {['IN', 'TW', 'BE'].map(social => (
                  <a key={social} href="#" className="text-[10px] font-bold tracking-widest text-black hover:text-brand-teal transition-colors">{social}</a>
                ))}
             </div>
             <p className="text-[9px] tracking-[0.3em] text-black/20 uppercase">Simetra Solutions © 2026</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
