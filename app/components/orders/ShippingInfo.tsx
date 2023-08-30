import { type Order, ShippingStatus } from "@/lib/types"
import SectionItem from "@/components/orders/SectionItem"
import Alert from "@/components/ui/Alert"

type ShippingInfoProps = React.FC<{ order: Order }>

const ShippingInfo: ShippingInfoProps = ({ order }) => {
  const { shippingAddress } = order

  return (
    <ul className='list-group list-group-flush'>
      <SectionItem 
        title='Name:' 
        content={`${shippingAddress.firstName} ${shippingAddress.lastName}`} 
      />
      <SectionItem 
        title='Phone:' 
        content={shippingAddress.phone} 
      />
      <SectionItem 
        title='Address:' 
        content={`
          ${shippingAddress.address}, 
          ${shippingAddress.subdistrict}, 
          ${shippingAddress.city}, 
          ${shippingAddress.province} 
          ${shippingAddress.postalCode}
        `}
      />
      <SectionItem 
        title='Comments:' 
        content={shippingAddress.comments || ''} 
      />
      <SectionItem 
        title='Courier:' 
        content={`${order.shippingCourier} - ${order.shippingService}`} 
      />
      <div className="mt-4">
        {order.shippingStatus === ShippingStatus.PENDING ? (
          <Alert variant="info" text="Not Delivered" />
        ) : order.shippingStatus === ShippingStatus.SUCCESS ? (
          <Alert variant="success" text={`Delivered on ${order.shippingDate}`} />
        ) : (
          <Alert variant="danger" text="Fail Delivered" />
        )}
      </div>
    </ul>
  )
}

export default ShippingInfo
