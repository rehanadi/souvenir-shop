import ProductList from "@/components/products/ProductList"
import Breadcrumb from "@/components/ui/Breadcrumb"

export const metadata = {
  title: 'Products'
}

const ProductsPage: React.FC = () => {
  const breadcrumbItems = [{
    name: 'Products'
  }]
  
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ProductList col={3} />
    </>
  )
}

export default ProductsPage
