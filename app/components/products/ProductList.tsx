'use client'

import ProductItem from './ProductItem'
import { useGetProductsQuery } from '@/lib/redux'
import type { Product } from '@/lib/types'

const ProductList: React.FC = () => {
  const { data } = useGetProductsQuery(undefined)
  const { products } = data || []
  
  return (
    <div className='row'>
      {products?.map((product: Product) => (
        <div key={product.id} className="col-12 col-sm-6 col-lg-3 pb-5">
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
