import React, { useEffect, useState } from 'react'
import style from './mainSlider.module.css'
import slide1 from '../../assets/images/slider4_.jpg'
import slide2 from '../../assets/images/slider5_.jpg'
import slide3 from '../../assets/images/slider6_.jpg'
import slide4 from '../../assets/images/slider7_.jpg'
import slide5 from '../../assets/images/slider8_.jpg'

import Slider from 'react-slick'

export default function MainSlider() {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

 


  return <>

    <div className="flex justify-center ">
      <div className="w-1/4">

        <Slider {...settings}>
          <img src={slide3} className='w-full h-[400px]' alt="" />
          <img src={slide4} className='w-full h-[400px]' alt="" />
          <img src={slide5} className='w-full h-[400px]' alt="" />
        </Slider>

      </div>
      <div className="w-1/4">
      <img src={slide1} className='w-full h-[200px]' alt="" />
      <img src={slide2} className='w-full h-[200px]' alt="" />

      </div>
    </div>
  </>
}
