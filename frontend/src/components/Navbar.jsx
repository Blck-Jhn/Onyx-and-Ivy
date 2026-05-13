import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContextProvider'

const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const [showProfile, setShowProfile] = useState(false)

    const { setShowSearch, getCartCount } = useContext(ShopContext)

    return (

        <div className='relative z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm'>
            <div className='flex items-center justify-between py-8 font-medium px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
                {/* LOGO */}
                <div className='relative group shrink-0'>
                    <div className='absolute -inset-4 bg-emerald-900/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
                    <Link to='/'>
                        <img
                            src={assets.logo}
                            className='w-55 sm:w-40 md:w-44 lg:w-52 relative object-contain transition-all duration-300'
                            alt='Brand Logo'
                        />
                    </Link>
                </div>

                {/* DESKTOP NAVIGATION */}
                <ul className='hidden sm:flex md:gap-6 lg:gap-8 gap-4 text-[11px] md:text-xs lg:text-sm text-gray-600 tracking-[1.5px] lg:tracking-[2.5px]'>
                    {
                        ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item) => (
                            <NavLink
                                key={item}
                                to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                                className='flex flex-col items-center gap-1 group'
                            >
                                <p className='group-hover:text-black transition-colors duration-300'>
                                    {item}
                                </p>
                                <hr className='w-0 group-hover:w-full border-none h-px bg-black transition-all duration-300' />
                            </NavLink>

                        ))
                    }
                </ul>

                {/* RIGHT SIDE */}
                <div className='flex items-center gap-6'>

                    {/* SEARCH */}
                    <img
                        onClick={() => setShowSearch(true)}
                        src={assets.search_icon}
                        className='w-5 cursor-pointer hover:scale-110 transition-transform duration-300'
                        alt='Search'
                    />

                    {/* PROFILE */}
                    <div className='relative'>

                        <img
                            onClick={() => setShowProfile(!showProfile)}
                            src={assets.profile_icon}
                            alt='Profile'
                            className='w-5 cursor-pointer hover:scale-110 transition-transform duration-300'
                        />                        
                        <div
                            className={`absolute right-0 top-10 w-52 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 z-50
                          
                            ${showProfile
                                    ? 'opacity-100 visible translate-y-0'
                                    : 'opacity-0 invisible -translate-y-2'
                                }
                        `}
                        >
                            <div className='flex flex-col py-3 text-sm text-gray-700'>
                                <Link
                                    to='/login'
                                >
                                 <p className='px-5 py-3 cursor-pointer hover hover:bg-emerald-900 hover:text-white transition-all duration-300 tracking-wide'>
                                    My Profile
                                </p>
                                </Link>                               
                                <Link
                                    to='/orders'
                                    onClick={() => setShowProfile(false)}
                                >
                                    <p className='px-5 py-3 cursor-pointer hover:bg-emerald-900 hover:text-white transition-all duration-300 tracking-wide'>
                                        Orders
                                    </p>
                                </Link>
                                <Link to='/'>                               
                                <p className='px-5 py-3 cursor-pointer text-red-500 hover:bg-black hover:text-white transition-all duration-300 tracking-wide'>
                                    Logout
                                </p>
                                 </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* CART */}
                    <Link to='/cart' className='relative group'>

                        <img
                            src={assets.cart_icon}
                            alt='Cart'
                            className='w-5 transition-transform duration-300 group-hover:-rotate-12'
                        />
                        {getCartCount()>0 && (
                        <p className='absolute -right-2 -bottom-2 w-4 h-4 bg-emerald-600 text-white rounded-full text-[8px] flex items-center justify-center shadow-md'>
                            {getCartCount()}
                        </p>
                        )}
                    </Link>

                    {/* MOBILE MENU ICON */}
                    <img
                        onClick={() => setVisible(true)}
                        src={assets.menu_icon}
                        alt='Menu'
                        className='w-5 cursor-pointer sm:hidden hover:opacity-60 transition-opacity duration-300'
                    />

                </div>

            </div>

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-screen bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 z-100
                
                ${visible ? 'w-full opacity-100' : 'w-0 opacity-0 overflow-hidden'}
            `}
            >

                <div className='flex flex-col text-gray-700 h-full'>

                    {/* BACK BUTTON */}
                    <div
                        onClick={() => setVisible(false)}
                        className='flex items-center gap-4 p-6 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-all duration-300'
                    >

                        <img
                            className='h-4 rotate-180'
                            src={assets.drop_down_icon}
                            alt='Back'
                        />

                        <p className='font-medium tracking-[0.2em] uppercase text-sm'>
                            Back
                        </p>

                    </div>

                    {/* MOBILE LINKS */}
                    <div className='flex flex-col'>

                        <NavLink
                            onClick={() => setVisible(false)}
                            className='py-5 px-8 border-b border-gray-100 hover:bg-black hover:text-white transition-all duration-300 tracking-wide'
                            to='/'
                        >
                            HOME
                        </NavLink>

                        <NavLink
                            onClick={() => setVisible(false)}
                            className='py-5 px-8 border-b border-gray-100 hover:bg-black hover:text-white transition-all duration-300 tracking-wide'
                            to='/collection'
                        >
                            COLLECTION
                        </NavLink>

                        <NavLink
                            onClick={() => setVisible(false)}
                            className='py-5 px-8 border-b border-gray-100 hover:bg-black hover:text-white transition-all duration-300 tracking-wide'
                            to='/about'
                        >
                            ABOUT
                        </NavLink>

                        <NavLink
                            onClick={() => setVisible(false)}
                            className='py-5 px-8 border-b border-gray-100 hover:bg-black hover:text-white transition-all duration-300 tracking-wide'
                            to='/contact'
                        >
                            CONTACT
                        </NavLink>

                        <NavLink
                            onClick={() => {
                                setVisible(false)
                                setShowProfile(false)
                            }}
                            className='py-5 px-8 border-b border-gray-100 hover:bg-black hover:text-white transition-all duration-300 tracking-wide'
                            to='/login'
                        >
                            LOGIN
                        </NavLink>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Navbar