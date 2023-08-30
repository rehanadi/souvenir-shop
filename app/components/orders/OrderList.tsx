'use client'

import OrderItem from '@/components/orders/OrderItem'
import type { OrderItem as Item } from "@prisma/client"

type CartListProps = React.FC<{ items: Item[] }>

const CartList: CartListProps = ({ items }) => {

  if (items.length === 0) return

  return (
    <ul className='list-group list-group-flush'>
      {items.map(item => (
        <li key={item.id} className='list-group-item'>
          <OrderItem item={item} />
        </li>
      ))}
    </ul>
  )
}

export default CartList
