import { apiSlice } from "../apiSlice";
import { PRODUCTS_URL, REVALIDATE_TIMES } from "@/config/constants";
import { Product, Products, TagTypes } from "@/lib/types";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => PRODUCTS_URL,
      providesTags: (result = [], error, arg) => [{ type: TagTypes.Products, id: 'LIST' }],
      keepUnusedDataFor: REVALIDATE_TIMES
    }),
    getProductById: builder.query({
      query: (productId: string) => `${PRODUCTS_URL}/${productId}`,
      providesTags: (result, error, arg) => [{ type: TagTypes.Products, id: arg }],
      keepUnusedDataFor: REVALIDATE_TIMES
    })
  })
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery
} = productsApiSlice

export type GetProductsQuery = ReturnType<typeof useGetProductsQuery>
export type GetProductByIdQuery = ReturnType<typeof useGetProductByIdQuery>
