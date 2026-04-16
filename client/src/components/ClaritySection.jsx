import React from 'react';
import { motion } from 'framer-motion';

export function ClaritySection() {
  return (
    <section className="relative bg-brand-deep w-full h-[100dvh] md:h-auto pt-14 md:pt-24 pb-14 overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">

      {/* SHARED BACKGROUND GRID (Decorative static) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex justify-between px-[2%]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-full w-px bg-white" />
        ))}
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col justify-center h-full">
        
        {/* --- HEADER TITLE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-8 md:mb-24 px-6"
        >
          <span className="text-[10px] md:text-xs font-archivo tracking-[0.6em] text-white/40 uppercase mb-4">The Result</span>
          <h2 className="text-5xl md:text-5xl lg:text-7xl font-anton tracking-tighter text-white uppercase leading-none text-center px-4">
            OUR SERVICES
          </h2>
        </motion.div>

        {/* --- SERVICE CARDS (Horizontal Scroll on Mobile) --- */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-6 md:gap-10 w-full px-6 pb-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[92vw] md:w-full snap-center bg-brand-blue border border-white/5 p-10 md:p-10 space-y-6 shadow-2xl flex flex-col justify-between"
          >
             <div>
               <span className="text-sm font-orbitron text-brand-teal tracking-[0.4em] block uppercase mb-6">01 / Safety</span>
               <h3 className="text-3xl md:text-3xl lg:text-4xl font-anton text-white uppercase leading-[1.0] mb-2">VR Safety<br/>Simulation</h3>
             </div>
             <p className="text-xs md:text-base font-archivo text-white/50 leading-relaxed font-medium">Immersive virtual environments for advanced visualization of complex scenarios prior to real-world execution. These solutions support improved understanding, structured decision-making, and enhanced operational preparedness.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[92vw] md:w-full snap-center bg-brand-arctic p-10 md:p-10 space-y-6 shadow-2xl border border-black/5 flex flex-col justify-between"
          >
             <div>
               <span className="text-sm font-orbitron text-brand-teal tracking-[0.4em] block uppercase mb-6">02 / Accessibility</span>
               <h3 className="text-3xl md:text-3xl lg:text-4xl font-anton text-brand-deep uppercase leading-[1.0] mb-2">Mobile-Based<br/>Simulation</h3>
             </div>
             <p className="text-xs md:text-base font-archivo text-brand-steel leading-relaxed font-medium">Mobile-accessible simulation environments designed for flexibility and wide accessibility. These platforms support consistent engagement with workflows, scenarios, and operational models across devices.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[92vw] md:w-full snap-center bg-brand-blue border border-white/5 p-10 md:p-10 space-y-6 shadow-2xl flex flex-col justify-between"
          >
             <div>
               <span className="text-sm font-orbitron text-brand-teal tracking-[0.4em] block uppercase mb-6">03 / Customization</span>
               <h3 className="text-3xl md:text-3xl lg:text-4xl font-anton text-white uppercase leading-[1.0] mb-2">Custom Software<br/>Solutions</h3>
             </div>
             <p className="text-xs md:text-base font-archivo text-white/50 leading-relaxed font-medium">Intelligent configuration and planning systems focused on structured project setup, customization, and strategic alignment. These tools support streamlined workflows and resource planning.</p>
          </motion.div>
        </div>

        {/* --- MOBILE SWIPE INDICATOR --- */}
        <div className="flex md:hidden flex-col items-center gap-2 mt-6">
           <span className="text-[10px] font-orbitron tracking-[0.3em] text-white/30 uppercase">Swipe for more</span>
           <motion.div
             animate={{ x: [0, 10, 0] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             className="text-brand-teal"
           >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
