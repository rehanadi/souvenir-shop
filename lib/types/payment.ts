import type { PaymentChannel as Channel, PaymentMethod } from "@prisma/client";

export type PaymentChannel = Channel & {
  paymentMethods: PaymentMethod[]
}
