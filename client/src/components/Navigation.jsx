import { motion } from 'framer-motion';

export function Navigation() {
  const handleNext = () => {
    const element = document.getElementById('services');
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: 0, duration: 1.5 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="relative w-full flex items-center justify-end mt-auto lg:mt-0"
    >
         <div className="text-sm lg:text-[1vw] font-bold tracking-[0.2em] flex items-center leading-none select-none opacity-80 z-30 transition-all hover:opacity-100 text-brand-arctic">
            <span className="opacity-50 cursor-not-allowed">PREV</span> 
            <span className="w-24 lg:w-48 h-[1.5px] bg-brand-arctic/40 mx-4 lg:mx-8 cursor-pointer" onClick={handleNext} /> 
            <span className="cursor-pointer" onClick={handleNext}>NEXT</span>
        </div>
    </motion.div>
  )
}
