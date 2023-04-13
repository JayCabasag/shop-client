import { MainProductCard } from '@/containers/product'
import { Product } from '@/utils/types'
import { GetServerSidePropsContext } from 'next'
import React from 'react'

interface ProductPageProps {
  product: Product
}

export default function ProductPage({ product } : ProductPageProps) {
  return (
    <main className="w-full flex flex-col items-center  h-auto">
    <section className="container flex px-2 md:px-0 flex-col">
      <h2 className='font-bold text-xl py-4 md:py-6 text-slate-700'>Products details</h2>
        <MainProductCard product={product} />
    </section>
  </main>
  )
}

// `getStaticPaths` requires using `getStaticProps`
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const productId = context?.params?.productId as String ?? ''
  const res = await fetch(`http://localhost:8080/api/v1/product/${productId}`)
  const product = await res.json()

  return {
    props: { product },
  }
}
