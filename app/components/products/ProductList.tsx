'use client'

import { useGetProductsQuery } from '@/redux'
import type { Product } from '@/lib/types'
import ProductItem from '@/components/products/ProductItem'

const ProductList: React.FC = () => {
  const { data } = useGetProductsQuery(null)
  const products: Product[] = data?.products || []
  
  return (
    <div className='row'>
      {products.map(product => (
        <div key={product.id} className={`col-6 col-md-4 col-lg-3 pb-5`}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
