import { type Order, PaymentStatus } from "@/lib/types"
import SectionItem from "@/components/orders/SectionItem"
import Alert from "@/components/ui/Alert"

type PaymentInfoProps = React.FC<{ order: Order }>

const PaymentInfo: PaymentInfoProps = ({ order }) => {
  const { paymentMethod } = order

  return (
    <ul className='list-group list-group-flush'>
      <SectionItem 
        title='Method:' 
        content={paymentMethod.name}
        image={paymentMethod.image}
      />
      <div className="mt-4">
        {order.paymentStatus === PaymentStatus.PENDING ? (
          <Alert variant="info" text="Not Paid" />
        ) : order.paymentStatus === PaymentStatus.SUCCESS ? (
          <Alert variant="success" text={`Paid on ${order.paymentDate}`} />
        ) : (
          <Alert variant="danger" text="Fail Paid" />
        )}
      </div>
    </ul>
  )
}

export default PaymentInfo
