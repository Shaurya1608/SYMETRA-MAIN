import React from 'react';
import { motion } from 'framer-motion';

export function PillarsBanner() {
  return (
    <section className="relative w-full text-black py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 border-b border-black/10">
      {[
        { title: "Risk-Free", sub: "Training\nEnvironments" },
        { title: "Repeatable", sub: "Learning\nFrameworks" },
        { title: "Standardized", sub: "Training\nQuality" },
        { title: "Scalable", sub: "Training\nPlatforms" }
      ].map((item, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col items-center text-center px-4 md:px-8 lg:px-12 group">
            <span className="font-archivo font-bold text-2xl md:text-3xl tracking-tight mb-2 text-black group-hover:text-simetra transition-colors">{item.title}</span>
            <span className="font-archivo text-xs md:text-sm font-semibold leading-tight whitespace-pre-line text-center text-black/60">{item.sub}</span>
          </div>
          {i < 3 && <div className="hidden md:block w-px h-12 bg-black/10" />}
        </React.Fragment>
      ))}
    </section>
  );
}
