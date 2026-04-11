import React from 'react';
import { motion } from 'framer-motion';

export function CompanySection({ opacity, leftY, rightY }) {
  return (
    <motion.section 
      style={{ opacity }}
      className="relative w-full py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="relative z-10 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Title */}
          <motion.div style={{ y: leftY }} className="lg:col-span-5 relative">
            <div className="space-y-4">
              <span className="text-[10px] md:text-[11px] font-archivo tracking-[0.6em] text-simetra uppercase block">Foundations</span>
              <h3 className="text-7xl md:text-8xl lg:text-[9rem] font-anton tracking-tighter leading-[0.85] text-black uppercase">
                ABOUT <br/>
                <span className="text-[#4A5568]">US</span>
              </h3>
            </div>
          </motion.div>

          {/* Right Column: Paragraph */}
          <motion.div style={{ y: rightY }} className="lg:col-span-6 lg:col-start-7 space-y-6">
            <div className="space-y-6 text-black/70 font-archivo text-base md:text-lg lg:text-xl leading-relaxed max-w-xl italic">
              <p>
                Vastech Solutions is a technology-driven company focused on delivering innovative digital solutions for modern industries. Our work centers on creating scalable, reliable, and future-ready systems that support visualization, planning, and operational efficiency.
              </p>
              <p>
                With a strong emphasis on quality, precision, and adaptability, Vastech Solutions partners with organizations to address complex challenges through structured and intelligent technology platforms. Our approach combines industry insight with practical design to ensure long-term value and consistent performance.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
