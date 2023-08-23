import { Suspense } from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CartList from "@/components/cart/CartList"

export const metadata = {
  title: 'Cart'
}
const CartPage: React.FC = () => {
  const breadcrumbItems = [{
    name: 'Cart'
  }]
  
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="row" style={{ marginBottom: '10rem' }}>
        <div className="col-10">
          <h1 className="mt-3 mb-5">Cart</h1>
          <Suspense>
            <CartList />
          </Suspense>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  )
}

export default CartPage
