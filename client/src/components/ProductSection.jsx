import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import product0 from '../assets/products/vastech-product-0.avif';
import product1 from '../assets/products/vasttecproduct 1.avif';
import product2 from '../assets/products/vastech-product-2.avif';
import product3 from '../assets/products/vastechh-product-3.avif';

const products = [
  {
    id: "01",
    name: "Sentinel X-1",
    tagline: "Flagship Tactical Framework",
    desc: "A hardware-agnostic framework designed for high-fidelity safety simulations.",
    image: product0,
    features: ["<20ms Latency", "Spatial Tracking"]
  },
  {
    id: "02",
    name: "Neural Link",
    tagline: "Software Intelligence Engine",
    desc: "Orchestrates complex multi-user simulations with real-time feedback loops.",
    image: product1,
    features: ["Multi-user Sync", "Cloud Processing"]
  },
  {
    id: "03",
    name: "V-Field Kit",
    tagline: "Rapid Deployment Unit",
    desc: "A portable, ruggedized VR solution for on-site training in any environment.",
    image: product2,
    features: ["Rugged Design", "Battery Powered"]
  },
  {
    id: "04",
    name: "Command Center",
    tagline: "Centralized Ops Platform",
    desc: "Monitor trainees, manage libraries, and generate compliance reports.",
    image: product3,
    features: ["Fleet Management", "Auto-Reporting"]
  }
];

export function ProductSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full h-screen bg-brand-arctic pt-16 md:pt-32 pb-12 md:pb-16 px-6 lg:px-24 overflow-hidden flex flex-col items-center justify-start">
      
      {/* Background Brand Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <h2 className="text-[6rem] md:text-[12rem] font-anton text-brand-deep/[0.02] leading-none uppercase tracking-tighter select-none">
            PRODUCTS
          </h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center justify-start">
        
        {/* Header Title */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-16"
        >
            <span className="text-[8px] md:text-[9px] font-archivo tracking-[0.8em] text-brand-teal uppercase block mb-2">Our Technology</span>
            <h2 className="text-3xl md:text-5xl font-anton text-brand-deep uppercase tracking-tighter leading-none">
                PRODUCT LINEUP
            </h2>
        </motion.div>

        {/* Responsive Grid: 2x2 with tighter gaps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
            >
              <Link
                to={`/product/${product.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full h-full bg-white p-3 md:p-5 rounded-xl md:rounded-2xl border border-brand-teal/[0.03] shadow-[0_10px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-shadow duration-700 flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start"
              >
                {/* Image Aspect */}
                <div className="w-full lg:w-[35%] aspect-square md:aspect-video overflow-hidden rounded-lg md:rounded-xl flex-shrink-0">
                  <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform-gpu will-change-transform group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>

                {/* Text Aspect */}
                <div className="w-full lg:w-[65%] space-y-1 md:space-y-2">
                    <div className="space-y-0 text-left">
                      <span className="text-[7px] md:text-[8px] font-orbitron tracking-widest text-brand-teal uppercase block">{product.id}</span>
                      <h3 
                        className="text-sm md:text-xl font-bold text-brand-deep uppercase tracking-tighter leading-none"
                        style={{ fontFamily: "'Antonio', sans-serif" }}
                      >
                        {product.name}
                      </h3>
                    </div>
                    
                    {/* content for desktop/large screens */}
                    <div className="hidden lg:block space-y-3">
                      <p className="text-brand-steel text-[10px] xl:text-[11px] font-archivo leading-relaxed line-clamp-2 opacity-70">
                        {product.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                          {product.features.map((feature, i) => (
                              <span key={i} className="px-2 py-0.5 bg-brand-deep/[0.03] text-brand-deep/50 text-[8px] font-archivo uppercase tracking-widest rounded-full">
                                  {feature}
                              </span>
                          ))}
                      </div>

                      <div className="pt-1">
                          <button className="text-[9px] font-orbitron tracking-widest text-brand-teal uppercase border-b border-brand-teal/20 group-hover:border-brand-teal transition-all flex items-center gap-1.5 pointer-events-none">
                            Details 
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                      </div>
                    </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
