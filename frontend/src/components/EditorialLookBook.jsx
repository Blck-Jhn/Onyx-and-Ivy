/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const EditorialLookbook = () => {
  const scenes = [
    { id: '01', title: 'The Tailored Silhouette', category: 'Apparel', img: assets.CL3 },
    { id: '02', title: 'Architectural Gravity', category: 'Estates', img: assets.HS5 },
    { id: '03', title: 'Kinetic Engineering', category: 'Automotive', img: assets.Car4 },
    { id: '04', title: 'Olfactory Geometry.', category: 'Fragrance', img: assets.PB7 },
    { id: '05', title: 'The Singular Point.', category: 'Accessories', img: assets.Jw13 },
  ];
 
  const duplicatedScenes = [...scenes, ...scenes];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="flex flex-col items-start mb-24 px-10 md:px-20">
  <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-300 mb-4">Pillar Of</span>
  <h2 className="text-7xl md:text-9xl font-serif text-zinc-950 tracking-tighter leading-[0.8]">
    Aesthetics <br />
    <span className="text-zinc-300 italic font-extralight hover:text-emerald-500/30">& Assets.</span>
  </h2>
</div>  
            {/* Infinity Scrolling */}      
      <div className="flex overflow-hidden group">
        <motion.div 
          className="flex gap-6 md:gap-12 px-6 md:px-10 pb-20"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            ease: "linear",
            duration: 20, 
            repeat: Infinity,
          }}          
          whileHover={{ animationPlayState: 'paused' }} 
        >
          {duplicatedScenes.map((scene, i) => (
            <div 
              key={`${scene.id}-${i}`}
              className="min-w-[85vw] md:min-w-125 lg:min-w-162.5 aspect-4/5 md:aspect-2/3 bg-zinc-100 relative group/item overflow-hidden cursor-none"
            >            
              <img 
                src={scene.img} 
                className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 group-hover/item:scale-105 transition-all duration-[1.5s] ease-out" 
                alt={scene.title}
              />          
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-700" />
                          
              <div className="absolute top-8 left-8 overflow-hidden">
                 <p className="text-[9px] tracking-[0.4em] text-white uppercase translate-y-10 group-hover/item:translate-y-0 transition-transform duration-700 font-light">
                   Sector: {scene.category}
                 </p>
              </div>

              <div className="absolute bottom-10 left-10 text-white translate-y-4 group-hover/item:translate-y-0 transition-transform duration-700">
                <p className="text-[10px] tracking-[0.3em] uppercase mb-3 opacity-60">
                  Scene {scene.id}
                </p>
                <h3 className="text-2xl md:text-3xl font-serif italic tracking-wide">
                  {scene.title}
                </h3>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="px-6 py-3 border border-white/30 backdrop-blur-md text-white text-[9px] tracking-[0.4em] uppercase opacity-0 group-hover/item:opacity-100 transition-opacity duration-700">
                      Explore
                  </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center text-zinc-400 opacity-60">
            <div className="h-px w-24 bg-zinc-200"></div>
            <p className="text-[8px] tracking-[0.6em] uppercase">Private Inventory Transmission</p>
            <div className="h-px w-24 bg-zinc-200"></div>
        </div>
    </section>
  );
};

export default EditorialLookbook;