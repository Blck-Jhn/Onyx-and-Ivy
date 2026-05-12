import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    
    <div className='w-full bg-white'>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row min-h-[80vh] border-x border-stone-100'>
        
        {/* Left Side*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-20 sm:py-0 bg-white'>
          <div className='text-[#414141] px-12 lg:px-20'>            
            <div className='flex items-center gap-3 mb-6'>
              <p className='w-12 h-px bg-emerald-800'></p>
              <p className='font-medium text-[10px] tracking-[0.5em] text-emerald-900 uppercase'>
                The Privilege Collection
              </p>
            </div>
            <h1 className='text-5xl lg:text-7xl leading-[1.1] prata-regular italic text-zinc-900 mb-8'>
              Refined <br /> Excellence
            </h1>

            <div className='flex items-center gap-4 group cursor-pointer w-max'>
              <Link to='/collection'>
              <p className='font-bold text-[10px] tracking-[0.4em] group-hover:text-red-700 group-hover:translate-x-2 transition-all duration-700'>
                EXPLORE NOW
              </p>
              </Link>
              <div className='h-px bg-zinc-300 w-12 group-hover:w-20 group-hover:bg-emerald-700 transition-all duration-700'></div>
            </div>
          </div>
        </div>

        {/* Right Side*/}
        <div className='w-full sm:w-1/2 relative overflow-hidden bg-stone-100'>
          <img 
            src={assets.CL9} 
            alt="Luxury Collection" 
            className='w-full h-full object-cover object-center transition-transform duration-5000 hover:scale-110' 
          />             
          <div className='absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)] pointer-events-none'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero