/* eslint-disable no-unused-vars */
import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Policy = () => {
  // Animation settings for the staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } // Custom cubic-bezier for smooth motion
    }
  };

  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange",
      description: "Seamless exchanges designed for your convenience.",
    },
    {
      icon: assets.quality_icon, 
      title: "7 Days Return",
      description: "Complimentary returns within seven days of purchase.",
    },
    {
      icon: assets.support_icon,
      title: "Premium Support",
      description: "Dedicated assistance for an elevated shopping journey.",
    }
  ];

  return (
    <section className='bg-white py-28 px-6'>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-4 text-center'
      >
        {policies.map((policy, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants} 
            className='group flex flex-col items-center'
          >
            {/* Icon Container with soft halo effect */}
            <div className='relative mb-10'>
              <div className='absolute inset-0 bg-gray-50 scale-100 group-hover:scale-[1.8] rounded-full transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100 blur-2xl'></div>
              
              <img 
                src={policy.icon} 
                className='w-10 md:w-11 relative z-10 opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-y-3' 
                alt={policy.title} 
              />
            </div>           
           
            <h3 className='text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-gray-900 mb-4'>
              {policy.title}
            </h3>
            
            <p className='text-[13px] md:text-sm font-light text-gray-400 max-w-55 leading-relaxed tracking-wide italic'>
              {policy.description}
            </p>        
           
            <div className='h-px bg-linear-to-r from-transparent via-gray-300 to-transparent w-12 mt-8 group-hover:w-24 transition-all duration-1000 ease-in-out'></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Policy;