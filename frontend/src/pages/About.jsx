import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div className='bg-[#faf9f7] overflow-hidden text-[#1a1a1a]'>

      {/* HERO INTRO */}
      <div className='text-center pt-24 pb-16 border-t border-gray-100'>
        <p className='text-sm tracking-[0.35em] uppercase text-gray-500 mb-4'>
          Our Story
        </p>
        <Title text1={'ABOUT'} text2={'US'} />
        <div className='mt-6 flex justify-center'>
          <div className='w-20 h-px bg-black/70'></div>
        </div>
        <p className='max-w-2xl mx-auto mt-10 text-gray-600 leading-relaxed tracking-wide text-lg'>
          A refined destination for timeless essentials, elevated design,
          and modern luxury crafted to inspire a slower, more intentional lifestyle.
        </p>
      </div> 

      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-24 flex flex-col md:flex-row gap-20 items-center'>
       <div className='w-full md:w-1/2 relative group'>
          <div className='absolute -inset-6 bg-emerald-900/5 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
          <div className='overflow-hidden rounded-3xl'>
            <img
              src={assets.About}
              alt='About'
              className='relative w-full rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] object-cover group-hover:scale-105 transition-all duration-700'
            />
          </div>
        </div>

        <div className='flex flex-col gap-8 md:w-1/2 text-gray-600 leading-relaxed'>
          <div>
            <p className='text-sm tracking-[0.35em] uppercase text-gray-500 mb-4'>
              Philosophy
            </p>
            <h2 className='text-4xl md:text-5xl font-light text-black leading-tight'>
              Designed with intention. Crafted for longevity.
            </h2>
          </div>
          <p className='text-base tracking-wide leading-8'>
            We believe true luxury lives in simplicity — in pieces that feel
            timeless, thoughtful, and effortlessly refined. Every collection is
            carefully curated to blend craftsmanship with modern elegance.
          </p>
          <p className='text-base tracking-wide leading-8'>
            Our approach centers on enduring quality, elevated essentials, and
            a seamless shopping experience that feels calm, personal, and
            sophisticated from beginning to end.
          </p>
          <div className='pt-4'>
            <b className='text-black text-xl tracking-wide'>
              Our Mission
            </b>
            <p className='mt-4 text-base tracking-wide leading-8'>
              To redefine modern retail through elevated essentials, intentional
              design, and meaningful experiences that inspire confidence,
              elegance, and everyday luxury.
            </p>
          </div>
        </div>
        </div>      
      <div
        className='h-[70vh] bg-cover bg-center relative flex items-center justify-center'
        style={{ backgroundImage: `url(${assets.Banner})` }}
      >
        <div className='absolute inset-0 bg-black/30'></div>
        <div className='relative text-center text-white px-6'>
          <p className='uppercase tracking-[0.4em] text-sm mb-6'>
            Timeless Luxury
          </p>
          <h2 className='text-5xl md:text-7xl font-light leading-tight'>
            Elevated essentials
            <br />
            for modern living
          </h2>
        </div>
      </div>      
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-28'>
        <div className='text-center mb-20'>
          <p className='uppercase tracking-[0.35em] text-sm text-gray-500 mb-4'>
            Our Signature
          </p>
          <h2 className='text-4xl md:text-5xl font-light'>
            What defines us
          </h2>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500'>
            <h3 className='text-2xl font-light text-black mb-6'>
              Uncompromising Quality
            </h3>
            <p className='text-gray-600 leading-8 tracking-wide'>
              Every detail is carefully considered to ensure exceptional
              craftsmanship, premium materials, and lasting durability.
            </p>
          </div>

          <div className='bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500'>

            <h3 className='text-2xl font-light text-black mb-6'>
              Effortless Experience
            </h3>

            <p className='text-gray-600 leading-8 tracking-wide'>
              From discovery to delivery, every interaction is designed to feel
              seamless, intuitive, and beautifully minimal.
            </p>
          </div>

          <div className='bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500'>

            <h3 className='text-2xl font-light text-black mb-6'>
              Dedicated Concierge
            </h3>

            <p className='text-gray-600 leading-8 tracking-wide'>
              Our support experience is personal, thoughtful, and always focused
              on delivering care with sophistication and warmth.
            </p>
          </div>

        </div>
      </div>      
      <div className='bg-[#f4f1eb] py-24'>
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center px-6'>
          <div>
            <h3 className='text-5xl font-light text-black'>10K+</h3>
            <p className='mt-4 text-xs tracking-[0.3em] uppercase text-gray-500'>
              Happy Clients
            </p>
          </div>
          <div>
            <h3 className='text-5xl font-light text-black'>48H</h3>
            <p className='mt-4 text-xs tracking-[0.3em] uppercase text-gray-500'>
              Express Delivery
            </p>
          </div>
          <div>
            <h3 className='text-5xl font-light text-black'>Premium</h3>
            <p className='mt-4 text-xs tracking-[0.3em] uppercase text-gray-500'>
              Materials
            </p>
          </div>
          <div>
            <h3 className='text-5xl font-light text-black'>24/7</h3>
           <p className='mt-4 text-xs tracking-[0.3em] uppercase text-gray-500'>
              Concierge Support
            </p>
          </div>
        </div>
      </div>     
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-28'>
        <div className='text-center mb-20'>
          <p className='uppercase tracking-[0.35em] text-sm text-gray-500 mb-4'>
            Our World
          </p>
          <h2 className='text-4xl md:text-5xl font-light'>
            Inspired by modern elegance
          </h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <img
            src={assets.Car4}
            alt=''
            className='rounded-3xl object-cover h-65 w-full hover:scale-[1.03] transition-all duration-700'
          />

          <img
            src={assets.YA1}
            alt=''
            className='rounded-3xl object-cover h-105 w-full hover:scale-[1.03] transition-all duration-700'
          />

          <img
            src={assets.HS5}
            alt=''
            className='rounded-3xl object-cover h-80 w-full hover:scale-[1.03] transition-all duration-700'
          />

          <img
            src={assets.CL9}
            alt=''
            className='rounded-3xl object-cover h-115 w-full hover:scale-[1.03] transition-all duration-700'
          />
        </div>
      </div>      
      <div className='py-32 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='text-3xl md:text-5xl font-light leading-relaxed text-black'>
            “An experience that feels refined from beginning to end —
            beautifully curated, effortlessly elegant.”
          </p>
          <span className='block mt-10 text-sm tracking-[0.35em] uppercase text-gray-500'>
            — Sarah Mitchell
          </span>
        </div>
      </div>      
      <div className='bg-white py-28'>
        <div className='max-w-5xl mx-auto text-center px-6'>
          <p className='uppercase tracking-[0.35em] text-sm text-gray-500 mb-4'>
            Sustainability
          </p>
          <h2 className='text-4xl md:text-5xl font-light leading-tight'>
            Thoughtful luxury with a conscious future
          </h2>
          <p className='mt-10 text-gray-600 leading-8 tracking-wide text-lg'>
            We embrace intentional production, responsible sourcing,
            and timeless design principles that encourage longevity over excess.
            Luxury should feel meaningful — not temporary.
          </p>
        </div>    
        </div>      
      <div className='relative py-32 overflow-hidden bg-[#0b0b0b] border-y border-white/10'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-white/3 blur-3xl rounded-full'></div>
           <div className='absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[28px_28px]'></div>
              <div className='relative text-center px-6'>
                  <p className='uppercase tracking-[0.45em] text-xs text-gray-500 mb-6'>
                   Featured In
                  </p>
                  <h2 className='text-4xl md:text-6xl font-light text-white leading-tight max-w-4xl mx-auto'>
                   Recognized by the world’s
                    <span className='italic text-emerald-500'> leading </span><span className='italic text-[#d6c6a5]'> voices </span>
                       in fashion & culture
                  </h2>
                 <div className='mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16'>
                   {['VOGUE', 'GQ', 'ELLE', 'HYPEBEAST'].map((item, index) => (
                     <div
                       key={index}
                      className='group relative px-10 py-6 rounded-2xl border border-white/10 bg-white/2 backdrop-blur-xl hover:bg-white/5 transition-all duration-500'
                      >         
                       <div className='absolute inset-0 rounded-2xl bg-linear-to-r from-[#d6c6a5]/0 via-[#d6c6a5]/10 to-[#d6c6a5]/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700'></div>
                        <span className='relative text-lg md:text-2xl tracking-[0.35em] text-gray-300 group-hover:text-white transition-all duration-500 font-light'>
                         {item}
                         </span>
                      </div>
                    ))}
                   </div>
                 </div>
                </div>     
            <div className='bg-white/50 backdrop-blur-md border-t border-gray-100 py-20'>
              <NewsLetter />
           </div>
          </div>
  )
}

export default About