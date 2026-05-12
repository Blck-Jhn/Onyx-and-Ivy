/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */


import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContextProvider'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {

  const { productId } = useParams()
  const { products, currency, addToCart} = useContext(ShopContext)
  
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')


  const fetchProductData = () => {
    const item = products.find((item) => item._id === productId)
    if (item) {
      setProductData(item)
      setImage(item.image[0])
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  
  const getButtonText = () => {
    if (
      productData.category === "Yatchs" || 
      productData.category === "Houses"
    ) {
      return "Inquire for Private Viewing"
    }
    return "Add to Collection"
  }

  const handleAddToCart = () => {
  if (productData.sizes && productData.sizes.length > 0 && !size) {
    alert("Please select a size first");
    return;
  }
  addToCart(productData._id, size || "default");
};

  return productData ? (
    <div className='pt-12 transition-opacity duration-1000 opacity-100 bg-[#FCFAF8]'>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='flex flex-col lg:flex-row gap-16'>
                    
          {/* LEFT SIDE (IMAGES) */}
          <div className='flex-1 flex flex-col-reverse lg:flex-row gap-4'>      
            
            <div className='flex lg:flex-col overflow-x-auto lg:overflow-y-auto lg:w-[15%] w-full gap-3 scrollbar-hide'>
              {productData.image.map((item, index) => (
                <img 
                  onClick={() => setImage(item)} 
                  src={item} 
                  key={index}  
                  className={`w-[22%] lg:w-full aspect-square object-cover cursor-pointer transition-all duration-300 border-b-2 ${
                    image === item 
                      ? 'border-stone-800 scale-105' 
                      : 'border-transparent opacity-70'
                  }`} 
                  alt="" 
                />
              ))}
            </div>

            <div className='flex-1 bg-white shadow-sm overflow-hidden'>
              <img 
                src={image} 
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-700' 
                alt="" 
              />
            </div>

          </div>

          {/* RIGHT SIDE (DETAILS) */}
          <div className='flex-1 py-4'>

            <p className='text-xs uppercase tracking-widest text-stone-400 mb-2'>
              {productData.category} — Premium Selection
            </p>

            <h1 className='text-4xl lg:text-5xl font-serif text-stone-900 leading-tight'>
              {productData.name}
            </h1> 
            
            {/* ⭐ Ratings */}
            <div className='flex items-center gap-2 mt-4'>
              <div className='flex items-center gap-1 mt-2'>
                {[...Array(5)].map((_, index) => (
                  <img 
                    key={index} 
                    src={assets.star_icon} 
                    alt="" 
                    className='w-3.5' 
                    style={{
                      filter:
                        'invert(82%) sepia(59%) saturate(548%) hue-rotate(351deg) brightness(93%) contrast(92%)'
                    }}
                  />
                ))}
                <p className='pl-2 text-stone-400'>(134)</p>
              </div>
              <p className='text-xs text-stone-400 tracking-tighter uppercase'>
                (Verified Asset)
              </p>
            </div>           

            {/* 💰 Price */}
            <p className='mt-8 text-3xl font-light text-stone-800'>
              {currency}{productData.price}
            </p>            

            {/* 📄 Description */}
            <p className='mt-6 text-stone-500 leading-relaxed font-light text-lg lg:w-4/5'>
              {productData.description || 
                "An exclusive offering of unparalleled quality and distinction."
              }
            </p>         
           
            {productData.sizes && productData.sizes.length > 0 && (
              <div className='mt-12'>
                <p className='text-sm uppercase tracking-wider font-medium mb-4'>
                  Select Specification
                </p>

                <div className='flex gap-3'>
                  {productData.sizes.map((item, index) => (
                    <button 
                      onClick={() => setSize(item)} 
                      key={index}
                      className={`w-14 h-14 text-sm border transition-all ${
                        item === size
                          ? 'bg-stone-900 text-white'
                          : 'border-stone-200 text-stone-600 hover:border-stone-400'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button 
              onClick={handleAddToCart}
              className='w-full lg:w-4/5 mt-10 bg-stone-900 text-white py-5 text-xs tracking-[0.2em] uppercase hover:bg-stone-800 transition'
            >
             {getButtonText()}
            </button>

          </div>    
        </div>

        <RelatedProducts 
          category={productData.category} 
          subCategory={productData.subCategory} 
        />

      </div>
    </div>

  ) : (
    <div className='h-screen flex items-center justify-center bg-[#FCFAF8]'>
      <p className='animate-pulse text-stone-400 tracking-widest uppercase text-sm'>
        Loading Product...
      </p>
    </div>
  )
}

export default Product