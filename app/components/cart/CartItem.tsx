import Link from "next/link"
import Image from "next/image"
import noImage from '@/public/assets/images/no-img.png'
import type { CartItem } from "@/lib/types"
import { formatPrice } from "@/lib/utils/products"

type CartItemProps = React.FC<{ item: CartItem }> 

const CartItem: CartItemProps = ({ item }) => {
  return (
    <div className="row">
      <div className="col-3">
        <Link href={`/products/${item?.slug}`}>
          <Image 
            src={item?.image || noImage} 
            width={150} 
            height={150} 
            alt={item?.name}
          />
        </Link>
      </div>
      <div className="col-3">
        <Link href={`/products/${item?.slug}`}>
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
