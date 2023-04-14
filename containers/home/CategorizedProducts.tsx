import { ProductCard } from '@/components/product'
import { Product } from '@/utils/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface CategorizedProductsProps {
  products: Product[]
}

export default function CategorizedProducts({ products }: CategorizedProductsProps) {
  const [allProducts, setAllProducts] = useState<Product[]>(products)
  return (
    <div className='pt-6 w-full'>
      <div>
        <h1 className='font-bold text-lg uppercase py-2 text-slate-600'>Products</h1>
      </div>
      <div className='w-full p-2 flex flex-wrap gap-8 items-center justify-center'>        
        {allProducts.map((product: Product, index: number) => {
          return <ProductCard key={index} product={product}/>
        })}
      </div>
      <div className='w-full container flex items-center justify-center'>
        <Link href='/products' legacyBehavior passHref>
          <a>
            <h1 className='font-bold text-md uppercase py-2 text-slate-600 cursor-pointer'>View more</h1>
          </a>
        </Link>
      </div>
    </div>
  )
}
