import { ProductList } from '@/containers/shop';
import ShopHeader from '@/containers/shop/ShopHeader';
import { GetStaticPropsContext } from 'next';
import React, { useEffect } from 'react'

interface Shop {
    id: number;
    name: string;
    slug: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    logo: string;
    website: string;
    active: boolean;
    owner: string;
    totalProducts: number;
    createdAt: string;
    updatedAt: string;
  }

interface ShopPageProps {
    shop: Shop
}

export default function ShopPage({ shop }: ShopPageProps) {
  useEffect(() => {
    const getShopProducts = async () => {
      const res = await fetch(`http://localhost:8080/api/v1/shop/${shop.id}`)
      const data = await res.json()
    }

    getShopProducts()
  }, [shop.id])
  

  return (
    <main className="w-full flex flex-col items-center  h-auto">
      <section className="container flex flex-col">
    <ShopHeader shop={shop}/>
      <div className='px-4 font-medium'>
        {shop.description}
      </div>
      <div className='flex flex-col'>
        <h2 className='font-bold text-xl py-2 text-slate-700'>Products</h2>
        <ProductList shop={shop}/>
      </div>
      </section>
    </main>
  )
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:8080/api/v1/shops")
    const data = await res.json()
    const allPaths = data.map((shop: Shop) => {
        return {
            params: {
                slug: shop.slug.toString()
            }
        }
    })
    return {
      paths: allPaths,
      fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const res = await fetch("http://localhost:8080/api/v1/shops")
    const data = await res.json()
    const slug = context?.params?.slug as String ?? ''

    const shop = data.find((shop: Shop) => {
        return slug === shop.slug
    })

    return {
      // Passed to the page component as props
      props: { shop },
    }
}
  

