import { apiSlice, Tag } from "./apiSlice";
import { ORDERS_URL } from "@/config/constants";
import type { Cart } from "@/lib/types";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getOrderById: builder.query({
      query: (id: string) => `${ORDERS_URL}/${id}`,
      providesTags: (result, error, arg) => [{ type: Tag.Orders, id: arg }],
      keepUnusedDataFor: 5
    }),
    createOrder: builder.mutation({
      query: (cart: Cart) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: cart
      })
    })
  })
})

export const {
  useGetOrderByIdQuery, 
  useCreateOrderMutation
} = ordersApiSlice
