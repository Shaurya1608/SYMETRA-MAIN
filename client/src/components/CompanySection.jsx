import React from 'react';
import { motion } from 'framer-motion';
import productHero from '../assets/product_hero.png';

export function CompanySection() {
  return (
    <section 
      className="relative w-full bg-white pt-14 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Decorative Grid - Dark lines for white background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex justify-between px-[5%]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full w-px bg-brand-deep" />
        ))}
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col items-center">
        
        {/* Centered "About Us" Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="text-[10px] font-archivo tracking-[0.6em] text-brand-steel/40 uppercase block mb-4">Identity</span>
          <h2 
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-brand-deep uppercase leading-none"
            style={{ fontFamily: "'Antonio', sans-serif" }}
          >
            About Us
          </h2>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-16 items-start w-full">
          
          {/* Left Column: Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group flex justify-start w-full lg:justify-center"
          >
            <div className="absolute inset-0 bg-brand-deep/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full max-w-[160px] lg:max-w-sm mx-auto" />
            <img 
              src={productHero} 
              alt="Simetra Technology" 
              className="relative z-10 w-40 lg:w-full lg:max-w-sm h-auto rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-brand-deep/5 transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </motion.div>

          {/* Right Column: Narrative Story */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 lg:col-start-6 space-y-8 mt-4 lg:mt-0"
          >
            <div className="space-y-6 text-brand-steel font-archivo text-sm md:text-lg leading-relaxed text-center lg:text-left">
              <p className="opacity-80">
                Simetra Solutions is a technology-driven company focused on delivering innovative digital solutions for modern industries. Our work centers on creating scalable, reliable, and future-ready systems that support visualization, planning, and operational efficiency.
              </p>
              <p className="opacity-80">
                With a strong emphasis on quality, precision, and adaptability, our team partners with organizations to address complex challenges through structured and intelligent technology platforms. Our approach combines industry insight with practical design to ensure long-term value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
