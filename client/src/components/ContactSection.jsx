import React from 'react';
import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section className="relative w-full h-screen bg-brand-deep px-6 lg:px-24 overflow-hidden flex flex-col justify-center">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/[0.02] -skew-x-12 translate-x-1/3 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-3">
              <span className="text-[9px] font-archivo tracking-[0.8em] text-brand-teal uppercase block">Connect</span>
              <h2 className="text-3xl md:text-5xl font-anton text-brand-arctic uppercase tracking-tighter leading-none">
                Get In Touch
              </h2>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[8px] font-orbitron tracking-widest text-brand-arctic/30 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-brand-arctic focus:outline-none focus:border-brand-teal/50 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[8px] font-orbitron tracking-widest text-brand-arctic/30 uppercase">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-brand-arctic focus:outline-none focus:border-brand-teal/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[8px] font-orbitron tracking-widest text-brand-arctic/30 uppercase">Message</label>
                <textarea 
                  rows="3" 
                  placeholder="How can we help?" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-brand-arctic focus:outline-none focus:border-brand-teal/50 transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full md:w-auto px-8 py-3 bg-brand-teal text-brand-arctic font-orbitron text-[9px] tracking-[0.4em] uppercase rounded-xl hover:bg-brand-signal transition-all duration-500 shadow-xl shadow-brand-teal/10">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:block space-y-10"
          >
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-[9px] font-orbitron tracking-widest text-brand-teal uppercase">Office</h4>
                <p className="text-brand-arctic/60 font-archivo text-xs leading-relaxed">
                  Tech Plaza, 4th Floor<br />
                  San Francisco, CA
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[9px] font-orbitron tracking-widest text-brand-teal uppercase">Contact</h4>
                <p className="text-brand-arctic/60 font-archivo text-xs leading-relaxed">
                  hello@Simetra.solutions<br />
                  +1 (555) 012-3456
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-4">
              <h4 className="text-[9px] font-orbitron tracking-widest text-brand-teal uppercase">Follow Us</h4>
              <div className="flex gap-6">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="text-brand-arctic/30 hover:text-brand-teal transition-colors text-[9px] font-orbitron tracking-widest uppercase">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative border border-white/5 bg-white/[0.02] p-6 rounded-2xl">
               <h3 className="text-lg font-anton text-brand-arctic/80 uppercase">Let's build the future<br />of training together.</h3>
            </div>
          </motion.div>
        </div>

        {/* Footer - Positioned comfortably within 100vh */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
             <div className="w-5 h-5 bg-brand-teal rounded-sm" />
             <span className="font-orbitron text-[9px] tracking-[0.2em] text-brand-arctic">SIMETRA</span>
          </div>
          <p className="text-brand-arctic/20 font-archivo text-[8px] uppercase tracking-[0.2em] text-center">
            © 2026 Simetra SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-brand-arctic/20 hover:text-white transition-colors text-[8px] font-archivo uppercase tracking-[0.1em]">Privacy</a>
             <a href="#" className="text-brand-arctic/20 hover:text-white transition-colors text-[8px] font-archivo uppercase tracking-[0.1em]">Terms</a>
          </div>
        </div>
      </div>
    </section>

  );
}
