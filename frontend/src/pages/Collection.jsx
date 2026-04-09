
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContextProvider' 
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'


const Collection = () => {
const { products, search, showSearch } = useContext(ShopContext);
const [showFilter, setShowFilter] = useState(false);
const [filterProducts,setFilterProducts] =useState([]);
const [category,setCategory]=useState([]);
const [subCategory,setSubCategory]=useState([]);
const [sortType,setSortType] =useState ('relevant')

const toggleCategory = (e) => {
  if (category.includes(e.target.value)) {
    setCategory(prev => prev.filter(item => item !== e.target.value));
  } else {
    setCategory(prev => [...prev, e.target.value]); 
  }
}

const toggleSubCategory = (e) => { 
  if (subCategory.includes(e.target.value)) {
    setSubCategory(prev => prev.filter(item => item !== e.target.value));
  } else {
    setSubCategory(prev => [...prev, e.target.value]); 
  }
}

useEffect(() => {
    let fpCopy = products.slice();

    // Search Filter
    if ( search) {
      fpCopy = fpCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase().trim())
      );
    }

    // Category Filter
    if (category.length > 0) {
      fpCopy = fpCopy.filter(item => category.some(c => c.toLowerCase() === item.category.toLowerCase()));
    }

    // SubCategory Filter
    if (subCategory.length > 0) {
      fpCopy = fpCopy.filter(item => {
        if (!item.subCategory) return false;
        return subCategory.some(s => {
          if (s === 'SportCars/LuxuryCars') return item.subCategory === 'SportCars' || item.subCategory === 'LuxuryCars';
          return s.toLowerCase().includes(item.subCategory.toLowerCase()) || item.subCategory.toLowerCase().includes(s.toLowerCase());
        });
      });
    }   

    // Sorting logic
    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a, b) => (Number(a.price.toString().replace(/,/g, '')) - Number(b.price.toString().replace(/,/g, ''))));
        break;
      case 'high-low':
        fpCopy.sort((a, b) => (Number(b.price.toString().replace(/,/g, '')) - Number(a.price.toString().replace(/,/g, ''))));
        break;
      default:
        break;
    }

    setFilterProducts(fpCopy);
       
  }, [category, subCategory, sortType, products, search]);

  return (    
    <section className='mx-4 sm:mx-[5vw] p-4 border'>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'> 
        <div className='min-w-60'>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 uppercase tracking-widest'>
            FILTERS
          <img src={assets.drop_down_icon} alt="Dropdown icon" className={`h-3 sm:hidden ${showFilter ? 'rotate-180' : ''}`}/>
          </p>

          {/* Category Filtering */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium uppercase'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Clothes'} onChange={toggleCategory}/> Clothes
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Cars'} onChange={toggleCategory}/> Cars
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Jewellery'} onChange={toggleCategory}/> Jewellery
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Fragrance'} onChange={toggleCategory}/> Fragrance
              </p>
               <p className='flex gap-2'>
                <input type="checkbox" value={'Footwears'} onChange={toggleCategory}/> Footwears
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Watches'} onChange={toggleCategory} /> Watches
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Yatchs'} onChange={toggleCategory}/> Yatchs
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Architecture'} onChange={toggleCategory}/> Architecture
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Bikes'} onChange={toggleCategory}/> Bikes
              </p>
            </div>
          </div>

          {/* SubCategory Filtering */}
           <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium uppercase'>TYPES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Dresses & Gowns'} onChange={toggleSubCategory}/> Dresses & Gowns
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Tops'} onChange={toggleSubCategory}/> Tops
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Jeans'} onChange={toggleSubCategory}/> Jeans
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'SportCars/LuxuryCars'} onChange={toggleSubCategory}/> SportCars/LuxuryCars
              </p>               
              <p className='flex gap-2'>
                <input type="checkbox" value={'Houses'} onChange={toggleSubCategory}/> Houses
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Necklaces'} onChange={toggleSubCategory}/> Necklaces
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Earring'} onChange={toggleSubCategory}/> Earrings
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Rings'} onChange={toggleSubCategory}/> Rings
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Perfume'} onChange={toggleSubCategory}/> Perfume 
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Body Spray'} onChange={toggleSubCategory}/> Body Spray 
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Sneakers & Boots'} onChange={toggleSubCategory}/> Sneakers & Boots 
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Heels & Slippers'} onChange={toggleSubCategory}/> Heels & Slippers 
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Corporate & Boots'} onChange={toggleSubCategory}/> Corporate & Boots 
              </p>            
                  
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'}/>
            {/* Product Sorting */}
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* Mapping Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item,index)=>(
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default Collection