"use client";

import axios from 'axios';

import React, { useEffect, useState } from 'react'
// import ProductCard from './ProductCard';
import AProductCard from '../../components/AProductCard'


function userHome() {


  // const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const [products, setProducts] = useState();
  // Use useEffect to retrieve userInfo from localStorage

  async function fetchData() {
    // const sellerId = "64d9bc1985a03fe1d1aba5db";
    try {
      // const config = {
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // };
      const product = await axios.get(
        "http://localhost:5000/api/seller/allproducts"
      );
      // console.log(product.data);
      setProducts(product.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  // setProducts(data.data);

  return (
    <div>
      {/* <Main> */}
      <div>
        {isLoading ? (
          <div>loading.....</div>
        )
          :
          (
            
              <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {/* <div key={product._id}>{product.productName}</div> */}
                {products?.map((product) => (
                  <AProductCard product={product} key={product._id} />
                ))}
              </div>
              
          )
        }
      </div>
    </div>
  )
}

export default userHome

