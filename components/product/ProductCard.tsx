import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Product, Shop } from '@/utils/types';


interface ProductCardProps {
    product: Product,
    shop?: Shop
}

export default function ProductCard({ product, shop } : ProductCardProps) {
  const link = !shop ? `/product/${product.id}` : `/shop/${shop.slug}/${product.id}`
  return (
    <Link href={link} passHref legacyBehavior className='w-full md:w-auto'>
      <a>
      <div className='w-48'>
        <Image
          src={product.image}
          height={50}
          width={200}
          alt={product.name}
        />  
        <h2 className='font-bold text-slate-700'>{product.name}</h2>
        <p>${product.price}</p>
      </div>
      </a>
    </Link>
  )
}
