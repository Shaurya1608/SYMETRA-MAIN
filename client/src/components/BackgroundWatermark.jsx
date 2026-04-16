import { motion } from 'framer-motion';

export function BackgroundWatermark() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none flex items-end justify-between px-[1vw] z-15 pb-[18vh]">
      <motion.h1 
        initial={{ opacity: 0, x: -100, scale: 0.9 }}
        animate={{ opacity: 0.8, x: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="text-[19vw] font-black text-white leading-none tracking-tighter uppercase decoration-white/10"
      >
        VR
      </motion.h1>
      <motion.h1 
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 0.8, x: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="text-[15vw] font-black text-white leading-none tracking-tighter uppercase decoration-white/10 translate-y-[18vh] -translate-x-[4vw]"
      >
        AR
      </motion.h1>
    </div>
  )
}
