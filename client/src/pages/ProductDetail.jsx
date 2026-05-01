import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productList } from '../data/products';

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
    <div className="relative w-full aspect-square md:aspect-video overflow-hidden rounded-lg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${altText} - ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
          {images.map((_, index) => (
             <div key={index} className={`w-2 h-2 rounded-full transition-colors duration-500 shadow-md ${index === currentIndex ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProductDetail() {
  const { id } = useParams();
  const productKey = id || "01";
  const productInfo = productList.find(p => p.id === productKey) || productList[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Project ${productKey.replace(/^0+/, '')} | Simetra Solutions`;
  }, [productKey]);

  return (
    <div className="min-h-screen bg-brand-arctic text-brand-deep font-archivo selection:bg-brand-teal selection:text-white flex flex-col items-center">
      
      <header className="w-full h-24 flex items-center justify-between px-8 max-w-[1920px]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex flex-col justify-between p-1 rounded-sm shadow-xl bg-black">
            <div className="h-[2px] w-full bg-brand-arctic opacity-50" />
            <div className="h-[2px] w-full bg-brand-arctic" />
            <div className="h-[2px] w-full bg-brand-arctic opacity-50" />
          </div>
          <span className="font-orbitron text-sm tracking-[0.2em] uppercase text-black">SIMETRA</span>
        </div>
        <nav className="hidden md:flex gap-10 font-bold text-[11px] tracking-widest text-brand-deep/50 uppercase font-orbitron">
          <span className="hover:text-brand-teal cursor-not-allowed transition-colors">HOME</span>
          <span className="hover:text-brand-teal cursor-not-allowed transition-colors">SERVICES</span>
          <span className="hover:text-brand-teal cursor-not-allowed transition-colors">ABOUT</span>
          <span className="text-brand-teal cursor-not-allowed transition-colors">PRODUCTS</span>
          <span className="hover:text-brand-teal cursor-not-allowed transition-colors">CONTACT</span>
        </nav>
      </header>

      <main className="w-full flex-1 max-w-[1000px] mx-auto px-8 py-10 md:py-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        <div className="w-full lg:w-[50%] flex flex-col justify-between" style={{ minHeight: '400px' }}>
          
          <div>
            {productInfo.detailTitle && (
              <div className="mb-6 md:mb-8">
                <h1 className="text-[28px] md:text-[36px] font-bold text-[#14233A] leading-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  {productInfo.detailTitle.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h1>
                <div className="w-16 h-1 mt-4 bg-[#A3C4D3] rounded-full" />
              </div>
            )}
            
            <div className="pt-2">
              {productInfo.detailContent}
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start gap-12">
            <Link 
              to="/" 
              className="px-8 py-3 bg-brand-deep text-white text-[11px] font-orbitron font-bold tracking-[0.2em] uppercase hover:bg-brand-teal transition-colors"
            >
              BACK TO PROJECTS
            </Link>
            
            <p className="text-[9px] font-orbitron tracking-[0.2em] text-brand-steel/50 uppercase">
              Simetra Solutions © 2026
            </p>
          </div>

        </div>

        <div className="w-full lg:w-[50%] flex-shrink-0">
          <div className="bg-white p-2 md:p-4 rounded-xl border border-black/5 shadow-2xl ml-auto max-w-[450px]">
            {productInfo.images && productInfo.images.length > 0 ? (
              <ImageCarousel images={productInfo.images} altText={productInfo.detailTitle || productInfo.name} />
            ) : (
              <img 
                src={productInfo.image} 
                alt={productInfo.detailTitle || productInfo.name} 
                className="w-full h-auto object-cover rounded-lg"
              />
            )}
          </div>
        </div>

      </main>

    </div>
  );
}
