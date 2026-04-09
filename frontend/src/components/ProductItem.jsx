import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price, isDarkBg}) => {
    const { currency } = useContext(ShopContext)

  return (
    <Link className='cursor-pointer group' to={`/product/${id}`}>
        
        <div className='overflow-hidden bg-[#1a1a1a] aspect-3/4'>
            <img 
                className='hover:scale-110 transition duration-700 ease-in-out object-cover w-full h-full' 
                src={image[0]} 
                alt={name} 
            />
        </div>
        
        <p className={`pt-4 pb-1 text-[10px] tracking-widest uppercase font-light ${isDarkBg ? 'text-gray-400' : 'text-gray-600'}`}>
            {name}
        </p>
        <p className={`text-sm font-medium ${isDarkBg ? 'text-white' : 'text-gray-900'}`}>
            {currency}{price}
        </p>
    </Link>
  )
}

export default ProductItem;