export function Header({ theme = 'light' }) {
  const isDark = theme === 'dark';
  const colorClass = isDark ? 'text-white' : 'text-[#1A1A1A]';
  const bgColorClass = isDark ? 'bg-white' : 'bg-[#1A1A1A]';

  return (
    <header className="relative z-50 w-full flex items-start justify-between max-w-[1920px]">
      <div className="flex items-center gap-2">
        <div className={`w-8 h-8 flex flex-col justify-between p-1 rounded-sm shadow-xl transition-colors duration-500 ${isDark ? 'bg-white' : 'bg-[#1A1A1A]'}`}>
          <div className={`h-[2px] w-full transition-colors duration-500 ${isDark ? 'bg-[#1A1A1A] opacity-50' : 'bg-white opacity-50'}`} />
          <div className={`h-[2px] w-full transition-colors duration-500 ${isDark ? 'bg-[#1A1A1A]' : 'bg-white'}`} />
          <div className={`h-[2px] w-full transition-colors duration-500 ${isDark ? 'bg-[#1A1A1A] opacity-50' : 'bg-white opacity-50'}`} />
        </div>
        <span className={`font-orbitron text-sm tracking-[0.2em] uppercase transition-colors duration-500 ${colorClass}`}>VASTECH</span>
      </div>
      <div className="flex flex-col items-end gap-1 cursor-pointer group">
        <div className={`w-10 h-[2.5px] group-hover:w-12 transition-all duration-300 ${bgColorClass}`} />
        <div className={`w-7 h-[2.5px] opacity-60 group-hover:w-10 transition-all duration-300 ${bgColorClass}`} />
      </div>
    </header>
  )
}
