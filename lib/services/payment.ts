import prisma from '@/lib/prisma/client'
import { createInvoice } from '@/lib/services/xendit'
import { createTransaction } from '@/lib/services/midtrans'
import { PaymentProvider, type Order } from '@/lib/types'

export const getPaymentChannels = async () => {
  const paymentChannels = await prisma.paymentChannel.findMany({
    orderBy: { position: 'asc' },
    include: { 
      paymentMethods: { 
        orderBy: { position: 'asc' } 
      }
    }
  })

  return paymentChannels
}

export const createPaymentRequest = async (order: Order): Promise<string> => {
  let paymentRequest: any = {}
  let redirectURL: string

  if (order.paymentMethod.provider === PaymentProvider.Xendit) {
    paymentRequest = await createInvoice(order)
    redirectURL = paymentRequest.invoice_url
  } else if (order.paymentMethod.provider === PaymentProvider.Midtrans) {
    paymentRequest = await createTransaction(order)
    redirectURL = paymentRequest.redirectURL
  } else {
    throw new Error('Invalid payment provider')
  }

  if (!redirectURL) throw new Error('Redirect URL not found')

  const updatedOrder = await prisma.order.update({
    select: { id: true },
    data: { paymentRequest },
    where: { id: order.id }
  })

  if (!updatedOrder.id) throw new Error('Update order payment request failed')

  return redirectURL
}
