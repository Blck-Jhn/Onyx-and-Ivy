import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const BottomTeaser = () => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden bg-zinc-950">          
      <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture   
        controlsList="noplaybackrate" 
        disableRemotePlayback
        poster={assets.Car4}
        className="absolute inset-0 w-full h-full object-cover opacity-50 scale-110 animate-slow-zoom"
      >
        <source src={assets.HERO_VIDEO_THUMB2} type="video/mp4" />
      </video>  
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-black/20 to-zinc-500/40"></div>      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Subtle Label */}
        <p className="text-white tracking-[1.5em] uppercase text-[9px] font-extralight mb-5 opacity-70">
          Sculpted in Motion
        </p>       
        <div className="h-px w-16 bg-emerald-800/50"></div>        
        <h2 className="text-white tracking-[1em] uppercase text-[11px] md:text-xs font-light mt-8 text-center px-6">
          Defined by <span className="text-red-500 italic">Velocity</span>
        </h2>        
        <div className="mt-10 opacity-40 hover:opacity-100 transition-opacity duration-700 cursor-pointer">
           <Link to='/collection'>
            <p className="text-[8px] tracking-[0.4em] text-white uppercase border-b border-white/20 pb-1">
             Discover the Fleet
           </p>
           </Link>
        </div>
      </div>
    </div>
  )
}

export default BottomTeaser