import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContextProvider'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';

const Cart = () => {
const {products,currency,cartItems,updateQuantity,navigate}=useContext(ShopContext);
const [cartData,setCartData]=useState([]);

useEffect (() => {
  const tempData =[];
  for (const items in cartItems){
    for (const item in cartItems[items]){
    if (cartItems[items][item] > 0){
      tempData.push ({
        _id:items,
        size:item,
        quantity:cartItems[items][item]
      });
    }
  }
}
  setCartData(tempData);
},[cartItems]);

  return (
  <div className='min-h-screen bg-[#f8f6f2] pt-20 pb-24'>

    <div className='max-w-5xl mx-auto px-6'>

      <div className='mb-12'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div className='space-y-6'>
        {
          cartData.map((item, index) => {

            const productData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div
                key={index}
                className='bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 grid grid-cols-1 sm:grid-cols-[4fr_1fr_0.3fr] items-center gap-6 transition duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.10)]'
              >
                <div className='flex items-center gap-6'>
                  <img
                    src={productData.image[0]}
                    alt='product'
                    className='w-28 h-28 object-cover rounded-2xl'
                  />
                  <div>
                    <p className='text-lg sm:text-xl font-light tracking-wide text-black'>
                      {productData.name}
                    </p>
                    <div className='flex items-center gap-4 mt-3'>

                      <p className='text-sm text-gray-500'>
                        {currency}
                        {Number(productData.price).toLocaleString()}
                      </p>
                      <p className='px-4 py-1.5 rounded-full border border-black/10 bg-[#f5f3ee] text-[11px] tracking-[0.25em] uppercase'>
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  className='w-20 rounded-xl border border-gray-200 bg-[#faf8f5] px-3 py-2 text-center outline-none focus:border-black transition'
                  type='number'
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() =>
                    updateQuantity(item._id, item.size, 0)
                  }
                  src={assets.trash_icon}
                  alt=''
                  className='w-5 opacity-40 hover:opacity-100 transition cursor-pointer'
                />
              </div>
            );
          })
        }
      </div>

      <div className='flex justify-end mt-16'>
        <div className='w-full max-w-lg bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100'>
          <CartTotal />
          <div className='pt-6'>
            <button onClick={() =>navigate('/place-order')} className='w-full bg-black text-white py-4 rounded-full tracking-[0.25em] text-xs uppercase transition duration-300 hover:bg-[#bfa37c] hover:text-black'>
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Cart
