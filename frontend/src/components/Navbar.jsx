import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import {ShopContext} from '../context/ShopContextProvider';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch} =useContext(ShopContext);
    
    return (
        <div className='flex items-center justify-between py-8 font-medium px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-white/10 backdrop-blur-md z-50 '>
            <div className='relative group shrink-0'>
                {/* Logo */}
                <div className='absolute -inset-4 bg-emerald-900/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>          
                <Link to='/'>
                    <img 
                        src={assets.logo} 
                        className='w-55 sm:w-40 md:w-44 lg:w-52 relative drop-shadow-sm transition-all object-contain' 
                        alt='Branding Logo'
                    />
                </Link>
            </div>
            {/* DESKTOP NAVIGATION */}
            <ul className='hidden sm:flex md:gap-6 lg:gap-8 gap-4 text-[11px] md:text-xs lg:text-sm text-gray-600 tracking-[1.5px] lg:tracking-[2.5px]'>
                {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item) => (
                    <NavLink 
                        key={item} 
                        to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`} 
                        className="flex flex-col items-center gap-1 group"
                    >
                        <p className='group-hover:text-black transition-colors'>{item}</p>
                        <hr className='w-full border-none h-px bg-emerald-700 opacity-0 group-[.active]:opacity-100 transition-opacity' />
                    </NavLink>
                ))}
            </ul>
            <div className='flex items-center gap-6'>
                <img onClick={() =>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer hover:scale-110 transition-transform' alt='Search' />
                
                <div className='group relative'>
                    <img src={assets.profile_icon} alt="Profile" className='w-5 cursor-pointer' />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
                        <div className='flex flex-col gap-3 w-40 py-4 px-5 bg-white border border-gray-100 text-gray-600 rounded-lg shadow-2xl'>
                            <p className='cursor-pointer hover:text-emerald-600 transition'>My Profile</p>
                            <p className='cursor-pointer hover:text-emerald-600 transition'>Orders</p>
                            <p className='cursor-pointer hover:text-emerald-600 transition font-semibold text-red-500'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative group'>
                    <img src={assets.cart_icon} alt="Cart" className='w-5 transition-transform group-hover:-rotate-12' />
                    <p className='absolute -right-2 -bottom-2 w-4 bg-emerald-600 text-white aspect-square rounded-full text-[8px] flex items-center justify-center shadow-md'>
                        5
                    </p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="Menu" className='w-5 cursor-pointer sm:hidden hover:opacity-60' />
            </div>

           {/* SIDEBAR FOR MOBILE */}
            <div className={`fixed top-0 right-0 h-screen bg-white shadow-2xl transition-all duration-300 z-100 ${visible ? 'w-full' : 'w-0'}`}>
                <div className={`flex flex-col text-gray-600 h-full overflow-y-auto ${visible ? 'opacity-100' : 'opacity-0'}`}>
                     
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-6 border-b cursor-pointer hover:bg-gray-50'>
                        <img className='h-4 rotate-180' src={assets.drop_down_icon} alt="Back" />
                       <p className='font-bold tracking-widest uppercase'>Back</p>
                    </div>
                    {/* Menu Links */}
                    <div className='flex flex-col items-start'>
                       <NavLink onClick={() => setVisible(false)} className='py-5 pl-10 border-b w-full hover:bg-emerald-50 transition' to='/'>HOME</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-5 pl-10 border-b w-full hover:bg-emerald-50 transition' to='/collection'>COLLECTIONS</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-5 pl-10 border-b w-full hover:bg-emerald-50 transition' to='/about'>ABOUT</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-5 pl-10 border-b w-full hover:bg-emerald-50 transition' to='/contact'>CONTACT</NavLink>
                     </div>
                </div>
             </div>

        </div>
    )
}

export default Navbar