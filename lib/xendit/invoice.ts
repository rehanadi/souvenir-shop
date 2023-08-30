import xendit from "./client"
import type { Order } from "@/lib/types"
import * as config from '@/config/constants'

const { Invoice } = xendit
const invoiceSpecificOptions = {}
const inv = new Invoice(invoiceSpecificOptions)

export const createInvoice = async (order: Order) => {
  const invoice = await inv.createInvoice({
    externalID: order.id,
    payerEmail: order.user.email as string,
    description: config.PAYMENT_DESCRIPTION,
    amount: order.totalPrice,
    shouldSendEmail: config.SHOULD_SEND_EMAIL,
    successRedirectURL: `${config.SUCCESS_REDIRECT_URL}/${order.id}?status=SUCCEDED`,
    failureRedirectURL: `${config.FAILURE_REDIRECT_URL}/${order.id}?status=FAILED`,
    paymentMethods: [order.paymentMethod.code],
    currency: config.CURRENCY
  })
  
  return invoice
}
