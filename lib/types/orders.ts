import type { 
  Order as OrderModel, 
  User,
  ShippingAddress, 
  PaymentMethod, 
  OrderItem
} from "@prisma/client"

export type Order = OrderModel & {
  user: User,
  shippingAddress: ShippingAddress, 
  paymentMethod: PaymentMethod,
  items: OrderItem[]
}
