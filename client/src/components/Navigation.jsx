import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navigation({ theme = 'dark' }) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sections = ['hero', 'services', 'about', 'pillars', 'product', 'contact'];

  const isDark = theme === 'dark';
  const colorClass = isDark ? 'text-brand-arctic' : 'text-brand-deep';
  const barBgClass = isDark ? 'bg-brand-arctic/20' : 'bg-brand-deep/10';

  useEffect(() => {
    const handleScroll = () => {
      let activeIdx = 0;
      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top is near the top of the viewport
          if (rect.top <= 200) {
            activeIdx = index;
          }
        }
      });
      setCurrentSectionIndex(activeIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAdjacent = (direction) => {
    const targetIdx = direction === 'next' ? currentSectionIndex + 1 : currentSectionIndex - 1;
    if (targetIdx >= 0 && targetIdx < sections.length) {
      const targetId = sections[targetIdx];
      const element = document.getElementById(targetId);
      if (element) {
        if (window.lenis) {
          window.lenis.scrollTo(element, { offset: 0, duration: 1.5 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const progressPercentage = (currentSectionIndex / (sections.length - 1)) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="relative w-full flex items-center justify-end mt-auto lg:mt-0"
    >
         <div className={`text-sm lg:text-[10px] font-black tracking-[0.3em] flex items-center leading-none select-none z-30 transition-all ${colorClass}`}>
            <span 
              className={`transition-all duration-300 ${
                currentSectionIndex === 0 
                  ? 'opacity-20 cursor-not-allowed' 
                  : 'opacity-60 cursor-pointer hover:opacity-100'
              }`}
              onClick={() => currentSectionIndex > 0 && scrollToAdjacent('prev')}
            >
                PREV
            </span> 
            
            <div 
              className={`relative w-24 lg:w-48 h-[1px] ${barBgClass} mx-4 lg:mx-8 cursor-pointer overflow-hidden`} 
              onClick={() => scrollToAdjacent('next')}
            >
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-brand-teal"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                />
            </div>

            <span 
              className={`transition-all duration-300 ${
                currentSectionIndex === sections.length - 1 
                  ? 'opacity-20 cursor-not-allowed' 
                  : 'opacity-60 cursor-pointer hover:opacity-100'
              }`}
              onClick={() => currentSectionIndex < sections.length - 1 && scrollToAdjacent('next')}
            >
                NEXT
            </span>
        </div>
    </motion.div>
  )
}
