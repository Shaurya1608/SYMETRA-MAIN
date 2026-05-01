import React, { useState, useEffect, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProgress } from '@react-three/drei'

import { Header } from '../components/Header'
import { Headline } from '../components/Headline'

import { BackgroundWatermark } from '../components/BackgroundWatermark'
import { MenuOverlay } from '../components/MenuOverlay'
import { SmoothScroll } from '../components/SmoothScroll'
import { LoadingScreen } from '../components/LoadingScreen'
import { Experience } from '../components/Experience'
import { BackgroundTexture } from '../components/BackgroundTexture'

// Lazy loaded components for bundle optimization
const ClaritySection = lazy(() => import('../components/ClaritySection').then(module => ({ default: module.ClaritySection })));
const CompanySection = lazy(() => import('../components/CompanySection').then(module => ({ default: module.CompanySection })));
const PillarsSection = lazy(() => import('../components/PillarsSection').then(module => ({ default: module.PillarsSection })));
const ProductSection = lazy(() => import('../components/ProductSection').then(module => ({ default: module.ProductSection })));
const ContactSection = lazy(() => import('../components/ContactSection').then(module => ({ default: module.ContactSection })));


export default function LandingPage() {
  const [introFinished, setIntroFinished] = useState(false);
  const [headerTheme, setHeaderTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "HOME | Simetra Solutions";
    
    if (introFinished) {
      const handleScroll = () => {
        const sections = [
          { id: 'hero', theme: 'dark' },
          { id: 'services', theme: 'dark' },
          { id: 'about', theme: 'light' },
          { id: 'pillars', theme: 'dark' },
          { id: 'product', theme: 'light' },
          { id: 'contact', theme: 'dark' }
        ];

        let activeTheme = 'dark';
        
        sections.forEach(section => {
          const el = document.getElementById(section.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100) {
              activeTheme = section.theme;
            }
          }
        });

        setHeaderTheme(activeTheme);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [introFinished]);

  // Phase 1: Video Intro (Stand-alone to prevent lag)
  if (!introFinished) {
    return (
      <div className="fixed inset-0 bg-black z-[1000]">
        <LoadingScreen onFinished={() => setIntroFinished(true)} />
      </div>
    );
  }

  // Phase 2: Actual Website (Mounted only after video)
  return (
    <>
      <Suspense fallback={null}>
        <SmoothScroll>
        <div className="relative bg-brand-deep text-brand-arctic font-sans selection:bg-brand-teal selection:text-white transition-colors duration-700">

          {/* HUD LAYER: Fixed UI Elements */}
          <div className="viewport-border fixed z-50 pointer-events-none" />
          
          {/* Navigation Layer */}
          <div className="fixed top-0 left-0 w-full z-[110] px-6 py-0 md:px-12 md:pt-1 pointer-events-none">
              <div className="pointer-events-auto max-w-[1920px] mx-auto">
                <Header theme={headerTheme} isOpen={isMenuOpen} toggleMenu={toggleMenu} />
              </div>
          </div>

          <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          
          {/* SECTION 1: HERO (Sticky for overlap) */}
          <div id="hero" className="w-full h-px pointer-events-none" />
          <section 
            className="relative h-screen w-full sticky top-0 z-10 overflow-hidden flex flex-col items-center justify-center"
            style={{ background: 'radial-gradient(circle at 50% 40%, #1E3A5F 0%, #0B1120 70%, #0B1120 100%)' }}
          >
            {/* 3D Experience Background Layer */}
            <Experience />

            {/* Background Decorative Elements */}
            <BackgroundTexture />
            <BackgroundWatermark />

            {/* HERO FOREGROUND CONTENT */}
            <div className="relative z-20 w-full h-full flex flex-col px-6 py-4 md:px-12 md:pt-16 md:pb-8 max-w-[1920px] pointer-events-none">
                <div className="w-full flex flex-col h-full justify-center">
                  <main className="flex-1 w-full relative mt-8 md:mt-12 overflow-hidden lg:overflow-visible lg:grid lg:grid-cols-12 lg:items-center">
                    
                    {/* Left Column: Heading */}
                    <div className="pointer-events-auto absolute top-[2vh] lg:top-0 left-0 w-full lg:relative lg:w-auto lg:col-span-6">
                      <Headline />
                    </div>

                    {/* Right Column: Interaction */}
                    <div className="pointer-events-auto absolute top-[55vh] lg:top-[-18vh] right-0 w-full flex flex-col items-end text-right lg:relative lg:w-auto lg:col-span-6 lg:gap-10">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.4 }}
                          className="flex flex-col items-end gap-3 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] opacity-60 leading-relaxed text-right mt-4 lg:mt-6 transition-colors duration-500 text-[#EAEAEA]"
                        >
                            <p className="max-w-[220px] lg:max-w-[450px]">
                            VR-based safety training & simulation systems <br className="hidden lg:block" /> that help companies train employees in a realistic but risk-free environment.
                            </p>
                        </motion.div>
                    </div>
                  </main>
                </div>
            </div>
          </section>

          {/* SECTION 2: SERVICES */}
          <div id="services" className="w-full h-px pointer-events-none" />
          <div className="sticky top-0 z-20 w-full">
             <ClaritySection />
          </div>

          {/* SECTION 3: COMPANY IDENTITY */}
          <div id="about" className="w-full h-px pointer-events-none" />
          <div className="sticky top-0 z-30 w-full">
            <CompanySection />
          </div>

          {/* SECTION 4: STRATEGIC PILLARS */}
          <div id="pillars" className="w-full h-px pointer-events-none" />
          <div className="sticky top-0 z-40 w-full overflow-hidden">
             <PillarsSection />
          </div>

          {/* SECTION 5: PRODUCT SHOWCASE */}
          <div id="product" className="w-full h-px pointer-events-none" />
          <div className="sticky top-0 z-50 w-full">
            <ProductSection />
          </div>

          {/* SECTION 6: CONTACT & FOOTER */}
          <div id="contact" className="w-full h-px pointer-events-none" />
          <div className="relative z-[60] bg-brand-deep">
            <ContactSection />
          </div>

        </div>
      </SmoothScroll>
    </Suspense>
    </>
  )
}
