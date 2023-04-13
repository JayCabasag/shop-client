import { ProductCard } from '@/components/product'
import { Product } from '@/utils/types'
import React, { useState } from 'react'

interface GadgetsPageProps {
  products: Product[]
}

export default function GadgetsPage({ products } : GadgetsPageProps) {

  const [productList, setProductList] = useState(products)

  return (
    <main className="w-full flex flex-col items-center h-auto">
      <section className="container flex px-2 md:px-0">
        <div>
          <h1 className='font-bold text-lg uppercase py-4 md:py-6 text-slate-600'>Gadgets</h1>
          <div className='flex flex-wrap gap-4 justify-center'>
            {productList.map((product: Product, index: number) => {
              return <ProductCard key={index} product={product} />
            })}
          </div>
        </div>
      </section>
  </main>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/api/v1/all-products?limit=100")
  const products = await res.json()
  return {
    // Passed to the page component as props
    props: { products: products },
  }
}
