export function BackgroundWatermark() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none flex items-end justify-between px-[1vw] z-15 pb-[18vh]">
      <h1 className="text-[19vw] font-black text-white leading-none tracking-tighter uppercase opacity-80 decoration-white/10">
        VR
      </h1>
      <h1 className="text-[15vw] font-black text-white leading-none tracking-tighter uppercase opacity-80 decoration-white/10 translate-y-[18vh] -translate-x-[4vw]">
        AR
      </h1>
    </div>
  )
}
