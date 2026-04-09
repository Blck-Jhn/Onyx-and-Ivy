import React from 'react'

const MasterHead = () => {
  return (  
    <div className="relative w-full bg-[#0a0a0a] text-[#d4d4d4] border-b border-white/5 py-2 md:py-3 px-4 md:px-6 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
               
        {/* Left: Boutique Locations*/}
        <div className="flex gap-4 md:gap-6 items-center justify-center">
          <div className="flex items-center gap-2 group cursor-default">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-white">Paris</span>
          </div>
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium opacity-40">London</span>
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium opacity-40">Dubai</span>
        </div>        
        <div className="absolute left-1/2 -translate-x-1/2 hidden xl:block whitespace-nowrap">
          <p className="text-[9px] uppercase tracking-[0.6em] font-light text-white/80">
            The Haute Couture Collection — <span className="italic font-serif normal-case tracking-normal ml-1 text-emerald-100/50">Limited Release</span>
          </p>
        </div>

        {/* Right: VIP Services  */}
        <div className="flex gap-6 md:gap-8 items-center justify-center border-t border-white/5 pt-2 md:pt-0 md:border-none w-full md:w-auto">
          <a 
            href="/concierge" 
            className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:text-white transition-all duration-500"
          >
            Private Consultation
          </a>
          <a 
            href="/track-order" 
            className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:text-white transition-all duration-500"
          >
            White Glove Tracking
          </a>
        </div>

      </div>
    </div>
  )
}

export default MasterHead