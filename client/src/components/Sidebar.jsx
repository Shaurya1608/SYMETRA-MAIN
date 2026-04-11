export function Sidebar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
        {/* Vertical Navigation Links */}
        <div className="hidden lg:flex gap-16 font-bold text-[13px] uppercase tracking-[0.3em] leading-relaxed relative z-50 mb-4 lg:mb-10 mt-[-29vh]">
            <div className="space-y-2">
                <div onClick={scrollToTop} className="opacity-100 underline decoration-white/40 underline-offset-8 cursor-pointer hover:opacity-70 transition-opacity">Home</div>
                <div onClick={() => scrollToSection('services')} className="opacity-100 cursor-pointer hover:opacity-70 transition-opacity">Services</div>
            </div>
            <div className="space-y-2">
                <div onClick={() => scrollToSection('about')} className="opacity-100 cursor-pointer hover:opacity-70 transition-opacity">About</div>
                <div className="opacity-30 cursor-pointer hover:opacity-100 transition-opacity">Products</div>
            </div>
        </div>
    </>
  )
}
