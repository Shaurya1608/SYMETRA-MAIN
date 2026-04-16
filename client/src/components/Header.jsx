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

  return (
    <header className="relative z-[110] w-full flex items-start justify-between max-w-[1920px]">
      <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
        <div className={`w-8 h-8 flex flex-col justify-between p-1 rounded-sm shadow-xl transition-colors duration-500 ${isDark ? 'bg-brand-arctic' : 'bg-brand-deep'}`}>
          <div className={`h-[2px] w-full transition-colors duration-500 ${isDark ? 'bg-brand-deep opacity-50' : 'bg-brand-arctic opacity-50'}`} />
          <div className={`h-[2px] w-full transition-colors duration-500 ${isDark ? 'bg-brand-deep' : 'bg-brand-arctic'}`} />
          <div className={`h-[2px] w-full transition-colors duration-500 ${isDark ? 'bg-brand-deep opacity-50' : 'bg-brand-arctic opacity-50'}`} />
        </div>
        <span className={`font-orbitron text-sm tracking-[0.2em] uppercase transition-colors duration-500 ${colorClass}`}>SIMETRA</span>
      </div>
      
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
