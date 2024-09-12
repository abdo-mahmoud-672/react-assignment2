import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'

export default function Navbar() {
  
  let navigate = useNavigate()
  let { userData, setUserData } = useContext(UserContext);
   let{cart}= useContext(CartContext);

  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null)
    navigate('/login')
  }
  return <>

    <nav className="bg-gray-100 dark:bg-gray-900 fixed w-full z-20 top-0 left-0   py-4 ">
      <div className="  flex   items-center justify-around mx-auto">

        <div className='font-bold logo cursor-pointer'>
          <i className="fa-solid fa-cart-shopping text-main "></i>
          <span className='px-1'><NavLink to="">FreshCart</NavLink></span>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          {userData && <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li className='px-2'> <NavLink to="">Home</NavLink> </li>
           
            <li className='px-2'> <NavLink to="wish list">WishList</NavLink> </li>
            <li className='px-2'> <NavLink to="products">Products</NavLink> </li>
            <li className='px-2'> <NavLink to="categories">Categories</NavLink> </li>
            <li className='px-2'> <NavLink to="brands">Brands</NavLink> </li>

          </ul>}
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      

         


            {userData ?<>
            
            <li className='px-2 relative'> <NavLink to="cart"><i className="fa-solid text-3xl text-main fa-cart-shopping"></i></NavLink><span className='text-gray-500 absolute left-2/3 -top-[5px] '>  {cart? cart.numOfCartItems:0}</span> </li>
            <li onClick={()=>logOut()} className='px-2 cursor-pointer'><span>logout</span></li> :
             </>:
              <>
                <li className='px-2'> <NavLink to="register">Register</NavLink> </li>
                <li className='px-2'> <NavLink to="login">Login</NavLink> </li>
              </>
            }
             <ul className="flex items-center space-x-2 flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
             <li className=' logo'> <NavLink to="cart"> <i className="fa-solid fa-cart-shopping"></i></NavLink></li>
          </ul>
        </div>
      </div>
    </nav>

  </>
}
