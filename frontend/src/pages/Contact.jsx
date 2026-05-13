import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'
import { Link } from 'react-router-dom'

const Contact = () => {

  return (
    <div className='bg-[#faf9f7] text-[#111111] overflow-hidden'>    
      <div className='relative text-center pt-24 pb-20 border-t border-gray-100 overflow-hidden'>        
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-black/3 blur-3xl rounded-full'></div>
        <div className='relative'>
          <p className='uppercase tracking-[0.45em] text-xs text-gray-500 mb-4'>
            Concierge Service
          </p>
          <Title text1={'CONTACT'} text2={'US'} />
          <div className='mt-6 flex justify-center'>
            <div className='w-20 h-px bg-black/70'></div>
          </div>
          <p className='mt-8 text-gray-500 text-lg tracking-wide max-w-2xl mx-auto leading-relaxed px-6'>
            A dedicated luxury experience designed to provide seamless
            assistance, personalized care, and meaningful connection.
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-28 flex flex-col lg:flex-row gap-20 items-center'>
        
        <div className='w-full lg:w-1/2 relative group'>
          <div className='absolute -inset-6 bg-black/5 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
          <div className='overflow-hidden rounded-3xl'>
            <img
              src={assets.ContactImg}
              alt='Contact'
              className='relative w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] object-cover group-hover:scale-105 transition-all duration-700'
            />
          </div>
        </div>

        {/* CONTENT */}
       <div className='w-full lg:w-1/2 flex flex-col gap-12'>       
          <div className='bg-white/70 backdrop-blur-md border border-white/40 rounded-4xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]'>
            <p className='uppercase tracking-[0.35em] text-xs text-gray-500 mb-4'>
              Our Flagship
            </p>
            <h2 className='text-4xl font-light leading-tight'>
              Visit our luxury retail space
            </h2>

            <p className='mt-6 text-gray-500 leading-8 tracking-wide'>
              An immersive retail experience designed around elegance,
              craftsmanship, and intentional living.
            </p>

            <div className='mt-10 space-y-6 text-gray-500 leading-relaxed tracking-wide'>

              <p>
                5467 Adeshina Station <br />
                Suite 400, Ikoyi Glover
              </p>

              <p>
                Monday — Saturday <br />
                9:00AM — 8:00PM
              </p>

              <p>
                Tel: (415) 798-8724 <br />
                Email: admin@onyxandivy.com
              </p>

            </div>

          </div>

          {/* CAREERS */}
          <div className='relative overflow-hidden bg-[#111111] rounded-4xl p-10 text-white'>
            <div className='absolute top-0 right-0 w-40 h-40 bg-[#d6c6a5]/20 blur-3xl rounded-full'></div>
            <div className='relative'>
              <p className='uppercase tracking-[0.35em] text-xs text-gray-500 mb-4'>
                Careers
              </p>
              <h2 className='text-4xl font-light leading-tight'>
                Shape the future of modern luxury
              </h2>
              <p className='mt-6 text-gray-400 leading-8 tracking-wide'>
                Join a team dedicated to craftsmanship, elevated experiences,
                and timeless design built around detail and refinement.
              </p>
              <Link to='/jobs'>
                <button className='group mt-10 relative overflow-hidden border border-white/20 px-10 py-5 rounded-full text-sm tracking-[0.3em] uppercase hover:border-white transition-all duration-500'>
                  <div className='absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-all duration-500'></div>

                  <span className='relative group-hover:text-black transition-all duration-500'>
                    Explore Careers
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

     
      <div className='max-w-6xl mx-auto px-6 py-10'>
        <div className='bg-[#f4f1eb] rounded-[40px] p-14 md:p-20 text-center'>

          <p className='uppercase tracking-[0.35em] text-xs text-gray-500 mb-4'>
            Private Client Services
          </p>
          <h2 className='text-4xl md:text-6xl font-light leading-tight'>
            Personalized assistance,
            tailored to you.
          </h2>
          <p className='mt-10 text-gray-600 max-w-3xl mx-auto leading-8 tracking-wide text-lg'>
            Our concierge team offers curated recommendations, order
            assistance, styling guidance, and seamless support designed
            around your lifestyle.
          </p>
        </div>
      </div>
      
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-28'>

        <div className='text-center mb-20'>
          <p className='uppercase tracking-[0.35em] text-xs text-gray-500 mb-4'>
            Signature Services
          </p>
          <h2 className='text-4xl md:text-5xl font-light'>
            Elevated experiences at every step
          </h2>
        </div>

        <div className='grid md:grid-cols-4 gap-6'>
          {[
            'White Glove Delivery',
            'Personal Styling',
            'Priority Support',
            'Curated Recommendations'
          ].map((item, index) => (
            <div
              key={index}
              className='bg-white border border-gray-100 rounded-[28px] p-10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500'
            >
              <h3 className='text-2xl font-light leading-snug'>
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
      
      <div
        className='relative h-[75vh] bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: `url(${assets.Banner2})` }}
      >
      <div className='absolute inset-0 bg-black/35'></div>
        <div className='relative text-center text-white px-6'>
          <p className='uppercase tracking-[0.45em] text-xs mb-6 text-gray-300'>
            Elevated Experiences
          </p>
          <h2 className='text-5xl md:text-7xl font-light leading-tight'>
            Crafted for those
            <br />
            who appreciate refinement.
          </h2>
        </div>
      </div>
      
      <div className='py-32 text-center max-w-5xl mx-auto px-6'>
        <p className='text-4xl md:text-6xl font-light leading-tight text-black'>
          “Luxury is not excess —
          it is intention, detail,
          and timeless refinement.”
        </p>
      </div>
   
      <div className='bg-[#111111] text-white py-32 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='uppercase tracking-[0.35em] text-xs text-gray-500 mb-6'>
            Private Consultation
          </p>
          <h2 className='text-5xl md:text-7xl font-light leading-tight'>
            Book a private
            shopping experience
          </h2>
          <p className='mt-10 text-gray-400 max-w-2xl mx-auto leading-8 tracking-wide text-lg'>
            Connect with our specialists for curated recommendations,
            personalized guidance, and a luxury experience designed around you.
          </p>
          <Link to='/login'>
           <button className='group relative overflow-hidden mt-14 border border-white/20 px-12 py-5 rounded-full text-sm tracking-[0.3em] uppercase hover:border-white transition-all duration-500'>
              <div className='absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-all duration-500'></div>
              <span className='relative group-hover:text-black transition-all duration-500'>
              Schedule Appointment
            </span>
            </button>
          </Link>        
        </div>
      </div>
      
      <div className='border-y border-gray-100 bg-white'>
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 py-24 px-6 text-center'>
          <div>
            <h3 className='text-5xl font-light'>Worldwide</h3>
            <p className='mt-4 uppercase tracking-[0.3em] text-xs text-gray-500'>
              Shipping
            </p>
          </div>

          <div>
            <h3 className='text-5xl font-light'>24/7</h3>
            <p className='mt-4 uppercase tracking-[0.3em] text-xs text-gray-500'>
              Concierge
            </p>     
            </div>
          <div>
            <h3 className='text-5xl font-light'>Premium</h3>
            <p className='mt-4 uppercase tracking-[0.3em] text-xs text-gray-500'>
              Packaging
            </p>
          </div>
          <div>
            <h3 className='text-5xl font-light'>Private</h3>
            <p className='mt-4 uppercase tracking-[0.3em] text-xs text-gray-500'>
              Client Services
            </p>
          </div>
        </div>

      </div>      
      <div className='py-32 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='text-3xl md:text-5xl font-light leading-relaxed text-black'>
            “Exceptional service and an experience that feels truly personal.”
          </p>
          <span className='mt-8 block tracking-[0.35em] text-xs uppercase text-gray-500'>
            — Private Client
          </span>
        </div>
      </div> 

      <div className='max-w-7xl mx-auto px-6 lg:px-10 pb-28'>
        <div className='text-center mb-20'>
          <p className='uppercase tracking-[0.35em] text-xs text-gray-500 mb-4'>
            Our World
          </p>
          <h2 className='text-4xl md:text-5xl font-light leading-tight'>
            Inspired by modern architecture,
            timeless tailoring, and intentional living.
          </h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {[assets.WA7, assets.Jw13, assets.Car5, assets.PB10].map((img, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-[30px] group'
            >
              <img
                src={img}
                alt=''
                className='w-full h-87.5 object-cover group-hover:scale-105 transition-all duration-700'
              />
            </div>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className='bg-white/60 backdrop-blur-md border-t border-gray-100 py-20'>
        <NewsLetter />

      </div>

    </div>

  )
}

export default Contact