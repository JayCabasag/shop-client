import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

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

interface ShopListProps {
  shops: Shop[]
}

export default function ShopsList({ shops } : ShopListProps) {
  return (
    <div>
      <h1 className='font-bold text-2xl py-2'>Shops</h1>
      <div className='w-full p-2 flex flex-wrap gap-8 items-center justify-center'>
        {shops.map((shop: Shop, index: number) => {
          return (
            <Link href={`/shop/${shop.slug}`} key={index} passHref legacyBehavior>
              <a>
                <div className='flex gap-2 p-4'>
                  <Image 
                    src={shop.logo}
                    height={100}
                    width={100}
                    alt={shop.name}
                  />
                  <div>
                    <h2 className='font-bold'>{shop.name}</h2>
                    <p>Official Store</p>
                  </div>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
