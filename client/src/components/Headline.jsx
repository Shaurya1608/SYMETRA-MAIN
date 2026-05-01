import { motion } from 'framer-motion';

export function Headline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(5px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col justify-start mt-0 lg:mt-[-38vh] relative z-20 w-full">
      <div className="relative self-start">
        {/* Placed inside the empty space created by the first line's padding */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-[0.3em] left-0 text-[11px] font-medium tracking-[0.1em] uppercase hidden lg:block"
        >01/07</motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[11px] font-medium tracking-[0.1em] uppercase lg:hidden mb-2"
        >01/07</motion.div>
        
        <motion.h2 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[8.5vw] lg:text-[2.8vw] font-orbitron font-normal leading-[1.0] lg:leading-[0.9] tracking-normal uppercase text-[#EAEAEA] flex flex-col"
        >
          <motion.span variants={itemVariants} className="lg:pl-[3.5em]">IMMERSIVE</motion.span>
          <motion.span variants={itemVariants} className="pl-[4vw] lg:pl-[0em]">VR TRAINING</motion.span>
          <motion.span variants={itemVariants} className="pl-[8vw] lg:pl-[1.5em]">FOR REAL WORLD</motion.span>
          <motion.span variants={itemVariants} className="pl-[12vw] lg:pl-[0em]">SAFETY</motion.span>
        </motion.h2>
      </div>
    </div>
  )
}
