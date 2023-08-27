import { apiSlice } from "./apiSlice";
import { PAYMENT_URL } from "@/config/constants";

export const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPaymentChannels: builder.query({
      query: () => `${PAYMENT_URL}/channels`
    })
  })
})

export const {
  useGetPaymentChannelsQuery
} = paymentApiSlice
