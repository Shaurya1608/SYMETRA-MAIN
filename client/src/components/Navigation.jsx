export function Navigation() {
  return (
    <div className="relative w-full flex items-center justify-end mt-auto lg:mt-0">
         <div className="text-sm lg:text-[1vw] font-bold tracking-[0.2em] flex items-center leading-none select-none opacity-80 z-30 transition-all hover:opacity-100 cursor-pointer text-[#EAEAEA]">
            PREV <span className="w-24 lg:w-48 h-[1.5px] bg-[#EAEAEA] mx-4 lg:mx-8" /> NEXT
        </div>
    </div>
  )
}
