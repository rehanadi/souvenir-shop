import Breadcrumb from "@/components/ui/Breadcrumb"

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
      <section>Cart</section>
    </>
  )
}

export default CartPage
