import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Spotlight = () => {
  const categories = [
    { 
      title: "The Fleet", 
      subtitle: "Yachts & Supercars", 
      size: "md:col-span-2 md:row-span-2", 
      img: "YA1" 
    },
    { 
      title: "Horology", 
      subtitle: "Timeless Precision", 
      size: "col-span-1", 
      img: "WA7" 
    },
    { 
      title: "Adornments", 
      subtitle: "High Jewellery", 
      size: "col-span-1", 
      img: "Jw5" 
    },
  ];

  return (
    <section className="py-24 px-4 md:px-16 bg-white">      
      <div className="mb-16 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-2">Curated Collections</p>
        <h2 className="text-3xl font-serif italic text-gray-900">The Modern Atelier</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-[150vh] md:h-[80vh]">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial="initial"
            whileHover="hover"
            className={`relative overflow-hidden group cursor-pointer ${cat.size} bg-zinc-100 shadow-sm`}
          >
            <motion.img
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
              src={assets[cat.img]} 
              className="w-full h-full object-cover transition-all duration-2000"
              alt={cat.title}
            />            
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
            <div className="absolute bottom-10 left-10 right-10 text-white z-10">
              <motion.p 
                variants={{ initial: { opacity: 0.6 }, hover: { opacity: 1 } }}
                className="text-[10px] tracking-[0.4em] uppercase mb-3 font-light"
              >
                {cat.subtitle}
              </motion.p>
              
              <h3 className="text-3xl md:text-5xl font-serif italic tracking-tighter">
                {cat.title}
              </h3>

              <motion.div 
                variants={{ initial: { width: 0 }, hover: { width: '60px' } }}
                transition={{ duration: 0.8 }}
                className="h-px bg-white mt-6" 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Spotlight;