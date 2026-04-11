import React from 'react'
import { Header } from '../components/Header'
import { Headline } from '../components/Headline'
import { Sidebar } from '../components/Sidebar'
import { Navigation } from '../components/Navigation'
import { BackgroundWatermark } from '../components/BackgroundWatermark'
import { Experience } from '../components/Experience'
import { ClaritySection } from '../components/ClaritySection'
import { ContactSection } from '../components/ContactSection'

export function LandingPage() {
  return (
    <div className="relative bg-[#0A1624] text-[#EAEAEA] font-sans selection:bg-white selection:text-[#1A1A1A] transition-colors duration-700">

      {/* HUD LAYER: Stays Fixed on Top (z-50) */}
      <div className="viewport-border fixed z-50 pointer-events-none" />
      
      {/* FIXED HUB COMPONENTS */}
      <div className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:pt-6 pointer-events-none">
          <div className="pointer-events-auto max-w-[1920px] mx-auto">
            <Header theme="dark" />
          </div>
      </div>
      

      {/* SECTION 1: HERO (Sticky) */}
      <section 
        className="relative h-[100dvh] w-full sticky top-0 z-10 overflow-hidden flex flex-col items-center"
        style={{ background: 'radial-gradient(circle at 50% 40%, #12314A 0%, #0F2236 45%, #0A1624 100%)' }}
      >
        {/* LAYER 1: 3D Experience (z-10) */}
        <Experience />

        {/* LAYER 3: Background Watermark (z-15) */}
        <BackgroundWatermark />

        {/* LAYER 4: Foreground Content (z-20) */}
        <div className="relative z-20 w-full h-screen flex flex-col px-6 py-4 md:px-12 md:pt-16 md:pb-8 max-w-[1920px] pointer-events-none">
            <div className="w-full flex flex-col h-full">
              {/* Main Content Grid */}
              <main className="flex-1 w-full relative mt-4 md:mt-12 overflow-hidden lg:overflow-visible lg:grid lg:grid-cols-12 lg:items-center">
                <div className="pointer-events-auto absolute top-0 left-0 w-full lg:relative lg:w-auto lg:col-span-6"><Headline /></div>

                {/* Right Column: Interaction & Specs */}
                <div className="pointer-events-auto absolute top-[26vh] right-0 w-full flex flex-col items-end text-right lg:relative lg:top-auto lg:w-auto lg:col-span-6 lg:gap-12">
                    <Sidebar />
                    <Navigation />
                    
                    <div className="flex flex-col items-end gap-3 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] opacity-60 leading-relaxed text-right mt-4 lg:mt-6 transition-colors duration-500 text-[#EAEAEA] animate-fade-up delay-500">
                        <p className="max-w-[220px] lg:max-w-[450px]">
                        VR-based safety training & simulation systems <br className="hidden lg:block" /> that help companies train employees in a realistic but risk-free environment.
                        </p>
                    </div>
                </div>
              </main>
            </div>
        </div>
      </section>

      {/* SECTION 1.5: CLARITY ZOOM ANIMATION */}
      {/* SCROLLYTELLING PORTAL (Now contains everything) */}
      <div className="relative z-20 w-full">
        <ClaritySection />
      </div>

      {/* FINAL CONTACT LAYER */}
      <div className="relative z-30 w-full">
        <ContactSection />
      </div>
    </div>
  )
}
