import { apiSlice } from "../apiSlice";
import { PRODUCTS_URL, REVALIDATE_TIMES } from "@/config/constants";
import { TagTypes } from "@/lib/types";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => PRODUCTS_URL,
      providesTags: [{ type: TagTypes.Products, id: 'LIST' }],
      keepUnusedDataFor: REVALIDATE_TIMES
    }),
    getProductBySlug: builder.query({
      query: (slug: string) => `${PRODUCTS_URL}/${slug}`,
      providesTags: (result, error, arg) => [{ type: TagTypes.Products, id: arg }],
      keepUnusedDataFor: REVALIDATE_TIMES
    })
  })
})

export const {
  useGetProductsQuery,
  useGetProductBySlugQuery
} = productsApiSlice
