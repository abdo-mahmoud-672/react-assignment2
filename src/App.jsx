import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import WishList from './Components/WishList/WishList.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import UserContextProvider from './Context/UserContext.jsx'
import CounterContextProvider from './Context/CounterContext.jsx'
import FreshCart from './Components/FreshCart/FreshCart.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import CartContextProvider, { CartContext } from './Context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import Checkout from './Components/Checkout/Checkout.jsx'
import Allorders from './Components/Allorders/Allorders.jsx'
import WishListContextProvider from './Context/WishListContext.jsx'


let routers = createBrowserRouter([
  {path: '' , element: <Layout/>, children :[
    {index: true , element:<ProtectedRoute><Home /></ProtectedRoute>},
    {path:'home' , element:<ProtectedRoute><FreshCart/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'checkout' , element:<ProtectedRoute><Checkout/></ProtectedRoute>},
    {path:'allorders' , element:<ProtectedRoute><Allorders/></ProtectedRoute>},
    {path:'wish list' , element:<ProtectedRoute><WishList/></ProtectedRoute>},
    {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'productdetails/:id/:category' , element:<ProductDetails/>},
    {path:'login' , element:<Login/>},
    {path:'register' , element:<Register/>},
    {path:'*' , element:<Notfound/>},
  ]}
])




function App() {

  return <WishListContextProvider>

  
  <CartContextProvider>
   <UserContextProvider>
    <RouterProvider router={routers}></RouterProvider>
    <Toaster />
</UserContextProvider>
</CartContextProvider>
</WishListContextProvider>
}

export default App
