import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import RecentProducts from '../RecentProducts/RecentProducts'
import Loading from '../Loading/Loading'
import CategoriesSlider from '../categoriesSlider/categoriesSlider'
import MainSlider from '../mainSlider/mainSlider'
import SearchInput from '../SearchInput/SearchInput'

export default function Home() {

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

  // const [relatedData, setRelatedData] = useState([])

  //   function relatedProducts(product.category.name ) {

  
  //   let relatedPro = data.data.filter((item) =>item.product === product.category.name);
  //   // setState
  //   setRelatedData(relatedPro);
    

  // }



  return <>
    <MainSlider />
    <CategoriesSlider />


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
