import ProductList from "@/components/products/ProductList"
import Breadcrumb from "@/components/ui/Breadcrumb"

const ProductsPage: React.FC = () => {
  const breadcrumbItems = [{
    name: 'Products'
  }]
  
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ProductList />
    </>
  )
}

export default ProductsPage
