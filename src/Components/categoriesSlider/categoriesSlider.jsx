import React, { useEffect, useState } from 'react'
import style from './categoriesSlider.module.css'
import axios from 'axios'
import Slider from "react-slick";
export default function CategoriesSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
  };

  const [categories, setCategories] = useState([])

  async function getRecentCategories() {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
      // console.log(data.data);
      setCategories(data.data)
    } catch (err) {
      console.log(err);

    }
  }
  useEffect(() => {
    getRecentCategories()
  })



    
  return <>
          <h2 className='mt-4 font-mono '>Shop Popular Categories</h2>

     <Slider {...settings}>
        {categories.map((category , index)=> <div  key={index} className='mb-4'>
          <img src={category.image} className='w-full h-[200px] ' alt="" />
          <h3 className='font-medium text-2xl'>{category.name}</h3>
        </div> ) }
        </Slider>
  </>
}
