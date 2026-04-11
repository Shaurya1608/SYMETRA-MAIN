import React from 'react';
import { motion } from 'framer-motion';

const PRODUCTS = [
  {
    id: '01',
    name: "V-Grip Haptic",
    category: "Control Systems",
    image: "/src/assets/products/vastech-product-0.avif",
    desc: "Advanced haptic feedback controller designed for sub-millimeter precision in industrial simulations."
  },
  {
    id: '02',
    name: "Aero Vision V4",
    category: "Optics / VR",
    image: "/src/assets/products/vasttecproduct 1.avif",
    desc: "Ultra-wide field-of-view VR headset with 8K clarity for maximum immersion in hazardous environments."
  },
  {
    id: '03',
    name: "Logic Gateway",
    category: "Infrastructure",
    image: "/src/assets/products/vastech-product-2.avif",
    desc: "High-speed data processing hub bridging physical sensors with digital twins in real-time."
  },
  {
    id: '04',
    name: "Industrial Core",
    category: "Simulators",
    image: "/src/assets/products/vastechh-product-3.avif",
    desc: "The backbone of Vastech simulations, providing modular hardware configurations for every sector."
  }
];

export function ProductSection({ opacity, leftY, rightY }) {
  return (
    <motion.section 
      id="products" 
      style={{ opacity }}
      className="relative w-full pt-20 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >


      <div className="relative z-10 max-w-[1920px] mx-auto lg:grid lg:grid-cols-12 lg:gap-16 items-start">
        {/* Header - Left Column */}
        <motion.div style={{ y: leftY }} className="lg:col-span-5 mb-12 lg:mb-0 pr-8">
          <div className="space-y-4">
            <span className="text-[10px] md:text-[11px] font-archivo tracking-[0.6em] text-simetra uppercase block">Product Catalog</span>
            <h2 className="text-6xl md:text-7xl lg:text-[7rem] font-anton tracking-tighter text-black uppercase leading-none">
              PRODUCTS
            </h2>
          </div>
          <p className="max-w-sm text-sm md:text-base font-archivo text-black/60 leading-relaxed italic mt-8 border-l border-black/20 pl-6">
            Engineered for reliability, our hardware ecosystem provides the physical foundation for the world's most advanced industrial simulations.
          </p>
        </motion.div>

        {/* Product Grid - Right Column */}
        <motion.div style={{ y: rightY }} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pl-0 lg:pl-12">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className="group relative border border-black/10 p-3 md:p-4 flex flex-col h-full hover:border-black/30 transition-colors duration-500 overflow-hidden"
            >
              {/* Product ID Watermark */}
              <span className="absolute top-2 right-3 text-xl font-anton text-arctic/5 select-none italic group-hover:text-signal/20 transition-colors">
                {product.id}
              </span>

              {/* Image Container */}
              <div className="relative aspect-[21/9] mb-4 overflow-hidden bg-deep rounded-sm shadow-inner group-hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] transition-shadow duration-700">
                 <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-deep to-transparent opacity-60" />
              </div>

              {/* Meta */}
              <div className="mt-auto space-y-1.5">
                <div>
                    <span className="text-[7px] font-archivo tracking-[0.3em] text-precision uppercase block mb-0.5">
                        {product.category}
                    </span>
                    <h3 className="text-lg font-anton text-black uppercase tracking-tight leading-none">
                        {product.name}
                    </h3>
                </div>
                
                <p className="text-[9px] font-archivo text-black/60 leading-snug line-clamp-2">
                    {product.desc}
                </p>

                <div className="pt-3 mt-2 border-t border-black/10 flex items-center justify-between group/btn cursor-pointer">
                    <span className="text-[8px] font-archivo font-bold tracking-[0.2em] text-black/40 uppercase group-hover/btn:text-simetra transition-colors">
                        TECHNICAL SPECS
                    </span>
                    <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-arctic opacity-30 group-hover/btn:opacity-100 group-hover/btn:text-signal group-hover/btn:translate-x-1 transition-all">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path>
                    </svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
