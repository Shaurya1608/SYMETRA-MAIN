import { motion } from 'framer-motion';

export function Sidebar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: 0, duration: 1.5 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
        {/* Vertical Navigation Links */}
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 1 } }
            }}
            className="hidden lg:flex gap-16 font-bold text-[13px] uppercase tracking-[0.3em] leading-relaxed relative z-50 mb-4 lg:mb-10 mt-[-29vh]"
        >
            <div className="space-y-2">
                <motion.div variants={linkVariants}>
                  <div onClick={scrollToTop} className="opacity-100 underline decoration-brand-teal underline-offset-8 cursor-pointer hover:opacity-70 transition-opacity">Home</div>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <div onClick={() => scrollToSection('services')} className="opacity-100 cursor-pointer hover:opacity-70 transition-opacity">Services</div>
                </motion.div>
            </div>
            <div className="space-y-2">
                <motion.div variants={linkVariants}>
                  <div onClick={() => scrollToSection('about')} className="opacity-100 cursor-pointer hover:opacity-70 transition-opacity focus:text-brand-teal">About</div>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <div onClick={() => scrollToSection('product')} className="opacity-100 cursor-pointer hover:text-brand-teal transition-all">Products</div>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <div onClick={() => scrollToSection('contact')} className="opacity-100 cursor-pointer hover:text-brand-teal transition-all">Contact</div>
                </motion.div>
            </div>
        </motion.div>
    </>
  )
}
