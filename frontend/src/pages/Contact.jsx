import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'
import { Link } from 'react-router-dom'

const Contact = () => {

  return (

    <div className='bg-[#faf9f7]'>      
      <div className='text-center pt-20 border-t border-gray-100'>

        <Title text1={'CONTACT'} text2={'US'} />

        <div className='mt-6 flex justify-center'>
          <div className='w-16 h-[1px] bg-black/70'></div>
        </div>

        <p className='mt-6 text-gray-500 text-sm tracking-wide'>
          We’re here to assist you with anything you need
        </p>

      </div>
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-24 flex flex-col lg:flex-row gap-16 items-center'>
        <div className='w-full lg:w-1/2 relative group'>
          <div className='absolute -inset-6 bg-emerald-900/5 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
          <img
            src={assets.ContactImg}
            alt='Contact'
            className='relative w-full rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] object-cover'
          />
        </div>        
        <div className='w-full lg:w-1/2 flex flex-col gap-10'>          
          <div className='flex flex-col gap-3'>
            <h2 className='text-lg tracking-[0.2em] uppercase text-black font-medium'>
              Our Store
            </h2>
            <p className='text-gray-500 leading-relaxed'>
              5467 Adeshina Station <br />
              Suite 400, Ikoyi Glover
            </p>
            <p className='text-gray-500 leading-relaxed'>
              Tel: (415) 798-8724 <br />
              Email: admin@onyxandivy.com
            </p>
          </div>

          {/* CAREERS */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-lg tracking-[0.2em] uppercase text-black font-medium'>
              Careers
            </h2>
            <p className='text-gray-500 leading-relaxed'>
              Join a team dedicated to redefining luxury retail through craftsmanship, innovation, and timeless design.
            </p>
            <Link to='/jobs'>            
              <button className='self-start border border-black px-8 py-4 rounded-2xl text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 hover:scale-[1.02]'>
                  Explore Jobs
              </button>
            </Link>
          </div>

        </div>

      </div>

      {/* NEWSLETTER */}
      <div className='bg-white/60 backdrop-blur-md border-t border-gray-100 py-16'>

        <NewsLetter />

      </div>

    </div>

  )
}

export default Contact