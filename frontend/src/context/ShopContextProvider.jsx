/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react' 

import { products } from "../assets/assets";
import { createContext } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 50;
    const [search,setSearch] =useState('');
    const [showSearch,setShowSearch] =useState(false);
    const [cartItems,setCartItems] =useState({});
    const navigate =useNavigate();

    const addToCart= (itemId,size) =>{
        if (!size && size !== "default"){
            toast.error ('Select Product Size');
            return;
        }

        let cartData =structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }
            else{
                cartData[itemId][size] =1;
            }
        }
        else {
            cartData[itemId] ={};
            cartData[itemId][size] =1;
        }
        setCartItems(cartData);
    }

  const getCartCount = () => {
  let totalCount = 0;

  for (const item in cartItems) {
    for (const size in cartItems[item]) {
      totalCount += cartItems[item][size];
    }
  }

  return totalCount;
};

const updateQuantity =async (itemId,size,quantity) => {
    let cartData =structuredClone (cartItems);
    cartData[itemId][size]  =quantity;
    setCartItems(cartData);
}

const getCartAmount =()=>{
    let totalAmount =0;
    for (const items in cartItems){
        let itemInfo = products.find(
          (product) => String(product._id) === String(items)
        );
        for (const item in cartItems[items]){
            try{
                if (cartItems[items][item] > 0){
                    totalAmount +=itemInfo.price* cartItems[items][item];
                }

            } catch (error){

            }
        }
    }
    return totalAmount;
}
    const value = {
        products, 
        currency, 
        delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount,navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;