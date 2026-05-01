import React from 'react';
import { motion } from 'framer-motion';
import productHero from '../assets/product_hero.png';

export function CompanySection() {
  return (
    <section 
      className="relative w-full min-h-screen bg-white pt-20 pb-20 lg:pt-24 lg:pb-16 px-6 md:px-12 lg:px-24 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Decorative Pattern - Vertical Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-[5%] lg:px-[10%]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full w-[1px] bg-brand-deep/10" />
        ))}
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col items-center">
        
        {/* Centered "About Us" Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-4 md:mb-8 text-center"
        >
          <span className="text-[10px] tracking-[0.6em] text-brand-steel/40 uppercase block mb-4">Identity</span>
          <h2 
            className="text-fluid-h2 font-bold tracking-tighter text-brand-deep uppercase leading-none"
            style={{ fontFamily: 'var(--font-sitka)' }}
          >
            About Us
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full -mt-2 lg:-mt-6">
          
          {/* Left Column: Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 relative group flex justify-center flex-shrink-0"
          >
            <div className="absolute inset-0 bg-brand-deep/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full mx-auto" />
            <img 
              src={productHero} 
              alt="Simetra Technology" 
              className="relative z-10 w-4/5 max-w-[320px] lg:w-full lg:max-w-md h-auto rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-brand-deep/5 transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </motion.div>

          {/* Right Column: Narrative Story */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="space-y-6 text-brand-steel font-poppins text-sm md:text-base leading-relaxed text-center lg:text-left">
              <p className="opacity-80">
                At Symetra, we create next-generation training experiences using Virtual Reality, Mobile Simulations, and Interactive Learning Technologies. Our solutions allow trainees to practice real-world scenarios in a safe, scalable, and repeatable virtual environment — improving confidence, retention, and operational readiness.
              </p>
              <p className="opacity-80">
                We build immersive VR, mobile, and simulation-based training solutions that help organizations improve workforce performance while reducing real-world risks, training costs, and onboarding time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
