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
      <div className="row" style={{ marginBottom: '10rem' }}>
        <div className="col-12">
          <h1 className="mt-3 mb-5">Products</h1>
          <ProductList />
        </div>
      </div>
    </>
  )
}

export default ProductsPage
