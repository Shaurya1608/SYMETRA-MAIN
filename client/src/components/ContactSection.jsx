import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import logo from '../assets/simmerta-logo/Simetra-Logo-02(1).png'

export function ContactSection() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // NOTE: Please replace 'YOUR_TEMPLATE_ID_HERE' with your actual EmailJS Template ID
    emailjs.sendForm(
      'service_9g5p01g', 
      'template_g8d055p', 
      form.current, 
      '8k1jN7RaR7Pfp4bvl'
    )
    .then((result) => {
        setSubmitMessage('Message sent successfully!');
        setIsSubmitting(false);
        form.current.reset();
    }, (error) => {
        console.error(error.text);
        setSubmitMessage('Failed to send message. Please try again.');
        setIsSubmitting(false);
    });
  };
  return (
    <section className="relative w-full h-screen bg-brand-deep px-6 lg:px-24 overflow-hidden flex flex-col justify-center">
      {/* Background Decorative Pattern - Vertical Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-[5%] lg:px-[10%]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full w-[1px] bg-white/10" />
        ))}
      </div>

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

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[8px] font-orbitron tracking-widest text-brand-arctic/30 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    placeholder="John Doe" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-brand-arctic focus:outline-none focus:border-brand-teal/50 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[8px] font-orbitron tracking-widest text-brand-arctic/30 uppercase">Email</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    placeholder="john@company.com" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-brand-arctic focus:outline-none focus:border-brand-teal/50 transition-colors"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[8px] font-orbitron tracking-widest text-brand-arctic/30 uppercase">Phone No.</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-brand-arctic focus:outline-none focus:border-brand-teal/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[8px] font-orbitron tracking-widest text-brand-arctic/30 uppercase">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="3" 
                  placeholder="How can we help?" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-brand-arctic focus:outline-none focus:border-brand-teal/50 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-3 bg-brand-teal text-brand-arctic font-orbitron text-[9px] tracking-[0.4em] uppercase rounded-xl hover:bg-brand-signal transition-all duration-500 shadow-xl shadow-brand-teal/10 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && (
                <p className={`text-xs font-archivo mt-2 ${submitMessage.includes('Failed') ? 'text-red-400' : 'text-green-400'}`}>
                  {submitMessage}
                </p>
              )}
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
             <img 
               src={logo} 
               alt="Simetra Logo" 
               className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
             />
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
