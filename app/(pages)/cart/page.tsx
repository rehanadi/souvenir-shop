import { Suspense } from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CartList from "@/components/cart/CartList"
import CartTotal from "@/components/cart/CartTotal"
import styles from '@/styles/cart.module.scss'

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
      <div className={styles.wrapper}>
        <div className="row">
          <div className="col-12">
            <h1 className="mt-3 mb-5">Cart</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <Suspense>
              <CartList />
            </Suspense>
          </div>
          <div className="col-3">
            <CartTotal />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage
