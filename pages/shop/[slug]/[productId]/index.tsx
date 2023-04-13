import { Navbar } from '@/containers/navbar'
import { MainProductCard } from '@/containers/product';
import ShopHeader from '@/containers/shop/ShopHeader'
import { GetServerSidePropsContext } from 'next'
import React from 'react'
import { Product, Shop } from '@/utils/types';

interface ProductPageProps {
  shop: Shop,
  product: Product
}

export default function ProductPage({ shop, product } : ProductPageProps) {
  return (
    <main className="w-full flex flex-col items-center  h-auto">
      <section className="container flex flex-col">
        <ShopHeader shop={shop}/>
        <MainProductCard product={product} />
      </section>
    </main>
  )
}

interface Params {
  slug: String,
  productId: String
}  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getServerSideProps(context: GetServerSidePropsContext) {
    const res = await fetch("http://localhost:8080/api/v1/shops")
    const data = await res.json()
    
    const slug = context?.params?.slug as String ?? ''
    const shop = data.find((shop: Shop) => {
        return slug === shop.slug
    })

    const productId = context?.params?.productId as String ?? ''
    const productRes = await fetch(`http://localhost:8080/api/v1/product/${productId}`)
    const product = await productRes.json()

    return {
      // Passed to the page component as props
      props: { shop, product},
    }
  }

