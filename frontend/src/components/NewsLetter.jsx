import React from 'react';
import { motion } from 'framer-motion';

const NewsLetter = () => {
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    
  };

  return (
    <section className='py-32 px-6 bg-[#fafafa]'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className='max-w-4xl mx-auto text-center'
      >        
        <span className='text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-6 block'>
          The Inner Circle
        </span>
        <h2 className='text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6'>
          Subscribe to our <span className='italic font-medium text-red-800'>Exclusive</span> newsletter
        </h2>       
        <p className='text-gray-500 font-light text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed italic'>
          Gain early access to seasonal collections, private exhibitions, and an effortless 20% off your debut purchase.
        </p>       
        <form 
          onSubmit={onSubmitHandler} 
          className='relative w-full max-w-md mx-auto group'
        >
          <div className='flex items-center border-b border-gray-300 group-focus-within:border-black transition-colors duration-500 pb-2'>
            <input 
              className='w-full bg-transparent outline-none text-sm md:text-base py-2 placeholder:text--300 placeholder:italic font-light' 
              type="email" 
              placeholder='Enter your email address'
              required
            />
            
            <button 
              type='submit' 
              className='text-[10px] md:text-xs tracking-[0.3em] font-semibold uppercase hover:text-gray-400 transition-all duration-300 ml-4'
            >
              Join
            </button>
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 1 }}
            className='h-px bg-black/10 absolute bottom-0 left-0 -z-10'
          />
        </form>
        <p className='mt-8 text-[10px] text-gray-400 uppercase tracking-widest'>
          Privacy is our priority.
        </p>
      </motion.div>
    </section>
  );
};

export default NewsLetter;