import { ProductCard } from '@/components/product';
import React, { useEffect, useState } from 'react'
import { Shop, Product } from '@/utils/types';

interface ProductListProps {
  shop: Shop
}

export default function ProductList({ shop } : ProductListProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [noProducts, setNoProducts] = useState(false)
  useEffect(() => {
    const getProducts = async () => {
        const res = await fetch(`http://localhost:8080/api/v1/products?shop=${shop.id}`)
        const data = await res.json()
        setProducts(data)
        setNoProducts(data.length <= 0)
    }
    getProducts()
  }, [shop.id])

  return (
    <div className='flex flex-wrap gap-4'>
      {products?.map((product: Product, index: number) => {
        return <ProductCard key={index} product={product} shop={shop}/>
      })}
      {noProducts && (
        <div>No products...</div>
      )}
    </div>
  )
}
