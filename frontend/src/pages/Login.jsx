import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (

    <div className='min-h-screen bg-white flex items-center justify-center px-6 py-20'>
      <form
        onSubmit={onSubmitHandler}
        className='w-full max-w-md bg-white/70 backdrop-blur-md border border-white/40 rounded-4xl px-8 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
      >

        {/* TOP BADGE */}
        <div className='flex justify-center mb-8'>
          <div className='bg-black text-white text-[11px] tracking-[0.25em] uppercase px-5 py-2 rounded-full shadow-lg'>
            Luxury Access
          </div>
        </div>
        <div className='flex flex-col items-center mb-10'>

          <h1 className='prata-regular text-4xl text-gray-900 tracking-wide'>
            {currentState}
          </h1>
          <div className='w-16 h-px bg-black/70 mt-4'></div>

        </div>        
        {
          currentState !== 'Login' && (

            <input
              type='text'
              placeholder='Full Name'
              required
              className='w-full mb-4 border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
            />
          )
        }
        <input
          type='email'
          placeholder='Email Address'
          required
          className='w-full mb-4 border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
        />

        {/* PASSWORD */}
        <input
          type='password'
          placeholder='Password'
          required
          className='w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
        />

        {/* LINKS */}
        <div className='flex items-center justify-between mt-5 text-sm'>

          <p className='text-gray-500 hover:text-black cursor-pointer transition-colors duration-300'>
            Forgot Password?
          </p>

          {
            currentState === 'Login'

              ? (
                <p
                  onClick={() => setCurrentState('Sign Up')}
                  className='text-gray-700 hover:text-black cursor-pointer transition-colors duration-300 font-medium'
                >
                  Create Account
                </p>
              )

              : (
                <p
                  onClick={() => setCurrentState('Login')}
                  className='text-gray-700 hover:text-black cursor-pointer transition-colors duration-300 font-medium'
                >
                  Login Here
                </p>
              )
          }
        </div>
        <button
          className='w-full mt-8 bg-black text-white py-4 rounded-2xl uppercase tracking-[0.2em] text-sm hover:bg-gray-900 hover:scale-[1.01] transition-all duration-300 shadow-lg'
        >
          {currentState === 'Login' ? 'Sign In' : 'Create Account'}
        </button>        
        <p className='text-center text-sm text-emerald-500 mt-8 tracking-wide'>

          {currentState === 'Login'
            ? 'Welcome back to your premium shopping experience.'
            : 'Create your account and enjoy a refined shopping experience.'
          }

        </p>

      </form>

    </div>

  )
}

export default Login