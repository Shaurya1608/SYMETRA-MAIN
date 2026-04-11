import React from 'react';
import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-deep py-20 lg:py-40 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-steel/20">
      <div className="relative z-10 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 space-y-8 lg:space-y-12 text-center lg:text-left">
          <div className="space-y-4 lg:space-y-6">
            <span className="text-[10px] md:text-[11px] font-archivo tracking-[0.6em] text-simetra uppercase block">Connect</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-anton tracking-tighter text-arctic uppercase leading-tight">
              GET IN<br />
              <span className="text-steel">TOUCH</span>
            </h2>
            <p className="text-arctic/60 font-archivo text-sm md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 lg:border-l lg:border-steel lg:pl-6">
              Have a project in mind or need assistance with our VR solutions? Our team is ready to help you implement the next generation of training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 pt-4">
            <div className="space-y-2 lg:space-y-4">
              <h4 className="text-[10px] lg:text-xs font-archivo text-simetra uppercase tracking-[0.2em] font-bold">Office</h4>
              <p className="text-arctic/80 font-archivo text-xs lg:text-sm leading-relaxed">
                123 Innovation Drive<br />
                Tech District, SF 94105
              </p>
            </div>
            <div className="space-y-2 lg:space-y-4">
              <h4 className="text-[10px] lg:text-xs font-archivo text-simetra uppercase tracking-[0.2em] font-bold">Email</h4>
              <p className="text-arctic/80 font-archivo text-xs lg:text-sm leading-relaxed">
                hello@vastech.solutions<br />
                +1 (555) 982-1234
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-6 lg:col-start-7 bg-intelligence/10 border border-steel/20 p-6 md:p-10 lg:p-12 rounded-sm backdrop-blur-sm">
          <form className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-2 border-b border-steel/20 pb-2 flex flex-col group focus-within:border-simetra transition-colors">
                <label className="text-[9px] uppercase tracking-widest text-arctic/40 font-bold">Name</label>
                <input type="text" className="bg-transparent border-none outline-none text-arctic py-1 text-sm lg:text-base font-archivo" placeholder="Your name" />
              </div>
              <div className="space-y-2 border-b border-steel/20 pb-2 flex flex-col group focus-within:border-simetra transition-colors">
                <label className="text-[9px] uppercase tracking-widest text-arctic/40 font-bold">Email</label>
                <input type="email" className="bg-transparent border-none outline-none text-arctic py-1 text-sm lg:text-base font-archivo" placeholder="email@company.com" />
              </div>
            </div>

            <div className="space-y-2 border-b border-steel/20 pb-2 flex flex-col group focus-within:border-simetra transition-colors">
              <label className="text-[9px] uppercase tracking-widest text-arctic/40 font-bold">Service</label>
              <select className="bg-transparent border-none outline-none text-arctic py-1 text-sm lg:text-base font-archivo appearance-none">
                <option className="bg-deep">Industrial Simulation</option>
                <option className="bg-deep">VR Hardware</option>
                <option className="bg-deep">Custom Project</option>
              </select>
            </div>

            <div className="space-y-2 border-b border-steel/20 pb-2 flex flex-col group focus-within:border-simetra transition-colors">
              <label className="text-[9px] uppercase tracking-widest text-arctic/40 font-bold">Message</label>
              <textarea rows="3" className="bg-transparent border-none outline-none text-arctic py-1 text-sm lg:text-base font-archivo resize-none" placeholder="How can we help?"></textarea>
            </div>

            <button className="w-full py-4 bg-simetra hover:bg-signal text-deep font-archivo font-black uppercase tracking-[0.2em] text-xs lg:text-sm transition-all duration-300">
              SEND MESSAGE
            </button>
          </form>
        </div>


      </div>

      {/* Footer credits */}
      <div className="mt-24 pt-12 border-t border-steel/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
        <p className="text-[10px] font-archivo uppercase tracking-widest text-arctic">© 2026 VASTECH SOLUTIONS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
            <a href="#" className="text-[10px] font-archivo uppercase tracking-widest text-arctic hover:text-simetra transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-archivo uppercase tracking-widest text-arctic hover:text-simetra transition-colors">Terms of Service</a>
        </div>
      </div>
    </section>
  );
}
