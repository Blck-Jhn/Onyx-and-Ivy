/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContextProvider'

const RelatedProducts = ({category,subCategory}) =>{

    const {products} =useContext (ShopContext);
    const [realted,setRelated] =useState([]);

        useEffect (()=>{
            if (products.length > 0){
                let productsCopy =products.slice();
                productsCopy =productsCopy.filter((item) =>category === item.category)
            }
        },[products])
  return (
    <div>
      
    </div>
  )
}

export default RelatedProducts
