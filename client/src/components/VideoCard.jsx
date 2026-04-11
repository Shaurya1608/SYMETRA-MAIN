export function VideoCard() {
  return (
    <div className="absolute left-[6%] bottom-10 z-12 group flex items-center gap-6 max-w-xs bg-white/50 backdrop-blur-xl p-5 rounded-2xl border border-black/5 shadow-2xl transition-all hover:bg-white/80 cursor-pointer pointer-events-auto">
       <div className="w-24 aspect-video bg-[#1A1A1A]/10 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="w-8 h-8 rounded-full bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
            <span className="text-[10px] pl-0.5">▶</span>
          </div>
       </div>
       <p className="text-[9px] leading-relaxed font-black opacity-60 uppercase tracking-[0.2em]">
         Use the in-gripper LED<br />illuminator and 4K camera
       </p>
    </div>
  )
}
