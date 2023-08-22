'use client'

import ProductItem from './ProductItem'
import type { Product } from '@prisma/client'
import { useGetProductsQuery } from '@/lib/redux'

type ProductListProps = React.FC<{ limit?: number, col?: number }>

const ProductList: ProductListProps = ({ limit, col = 4 }) => {
  const { data } = useGetProductsQuery(undefined)
  const products: Product[] = (limit ? data?.products?.slice(0, limit) : data?.products) || []
  
  return (
    <div className='row'>
      {products.map(product => (
        <div key={product.id} className={`col-12 col-sm-6 col-lg-${12 / col} pb-5`}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
