'use client'

import Spinner from "@/components/ui/Spinner"
import Alert from "@/components/ui/Alert"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CategoryProductList from "@/components/products/CategoryProductList"
import { useGetCategoryBySlugQuery } from "@/redux"
import type { Category } from "@prisma/client"
import type { BreadcumbItems } from "@/lib/types"

export const metadata = {
  title: 'Category'
}

type CategoryPageProps = React.FC<{ params: { slug: string } }>

const CategoryPage: CategoryPageProps = ({ params: { slug } }) => {
  const { data, isLoading, isError, isSuccess } = useGetCategoryBySlugQuery(slug)
  const category: Category = data?.category || {}

  if (isLoading) return <Spinner />
  if (isError) return <Alert />

  const breadcrumbItems: BreadcumbItems = [{
    name: 'Categories',
    url: '/categories'
  }]

  if (isSuccess) {
    if (!category) {
      return (
        <>
          <Breadcrumb items={breadcrumbItems} />
          <Alert text='Category not found!' /> 
        </>
      )
    } else {
      breadcrumbItems.push({
        name: category?.name
      })
    }
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className='wrapper'>
        <div className="row">
          <div className="col-12">
            <h1 className="mt-3 mb-5" style={{ fontSize: '1.5rem' }}>
              Products for Category “{category?.name}”
            </h1>
            <CategoryProductList slug={category?.slug} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryPage
