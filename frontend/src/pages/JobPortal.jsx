import React from 'react'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'

const JobPortal = () => {

  return (
    <div className='bg-[#faf9f7]'>     
      <div className='relative text-center pt-28 pb-20 border-t border-gray-100 overflow-hidden'>
      
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-emerald-900/5 blur-[120px] rounded-full'></div>
        <Title text1={'CAREERS'} text2={'AT ONYX & IVY'} />
        <div className='mt-6 flex justify-center'>
          <div className='w-20 h-px bg-black/70'></div>
        </div>
        <p className='mt-6 text-gray-500 text-sm tracking-wide max-w-2xl mx-auto leading-relaxed'>
          Join a team shaping the future of luxury commerce — where design, technology, and craftsmanship converge into one refined experience.
        </p>
      </div>
      
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-20 items-center'>
     
        <div className='flex flex-col gap-8'>
          <h2 className='text-3xl md:text-4xl font-light leading-snug tracking-wide text-black'>
            Build something <span className='font-medium'>timeless</span> in luxury commerce.
          </h2>
          <div className='w-16 h-px bg-black/60'></div>

          <p className='text-gray-500 leading-relaxed text-sm md:text-base'>
            We’re not just building a store — we’re building a digital luxury ecosystem. Every interaction is intentional, every detail matters.
          </p>
          <p className='text-gray-500 leading-relaxed text-sm md:text-base'>
            If you’re passionate about elegant design, scalable systems, and premium user experiences, you’ll thrive here.
          </p>
          <button className='self-start mt-2 border border-black px-10 py-4 rounded-2xl text-sm tracking-[0.25em] uppercase hover:bg-black hover:text-white transition-all duration-300 hover:scale-[1.02]'>
            View Open Roles
          </button>
        </div>

        <div className='relative'>          
          <div className='absolute -inset-10 bg-emerald-900/5 blur-3xl rounded-3xl'></div>
          <div className='relative bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]'>
            <h3 className='text-sm tracking-[0.3em] uppercase text-black font-medium mb-8'>
              Why Work With Us
            </h3>
            <div className='space-y-6'>
              {[
                "Work on a global luxury ecommerce platform",
                "Build premium experiences used worldwide",
                "Collaborate with elite designers & engineers",
                "Competitive growth & compensation"
              ].map((item, i) => (
                <div key={i} className='flex items-start gap-3'>
                  <div className='w-2 h-2 mt-2 bg-black rounded-full'></div>
                  <p className='text-gray-500 text-sm leading-relaxed'>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className='max-w-6xl mx-auto px-6 mb-24'>

        <div className='grid md:grid-cols-3 gap-6'>

          {[
            { title: "Design Excellence", desc: "Pixel-perfect luxury interfaces" },
            { title: "Global Impact", desc: "Used by customers worldwide" },
            { title: "Innovation First", desc: "Modern tech & systems" }
          ].map((item, i) => (
            <div key={i} className='bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300'>

              <h4 className='text-black font-medium tracking-wide mb-2'>
                {item.title}
              </h4>
              <p className='text-gray-500 text-sm'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* COMING SOON */}
      <div className='text-center pb-24'>
        <div className='inline-flex bg-black text-white px-6 py-3 rounded-full text-[11px] tracking-[0.25em] uppercase mb-6 hover:bg-green-900 hover:text-white'>
          Applications Opening Soon
        </div>
        <p className='text-gray-500 text-sm max-w-xl mx-auto leading-relaxed'>
          New curated roles across design, engineering, marketing, and product will be announced shortly.
        </p>
      </div>      
      <div className='bg-white/60 backdrop-blur-md border-t border-gray-100 py-16'>
        <NewsLetter />
      </div>

    </div>

  )
}

export default JobPortal