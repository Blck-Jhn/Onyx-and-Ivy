import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Delivery', path: '#' },
    { name: 'Privacy Policy', path: '#' }
  ];

  return (
    <footer className="relative bg-[#0c0c0c] text-stone-300 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-16 py-24 md:py-32">       
        
        <div className="flex flex-col gap-8">
          <Link to='/'>
            <img 
              src={assets.logo}               
              className="w-48 md:w-56 transition-all duration-700 hover:opacity-70" 
              alt="Onyx & Ivy Logo" 
            />
          </Link>
          <p className="max-w-xs text-stone-500 leading-relaxed font-light tracking-wide text-[14px]">
            Defining the pinnacle of modern luxury. Our commitment to craft ensures every piece from <span className="text-white font-normal">Onyx & Ivy</span> tells a story of timeless heritage.
          </p>
        </div>        

        {/* Links Section */}
        <div className="flex flex-col">
          <p className="text-[10px] font-bold mb-8 tracking-[0.4em] text-white uppercase opacity-50">
            The Heritage
          </p>
          <ul className="flex flex-col gap-4 text-stone-400 font-light text-[13px]">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className="hover:text-white transition-all duration-500 block w-fit hover:translate-x-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>       

        {/* Contact Section */}
        <div className="flex flex-col">
          <p className="text-[10px] font-bold mb-8 tracking-[0.4em] text-white uppercase opacity-50">
            Concierge
          </p>
          <ul className="flex flex-col gap-6 text-stone-400 font-light text-[13px]">
            <li>
              <a href="tel:+4446844756345" className="hover:text-white transition-colors duration-300 tracking-widest block font-medium">
                +444 684 4756 345
              </a>
            </li>
            <li>
              <a href="mailto:contact@onyxandivy.com" className="hover:text-white transition-colors duration-300 italic border-b border-white/10 w-fit pb-1 block">
                contact@onyxandivy.com
              </a>
            </li>
          </ul>
        </div>
      </div>    

      {/* Copyright Bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="py-12 text-[9px] text-center md:text-left text-stone-600 uppercase tracking-[0.6em] font-light">
            &copy; 2026 <span className="text-stone-400">Onyx & Ivy</span> — Exceptional Living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;