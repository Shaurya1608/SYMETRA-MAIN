import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import product0 from '../assets/products/vastech-product-0.avif';
import product1 from '../assets/products/vasttecproduct 1.avif';
import product2 from '../assets/products/vastech-product-2.avif';
import product3 from '../assets/products/vastechh-product-3.avif';

const productData = {
  "01": {
    title: "",
    image: product0,
    content: (
      <>
        <p className="text-brand-steel text-[13px] md:text-[15px] leading-[1.8] font-medium tracking-wide">
          An immersive virtual <strong className="font-bold text-brand-teal">Fire Training Environment</strong> centered on realistic scenarios, operational accuracy, and <strong className="font-bold text-brand-teal">consistent skill development.</strong> High-fidelity digital representations of real-world environments, equipment, and procedures within <strong className="font-bold text-brand-teal">a risk-free setting.</strong> Standardized training experiences across teams and locations, reduced reliance on physical infrastructure, and improved knowledge retention through experiential learning.
        </p>
        <p className="text-brand-steel text-[13px] md:text-[15px] leading-[1.8] font-medium tracking-wide mt-5">
          <strong className="font-bold text-brand-teal">Clear visualization</strong> of complex processes, scenario-based exposure to critical situations, and structured learning pathways for both new and experienced personnel. <strong className="font-bold text-brand-teal">A scalable training solution</strong> aligned with safety compliance, operational efficiency, and modern workforce readiness.
        </p>
      </>
    )
  },
  "02": {
    title: "FMCG Maintenance\nVR Training",
    image: product1,
    content: (
      <>
        <p className="text-brand-steel text-[13px] md:text-[15px] leading-[1.8] font-medium tracking-wide">
          A high-fidelity virtual maintenance training environment designed for <strong className="font-bold text-brand-teal">FMCG and food packaging</strong> operations. Detailed digital representations of packaging machines, components, and maintenance workflows without disruption to live production.
        </p>
        <p className="text-brand-steel text-[13px] md:text-[15px] leading-[1.8] font-medium tracking-wide mt-5">
          <strong className="font-bold text-brand-teal">Standardized maintenance practices</strong> across shifts and plants, reduced reliance on senior technicians, and improved technical understanding through guided simulation-based learning. Increased equipment reliability, improved operational continuity, and stronger adherence to hygiene and safety standards.
        </p>
      </>
    )
  },
  "03": {
    title: "VR Based\nEmergency Training",
    image: product2,
    content: (
      <>
        <p className="text-brand-steel text-[13px] md:text-[15px] leading-[1.8] font-medium tracking-wide">
          An immersive VR-based training platform designed for <strong className="font-bold text-brand-teal">oil rig emergency scenarios</strong>, enabling workers to experience high-risk situations in a completely <strong className="font-bold text-brand-teal">risk-free virtual environment</strong>. The system delivers realistic simulations of critical incidents, allowing personnel to practice response procedures without real-world danger.
        </p>
        <p className="text-brand-steel text-[13px] md:text-[15px] leading-[1.8] font-medium tracking-wide mt-5">
          It reduces <strong className="font-bold text-brand-teal">training costs</strong>, minimizes dependency on physical setups, and ensures <strong className="font-bold text-brand-teal">standardized training</strong> across teams. Through experiential learning, workers improve decision-making, safety awareness, and response accuracy, resulting in a more prepared and resilient workforce.
        </p>
      </>
    )
  },
  "04": {
    title: "Mobile Based\nTraining Simulations",
    image: product3,
    content: (
      <>
        <p className="text-brand-steel text-[13px] md:text-[15px] leading-[1.8] font-medium tracking-wide">
          A mobile-based simulation training platform designed for easy access and on-the-go learning, eliminating the need for specialized hardware like VR headsets. Training is delivered directly through <strong className="font-bold text-brand-teal">smartphones and tablets</strong>, enabling workers to practice procedures anytime, anywhere.
        </p>
        <p className="text-brand-steel text-[13px] md:text-[15px] leading-[1.8] font-medium tracking-wide mt-5">
          The platform emphasizes <strong className="font-bold text-brand-teal">precision-driven learning</strong>, guiding users through accurate, step-by-step simulations to improve task execution and decision-making. It enhances <strong className="font-bold text-brand-teal">training effectiveness</strong>, reduces setup complexity, and ensures workers are better prepared through consistent, repeatable experiences.
        </p>
        <p className="text-brand-steel text-[13px] md:text-[15px] leading-[1.8] font-medium tracking-wide mt-5">
          By making training more accessible and practical, it supports <strong className="font-bold text-brand-teal">higher accuracy, improved confidence</strong>, and a more skilled and reliable workforce.
        </p>
      </>
    )
  }
};

export function ProductDetail() {
  const { id } = useParams();
  const productKey = id || "01";
  const productInfo = productData[productKey] || productData["01"];

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
            {productInfo.title && (
              <div className="mb-6 md:mb-8">
                <h1 className="text-[28px] md:text-[36px] font-bold text-[#14233A] leading-tight" style={{ fontFamily: "'Antonio', sans-serif" }}>
                  {productInfo.title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h1>
                <div className="w-16 h-1 mt-4 bg-[#A3C4D3] rounded-full" />
              </div>
            )}
            
            <div className="pt-2">
              {productInfo.content}
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
            <img 
              src={productInfo.image} 
              alt={productInfo.title || "Virtual Training"} 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

      </main>

    </div>
  );
}
