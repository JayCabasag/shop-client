import { MainProductCard } from '@/containers/product'
import { Product } from '@/utils/types'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface ProductPageProps {
  product: Product
}

export default function ProductPage({ product } : ProductPageProps) {
  return (
    <main className="w-full flex flex-col items-center  h-auto">
    <section className="container flex px-2 md:px-0 flex-col">
      <h2 className='font-bold text-xl py-2 text-slate-700'>Products details</h2>
        <MainProductCard product={product} />
    </section>
  </main>
  )
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8080/api/v1/all-products")
  const data = await res.json()

  const allPath = data.map((product: Product) => {
    return { params:  { productId: product.id.toString() }}
  })
  return {
    paths: allPath,
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: GetStaticPropsContext) {
  const productId = context?.params?.productId as String ?? ''
  const res = await fetch(`http://localhost:8080/api/v1/product/${productId}`)
  const product = await res.json()

  return {
    props: { product },
  }
}
