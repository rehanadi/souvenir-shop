import prisma from '@/lib/prisma/client'
import { createInvoice } from '@/lib/xendit/invoice'
import { createPaymentLink } from '@/lib/midtrans/paymentLink'
import { PaymentProvider, type Order, type PaymentRequest } from '@/lib/types'

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

export const createPaymentRequest = async (order: Order): Promise<PaymentRequest> => {
  let paymentRequest = {
    orderId: '',
    requestId: '',
    expiryDate: '',
    redirectURL: ''
  } as PaymentRequest

  let result: any = {}

  if (order.paymentMethod.provider === PaymentProvider.Xendit) {
    result = await createInvoice(order)

    paymentRequest = {
      orderId: result.external_id,
      requestId: result.id,
      expiryDate: result.expiry_date,
      redirectURL: result.invoice_url
    }
  } else if (order.paymentMethod.provider === PaymentProvider.Midtrans) {
    result = await createPaymentLink(order)

    paymentRequest = {
      orderId: result.order_id,
      redirectURL: result.payment_url
    }
  } else {
    throw new Error('Invalid payment provider')
  }

  if (!paymentRequest.redirectURL) throw new Error('Create payment request failed')

  const updatedOrder = await prisma.order.update({
    select: {
      id: true
    },
    data: {
      paymentRequest: result
    },
    where: {
      id: order.id
    }
  })

  if (!updatedOrder.id) throw new Error('Update order payment request failed')

  return paymentRequest
}
