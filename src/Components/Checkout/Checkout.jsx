import React, { useContext, useState } from 'react'
import style from './Checkout.module.css'
import { useFormik } from 'formik'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'
export default function Checkout() {
  

  let { checkout }=useContext(CartContext);
  let formik = useFormik({
    initialValues: {

      details: '',
      city: '',
      phone: '',
     
    }
    , onSubmit: checkout
  })

  return <>
    <div className=' w-3/4 mx-auto pt-8'>
      <h2 className="text-3xl py-6 font-semibold">Checkout now</h2>
      <form onSubmit={formik.handleSubmit} className=" ">
       

        <div className="mb-5">
          <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">details :</label>
          <input type="text" id="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>

   
        <div className="mb-5">
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">city :</label>
          <input type="text" id="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        
        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phone :</label>
          <input type="tel" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>


      
          <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit</button>
    
      </form>
    </div>
  </>
}
