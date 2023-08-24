import Breadcrumb from "@/components/ui/Breadcrumb"

export const metadata = {
  title: 'Shipping Address'
}

const ShippingAddressPage: React.FC = () => {
  const breadcrumbItems = [{
    name: 'Cart',
    url: '/cart'
  }, {
    name: 'Shipping Address'
  }, {
    name: 'Shipping Method'
  }, {
    name: 'Payment Method'
  }]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
    </>
  )
}

export default ShippingAddressPage
