import React, { useEffect, useState } from 'react'
import style from './SearchInput.module.css'
import axios from 'axios'
import { data } from 'autoprefixer'

export default function SearchInput() {

  const [searchValue, setSearchValue] = useState({})

  async function getSearchData() {

    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    console.log(data);

    setSearchValue(data.data)
  }

  useEffect(() => {

    getSearchData()

  }, [])



  function SearchProduct() {
    //deep copy
    let newProducts = structuredClone(data);
    // update
    newProducts = newProducts.filter((searchValue) => searchValue.category.name.toLowerCase().includes(searchValue.category.name.toLowerCase()));
    // setState
    setSearchValue(newProducts);
    console.log(searchValue);
    
  }
  // const handleChange = (event) => {
  //   setSearchValue(event.target.value);
  // };

  // // تصفية البيانات بناءً على نص البحث
  // const filteredData = data.filter(item =>
  //   item.toLowerCase().includes(searchValue.toLowerCase()));



  return <>

    <input type="search" id="search" onChange={() => SearchProduct()} className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="search..." />

  </>
}
