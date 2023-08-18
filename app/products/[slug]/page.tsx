'use client'

import Link from "next/link"
import Image from "next/image"
import { useGetProductBySlugQuery } from "@/lib/redux"
import Spinner from "@/components/ui/Spinner"
import Alert from "@/components/ui/Alert"
import Breadcrumb from "@/components/ui/Breadcrumb"

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
      <div className="row">
        <div className="col-4">

        </div>
        <div className="col-8">

        </div>
      </div>
    </>
  )
}

export default ProductPage
