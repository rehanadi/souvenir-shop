import type { Product } from "@prisma/client"
import type { ShippingAddress, ShippingMethod, PaymentMethod } from "@/lib/types"

export type CartItem = {
  readonly id: string
  name: string
  slug: string
  image?: string
  price: number
  isUseStock: boolean
  remainStock: number
  qty: number
}

export type Cart = {
  cartItems: CartItem[],
  shippingAddress: ShippingAddress,
  shippingMethod: ShippingMethod,
  paymentMethod: PaymentMethod,
  itemsPrice: number,
  shippingPrice: number,
  totalPrice: number
}
