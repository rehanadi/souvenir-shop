import Link from "next/link"
import Image from "next/image"
import { noImage, blurDataUrl } from '@/lib/utils/images'
import type { CartItem } from "@/lib/types"
import { formatPrice } from "@/lib/utils/products"
import styles from '@/styles/cart.module.scss'

type CartItemProps = React.FC<{ item: CartItem }> 

const CartItem: CartItemProps = ({ item }) => {
  return (
    <div className="row my-1">
      <div className="col-2">
        <Link href={`/products/${item?.slug}`}>
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
        </Link>
      </div>
      <div className="col-4">
        <Link className='text-success' href={`/products/${item?.slug}`}>
          {item?.name}
        </Link>
      </div>
      <div className="col-2">Rp{formatPrice(item?.price)}</div>
      <div className="col-2">{item?.qty}</div>
      <div className="col-2">Delete</div>
    </div>
  )
}

export default CartItem
