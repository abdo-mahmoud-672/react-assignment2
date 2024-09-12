import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import axios from 'axios';
import Loading from '../Loading/Loading';


export default function Categories() {


  const [categories, setCategories] = useState([])
  async function getAllCategories() {

    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      console.log(data);
      setCategories(data?.data);

    } catch (error) {
      console.log(error);

    }

  }

  useEffect(() => {

    getAllCategories()

  }, [])


  const [dataFilter, setDataFilter] = useState([])

  async function Filter(id) {

    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories`)

    // console.log(data.data);
    // console.log(id);

    let storeData = data.data.filter((item) => item.category === id)
    // console.log(storeData);

    setDataFilter(storeData)
  }

  // useEffect(() => {
  //  Filter()
  // }, [])







  return <>
    <div className="container ">

      {categories.length ?
        <div className="flex flex-wrap  ">
          {categories.map((category, index) => (
            <div key={index} className="p-3 w-1/3">

              <div onClick={() => { Filter(category._id) }} className="   product border   ">

                <img src={category.image} className='w-full h-[400px] object-cover' alt={category.title} />
                <h2 className='text-center text-main font-semibold text-2xl py-3'>{category.name}</h2>
              </div>
            </div>


          ))}

        </div>
        :
        <div className="flex justify-center py-16">
          <Loading />
        </div>
      }

      

    </div>


    



    <div className="container">

      <div className="flex flex-wrap">
        {dataFilter.map((category, index) => (
          <div key={index} className='w-1/3 p-2 '>

            <div className='product border border-gray-400 rounded-lg text-center text-2xl font-semibold'>

              <p className='p-3 mb-2'>{category.name}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </>
}

