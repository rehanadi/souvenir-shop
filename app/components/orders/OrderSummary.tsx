'use client'

import { useGetOrderByIdQuery } from "@/lib/redux"
import type { Order } from "@prisma/client"
import { formatPrice } from "@/lib/utils/products"
import Spinner from "@/components/ui/Spinner"
import PaymentButton from "@/components/orders/PaymentButton"
import { PaymentStatus } from "@/lib/types"

type OrderSummaryProps = React.FC<{ id: string }>

const OrderSummary: OrderSummaryProps = ({ id }) => {
  const { data, isLoading } = useGetOrderByIdQuery(id)
  const order: Order = data?.order || {}

  if (isLoading) return <Spinner />

  return (
    <div className="card">
      <div className='card-body px-4 py-5'>
        <h4 className='card-title text-center pb-5'>Order summary</h4>
        <div className="pb-3 d-flex justify-content-between">
          <span style={{ fontWeight: '500' }}>Items:</span>
          <span>{formatPrice(order.itemsPrice)}</span>
        </div>
        <div className="pb-3 d-flex justify-content-between">
          <span style={{ fontWeight: '500' }}>Shipping:</span>
          <span>{formatPrice(order.shippingPrice)}</span>
        </div>
        <div className="pb-2 d-flex justify-content-between">
          <span style={{ fontWeight: '600' }}>Total:</span>
          <span>{formatPrice(order.totalPrice)}</span>
        </div>
        {order.paymentStatus === PaymentStatus.PENDING && (
          <div className='card-text pt-5'>
            <div className='d-grid gap-2'>
              <PaymentButton />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderSummary
