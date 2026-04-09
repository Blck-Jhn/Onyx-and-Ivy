import React, { useContext, useMemo } from 'react' 
import { ShopContext } from '../context/ShopContextProvider'
import Title from './Title'
import ProductItem from './ProductItem' 

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    //Using useMemo to filter.This handles the "cascading render" error and ensures the filter only runs when 'products' actually changes.
    const bestSeller = useMemo(() => {
        if (!products || products.length === 0) return [];
        return products.filter((item) => item.bestSeller).slice(0, 10);
    }, [products]);

    return (
        <div className='relative  bg-[#0a0a0a] py-24 my-20'>
            <div className='text-center text-3xl py-10'>
                <Title text1={'THE'} text2={'BESTSELLERS'} isDarkBg={true}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-purple-400 font-light tracking-wide'>
                    The most coveted pieces from our collection. These sought-after essentials 
                    represent the pinnacle of luxury, hand-selected by our most discerning clients.
                </p>
            </div>
            
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 gap-y-10 px-4 md:px-16'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem 
                            key={item._id || index} 
                            id={item._id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price} 
                            isDarkBg={true}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller;