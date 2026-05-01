import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveParticles } from './InteractiveParticles';

export function BackgroundTexture() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle Dot Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ 
          backgroundImage: 'radial-gradient(var(--color-brand-arctic) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Interactive Canvas Particles */}
      <InteractiveParticles />
    </div>
  );
}
