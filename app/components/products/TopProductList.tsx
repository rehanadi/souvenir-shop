'use client'

import { useGetTopProductsQuery } from '@/redux'
import type { Product } from '@/lib/types'
import ProductItem from '@/components/products/ProductItem'

const TopProductList: React.FC = () => {
  const { data } = useGetTopProductsQuery(null)
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

export default TopProductList
