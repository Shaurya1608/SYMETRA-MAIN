import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productList as products } from '../data/products';

function ImageCarousel({ images, altText }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${altText} - ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transform-gpu will-change-transform group-hover:scale-110 transition-all duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
          {images.map((_, index) => (
             <div key={index} className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${index === currentIndex ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      )}
    </div>
  );
}

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
    <section className="relative w-full h-[100dvh] bg-brand-arctic pt-16 md:pt-20 pb-8 md:pb-12 px-6 lg:px-24 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Decorative Pattern - Vertical Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-[5%] lg:px-[10%]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full w-[1px] bg-brand-deep/10" />
        ))}
      </div>

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
            className="text-center mb-6 md:mb-10"
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
                <div className="w-full lg:w-[35%] aspect-square md:aspect-video overflow-hidden rounded-lg md:rounded-xl flex-shrink-0 relative">
                  <ImageCarousel images={product.images} altText={product.name} />
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

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-10 flex justify-center w-full"
        >
          <Link 
            to="/products"
            className="group flex items-center justify-center gap-4 bg-brand-deep text-white px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-brand-teal transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(20,184,166,0.3)] hover:-translate-y-1"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase font-poppins">Explore Full Lineup</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-teal transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transform group-hover:translate-x-1 transition-transform">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
