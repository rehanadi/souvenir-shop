'use client'

import ProductItem from './ProductItem'
import { useGetProductsQuery } from '@/lib/redux'
import type { Product } from '@prisma/client'

type ProductListProps = React.FC<{ limit?: number, col?: number }>

const ProductList: ProductListProps = ({ limit, col = 4 }) => {
  const { data } = useGetProductsQuery(undefined)
  const { products } = data || []
  const filteredProducts = limit ? products?.slice(0, limit) : products
  
  return (
    <div className='row'>
      {filteredProducts?.map((product: Product) => (
        <div key={product.id} className={`col-12 col-sm-6 col-lg-${12 / col} pb-5`}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
