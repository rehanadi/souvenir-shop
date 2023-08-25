import { redirect } from "next/navigation"

const CheckoutPage: React.FC = () => {
  redirect('/checkout/shipping-address')
}

export default CheckoutPage
