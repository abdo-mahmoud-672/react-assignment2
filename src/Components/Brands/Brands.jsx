import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import axios from 'axios';
import RecentBrands from '../RecentBrands/RecentBrands';
import Loading from '../Loading/Loading';

export default function Brands() {
  const [brands, setBrands] = useState([])
  async function getAllBrands() {

    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)

      setBrands(data?.data)
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {

    getAllBrands()
  }, [])


  const [brandData, setBrandData] = useState([])




  return <>

    <h1 className="text-5xl p-8 text-main text-center">All Brands</h1>

    <div className="container mx-auto">
      {brands.length ?

        <div className="flex flex-wrap py-4">
          {brands.map((brand, index) => (

            <div key={index} className="p-3 w-1/4 ">
              <div onClick={() => { brandFilter(brand._id) }} className="    product border rounded-md ">

                <img src={brand.image} className='w-full' alt={brand.title} />
                <h2 className='text-center text-sm pb-3'>{brand.name}</h2>
              </div>

            </div>
          ))}
        </div> :
        <div className="flex justify-center py-16">
          <Loading />
        </div>
      }




    </div>



    {brandData.map((brand, index) => (
      <div key={index} className='w-1/3 p-2 '>
      
      <h2 className='text-center text-sm pb-3'>{brand.name}</h2>

      </div>
    ))}

  </>
}
