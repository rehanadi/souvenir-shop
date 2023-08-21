import type { Product } from "@prisma/client"

export type CartItem = Product & {
  qty: number
}

export type CartState = {
  cartItems: CartItem[],
  shippingAddress: {},
  paymentMethod: string,
  itemsPrice?: number,
  shippingPrice?: number,
  totalPrice?: number
}
