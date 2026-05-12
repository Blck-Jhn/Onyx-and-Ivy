import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContextProvider'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const {navigate} =useContext(ShopContext);

  return (
    <div className='border-t bg-[#faf9f7] min-h-screen'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-24 flex flex-col lg:flex-row gap-20'>

        {/* LEFT SIDE */}
        <div className='flex flex-col gap-6 w-full lg:w-1/2'>
          <div className='mb-4'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>

            <input
              type='text'
              placeholder='First Name'
              className='w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
            />
            <input
              type='text'
              placeholder='Last Name'
              className='w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
            />
          </div>
          <input
            type='email'
            placeholder='Email Address'
            className='w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
          />
          <input
            type='text'
            placeholder='Street Address'
            className='w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
          />
          <div className='flex flex-col sm:flex-row gap-4'>
            <input
              type='text'
              placeholder='City'
              className='w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
            />
            <input
              type='text'
              placeholder='State'
              className='w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <input
              type='text'
              placeholder='Zip Code'
              className='w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
            />
            <input
              type='text'
              placeholder='Country'
              className='w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
            />
          </div>
          <input
            type='tel'
            placeholder='Phone Number'
            className='w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
          />

        </div>

        {/* RIGHT SIDE */}
        <div className='w-full lg:w-1/2 flex flex-col'>
          {/* CART TOTAL */}
          <div className='w-full max-w-md bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]'>
            <CartTotal />
          </div>

          {/* PAYMENT METHOD */}
          <div className='mt-12 w-full max-w-md'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
            <div className='flex flex-col gap-4 mt-5'>              
              <div
                onClick={() => setMethod('stripe')}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 cursor-pointer transition-all duration-300 border
                  
                  ${method === 'stripe'
                    ? 'border-black bg-black/3 shadow-md'
                    : 'border-gray-200 hover:border-gray-400 hover:bg-white'}
                `}
              >
                <div className='flex items-center gap-4'>

                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center
                    ${method === 'stripe' ? 'border-black' : 'border-gray-400'}
                  `}>
                    <div className={`w-2 h-2 rounded-full
                      ${method === 'stripe' ? 'bg-black' : ''}
                    `}></div>
                  </div>
                  <img
                    src={assets.stripe_icon}
                    alt='Stripe'
                    className='h-5'
                  />
                </div>
              </div>             
              <div
                onClick={() => setMethod('razorpay')}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 cursor-pointer transition-all duration-300 border
                  
                  ${method === 'razorpay'
                    ? 'border-black bg-black/3 shadow-md'
                    : 'border-gray-200 hover:border-gray-400 hover:bg-white'}
                `}
              >
                <div className='flex items-center gap-4'>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center
                    ${method === 'razorpay' ? 'border-black' : 'border-gray-400'}
                  `}>
                    <div className={`w-2 h-2 rounded-full
                      ${method === 'razorpay' ? 'bg-black' : ''}
                    `}></div>
                  </div>
                  <img
                    src={assets.razorpay_logo}
                    alt='Razorpay'
                    className='h-5'
                  />
                  <p className='text-sm tracking-wide uppercase text-gray-700 font-medium'>
                    Razorpay
                  </p>
                </div>
              </div>              
              <div
                onClick={() => setMethod('paypal')}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 cursor-pointer transition-all duration-300 border
                  
                  ${method === 'paypal'
                    ? 'border-black bg-black/3 shadow-md'
                    : 'border-gray-200 hover:border-gray-400 hover:bg-white'}
                `}
              >
                <div className='flex items-center gap-4'>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center
                    ${method === 'paypal' ? 'border-black' : 'border-gray-400'}
                  `}>
                    <div className={`w-2 h-2 rounded-full
                      ${method === 'paypal' ? 'bg-black' : ''}
                    `}></div>
                  </div>
                  <img
                    src={assets.Paypal}
                    alt='Paypal'
                    className='h-5'
                  />
                  <p className='text-sm tracking-wide uppercase text-gray-700 font-medium'>
                    Paypal
                  </p>
                </div>
              </div>
              <div
                onClick={() => setMethod('cod')}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 cursor-pointer transition-all duration-300 border
                  
                  ${method === 'cod'
                    ? 'border-black bg-black/3 shadow-md'
                    : 'border-gray-200 hover:border-gray-400 hover:bg-white'}
                `}
              >
                <div className='flex items-center gap-4'>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center
                    ${method === 'cod' ? 'border-black' : 'border-gray-400'}
                  `}>
                    <div className={`w-2 h-2 rounded-full
                      ${method === 'cod' ? 'bg-black' : ''}
                    `}></div>
                  </div>
                  <p className='text-sm tracking-wide uppercase text-gray-700 font-medium'>
                    Cash On Delivery
                  </p>
                </div>
              </div>
            </div>

            <button
            onClick={() =>navigate ('/orders')}
              className='mt-8 w-full bg-black text-white py-4 rounded-2xl tracking-[0.2em] uppercase text-sm hover:bg-gray-900 hover:scale-[1.01] transition-all duration-300'
            >Complete Order
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PlaceOrder