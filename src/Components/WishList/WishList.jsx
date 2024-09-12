import React, { useContext, useEffect } from 'react';
import style from './WishList.module.css';
import { WishListContext } from '../../Context/WishListContext';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function WishList() {
  const { getWishList, WishList, loading, deleteProduct } = useContext(WishListContext);

  useEffect(() => {
    getWishList();
  }, []);

  return (
    <>
      <h2 className='font-semibold text-3xl mb-8'>WishList Shop</h2>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {WishList && WishList.data && WishList.data.products ? (
            <div className="relative overflow-x-auto w-3/4 mx-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left mb-2 rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-16 py-3">
                      <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">Product</th>
                    <th scope="col" className="px-6 py-3">Qty</th>
                    <th scope="col" className="px-6 py-3">Price</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {WishList.data.products.map((product, index) => (
                    <tr key={`${product.product.id}-${index}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4">
                        <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Product" />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {product.product.title}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span>{product.count}</span>
                        </div>
                      </td>
                      <td className="px-3 py-4 font-semibold text-gray-900 dark:text-white">
                        {product.price} EGP
                      </td>
                      <td className="px-6 py-4">
                       
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className='text-xl font-semibold my-2 text-black '>
                    <td colSpan={3}>Total WishList Price</td>
                    <td>{WishList.data.totalWishListPrice}</td>
                  </tr>
                </tfoot>
                <Link to={'/checkout'} className='bg-main text-center text-white p-2 rounded-md'>
                  Check out
                </Link>
              </table>
            </div>
          ) : (
            <h2 className='text-2xl text-black font-semibold text-center'>WishList is empty</h2>
          )}
        </div>
      )}
    </>
  );
}
