import React from 'react'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'
import { assets } from '../assets/assets'

const JobPortal = () => {

  return (

    <div className='bg-[#faf9f7] text-[#111111] overflow-hidden'>     
      <div className='relative text-center pt-28 pb-20 border-t border-gray-100 overflow-hidden'>      
       <div className='absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-black/3 blur-[120px] rounded-full'></div>

        <div className='relative z-10 px-6'>
          <p className='uppercase tracking-[0.45em] text-xs text-gray-500 mb-5'>
            Careers at Onyx & Ivy
          </p>
          <Title text1={'BUILD THE'} text2={'FUTURE OF LUXURY'} />

          <div className='mt-8 flex justify-center'>
            <div className='w-24 h-px bg-black/70'></div>
          </div>
          <p className='mt-10 text-gray-500 text-lg tracking-wide max-w-3xl mx-auto leading-relaxed'>
            Join a collective of designers, engineers, creatives, and innovators
            crafting elevated digital experiences for a global luxury audience.
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-20 items-center'>
        {/* LEFT CONTENT */}
        <div className='flex flex-col gap-10'>
          <div>
            <p className='uppercase tracking-[0.35em] text-xs text-gray-500 mb-5'>
              Our Philosophy
            </p>
            <h2 className='text-4xl md:text-6xl font-light leading-tight'>
              Build something
              <span className='italic'> timeless </span>
              in modern luxury.
            </h2>
          </div>
          <div className='w-20 h-px bg-black/20'></div>
          <p className='text-gray-600 leading-8 tracking-wide text-lg'>
            We are building more than an ecommerce platform —
            we are creating an immersive luxury ecosystem where every
            interaction feels intentional, elevated, and refined.
          </p>
          <p className='text-gray-600 leading-8 tracking-wide text-lg'>
            If you are passionate about premium experiences, elegant systems,
            and modern design culture, you will thrive here.
          </p>
          <button className='group relative overflow-hidden self-start mt-4 border border-black px-12 py-5 rounded-full text-sm tracking-[0.35em] uppercase transition-all duration-500 hover:border-black hover:scale-[1.02]'>
            <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-all duration-500'></div>
            <span className='relative group-hover:text-white transition-all duration-500'>
              View Open Roles
            </span>
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className='relative'>
          <div className='absolute -inset-10 bg-black/3 blur-3xl rounded-[40px]'></div>
          <div className='relative bg-white/70 backdrop-blur-md border border-white/40 rounded-[40px] p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)]'>
            <p className='uppercase tracking-[0.35em] text-xs text-gray-500 mb-10'>
              Why Join Us
            </p>
            <div className='space-y-8'>
              {[
                "Build premium experiences used globally",
                "Collaborate with elite creatives & engineers",
                "Work on cutting-edge luxury commerce systems",
                "Competitive growth & flexibility",
                "Culture rooted in craftsmanship & innovation"
              ].map((item, i) => (
                <div
                  key={i}
                  className='flex items-start gap-5'
                >
                  <div className='w-2 h-2 mt-3 bg-black rounded-full'></div>
                  <p className='text-gray-600 text-lg leading-relaxed tracking-wide'>
                    {item}
                  </p>
                </div>
             ))}
            </div>
          </div>
        </div>
      </div>
      
      <div
        className='relative h-[75vh] bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: `url(${assets.Banner3})` }}
      >
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='relative text-center px-6'>
          <p className='uppercase tracking-[0.45em] text-xs text-gray-300 mb-6'>
            The Onyx & Ivy Culture
          </p>
          <h2 className='text-5xl md:text-7xl font-light text-white leading-tight max-w-5xl'>
            Designed for creators
            who appreciate excellence.
          </h2>
        </div>
      </div>
      
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-28'>
        <div className='text-center mb-24'>
          <p className='uppercase tracking-[0.35em] text-xs text-gray-500 mb-5'>
            Our Environment
          </p>
          <h2 className='text-4xl md:text-5xl font-light leading-tight'>
            A workplace shaped by
            innovation and refinement.
          </h2>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {[
            {
              title: "Design Excellence",
              desc: "Crafting immersive luxury interfaces with meticulous attention to detail."
            },
            {
              title: "Global Impact",
              desc: "Building experiences enjoyed by customers and creatives worldwide."
            },
            {
              title: "Innovation First",
              desc: "Leveraging modern systems, scalable technologies, and refined thinking."
            }
          ].map((item, i) => (
            <div
              key={i}
              className='group bg-white/70 backdrop-blur-md border border-white/40 rounded-4xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500'
            >
              <h3 className='text-3xl font-light text-black leading-snug'>
                {item.title}
              </h3>
              <p className='mt-6 text-gray-600 leading-8 tracking-wide'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className='bg-[#111111] text-white py-32 px-6'>

        <div className='max-w-5xl mx-auto text-center'>

          <p className='text-4xl md:text-6xl font-light leading-tight'>
            “Luxury is built through
            precision, intention,
            and extraordinary people.”
          </p>
        </div>
      </div>

     
      <div className='bg-[#f4f1eb] py-24'>
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center px-6'>
          <div>
            <h3 className='text-5xl font-light text-black'>
              Global
            </h3>
            <p className='mt-4 uppercase tracking-[0.3em] text-xs text-gray-500'>
              Opportunities
            </p>
          </div>
          <div>
            <h3 className='text-5xl font-light text-black'>
              Remote
            </h3>
            <p className='mt-4 uppercase tracking-[0.3em] text-xs text-gray-500'>
              Flexibility
            </p>
          </div>
          <div>
            <h3 className='text-5xl font-light text-black'>
              Elite
            </h3>
            <p className='mt-4 uppercase tracking-[0.3em] text-xs text-gray-500'>
              Collaboration
            </p>
          </div>

          <div>
            <h3 className='text-5xl font-light text-black'>
              Premium
            </h3>
            <p className='mt-4 uppercase tracking-[0.3em] text-xs text-gray-500'>
              Culture
            </p>
          </div>
        </div>
      </div>

      <div className='relative py-32 overflow-hidden'>        
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-112.5 h-112.5 bg-black/3 blur-[100px] rounded-full'></div>
        <div className='relative max-w-4xl mx-auto text-center px-6'>
          <p className='uppercase tracking-[0.35em] text-xs text-gray-500 mb-6'>
            Applications Opening Soon
          </p>
          <h2 className='text-5xl md:text-7xl font-light leading-tight text-black'>
            The next chapter
            begins with you.
          </h2>
          <p className='mt-10 text-gray-500 max-w-2xl mx-auto leading-8 tracking-wide text-lg'>
            New curated opportunities across design, engineering,
            marketing, product, and creative strategy will be announced shortly.
          </p>
          <button className='group relative overflow-hidden mt-14 border border-black px-12 py-5 rounded-full text-sm tracking-[0.35em] uppercase transition-all duration-500 hover:scale-[1.02]'>
            <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-all duration-500'></div>
            <span className='relative group-hover:text-white transition-all duration-500'>
              Join Waiting List
            </span>
          </button>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className='bg-white/60 backdrop-blur-md border-t border-gray-100 py-20'>
        <NewsLetter />
      </div>
    </div>
  )
}

export default JobPortal