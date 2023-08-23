import { apiSlice, Tags } from "./apiSlice";
import { PRODUCTS_URL, REVALIDATE_TIMES } from "@/config/constants";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => PRODUCTS_URL,
      providesTags: [{ type: Tags.Products, id: 'LIST' }],
      keepUnusedDataFor: REVALIDATE_TIMES
    }),
    getTopProducts: builder.query({
      query: () => `${PRODUCTS_URL}/top`,
      providesTags: [{ type: Tags.Products, id: 'TOP' }],
      keepUnusedDataFor: REVALIDATE_TIMES
    }),
    getProductBySlug: builder.query({
      query: (slug: string) => `${PRODUCTS_URL}/${slug}`,
      providesTags: (result, error, arg) => [{ type: Tags.Products, id: arg }],
      keepUnusedDataFor: REVALIDATE_TIMES
    }),
    getProductByCategorySlug: builder.query({
      query: (slug: string) => `${PRODUCTS_URL}/category/${slug}`,
      providesTags: (result, error, arg) => [{ type: Tags.Products, id: `Category ${arg}` }],
      keepUnusedDataFor: REVALIDATE_TIMES
    })
  })
})

export const {
  useGetProductsQuery,
  useGetTopProductsQuery,
  useGetProductBySlugQuery,
  useGetProductByCategorySlugQuery
} = productsApiSlice
