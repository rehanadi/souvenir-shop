import nextBase64 from 'next-base64'
import type { Order } from "@/lib/types"
import { MIDTRANS_PAYMENT_LINK_URL } from "@/config/constants"

export const createPaymentLink = async (order: Order) => {
  const body = {
    transaction_details: {
      order_id: order.id,
      gross_amount: order.totalPrice,
      payment_link_id: `souvenir-shop-${order.id}`
    },
    customer_required: false,
    usage_limit:  1,
    expiry: {
      start_time: '2030-01-01 18:00 +0700',
      duration: 20,
      unit: 'days'
    },
    enabled_payments: [
      order.paymentMethod.code.toLowerCase()
    ],
    /*
    item_details: order.items.map(item => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.qty
      }
    }),
    */
    customer_details: {
      first_name: order.shippingAddress.firstName,
      last_name: order.shippingAddress.lastName,
      email: order.user.email,
      phone: order.shippingAddress.phone
    }
  }

  const AUTH_STRING = nextBase64.encode(`${process.env.MIDTRANS_SERVER_KEY}:`)

  const res = await fetch(`${process.env.MIDTRANS_API_URL}/${MIDTRANS_PAYMENT_LINK_URL}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json',
      'Authorization': `Basic ${AUTH_STRING}` 
    }
  })

  const paymentLink = await res.json()

  if (!res.ok) throw new Error(paymentLink?.error_messages[0] || 'Create payment link failed')

  return paymentLink
}
