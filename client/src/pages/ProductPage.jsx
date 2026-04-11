import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

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

export function ProductPage() {
  // Reset scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050B14] text-white selection:bg-white selection:text-black">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5 flex justify-between px-[5%]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-full w-px bg-white/20" />
        ))}
      </div>

      <div className="viewport-border fixed z-50 pointer-events-none rounded-[30px]" />

      <Header theme="dark" />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 z-10">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-[1920px] mx-auto"
        >
           <span className="text-xs md:text-sm font-archivo tracking-[0.6em] text-white/30 uppercase block mb-6">Master System Catalog</span>
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-anton tracking-tighter uppercase leading-[0.85] mb-12">
            ELITE <br/>
            <span className="text-white/10">HARDWARE</span>
           </h1>
           
           <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                 <p className="text-sm md:text-base font-archivo text-white/40 leading-relaxed italic border-l border-white/20 pl-6">
                    Professional-grade simulation hardware engineered for the most demanding industrial environments. Every component is built for precision, durability, and seamless integration.
                 </p>
              </div>
           </div>
        </motion.div>
      </section>

      {/* PRODUCT GRID */}
      <section className="relative px-6 md:px-12 lg:px-24 pb-32 z-10">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-1 lg:gap-1.5 bg-white/5 border border-white/10">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                className="group relative bg-[#050B14] p-10 md:p-14 lg:p-20 flex flex-col hover:bg-[#0A1624] transition-colors duration-700"
              >
                {/* ID Watermark */}
                <span className="absolute top-8 right-10 text-6xl font-anton text-white/[0.02] italic select-none group-hover:text-white/[0.05] transition-colors">
                  {product.id}
                </span>

                <div className="mb-16">
                   <span className="text-[10px] font-archivo tracking-[0.4em] text-white/30 uppercase block mb-2">{product.category}</span>
                   <h2 className="text-4xl md:text-5xl font-anton uppercase tracking-tighter leading-none group-hover:tracking-tight transition-all duration-500">
                      {product.name}
                   </h2>
                </div>

                {/* Product Image */}
                <div className="relative aspect-square mb-12 overflow-hidden bg-black/60 rounded-[0px] border border-white/5 shadow-2xl">
                   <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
                   />
                </div>

                <p className="text-sm md:text-base font-archivo text-white/40 leading-relaxed max-w-sm group-hover:text-white/70 transition-colors">
                   {product.desc}
                </p>

                <div className="mt-12 flex items-center gap-6 group/btn cursor-pointer">
                   <div className="w-12 h-[1px] bg-white/10 transition-all duration-700 group-hover/btn:w-20 group-hover/btn:bg-white" />
                   <span className="text-[10px] font-archivo font-bold tracking-[0.3em] text-white/20 uppercase group-hover/btn:text-white">Full Spec Table</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER TRANSITION BACK */}
      <section className="relative h-screen flex flex-col items-center justify-center p-6 border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02]" />
          <motion.div 
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            className="relative z-10 text-center space-y-8"
          >
             <h4 className="text-[10px] font-archivo tracking-[0.8em] text-white/20 uppercase">Next Discovery</h4>
             <Link to="/" className="text-5xl md:text-7xl font-anton uppercase tracking-tighter hover:text-white/60 transition-colors">
                Back to <br/>
                <span className="text-white/20 italic">Vastech Home</span>
             </Link>
          </motion.div>
      </section>
    </div>
  );
}
