'use client'

import ProductItem from './ProductItem'
import { useGetProductsQuery } from '@/lib/redux'
import type { GetProductsQuery } from '@/lib/redux'
import type { Product } from '@/lib/types'

const ProductList: React.FC = () => {
  const { data } = useGetProductsQuery<GetProductsQuery>(undefined)
  const { products } = data || []
  
  return (
    <div className='row'>
      {products?.map((product: Product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
