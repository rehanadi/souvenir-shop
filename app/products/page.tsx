import Breadcrumb from "@/components/ui/Breadcrumb"

const ProductsPage: React.FC = () => {
  const breadcrumbItems = [{
    name: 'Products',
    url: '/products'
  }]
  
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
    </>
  )
}

export default ProductsPage
