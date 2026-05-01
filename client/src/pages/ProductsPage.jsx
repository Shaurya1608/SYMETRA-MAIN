import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productList } from '../data/products';

export function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories from product data
  const categories = useMemo(() => {
    const allCategories = productList.flatMap(p => p.categories || []);
    const unique = [...new Set(allCategories)];
    return ['All', ...unique.sort()];
  }, []);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return productList.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.desc.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'All' || 
                              (product.categories && product.categories.includes(activeCategory));

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Explore Technology | Simetra Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-brand-arctic relative font-poppins selection:bg-brand-teal selection:text-white flex flex-col items-center pb-24 overflow-hidden">
      
      {/* Subtle Tech Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, #14B8A6 1px, transparent 0)', 
          backgroundSize: '32px 32px' 
        }} 
      />
      <header className="w-full h-24 flex items-center justify-between px-6 md:px-8 max-w-[1920px]">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 flex flex-col justify-between p-1 rounded-sm shadow-xl bg-black">
            <div className="h-[2px] w-full bg-brand-arctic opacity-50" />
            <div className="h-[2px] w-full bg-brand-arctic" />
            <div className="h-[2px] w-full bg-brand-arctic opacity-50" />
          </div>
          <span className="text-sm tracking-[0.2em] font-bold uppercase text-black" style={{ fontFamily: 'var(--font-sitka)' }}>SIMETRA</span>
        </Link>
        <nav className="hidden md:flex gap-10 font-bold text-[11px] tracking-widest text-brand-deep/50 uppercase">
          <Link to="/" className="hover:text-brand-teal transition-colors">HOME</Link>
          <span className="hover:text-brand-teal cursor-not-allowed transition-colors">SERVICES</span>
          <span className="hover:text-brand-teal cursor-not-allowed transition-colors">ABOUT</span>
          <span className="text-brand-teal transition-colors">PRODUCTS</span>
          <span className="hover:text-brand-teal cursor-not-allowed transition-colors">CONTACT</span>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 mt-8 md:mt-12">
        
        {/* Title & Search Area */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
        >
          <div>
            <span className="text-[9px] md:text-[10px] tracking-[0.6em] text-brand-teal uppercase block mb-2 font-bold flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
               Technology Hub
            </span>
            <h1 
              className="text-fluid-h2 font-bold tracking-tighter text-brand-deep uppercase leading-none"
              style={{ fontFamily: 'var(--font-sitka)' }}
            >
              PRODUCT LINEUP
            </h1>
          </div>
          
          <div className="w-full md:w-auto relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-brand-steel/50 group-focus-within:text-brand-teal transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search technologies..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-72 h-12 pl-12 pr-6 bg-white border border-brand-teal/20 rounded-xl shadow-[0_0_15px_transparent] outline-none focus:border-brand-teal focus:shadow-[0_0_20px_rgba(20,184,166,0.15)] transition-all duration-300 text-xs font-bold tracking-widest text-brand-deep placeholder:text-brand-steel/30 font-orbitron uppercase"
            />
          </div>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 md:gap-3 mb-8"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/20' 
                  : 'bg-white text-brand-steel/60 hover:bg-white/60 hover:text-brand-deep border border-brand-deep/5'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  key={product.id}
                >
                  <Link
                    to={`/product/${product.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full h-full bg-white p-3 md:p-4 rounded-xl md:rounded-2xl border border-brand-teal/5 shadow-[0_10px_20px_rgba(0,0,0,0.02)] hover:border-brand-teal/30 hover:shadow-[0_15px_40px_rgba(20,184,166,0.1)] transition-all duration-500 flex flex-col gap-4 relative overflow-hidden"
                  >
                     {/* Tech Hover Scanner Gradient */}
                    <div className="absolute -inset-full w-[300%] h-[300%] bg-gradient-to-r from-transparent via-brand-teal/[0.03] to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 transition-all duration-[2s] ease-out pointer-events-none" />

                    {/* Image Aspect */}
                    <div className="w-full aspect-video overflow-hidden rounded-lg flex-shrink-0 relative bg-brand-deep/5 border border-brand-deep/5 group-hover:border-brand-teal/20 transition-colors">
                      {/* Holographic Corner Brackets on Hover */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none rounded-tl-sm" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none rounded-br-sm" />
                      
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform-gpu group-hover:scale-110 group-hover:opacity-90 transition-all duration-1000"
                      />
                    </div>

                    {/* Content Box */}
                    <div className="w-full flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[7px] md:text-[8px] font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/5 px-2 py-1 rounded-sm">
                          {product.id}
                        </span>
                        {product.categories && product.categories[0] && (
                           <span className="text-[7px] md:text-[8px] font-bold tracking-widest text-brand-steel/50 uppercase">
                             {product.categories[0]}
                           </span>
                        )}
                      </div>
                      
                      <h3 
                        className="text-lg md:text-xl font-bold text-brand-deep uppercase tracking-tighter leading-none mb-3"
                        style={{ fontFamily: 'var(--font-sitka)' }}
                      >
                        {product.name}
                      </h3>
                      
                      <p className="text-brand-steel text-[10px] md:text-xs leading-relaxed mb-4 line-clamp-2">
                        {product.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.features && product.features.map((feature, i) => (
                           <span key={i} className="px-2 py-0.5 bg-brand-deep/[0.03] text-brand-deep/50 text-[8px] uppercase tracking-widest rounded-full">
                               {feature}
                           </span>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <span className="text-[9px] font-bold tracking-widest text-brand-teal uppercase flex items-center gap-1.5 group-hover:gap-2 transition-all">
                          Details 
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full py-32 flex flex-col items-center justify-center text-center bg-white rounded-3xl border border-brand-deep/[0.03]"
          >
            <div className="w-16 h-16 rounded-full bg-brand-deep/5 flex items-center justify-center mb-6 text-brand-steel/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-deep mb-2" style={{ fontFamily: 'var(--font-sitka)' }}>No Technologies Found</h3>
            <p className="text-brand-steel text-sm max-w-sm">We couldn't find any products matching your search criteria. Try adjusting your search term or category.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-6 px-6 py-3 bg-brand-teal text-white text-[10px] font-bold tracking-widest uppercase rounded-lg hover:bg-brand-deep transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
        
      </main>
    </div>
  );
}
