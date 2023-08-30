import Image from "next/image"
import { noImage, blurDataUrl } from '@/utils/images'
import { formatAmount, formatPrice } from "@/utils/products"
import type { OrderItem } from "@prisma/client"
import styles from '@/styles/orders.module.scss'

type OrderItemProps = React.FC<{ item: OrderItem }> 

const OrderItem: OrderItemProps = ({ item }) => {
  return (
    <div className="row my-1">
      <div className="col-2">
        <div className={styles.itemImageContainer}>
          <Image 
            fill
            src={item?.image || noImage} 
            alt={item?.name}
            sizes='25vw'
            placeholder='blur'
            blurDataURL={blurDataUrl}
          />
        </div>
      </div>
      <div className="col-4">{item?.name}</div>
      <div className="col-2">{formatPrice(item.price)}</div>
      <div className="col-1">{formatAmount(item.qty)}</div>
      <div className="col-3">{formatPrice(item.price * item.qty)}</div>
    </div>
  )
}

export default OrderItem
