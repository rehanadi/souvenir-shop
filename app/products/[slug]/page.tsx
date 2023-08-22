'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image"
import noImage from '@/public/assets/images/no-img.png'
import { useDispatch, useGetProductBySlugQuery, addToCart } from "@/lib/redux"
import Spinner from "@/components/ui/Spinner"
import Alert from "@/components/ui/Alert"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Rating from '@/components/products/Rating'
import AddToCartButton from "@/components/cart/AddToCartButton"
import type { BreadcumbItems } from "@/lib/types"
import { formatPrice } from "@/lib/utils/products"

export const metadata = {
  title: 'Products'
}

type ProductPageProps = React.FC<{ params: { slug: string } }>

const ProductPage: ProductPageProps = ({ params: { slug } }) => {
  const { data, isLoading, isError, isSuccess } = useGetProductBySlugQuery(slug)
  const { product } = data || {}

  const router = useRouter()
  const dispatch = useDispatch()

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

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: 1 }))
    router.push('/cart')
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="row" style={{ marginBottom: '10rem' }}>
        <div className="col-5">
          <Image 
            src={product?.image || noImage} 
            width={400} 
            height={400} 
            alt={product?.name} 
          />
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
            <li className='list-group-item'>{product?.description}</li>
            <li className='list-group-item mt-2'><h3>Rp{formatPrice(product?.price)}</h3></li>
          </ul>
          <ul className='list-group list-group-flush mt-4'>
            <li className='list-group-item'>
              <div className='d-grid gap-2'>
                <AddToCartButton 
                  disabled={product?.remainStock === 0} 
                  onClick={handleAddToCart} 
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductPage
