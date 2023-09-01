import { MidtransClient } from 'midtrans-node-client'
import nextBase64 from 'next-base64'
import type { Order } from "@/lib/types"
import * as config from "@/config/constants"

const snap = new MidtransClient.Snap({
  isProduction: config.PAYMENT_PRODUCTION,
  serverKey : process.env.MIDTRANS_SERVER_KEY as string,
  clientKey : process.env.MIDTRANS_CLIENT_KEY as string
});

export const createTransaction = async (order: Order) => {
  const redirectURL = await snap.createTransactionRedirectUrl({
    payment_type: order.paymentMethod.code.toLowerCase(),
    transaction_details: {
      order_id: order.id,
      gross_amount: order.totalPrice
    },
    customer_details: {
      first_name: order.shippingAddress.firstName,
      last_name: order.shippingAddress.lastName,
      email: order.user.email,
      phone: order.shippingAddress.phone,
      billing_address:  {
        address: order.shippingAddress.address,
        city: order.shippingAddress.city,
        postal_code: order.shippingAddress.postalCode
      }
    }
  })

  return { redirectURL }
}

export const createPaymentLink = async (order: Order) => {
  const body = {
    transaction_details: {
      order_id: order.id,
      gross_amount: order.totalPrice,
      payment_link_id: `${config.PAYMENT_LINK_PREFIX}-${order.id}`
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

  const res = await fetch(`${process.env.MIDTRANS_API_URL}/${config.PAYMENT_LINK_URL}`, {
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
