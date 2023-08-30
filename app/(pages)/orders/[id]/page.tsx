import OrderDetails from "@/components/orders/OrderDetails"
import OrderSummary from "@/components/orders/OrderSummary"
import Breadcrumb from "@/components/ui/Breadcrumb"

export const metadata = {
  title: 'Order'
}

type OrderPageProps = React.FC<{ params: { id: string } }>

const OrderPage: OrderPageProps = ({ params: { id } }) => {
  const breadcrumbItems = [{
    name: 'Orders',
    url: '/orders'
  }]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="wrapper">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-3 mb-5" style={{ fontSize: '1.5rem' }}>
              Order “{id}”
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <OrderDetails id={id} />
          </div>
          <div className="col-3">
            <OrderSummary id={id} />
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderPage
