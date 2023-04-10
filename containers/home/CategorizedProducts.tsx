import { ProductCard } from '@/components/product'
import { Product } from '@/utils/types'
import React, { useEffect, useState } from 'react'

export default function CategorizedProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch(`http://localhost:8080/api/v1/all-products`)
      const data = await res.json()
      setAllProducts(data)
    }
    getAllProducts()
  }, [])

  return (
    <div className='pt-6'>
      <h1 className='font-bold text-lg uppercase py-2 text-slate-600'>Gadgets</h1>
      <div className='w-full p-2 flex flex-wrap gap-8 items-center justify-center'>        
        {allProducts.map((product: Product, index: number) => {
          return <ProductCard key={index} product={product}/>
        })}
      </div>
    </div>
  )
}
