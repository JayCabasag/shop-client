import { Navbar } from '@/containers/navbar'
import { MainProductCard } from '@/containers/product';
import ShopHeader from '@/containers/shop/ShopHeader'
import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
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

export async function getStaticPaths(context: GetStaticPathsContext) {
    const res = await fetch("http://localhost:8080/api/v1/shops")
    const data = await res.json()
    const allShopId = data?.map((shop: Shop) => {
      return shop.id
    })
    
    const allProducts = await Promise.all(
      allShopId.map(async (id: number) => {
        const res = await fetch(`http://localhost:8080/api/v1/products?shop=${id}`)
        return res.json()
      })
    )
    const flattenedProducts = allProducts.flatMap((products: Product[]) => products)
    
    const allShopPath = data?.map((shop: Shop, index: number) => {
      const params: Params[] = []
      flattenedProducts.forEach((product: Product) => {
        if (product.shop === shop.id){
          params.push({ slug: shop.slug.toString(), productId: product?.id?.toString()} )
        }
      })
      return params
    })
    
    const allPaths = [].concat(...allShopPath);
    const allStaticPaths = allPaths.map((path: Params) => {
      return {
        params: path
      }
    })
    return {
      paths: allStaticPaths,
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context: GetStaticPropsContext) {
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

