'use client'

import Image from "next/image"
import { FaCartPlus } from 'react-icons/fa'
import noImage from '@/public/assets/images/no-img.png'
import { useGetProductBySlugQuery } from "@/lib/redux"
import Spinner from "@/components/ui/Spinner"
import Alert from "@/components/ui/Alert"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Rating from '@/components/products/Rating'

type ProductPageProps = React.FC<{ params: { slug: string } }>

const ProductPage: ProductPageProps = ({ params: { slug } }) => {
  const { data, isLoading, isError, isSuccess } = useGetProductBySlugQuery(slug)
  const { product } = data || {}

  if (isLoading) return <Spinner />
  if (isError) return <Alert />

  if (isSuccess && !product) {
    const breadcrumbItems = [{
      name: 'Products',
      url: '/products'
    }]

    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <Alert text='Product not found!' /> 
      </>
    )
  }

  const breadcrumbItems = [{
    name: 'Products',
    url: '/products'
  }, {
    name: product?.name
  }]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="row" style={{ marginBottom: '10rem' }}>
        <div className="col-5">
          <Image 
            src={product?.image || noImage} 
            width={350} 
            height={350} 
            alt={product?.name} 
          />
        </div>
        <div className="col-7">
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><h1>{product?.name}</h1></li>
            <li className='list-group-item'>
              <Rating
                value={product?.rating}
                text={`${product?.numReviews} reviews`}
              />
            </li>
            <li className='list-group-item'>{product?.description}</li>
            <li className='list-group-item mt-2'><h3>${product.price}</h3></li>
          </ul>
          <ul className='list-group list-group-flush mt-4'>
            <li className='list-group-item'>
              <div className='d-grid gap-2'>
                <button className='btn btn-success' type='button'>
                  <span style={{ marginRight: '.5rem' }}><FaCartPlus /></span> Add to Cart
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductPage
