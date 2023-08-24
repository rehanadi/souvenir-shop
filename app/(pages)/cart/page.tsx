import { Suspense } from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CartList from "@/components/cart/CartList"
import CartTotals from "@/components/cart/CartTotals"

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
      <div className="row">
        <div className="col-12">
          <h1 className="mt-3 mb-5">Cart</h1>
        </div>
      </div>
      <div className="row" style={{ marginBottom: '10rem' }}>
        <div className="col-9">
          <Suspense>
            <CartList />
          </Suspense>
        </div>
        <div className="col-3">
          <CartTotals />
        </div>
      </div>
    </>
  )
}

export default CartPage
