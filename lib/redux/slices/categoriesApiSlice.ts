import { apiSlice, Tag } from "./apiSlice";
import { CATEGORIES_URL, REVALIDATE_TIMES } from "@/config/constants";

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => CATEGORIES_URL,
      providesTags: [{ type: Tag.Categories, id: 'LIST' }],
      keepUnusedDataFor: REVALIDATE_TIMES
    }),
    getCategoryBySlug: builder.query({
      query: (slug: string) => `${CATEGORIES_URL}/${slug}`,
      providesTags: (result, error, arg) => [{ type: Tag.Categories, id: arg }],
      keepUnusedDataFor: REVALIDATE_TIMES
    })
  })
})

export const {
  useGetCategoriesQuery,
  useGetCategoryBySlugQuery
} = categoriesApiSlice
