import type { PaymentChannel as Channel, PaymentMethod as Method } from "@prisma/client";

export type PaymentChannel = Channel & {
  paymentMethods: Method[]
}

export type PaymentMethod = {
  name: string
  code: string
  minimumAmount: number
}

export type PaymentRequest = {
  orderId: string
  requestId?: string
  expiryDate?: string
  redirectURL: string
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  SUCCEDED = 'SUCCEDED',
  FAILED = 'FAILED'
}

export enum PaymentProvider {
  Xendit = 'Xendit',
  Midtrans = 'Midtrans'
}
