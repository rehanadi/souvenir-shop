import { Suspense } from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CartList from "@/components/cart/CartList"
import CartTotal from "@/components/cart/CartTotal"

/*
export const metadata = {
  title: 'Cart'
}
*/

const CartPage: React.FC = () => {
  const breadcrumbItems = [{
    name: 'Cart'
  }]
  
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className='wrapper'>
        <div className="row">
          <div className="col-12">
            <h1 className="mt-3 mb-5">Cart</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 mb-5">
            <Suspense>
              <CartList />
            </Suspense>
          </div>
          <div className="col-md-6 col-lg-3">
            <CartTotal />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage
