import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Risk-Free",
    subtitle: "Training Environments",
    id: "01"
  },
  {
    title: "Repeatable",
    subtitle: "Learning Frameworks",
    id: "02"
  },
  {
    title: "Standardized",
    subtitle: "Training Quality",
    id: "03"
  },
  {
    title: "Scalable",
    subtitle: "Training Platforms",
    id: "04"
  }
];

export function PillarsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full bg-[#050B14] py-16 px-6 md:px-12 lg:px-24 border-t border-white/5 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] flex justify-between px-[10%]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-full w-px bg-white" />
        ))}
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.id}
              variants={itemVariants}
              className={`group relative p-8 md:p-10 lg:p-12 flex flex-col items-center text-center 
                ${index !== pillars.length - 1 ? 'lg:border-r border-white/10' : ''} 
                ${index % 2 === 0 ? 'md:border-r lg:border-r-0' : ''}
                ${index < 2 ? 'border-b md:border-b-0' : 'border-t md:border-t-0'}
                border-white/5 lg:border-b-0 lg:border-t-0
              `}
            >
              {/* Highlight Background Glow */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Vertical Scanning Line Animation */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "40%" }}
                transition={{ duration: 1.5, delay: 0.5 + (index * 0.2) }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"
              />

              <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-orbitron tracking-[0.5em] text-white/20 uppercase block mb-6">
                  {pillar.id} // System
                </span>
                
                <h3 className="text-4xl md:text-5xl font-anton text-white uppercase tracking-tighter leading-none group-hover:text-white transition-colors duration-500">
                  {pillar.title}
                </h3>
                
                <p className="text-xs md:text-sm font-archivo tracking-[0.2em] text-white/40 uppercase pt-2 group-hover:text-white/60 transition-colors duration-500">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Bottom Decorative Dash */}
              <div className="mt-12 w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-white/40 transition-all duration-700 mx-auto" />
            </motion.div>
          ))}
        </motion.div>

        {/* CINEMATIC TRANSITION TO PRODUCTS */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-24 border-t border-white/5 text-center flex flex-col items-center"
        >
          <span className="text-[10px] font-archivo tracking-[0.8em] text-white/20 uppercase block mb-8">Next Chapter</span>
          <div 
            className="group relative inline-block bg-[#F5F5DC] text-[#050B14] px-16 py-10 text-6xl md:text-8xl lg:text-[9rem] font-anton uppercase tracking-tighter leading-none transition-all duration-700 hover:tracking-normal cursor-default shadow-2xl"
          >
            <span className="relative z-10">Elite <br/> Hardware</span>
            <div className="absolute -inset-x-12 -inset-y-4 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 skew-x-[-12deg] z-0" />
            
            {/* Warp Lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
          </div>
          
          <div className="mt-16 flex items-center gap-6 opacity-30 group-hover:opacity-60 transition-opacity">
            <div className="w-12 h-[1px] bg-white" />
            <span className="text-[10px] font-archivo tracking-[0.4em] uppercase">Enter Master Catalog</span>
            <div className="w-12 h-[1px] bg-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
