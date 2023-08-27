import type { Product } from "@prisma/client"
import type { ShippingAddress, ShippingMethod } from "@/lib/types"

export type CartItem = Product & {
  qty: number
}

export type Cart = {
  cartItems: CartItem[],
  shippingAddress: ShippingAddress,
  shippingMethod: ShippingMethod,
  paymentMethod: string,
  itemsPrice: number,
  shippingPrice: number,
  totalPrice: number
}
