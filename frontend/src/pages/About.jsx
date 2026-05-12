import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (

    <div className='bg-[#faf9f7]'>
      <div className='text-center pt-20 border-t border-gray-100'>
        <Title text1={'ABOUT'} text2={'US'} />
        <div className='mt-6 flex justify-center'>
          <div className='w-16 h-px bg-black/70'></div>
        </div>
      </div>      
      <div className='max-w-7xl mx-auto px-6 lg:px-10 my-24 flex flex-col md:flex-row gap-16 items-center'>
        
        <div className='w-full md:w-1/2 relative group'>
          <div className='absolute -inset-6 bg-emerald-900/5 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
          <img
            src={assets.About}
            alt='About'
            className='relative w-full rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] object-cover'
          />
        </div>        
        <div className='flex flex-col gap-6 md:w-1/2 text-gray-600 leading-relaxed'>
         <p className='text-base tracking-wide'>
            We believe in creating refined, timeless pieces that blend craftsmanship with modern design. Every detail is intentional, every product is thoughtfully curated.
          </p>
          <p className='text-base tracking-wide'>
            Our approach is rooted in simplicity, quality, and longevity — offering a shopping experience that feels calm, elegant, and effortless.
          </p>
          <div className='pt-2'>
            <b className='text-black text-lg tracking-wide'>Our Mission</b>
            <p className='mt-3 text-base tracking-wide'>
              To redefine modern retail through elevated essentials, premium quality, and a seamless customer experience that feels personal and refined.
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-10'>
        <div className='text-center mb-14'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        <div className='grid md:grid-cols-3 gap-8 mb-24'>
         <div className='bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300'>
            <b className='text-black text-lg tracking-wide'>Quality Assurance</b>
            <p className='mt-4 text-gray-600 text-sm leading-relaxed tracking-wide'>
              Every product is carefully inspected to ensure it meets the highest standards of craftsmanship and durability.
            </p>
          </div>          
          <div className='bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300'>
            <b className='text-black text-lg tracking-wide'>Seamless Convenience</b>
            <p className='mt-4 text-gray-600 text-sm leading-relaxed tracking-wide'>
              A smooth and intuitive shopping experience designed to make everything effortless from browsing to checkout.
            </p>
          </div>          
          <div className='bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300'>
            <b className='text-black text-lg tracking-wide'>Exceptional Service</b>
            <p className='mt-4 text-gray-600 text-sm leading-relaxed tracking-wide'>
              Our support team is dedicated to providing fast, thoughtful, and human-centered assistance whenever you need it.
            </p>
          </div>
        </div>
      </div>
      
      <div className='bg-white/50 backdrop-blur-md border-t border-gray-100 py-16'>
        <NewsLetter />
      </div>
    </div>
  )
}

export default About