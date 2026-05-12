import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'
import Title from '../components/Title'


// This is just a demo Order Page, Once payment has been made , this is how it would look like

const Orders = () => {
  const { products, currency } = useContext(ShopContext)
  return (
    <div className='border-t bg-[#faf9f7] min-h-screen'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-20'>
        <div className='mb-10 flex justify-center lg:justify-start'>
          <div className='bg-black text-white text-[11px] tracking-[0.25em] uppercase px-5 py-2 rounded-full shadow-lg'>
            Demo Order Preview
           </div>
        </div> 

        <div className='mb-12'>
          <Title text1={'MY'} text2={'ORDERS'} />
        </div>       
        <div className='flex flex-col gap-6'>
          {
            products.slice(1, 4).map((item, index) => (
              <div
                key={index}
                className='bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1'
              >
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>
                   <div className='flex items-start gap-5'>
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className='w-24 h-24 object-cover rounded-2xl border border-white/40 shadow-sm'
                    />
                    <div>
                      <p className='text-lg font-medium tracking-wide text-gray-900'>
                        {item.name}
                      </p>
                      <div className='flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500 tracking-wide uppercase'>
                        <p className='text-base text-black font-medium'>
                          {currency}{item.price}
                        </p>
                        <p>
                          Quantity: 1
                        </p>
                        <p>
                          Size: M
                        </p>
                      </div>
                      <p className='mt-3 text-sm text-gray-500 tracking-wide'>
                        Date:
                        <span className='ml-2 text-gray-800 font-medium'>
                          12 May, 2026
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className='flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between lg:min-w-70'>
                      <div className='flex items-center gap-3'>
                      <div className='w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.35)]'></div>
                      <p className='text-sm uppercase tracking-[0.15em] text-gray-700 font-medium'>
                        Preparing Shipment
                      </p>
                    </div>

                    {/* BUTTON */}
                    <button
                      className='border border-black text-black px-6 py-3 rounded-2xl text-sm uppercase tracking-[0.15em] font-medium hover:bg-black hover:text-white transition-all duration-300 hover:scale-[1.02]'
                    >Track Order
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Orders