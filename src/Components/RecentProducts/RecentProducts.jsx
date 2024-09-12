import React, { useContext, useEffect, useState } from 'react'
import style from './RecentProducts.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { CartContext } from '../../Context/CartContext'
import { WishListContext } from '../../Context/WishListContext'

export default function RecentProducts() {

  let {addProductToCart} = useContext(CartContext);
  let {addProductTowWishList} = useContext(WishListContext);
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try{
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
      setProducts(data.data);
    } catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getProducts()
  }, [])


  return <>
 
 <h2 className='text-3xl'>RecentProducts</h2>
 {products.length ? <div className="flex flex-wrap">
 {products.map((product)=> <div key={product.id} className='w-1/5 p-1'>
<div className="product p-3">
  <Link to={`/productdetails/${product.id}/${product.category.name }`}>
  <img src={product.imageCover} className='w-full' alt = {product.title} />
  <h3 className='font-sm text-main'>{product.category.name}</h3>
  <h3 className=''>{product.title.split(' ').slice(0, 3).join(' ')}</h3>
  <div className="flex justify-between my-2">
   <span>{product.price} EGP</span>
   <h3><i className='fas fa-star rating-color'></i> {product.ratingsAverage} </h3>
  </div>
  </Link>
  <button onClick={()=> addProductToCart(product.id)} className='btn bg-main rounded w-3/4  text-white py-2'>+ Add</button>
  <button onClick={()=> addProductTowWishList(product.id)} className='btn bg-main rounded w-3/4  text-white py-2'>+ Add</button>
  </div>
  </div>
   )}
   </div> : <Loading/>}

  </>
}
