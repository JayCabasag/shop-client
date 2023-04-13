import Image from 'next/image';
import React from 'react'
import { Product } from '@/utils/types';

interface MainProductCard {
    product: Product
}

export default function MainProductCard({ product } : MainProductCard) {
  return (
    <div>
        <div className='flex flex-col md:flex-row'>
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
            <div className="mt-8 flex gap-4">
            <div>
              <label htmlFor="quantity" className="sr-only">Qty</label>
              <input
                type="number"
                id="quantity"
                min="1"
                defaultValue="1"
                className="outline-slate-400 w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            <button
              type="submit"
              className="block rounded bg-slate-400 px-5 py-3 text-xs font-medium text-white hover:bg-slate-500"
            >
              Add to Cart
            </button>
          </div>
          </div>
        </div>
    </div>
  )
}
