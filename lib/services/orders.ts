import prisma from '@/lib/prisma/client'
import type { Cart } from "@/lib/types"
import { formatOrderItems, formatShippingAddress, validateOrder } from '@/utils/orders'

export const getOrderById = async (id: string) => {
  const order = await prisma.order.findUnique({ 
    where: { id },
    include: {
      paymentMethod: true,
      shippingAddress: true,
      items: true
    }
  })

  return order
}

export const createOrder = async (cart: Cart) => {
  const { error, userId } = await validateOrder(cart)
  if (error) throw new Error(error)

  const order = await prisma.order.create({
    select: {
      id: true
    },
    data: {
      user: {
        connect: {
          id: userId
        }
      },
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      totalPrice: cart.totalPrice,
      paymentMethod: {
        connect: {
          code: cart.paymentMethod.code
        }
      },
      shippingCourier: cart.shippingMethod.courier,
      shippingService: cart.shippingMethod.service,
      shippingAddress: {
        create: formatShippingAddress(cart.shippingAddress)
      },
      items: {
        createMany: {
          data: formatOrderItems(cart.cartItems)
        }
      }
    }
  })

  if (!order.id) throw new Error('Create order failed')
  return order
}
