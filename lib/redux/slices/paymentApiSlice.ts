import { apiSlice } from "./apiSlice";
import { PAYMENT_URL } from "@/config/constants";
import type { Order } from "@/lib/types";

export const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPaymentChannels: builder.query({
      query: () => `${PAYMENT_URL}/channels`
    }),
    createPaymentRequest: builder.mutation({
      query: (order: Order) => ({
        url: `${PAYMENT_URL}/request`,
        method: 'POST',
        body: order
      })
    })
  })
})

export const {
  useGetPaymentChannelsQuery,
  useCreatePaymentRequestMutation
} = paymentApiSlice
