import { motion } from 'framer-motion'
import logo from '../assets/simmerta-logo/Simetra-Logo-01(1).png'

export function Header({ theme = 'light', isOpen, toggleMenu }) {
  const isDark = theme === 'dark' && !isOpen; // Force dark (black icon) when menu is open on white bg
  const colorClass = isDark ? 'text-brand-arctic' : 'text-black';
  const bgColorClass = isDark ? 'bg-brand-arctic' : 'bg-black';

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

  return (
    <header className="relative z-[110] w-full flex items-center justify-between max-w-[1920px] -mt-2 md:-mt-4">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
        <img 
          src={logo} 
          alt="Simetra Logo" 
          className="h-20 md:h-28 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Desktop Navigation Links */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className={`hidden lg:flex items-center gap-14 font-bold text-[11px] uppercase tracking-[0.4em] ${colorClass} absolute left-1/2 -translate-x-1/2`}
      >
          <div onClick={scrollToTop} className="cursor-pointer hover:text-brand-teal transition-all opacity-100 underline decoration-brand-teal underline-offset-8 decoration-2">Home</div>
          <div onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-brand-teal transition-all opacity-70 hover:opacity-100">About</div>
          <div onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-brand-teal transition-all opacity-70 hover:opacity-100">Services</div>
          <div onClick={() => scrollToSection('product')} className="cursor-pointer hover:text-brand-teal transition-all opacity-70 hover:opacity-100">Products</div>
          <div onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-brand-teal transition-all opacity-70 hover:opacity-100">Contact</div>
      </motion.nav>
      
      {/* Menu Toggle */}
      <div 
        onClick={toggleMenu}
        className="flex flex-col items-end gap-1.5 cursor-pointer group relative w-10 h-6"
      >
        <div className={`h-[2.5px] transition-all duration-500 rounded-full ${bgColorClass} ${
          isOpen ? 'w-10 absolute top-1/2 -translate-y-1/2 rotate-45' : 'w-10'
        }`} />
        <div className={`h-[2.5px] transition-all duration-500 rounded-full ${bgColorClass} ${
          isOpen ? 'w-10 absolute top-1/2 -translate-y-1/2 -rotate-45' : 'w-7 opacity-60 group-hover:w-10'
        }`} />
      </div>
    </header>
  )
}
