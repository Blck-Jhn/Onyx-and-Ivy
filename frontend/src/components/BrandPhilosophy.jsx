import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets'; 

const BrandPhilosophy = () => {
  return (
    <section className="py-32 bg-[#080808] text-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                {/* Left */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-1">
            <span className="text-[10px] tracking-[0.6em] uppercase text-amber-200/50 font-light">The Sovereign Collection</span>
            <div className="h-px w-12 bg-zinc-800"></div>
          </div>

          <h2 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-10 tracking-tight text-white">
               Enduring <br /> 
             <span className="italic font-light text-zinc-500">Legacies.</span>
            </h2>

          <div className="space-y-6 max-w-lg mx-auto md:mx-0">
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              We operate at the intersection of form and utility. From the <span className="text-zinc-200">hand-stitched lapel</span> to the <span className="text-zinc-200">architectural foundation</span>, our philosophy remains unchanged:
            </p>
            <p className="text-xl text-zinc-200 font-serif italic border-l-0 md:border-l border-amber-200/30 md:pl-6 py-2">
              "True luxury is not the presence of excess, but the absolute absence of the unnecessary."
            </p>
          </div>

          <div className="mt-16 flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-serif text-amber-600">01</span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-zinc-600 mt-2">Apparel & Tech</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif">02</span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-zinc-600 mt-2">Automotive</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-emerald-600">03</span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-zinc-600 mt-2">Real Estate</span>
            </div>
          </div>
        </motion.div>
        {/* Right Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
          className="relative aspect-3/4 lg:aspect-4/5 group"
        >
          
          <div className="absolute inset-0 bg-amber-200/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="w-full h-full overflow-hidden border border-zinc-900">
            <img 
              src={assets.PB10} 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-3000 ease-out" 
              alt="Luxury Living Philosophy"
            />
          </div>          
          <div className="absolute -bottom-8 -left-8 bg-[#0c0c0c] border border-zinc-800 p-8 hidden md:block backdrop-blur-xl">
             <p className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase mb-2">VERSACE VOLUME</p>
             <p className="text-sm font-light tracking-widest text-zinc-200 uppercase leading-none">MMXXVI Series</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPhilosophy;