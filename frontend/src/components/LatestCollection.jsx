import React, { useContext, useMemo } from 'react'; // Added useMemo
import { ShopContext } from '../context/ShopContextProvider';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
      const latestProducts = useMemo(() => {
        return products ? products.slice(0, 9) : [];
    }, [products]);

    return (
        <div className='my-20'>
            <div className='text-center py-10 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 font-light tracking-wide'>
                    Defined by rarity, designed for the discerning. We invite you to experience 
                    our latest collection—a curated selection of essentials for those who move 
                    through the world with quiet confidence.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-16 px-4 md:px-16'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem 
                            key={item._id || index} 
                            id={item._id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default LatestCollection;