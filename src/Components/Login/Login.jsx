import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
export default function Login() {
  let { setUserData } = useContext(UserContext)
  const [apiErroe, setApiErroe] = useState(null);
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate()
  async function login(values) {

    try {
      setLoading(true)
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      console.log(data);
      localStorage.setItem('userToken', data.token)
      navigate('/')
      setUserData(data.token)
    } catch (err) {
      console.log(err.response.data.message);
      setApiErroe(err.response.data.message);
      setLoading(false)
    }

  }

  let validationSchema = Yup.object().shape({
    email: Yup.string().email('email invalid').required('email is required'),
    password: Yup.string().matches(/^[A-Z]\w{5,10}$/, 'password invalid ex(Ahmad123)').required('password is required'),
  })

  let formik = useFormik({
    initialValues: {

      email: '',
      password: '',
    }, validationSchema
    , onSubmit: login
  })

  return <>
    <div className=' w-3/4 mx-auto pt-8'>
      <h2 className="text-3xl py-6 font-semibold">login now</h2>
      <form onSubmit={formik.handleSubmit} className=" ">
        {apiErroe && <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {apiErroe}
        </div>}

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
          <input type="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>

        {formik.errors.email && formik.touched.email && <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.email}
        </div>}

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password :</label>
          <input type="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>

        {formik.errors.password && formik.touched.password && <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {formik.errors.password}
        </div>}

        {loading ? <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
          <i className='fas fa-spinner fa-spin-pulse'></i>
        </button> :
          <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit</button>
        }
      </form>
    </div>
  </>
}
