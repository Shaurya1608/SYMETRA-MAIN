import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CompanySection } from './CompanySection';
import { PillarsBanner } from './PillarsBanner';
import { ProductSection } from './ProductSection';

export function ClaritySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // MASTER TIMELINE: 4500vh
  // 0.00 - 0.10: Entry Zoom
  // 0.10 - 0.20: Intro Text
  // 0.20 - 0.25: Warp 1
  // 0.25 - 0.40: Service Cards
  // 0.40 - 0.45: Warp 2
  // 0.45 - 0.60: Company Section Native Scroll 
  // 0.60 - 0.65: Warp 3
  // 0.65 - 0.85: Product Section Native Scroll
  // 0.85 - 1.00: Exit Zoom

  // MEMOIZED TRAILS
  const trails = React.useMemo(() => [...Array(10)].map(() => ({
    height: Math.random() * 300 + 200 + 'px',
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
  })), []);

  // 1. ENTRY PORTAL
  const vScale = useTransform(scrollYProgress, [0.0, 0.02, 0.10], [0.4, 0.4, 150]);
  const vOpacity = useTransform(scrollYProgress, [0.0, 0.02, 0.85, 0.88], [0, 1, 1, 0]);
  const ourOpacity = useTransform(scrollYProgress, [0.02, 0.08], [1, 0]);
  const ourY = useTransform(scrollYProgress, [0.0, 0.08], ["0vh", "-20vh"]);

  // 2. INTRO TEXT
  const introOpacity = useTransform(scrollYProgress, [0.10, 0.15, 0.18, 0.22], [0, 1, 1, 0]);
  const introY = useTransform(scrollYProgress, [0.10, 0.22], ["100vh", "-100vh"]);

  // 3. WARPS
  const warpScale = useTransform(scrollYProgress, 
    [0.20, 0.25, 0.40, 0.45, 0.60, 0.65, 0.85, 0.90], 
    [1, 6, 1, 6, 1, 6, 1, 6]
  );
  const warpOpacity = useTransform(scrollYProgress, 
    [0.20, 0.22, 0.25, 0.40, 0.42, 0.45, 0.60, 0.62, 0.65, 0.85, 0.88, 0.90], 
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  );
  const trailsY = useTransform(scrollYProgress, 
    [0.20, 0.25, 0.40, 0.45, 0.60, 0.65, 0.85, 0.90], 
    ["100vh", "-200vh", "100vh", "-200vh", "100vh", "-200vh", "100vh", "-200vh"]
  );
  const trailsOpacity = useTransform(scrollYProgress, 
    [0.20, 0.22, 0.25, 0.40, 0.42, 0.45, 0.60, 0.62, 0.65, 0.85, 0.88, 0.90], 
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  );

  // 4. SERVICE CARDS
  const card1Opacity = useTransform(scrollYProgress, [0.25, 0.30, 0.40, 0.45], [0, 1, 1, 0]);
  const card1Y = useTransform(scrollYProgress, [0.25, 0.30, 0.40, 0.45], ["80vh", "0vh", "0vh", "-120vh"]);
  const card2Opacity = useTransform(scrollYProgress, [0.27, 0.32, 0.40, 0.45], [0, 1, 1, 0]);
  const card2Y = useTransform(scrollYProgress, [0.27, 0.32, 0.40, 0.45], ["80vh", "0vh", "0vh", "-120vh"]);
  const card3Opacity = useTransform(scrollYProgress, [0.29, 0.34, 0.40, 0.45], [0, 1, 1, 0]);
  const card3Y = useTransform(scrollYProgress, [0.29, 0.34, 0.40, 0.45], ["80vh", "0vh", "0vh", "-120vh"]);

  // 5. COMPANY SECTION (STAGGERED TRACE)
  const companyOpacity = useTransform(scrollYProgress, [0.40, 0.43, 0.55, 0.60], [0, 1, 1, 0]);
  const companyLeftY = useTransform(scrollYProgress, [0.40, 0.45, 0.55, 0.60], ["100vh", "0vh", "0vh", "-150vh"]);
  const companyRightY = useTransform(scrollYProgress, [0.43, 0.48, 0.55, 0.60], ["100vh", "0vh", "0vh", "-150vh"]);

  // 6. PILLARS (ONE BY ONE) — between 0.60 and 0.68
  const PILLARS = [
    { title: "Risk-Free", sub: "Training Environments", color: "text-simetra" },
    { title: "Repeatable", sub: "Learning Frameworks", color: "text-precision" },
    { title: "Standardized", sub: "Training Quality", color: "text-signal" },
    { title: "Scalable", sub: "Training Platforms", color: "text-intelligence" },
  ];
  const p1Opacity = useTransform(scrollYProgress, [0.59, 0.61, 0.62, 0.63], [0, 1, 1, 0]);
  const p1Y      = useTransform(scrollYProgress, [0.59, 0.61, 0.62, 0.63], ["80vh", "0vh", "0vh", "-80vh"]);
  const p2Opacity = useTransform(scrollYProgress, [0.61, 0.63, 0.64, 0.65], [0, 1, 1, 0]);
  const p2Y      = useTransform(scrollYProgress, [0.61, 0.63, 0.64, 0.65], ["80vh", "0vh", "0vh", "-80vh"]);
  const p3Opacity = useTransform(scrollYProgress, [0.63, 0.65, 0.66, 0.67], [0, 1, 1, 0]);
  const p3Y      = useTransform(scrollYProgress, [0.63, 0.65, 0.66, 0.67], ["80vh", "0vh", "0vh", "-80vh"]);
  const p4Opacity = useTransform(scrollYProgress, [0.65, 0.67, 0.68, 0.69], [0, 1, 1, 0]);
  const p4Y      = useTransform(scrollYProgress, [0.65, 0.67, 0.68, 0.69], ["80vh", "0vh", "0vh", "-80vh"]);

  // 7. PRODUCT SECTION (STAGGERED TRACE)
  const productOpacity = useTransform(scrollYProgress, [0.70, 0.73, 0.82, 0.87], [0, 1, 1, 0]);
  const productLeftY = useTransform(scrollYProgress, [0.70, 0.75, 0.82, 0.87], ["100vh", "0vh", "0vh", "-250vh"]);
  const productRightY = useTransform(scrollYProgress, [0.73, 0.78, 0.82, 0.87], ["100vh", "0vh", "0vh", "-250vh"]);
  // 8. EXIT PORTAL
  const aboutTitleScale = useTransform(scrollYProgress, [0.88, 0.92], [150, 1]);
  const aboutTitleOpacity = useTransform(scrollYProgress, [0.87, 0.90], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[4000vh] bg-deep w-full">
      {/* Navigation Anchors */}
      <div id="services" className="absolute top-0 left-0 w-px h-px pointer-events-none" />
      <div id="about" className="absolute top-[90%] left-0 w-px h-px pointer-events-none" />

      <div className="sticky top-0 h-screen w-full overflow-hidden bg-deep">
        
        {/* SHARED BACKGROUND GRID */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex justify-between px-[2%]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full w-px bg-arctic" />
          ))}
        </div>

        {/* --- PORTAL ENTRY --- */}
        <motion.div style={{ opacity: vOpacity }} className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none -translate-y-[5vh]">
          <motion.div style={{ opacity: ourOpacity, y: ourY }} className="mb-4 text-center">
             <span className="text-[10px] md:text-xs font-archivo tracking-[0.6em] text-arctic/40 uppercase">The Result</span>
             <h2 className="text-4xl md:text-6xl font-anton tracking-tighter text-arctic uppercase mt-2">OUR</h2>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center font-anton text-6xl sm:text-8xl md:text-[12rem] lg:text-[15rem] text-arctic uppercase tracking-tighter leading-none"
            style={{ scale: vScale, transformOrigin: "50% 50%", willChange: "transform" }}
          >
            SERVICES
          </motion.div>
        </motion.div>

        {/* --- INTRO NARRATIVE --- */}
        <motion.div style={{ opacity: introOpacity, y: introY }} className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none px-6">
           <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-anton tracking-tighter leading-[0.9] text-arctic uppercase text-center">
              WE BUILD<br/>
              <span className="text-simetra">What You Get When Clarity Meets Performance</span><br/>
              SOLUTIONs
           </h2>
        </motion.div>

        {/* --- DYNAMIC WARPS --- */}
        <motion.div style={{ scale: warpScale, opacity: warpOpacity }} className="absolute inset-0 z-10 pointer-events-none flex justify-between px-[2%]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full w-px bg-deep/10" />
          ))}
        </motion.div>
        <motion.div style={{ y: trailsY, opacity: trailsOpacity, willChange: "transform" }} className="absolute inset-0 z-30 pointer-events-none">
           {trails.map((style, i) => (
              <div key={i} className="absolute w-[1px] bg-deep/20" style={style} />
           ))}
        </motion.div>

        {/* --- PORTAL EXIT --- */}
        <motion.div style={{ opacity: aboutTitleOpacity, scale: aboutTitleScale, transformOrigin: "45% 50%" }} className="absolute inset-0 z-80 flex items-center justify-center pointer-events-none">
          <h2 className="font-anton text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[13vw] text-arctic uppercase tracking-tighter leading-none select-none whitespace-nowrap">
            CONTACT US
          </h2>
        </motion.div>

        {/* --- SERVICE CARDS --- */}
        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-screen-2xl px-6 w-full">
            <motion.div style={{ opacity: card1Opacity, y: card1Y }} className="bg-intelligence border border-steel/20 p-12 md:p-14 space-y-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] pointer-events-auto">
               <span className="text-sm font-orbitron text-arctic/40 tracking-[0.4em] block uppercase">01 / Safety</span>
               <h3 className="text-3xl md:text-4xl lg:text-5xl font-anton text-arctic uppercase leading-tight">VR Safety<br/>Simulation</h3>
               <p className="text-sm md:text-base font-archivo text-arctic/50 leading-relaxed font-medium">Immersive virtual environments for advanced visualization of complex scenarios prior to real-world execution. These solutions support improved understanding, structured decision-making, and enhanced operational preparedness through realistic, interactive representations.</p>
            </motion.div>
            <motion.div style={{ opacity: card2Opacity, y: card2Y }} className="bg-arctic p-12 md:p-14 space-y-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-deep/5 pointer-events-auto">
               <span className="text-sm font-orbitron text-deep/50 tracking-[0.4em] block uppercase">02 / Accessibility</span>
               <h3 className="text-3xl md:text-4xl lg:text-5xl font-anton text-deep uppercase leading-tight">Mobile-Based<br/>Simulation</h3>
               <p className="text-sm md:text-base font-archivo text-deep/70 leading-relaxed font-medium">Mobile-accessible simulation environments designed for flexibility and wide accessibility. These platforms support consistent engagement with workflows, scenarios, and operational models across devices, ensuring scalability and ease of use.</p>
            </motion.div>
            <motion.div style={{ opacity: card3Opacity, y: card3Y }} className="bg-intelligence border border-steel/20 p-12 md:p-14 space-y-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] pointer-events-auto">
               <span className="text-sm font-orbitron text-arctic/40 tracking-[0.4em] block uppercase">03 / Customization</span>
               <h3 className="text-3xl md:text-4xl lg:text-5xl font-anton text-arctic uppercase leading-tight">Custom Software<br/>Solutions</h3>
               <p className="text-sm md:text-base font-archivo text-arctic/50 leading-relaxed font-medium">Intelligent configuration and planning systems focused on structured project setup, customization, and strategic alignment. These tools support streamlined workflows, optimized resource planning, and clarity in decision-making processes.</p>
            </motion.div>
          </div>
        </div>

        {/* --- PILLAR 1 --- */}
        <motion.div style={{ opacity: p1Opacity, y: p1Y }} className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="text-center space-y-4 px-8">
            <span className="text-[10px] font-archivo tracking-[0.6em] text-black/40 uppercase block">01 / Principle</span>
            <h2 className={`text-[10vw] font-anton tracking-tighter uppercase leading-none ${PILLARS[0].color}`}>{PILLARS[0].title}</h2>
            <p className="text-xl font-archivo text-black/60 font-medium">{PILLARS[0].sub}</p>
          </div>
        </motion.div>

        {/* --- PILLAR 2 --- */}
        <motion.div style={{ opacity: p2Opacity, y: p2Y }} className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="text-center space-y-4 px-8">
            <span className="text-[10px] font-archivo tracking-[0.6em] text-black/40 uppercase block">02 / Principle</span>
            <h2 className={`text-[10vw] font-anton tracking-tighter uppercase leading-none ${PILLARS[1].color}`}>{PILLARS[1].title}</h2>
            <p className="text-xl font-archivo text-black/60 font-medium">{PILLARS[1].sub}</p>
          </div>
        </motion.div>

        {/* --- PILLAR 3 --- */}
        <motion.div style={{ opacity: p3Opacity, y: p3Y }} className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="text-center space-y-4 px-8">
            <span className="text-[10px] font-archivo tracking-[0.6em] text-black/40 uppercase block">03 / Principle</span>
            <h2 className={`text-[10vw] font-anton tracking-tighter uppercase leading-none ${PILLARS[2].color}`}>{PILLARS[2].title}</h2>
            <p className="text-xl font-archivo text-black/60 font-medium">{PILLARS[2].sub}</p>
          </div>
        </motion.div>

        {/* --- PILLAR 4 --- */}
        <motion.div style={{ opacity: p4Opacity, y: p4Y }} className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="text-center space-y-4 px-8">
            <span className="text-[10px] font-archivo tracking-[0.6em] text-black/40 uppercase block">04 / Principle</span>
            <h2 className={`text-[10vw] font-anton tracking-tighter uppercase leading-none ${PILLARS[3].color}`}>{PILLARS[3].title}</h2>
            <p className="text-xl font-archivo text-black/60 font-medium">{PILLARS[3].sub}</p>
          </div>
        </motion.div>

        {/* --- COMPANY SECTION --- */}
        <motion.div 
          style={{ opacity: companyOpacity }}
          className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-full pointer-events-auto">
            <CompanySection opacity={companyOpacity} leftY={companyLeftY} rightY={companyRightY} />
          </div>
        </motion.div>

        {/* --- PRODUCT SECTION --- */}
        <motion.div 
          style={{ opacity: productOpacity }}
          className="absolute inset-0 z-60 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-full pointer-events-auto">
             <ProductSection opacity={productOpacity} leftY={productLeftY} rightY={productRightY} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
