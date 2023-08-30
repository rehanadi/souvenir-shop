'use client'

import Image from "next/image"
import { noImage, blurDataUrl } from '@/utils/images'
import { useGetProductBySlugQuery } from "@/lib/redux"
import type { BreadcumbItems, Product } from "@/lib/types"
import { formatPrice } from "@/utils/products"
import styles from '@/styles/products.module.scss'

import Spinner from "@/components/ui/Spinner"
import Alert from "@/components/ui/Alert"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CategoryLinks from '@/components/categories/CategoryLinks'
import Rating from '@/components/products/Rating'
import AddProductToCart from '@/components/products/AddProductToCart'

export const metadata = {
  title: 'Product'
}

type ProductPageProps = React.FC<{ params: { slug: string } }>

const ProductPage: ProductPageProps = ({ params: { slug } }) => {
  const { data, isLoading, isError, isSuccess } = useGetProductBySlugQuery(slug)
  const product: Product = data?.product || {}

  if (isLoading) return <Spinner />
  if (isError) return <Alert />

  const breadcrumbItems: BreadcumbItems = [{
    name: 'Products',
    url: '/products'
  }]

  if (isSuccess) {
    if (!product) {
      return (
        <>
          <Breadcrumb items={breadcrumbItems} />
          <Alert text='Product not found!' /> 
        </>
      )
    } else {
      breadcrumbItems.push({
        name: product?.name
      })
    }
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className='wrapper'>
        <div className="row">
          <div className="col-5">
            <div className={styles.fullImageContainer}>
              <Image
                fill
                src={product?.image || noImage} 
                alt={product?.name}
                sizes='50vw'
                priority
                placeholder='blur'
                blurDataURL={blurDataUrl}
              />
            </div>
          </div>
          <div className="col-7">
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'><h1>{product?.name}</h1></li>
              <li className='list-group-item'>
                <Rating
                  value={product?.rating}
                  text={`${product?.reviewsCount} reviews`}
                />
              </li>
              <li className='list-group-item py-5'>
                <div dangerouslySetInnerHTML={{ __html: product?.description || '' }}></div>
              </li>
              <li className='list-group-item mt-2'><h3>{formatPrice(product?.price)}</h3></li>
            </ul>
            <AddProductToCart product={product} />
            <ul className='list-group list-group-flush mt-4'>
              <li className='list-group-item'>
                Categories: <CategoryLinks categories={product?.categories} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
