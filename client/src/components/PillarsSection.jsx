import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Immersive &",
    subtitle: "Interactive Learning",
    id: "01"
  },
  {
    title: "Safer",
    subtitle: "Training Environment",
    id: "02"
  },
  {
    title: "Scalable &",
    subtitle: "Repeatable Solutions",
    id: "03"
  },
  {
    title: "Faster",
    subtitle: "Employee Readiness",
    id: "04"
  }
];

export function PillarsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full h-screen bg-brand-deep px-6 overflow-hidden flex flex-col justify-center">
      {/* Background Decorative Pattern - Vertical Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-[5%] lg:px-[10%]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full w-[1px] bg-white/10" />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        
        {/* Header (Optional, for context) */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
        >
            <span className="text-[10px] font-archivo tracking-[0.8em] text-white/30 uppercase block mb-2">Why Choose Us</span>
            <h2 className="text-2xl md:text-3xl font-anton text-white uppercase tracking-tighter">WHY CHOOSE SYMETRA?</h2>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5"
        >
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.id}
              variants={itemVariants}
              className="group relative bg-brand-deep p-8 md:p-10 lg:p-12 flex flex-col items-center text-center overflow-hidden transition-all duration-500"
            >
              {/* Subtle hover effect background */}
              <div className="absolute inset-0 bg-brand-teal/[0.05] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
              
              <div className="relative z-10 space-y-3">
                <span className="text-[10px] font-orbitron tracking-[0.6em] text-brand-teal/40 uppercase block group-hover:text-brand-teal transition-colors duration-500">
                  {pillar.id}
                </span>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-anton text-white uppercase tracking-tighter leading-none transition-transform duration-500 group-hover:scale-105">
                  {pillar.title}
                </h3>
                
                <p className="text-[10px] md:text-xs font-archivo tracking-[0.3em] text-white/40 uppercase group-hover:text-white/60 transition-colors duration-500">
                  {pillar.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
