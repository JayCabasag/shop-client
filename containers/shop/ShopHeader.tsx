import Image from 'next/image'
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

interface ShopHeaderProps {
    shop: Shop
}

export default function ShopHeader({ shop } : ShopHeaderProps) {
  return (
    <div className='flex gap-2 p-4'>
    <Image
      src={shop.logo}
      height={70}
      width={100}
      alt={shop.name}
    />
    <div className='ml-4'>
      <h2 className='font-bold text-2xl py-2'>{shop.name}</h2>
      <p className='text-slate-400 italic'>Official Store</p>
    </div>
  </div>
  )
}
