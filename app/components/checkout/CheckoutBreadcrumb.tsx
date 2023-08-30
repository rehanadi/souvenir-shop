import CheckoutBreadcrumbItem from "@/components/checkout/CheckoutBreadcrumbItem"
import type { BreadcumbItems } from "@/lib/types"

const CheckoutBreadcrumb: React.FC = () => {

  const breadcrumbItems: BreadcumbItems = [{
    name: 'Shipping address',
    url: '/checkout/shipping-address'
  }, {
    name: 'Shipping method',
    url: '/checkout/shipping-method'
  }, {
    name: 'Payment method',
    url: '/checkout/payment-method'
  }]

  return (
    <ul className='nav d-flex justify-content-center'>
      {breadcrumbItems.map((item, index) => (
        <CheckoutBreadcrumbItem 
          key={index} 
          index={index} 
          item={item} 
        />
      ))}
    </ul>
  )
}

export default CheckoutBreadcrumb
