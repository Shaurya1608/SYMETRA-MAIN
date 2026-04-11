export function Headline() {
  return (
    <div className="flex flex-col justify-start mt-0 lg:mt-[-38vh] relative z-20 w-full">
      <div className="relative self-start">
        {/* Placed inside the empty space created by the first line's padding */}
        <div className="absolute top-[0.3em] left-0 text-[11px] font-medium tracking-[0.1em] opacity-60 uppercase hidden lg:block">01/07</div>
        <div className="text-[11px] font-medium tracking-[0.1em] opacity-60 uppercase lg:hidden mb-2">01/07</div>
        <h2 className="text-[10vw] lg:text-[2.8vw] font-orbitron font-normal leading-[0.9] tracking-normal uppercase transition-all duration-700 text-[#EAEAEA] flex flex-col">
          <span className="lg:pl-[3.5em] animate-fade-up delay-100">IMMERSIVE</span>
          <span className="pl-[4vw] lg:pl-[0em] animate-fade-up delay-200">VR TRAINING</span>
          <span className="pl-[8vw] lg:pl-[1.5em] animate-fade-up delay-300">FOR REAL WORLD</span>
          <span className="pl-[12vw] lg:pl-[0em] animate-fade-up delay-400">SAFETY</span>
        </h2>
      </div>
    </div>
  )
}
