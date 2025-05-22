"use client"
import React, { useEffect, useState } from 'react'
import Loading from '@/components/utils/Loading'
import Link from 'next/link'
import ProductVideoCard from '@/components/utils/ProductVideoCard'

function Page() {
            //Hooks
    // Data Will Be Used.
    const [products, setProducts] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    // others 


                //Functions Here
    // Fetch Products
    useEffect(()=>{
        const fetchProducts = async () => {
            if(products.length > 0) return
            setLoading(true)
            const response = await fetch('/api/products')
            const data = await response.json()
            setProducts(data)
            setLoading(false)
        }
        fetchProducts()
    },[])
    if(loading)  return<Loading/>   
  
   return (
  <div className="max-w-3xl mx-auto py-10 space-y-8">
    {
      products.map((product: any) => (
        <div key={product._id} className="bg-white rounded-lg shadow p-6 pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-blue-600 font-semibold">{product.author}</span>
            <span className="text-gray-400 text-sm">
              {product.date ? new Date(product.date).toLocaleDateString() : ''}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4 line-clamp-3 ">{product.description}</p>
          {product.video && (
           <ProductVideoCard video={product.video}/>
          )}
          <Link href={`/products/${product._id}`}  className='py-5'>
          <span className="text-blue-600 hover:underline w-full  ">
            View Details
          </span>
          </Link>
        </div>
      ))
    }
  </div>
)
}

export default Page