import type { Product } from "@prisma/client"
import type { ShippingAddress } from "@/lib/types"

export type CartItem = Product & {
  qty: number
}

export type CartState = {
  cartItems: CartItem[],
  shippingAddress: ShippingAddress,
  shippingMethod: string,
  paymentMethod: string,
  itemsPrice?: number,
  shippingPrice?: number,
  totalPrice?: number
}
