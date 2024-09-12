import React, { useEffect, useState } from 'react'
import style from './Products.module.css'
import RecentProducts from '../RecentProducts/RecentProducts';
import axios from 'axios';
import Loading from '../Loading/Loading';


export default function Products() {

  const [products, setProducts] = useState([])
  async function getAllProducts() {

    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      console.log(data);
      setProducts(data?.data);

    } catch (error) {
      console.log(error);

    }


  }

  useEffect(() => {

    getAllProducts()


  }, [])



  return <>

    <div className="container">
 
 
      {products.length ?
        <div className="flex flex-wrap justify-center">
          {products.map((product, index) => <RecentProducts key={index} product={product} />)}
        </div> :
        <div className="flex justify-center py-16">
          <Loading />
        </div>
      }   



    </div>
  </>
}
