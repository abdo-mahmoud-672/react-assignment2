import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export let WishListContext = createContext();

export default function WishListContextProvider({ children }) {
  let headers = {

    token: localStorage.getItem('userToken')
  }

  const [WishList, setWishList] = useState(null)
  const [loading, setLoading] = useState(false)

  async function addProductToWishList(productId) {
    try {
      setLoading(true)
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/WishList`, {
        productId
      }, {
        headers
      });
      console.log(data);
      toast.success(data.message, {
        duration: 1000
      });
      setWishList(data)
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }



  async function deleteProduct(productId) {
    try {
      setLoading(true)
      let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/WishList/${productId} `, {
        headers
      });
      console.log(data);

      setWishList(data)
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }


 





  

 


  async function getWishList(productId) {
    try {
      setLoading(true);
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/WishList`, {
        headers
      });
      console.log(data);

      setWishList(data)
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }
  useEffect(() => {
    getWishList();
  }, [])



  return <WishListContext.Provider value={{   deleteProduct, loading,  addProductToWishList, getWishList, WishList, setWishList }}>
    {children}
  </WishListContext.Provider>
}