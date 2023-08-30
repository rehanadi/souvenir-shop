'use client'

import { useGetOrderByIdQuery } from "@/lib/redux"
import type { Order } from "@/lib/types"
import Spinner from "@/components/ui/Spinner"
import Alert from "@/components/ui/Alert"
import ShippingInfo from "@/components/orders/ShippingInfo"
import PaymentInfo from "@/components/orders/PaymentInfo"
import OrderList from "@/components/orders/OrderList"
import styles from '@/styles/orders.module.scss'

type OrderDetailsProps = React.FC<{ id: string }>

const OrderDetails: OrderDetailsProps = ({ id }) => {
  const { data, isLoading, error } = useGetOrderByIdQuery(id)
  const order: Order = data?.order || {}

  if (isLoading) return <Spinner />
  if (error) return <Alert />

  return (
    <>
      <section className={styles.section}>
        <h4 className={styles.sectionTitle}>Shipping</h4>
        <ShippingInfo order={order} />
      </section>
      <section className={styles.section}>
        <h4 className={styles.sectionTitle}>Payment</h4>
        <PaymentInfo order={order} />
      </section>
      <section className={styles.section}>
        <h4 className={styles.sectionTitle}>Order Items</h4>
        <OrderList items={order.items} />
      </section>
    </>
  )
}

export default OrderDetails
