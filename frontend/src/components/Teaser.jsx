import React from 'react'
import { assets } from '../assets/assets'

const Teaser = () => {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden bg-zinc-950">
           
      <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture   
        controlsList="noplaybackrate" 
        disableRemotePlayback
       poster={assets.CL9}
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110 animate-slow-zoom"
        >
          <source src={assets.HERO_VIDEO_THUMB} type="video/mp4" />
        </video>      
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-zinc-950/90"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <p className="text-white tracking-[1.2em] uppercase text-[10px] font-extralight mb-4 opacity-80">
          The Art of Curation
        </p>
        <div className="h-px w-24 bg-white/20"></div>
        <h2 className="text-emerald-400 tracking-[0.8em] uppercase text-xs font-light mt-6 text-center px-4">
          Experience the Unrivaled
        </h2>
      </div>
    </div>
  )
}

export default Teaser