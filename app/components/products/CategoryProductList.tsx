'use client'

import { useGetProductByCategorySlugQuery } from '@/lib/redux'
import ProductItem from '@/components/products/ProductItem'
import type { Product } from '@/lib/types'

type CategoryProductListProps = React.FC<{ slug: string }>

const CategoryProductList: CategoryProductListProps = ({ slug }) => {
  const { data } = useGetProductByCategorySlugQuery(slug)
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

export default CategoryProductList
