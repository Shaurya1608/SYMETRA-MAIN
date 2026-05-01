import React from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@react-three/drei';

import logo from '../assets/simmerta-logo/Simetra-Logo-01(1).png'

export const LoadingScreen = () => {
  const { progress } = useProgress();
  const roundedProgress = Math.round(progress);

  return (
    <div className="fixed inset-0 z-[200] bg-brand-deep flex flex-col items-center justify-center overflow-hidden font-poppins text-white">
      
      {/* High-Tech Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none transform-gpu" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Central HUD Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[300px] md:max-w-sm px-6">
        
        {/* Top HUD Frame */}
        <div className="w-full flex justify-between items-end border-b border-brand-teal/20 pb-2 mb-8">
          <img 
            src={logo} 
            alt="Simetra Logo" 
            className="h-8 md:h-10 w-auto object-contain opacity-90"
          />
          <span className="text-[9px] uppercase tracking-widest text-white/40">SYS / 01</span>
        </div>

        {/* Huge Dynamic Number */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-start justify-center"
        >
          <span className="text-7xl md:text-9xl font-light tracking-tighter text-white leading-none">
            {roundedProgress}
          </span>
          <span className="text-xl md:text-3xl text-brand-teal font-bold ml-1 mt-2 md:mt-4">%</span>
        </motion.div>

        {/* Clear Simple Label */}
        <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/50 mt-8 mb-4">
          Loading
        </p>

        {/* Sleek Progress Bar */}
        <div className="w-full h-[2px] bg-white/5 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-brand-teal"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
            style={{ boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)' }}
          />
        </div>

        {/* Bottom Details */}
        <div className="w-full flex justify-between mt-4">
           <span className="text-[7px] md:text-[8px] uppercase tracking-widest text-white/30">
             {roundedProgress === 100 ? 'Systems Online' : 'Connecting Data...'}
           </span>
           <span className="text-[7px] md:text-[8px] tracking-widest text-brand-teal uppercase">
             {roundedProgress === 100 ? 'READY' : 'STANDBY'}
           </span>
        </div>

      </div>
    </div>
  );
};
