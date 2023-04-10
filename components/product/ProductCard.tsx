import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Product, Shop } from '@/utils/types';


interface ProductCardProps {
    product: Product,
    shop: Shop
}

export default function ProductCard({ product, shop } : ProductCardProps) {
  return (
    <Link href={`/shop/${shop.slug}/${product.id}`} passHref legacyBehavior>
      <a>
      <div className=' w-48'>
        <Image
          src={product.image}
          height={50}
          width={200}
          alt={product.name}
        />  
        <h2 className='font-medium'>{product.name}</h2>
        <p>${product.price}</p>
      </div>
      </a>
    </Link>
  )
}
