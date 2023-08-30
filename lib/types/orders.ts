import type { 
  Order as OrderModel, 
  ShippingAddress, 
  PaymentMethod, 
  OrderItem 
} from "@prisma/client"

export type Order = OrderModel & {
  shippingAddress: ShippingAddress, 
  paymentMethod: PaymentMethod,
  items: OrderItem[]
}
