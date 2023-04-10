import Image from 'next/image';
import React from 'react'
import { Product } from '@/utils/types';

interface MainProductCard {
    product: Product
}

export default function MainProductCard({ product } : MainProductCard) {
  return (
    <div>
        <div className='flex'>
          <Image
            src={product.image}
            height={500}
            width={500}
            alt={product.name}
          />
          <div className='p-4 flex flex-col'>
            <h3 className='font-bold text-xl'>{product.name}</h3>
            <p>{product.description}</p>
            <p className='font-medium text-lg'>${product.price}</p>
            <p className='bg-slate-400 max-w-min px-2 text-white rounded-md'>{product.brand}</p>
          </div>
        </div>
    </div>
  )
}
