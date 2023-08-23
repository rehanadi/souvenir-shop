'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import Image from "next/image"
import { noImage, blurDataUrl } from '@/lib/utils/images'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch, useGetProductBySlugQuery, addToCart } from "@/lib/redux"
import useQty from '@/lib/hooks/useQty'
import type { BreadcumbItems, Product } from "@/lib/types"
import { formatPrice } from "@/lib/utils/products"
import styles from '@/styles/products.module.scss'

import Spinner from "@/components/ui/Spinner"
import Alert from "@/components/ui/Alert"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Rating from '@/components/products/Rating'
import RemainStock from '@/components/products/RemainStock'
import CategoryLinks from '@/components/categories/CategoryLinks'
import AddToCartButton from "@/components/cart/AddToCartButton"

export const metadata = {
  title: 'Product'
}

type ProductPageProps = React.FC<{ params: { slug: string } }>

const ProductPage: ProductPageProps = ({ params: { slug } }) => {
  const { data, isLoading, isError, isSuccess } = useGetProductBySlugQuery(slug)
  const product: Product = data?.product || {}

  const minimalQty: number = 1
  const [qty, setQty] = useState(minimalQty)

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

  const {
    maximalQty,
    isEmptyStock,
    isValidQty,
    decrementQty,
    incrementQty,
    validateQty
  } = useQty({ qty, minimalQty, setQty, product })

  const handleAddToCart = () => {
    if (!isValidQty) {
      toast.error('Please fill in valid quantity')
      return
    }

    dispatch(addToCart({ ...product, qty }))
    toast.success(`Product “${product?.name}” have been added to your cart`)
    setQty(minimalQty)
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="row" style={{ marginBottom: '10rem' }}>
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
            <li className='list-group-item mt-2'><h3>Rp{formatPrice(product?.price)}</h3></li>
            <li className='list-group-item mt-2'>
              {isEmptyStock ? (
                <div className="row">
                  <div className="col-12">
                    <span className='text-danger'>
                      Out of stock
                    </span>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="qty" className='form-label'>Quantity:</label>
                    <div className='input-group'>
                      <span className='input-group-btn'>
                        <button 
                          className='btn btn-default' 
                          onClick={decrementQty}
                        >
                          <FaMinus />
                        </button>
                      </span>
                      <input 
                        type='number' 
                        id="qty" 
                        name='qty' 
                        className='form-control' 
                        value={qty}
                        max={maximalQty}
                        onChange={e => setQty(Number(e.target.value))}
                        onBlur={validateQty}
                      />
                      <span className='input-group-btn'>
                        <button 
                          className='btn btn-default' 
                          onClick={incrementQty}
                        >
                          <FaPlus />
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <RemainStock 
                      isUseStock={product?.isUseStock} 
                      remainStock={product?.remainStock} 
                    />
                  </div>
                </div>
              )}
            </li>
          </ul>
          <ul className='list-group list-group-flush mt-4'>
            <li className='list-group-item'>
              <div className='d-grid gap-2'>
                <AddToCartButton 
                  disabled={!isValidQty} 
                  onClick={handleAddToCart}
                />
              </div>
            </li>
          </ul>
          <ul className='list-group list-group-flush mt-4'>
            <li className='list-group-item'>
              Categories: <CategoryLinks categories={product?.categories} />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductPage
