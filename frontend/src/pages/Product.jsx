import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContextProvider';
import { assets } from '../assets/assets';

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

 
  const getButtonText = () => {
    if (productData.category === "Yatchs" || productData.category === "Houses") {
      return "Inquire for Private Viewing";
    }
    return "Add to Collection";
  }

  return productData ? (
    <div className='pt-12 transition-opacity duration-1000 opacity-100 bg-[#FCFAF8]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-16'>
                    
          <div className='flex-1 flex flex-col-reverse lg:flex-row gap-4'>      
            <div className='flex lg:flex-col overflow-x-auto lg:overflow-y-auto lg:w-[15%] w-full gap-3 scrollbar-hide'>
              {productData.image.map((item, index) => (
                <img 
                  onClick={() => setImage(item)} 
                  src={item} 
                  key={index}  
                  className={`w-[22%] lg:w-full aspect-square object-cover cursor-pointer transition-all duration-300 border-b-2 ${image === item ? 'border-stone-800 scale-105' : 'border-transparent opacity-70'}`} 
                  alt="" 
                />
              ))}
            </div>
            <div className='flex-1 bg-white shadow-sm overflow-hidden'>
              <img src={image} className='w-full h-full object-cover hover:scale-105 transition-transform duration-700' alt="" />
            </div>
          </div>

          <div className='flex-1 py-4'>
            <p className='text-xs uppercase tracking-widest text-stone-400 mb-2'>{productData.category} — Premium Selection</p>
            <h1 className='text-4xl lg:text-5xl font-serif text-stone-900 leading-tight'>{productData.name}</h1> 
            
            <div className='flex items-center gap-2 mt-4'>
               <div className='flex items-center gap-1 mt-2'>
                {[...Array(5)].map((_, index) => (
                  <img 
                  key={index} 
      src={assets.star_icon} 
      alt="" 
      className='w-3.5' 
                  style={{ filter: 'invert(82%) sepia(59%) saturate(548%) hue-rotate(351deg) brightness(93%) contrast(92%)' }} 
                 />
                ))}
                <p className='pl-2 text-stone-400'>(134)</p>
              </div>
                  <p className='text-xs text-stone-400 tracking-tighter uppercase'>(Verified Asset)</p>
                </div>           
            <p className='mt-8 text-3xl font-light text-stone-800'>{currency}{productData.price}</p>            
            <p className='mt-6 text-stone-500 leading-relaxed font-light text-lg lg:w-4/5'>
               {productData.description || "An exclusive offering of unparalleled quality and distinction, curated for the most discerning tastes."}
            </p>         
            
            {productData.sizes && productData.sizes.length > 0 && (
              <div className='mt-12'>
                <div className='flex justify-between items-center mb-4'>
                  <p className='text-sm uppercase tracking-wider font-medium'>Select Specification</p>
                </div>
                <div className='flex gap-3'>
                  {productData.sizes.map((item, index) => (
                    <button 
                      onClick={() => setSize(item)} 
                      key={index}
                      className={`w-14 h-14 text-sm transition-all duration-300 border ${item === size ? 'bg-stone-900 text-white border-stone-900' : 'bg-transparent border-stone-200 text-stone-600 hover:border-stone-400'}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}           
            <button className='w-full lg:w-4/5 mt-10 bg-stone-900 text-white py-5 text-xs tracking-[0.2em] uppercase hover:bg-stone-800 transition-colors duration-300 shadow-xl active:scale-[0.98]'>
              {getButtonText()}
            </button>
            <div className='mt-12 space-y-4 border-t border-stone-100 pt-8'>
              <div className='flex items-center gap-4 text-xs text-stone-500 tracking-wide uppercase'>
                <div className='w-2 h-2 rounded-full bg-stone-400'></div>
                <p>Secure Global Logistics & Delivery</p>
              </div>
              <div className='flex items-center gap-4 text-xs text-stone-500 tracking-wide uppercase'>
                <div className='w-2 h-2 rounded-full bg-stone-400'></div>
                <p>Full Documentation & Certification</p>
              </div>
            </div>
          </div>    
        </div>
        <div className='mt-32 border-t border-stone-200'>
          <div className='flex justify-center gap-12'>
            <button className='border-t-2 border-stone-900 py-6 text-xs uppercase tracking-widest font-semibold'>
              Description
            </button>
            <button className='py-6 text-xs uppercase tracking-widest font-semibold text-stone-400 hover:text-stone-600 transition-colors'>
              Reviews (144)
            </button>
          </div>
          
          <div className='max-w-4xl mx-auto py-16 px-4'>
            <div className='space-y-8 text-stone-600 leading-loose text-center font-light italic text-lg'>
              <p>
                {productData.description} This meticulously curated asset represents the pinnacle of luxury in the {productData.category} sector. 
                Every element has been vetted to ensure it meets our rigorous standards for quality, heritage, and aesthetic excellence.
              </p>
              <p>
                Whether acquired as a cornerstone of a growing collection or as a statement of personal achievement, 
                this piece offers an unparalleled experience for the global elite.
              </p>
            </div>
            
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-y border-stone-100 py-10'>
               <div className='text-center'>
                 <p className='text-xs uppercase text-stone-400 tracking-widest mb-1'>Origin</p>
                 <p className='text-sm font-medium uppercase'>International</p>
               </div>
               <div className='text-center'>
                 <p className='text-xs uppercase text-stone-400 tracking-widest mb-1'>Status</p>
                 <p className='text-sm font-medium uppercase'>Exquisite</p>
               </div>
               <div className='text-center'>
                 <p className='text-xs uppercase text-stone-400 tracking-widest mb-1'>Category</p>
                 <p className='text-sm font-medium uppercase'>{productData.category}</p>
               </div>
               <div className='text-center'>
                 <p className='text-xs uppercase text-stone-400 tracking-widest mb-1'>Condition</p>
                 <p className='text-sm font-medium uppercase'>Pristine</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='h-screen flex items-center justify-center bg-[#FCFAF8]'>
      <p className='animate-pulse text-stone-400 tracking-widest uppercase text-sm'>Accessing Archive...</p>
    </div>
  )
}

export default Product