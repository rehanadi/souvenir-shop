import { apiSlice, Tags } from "./apiSlice";
import { CATEGORIES_URL, REVALIDATE_TIMES } from "@/config/constants";

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => CATEGORIES_URL,
      providesTags: [{ type: Tags.Categories, id: 'LIST' }],
      keepUnusedDataFor: REVALIDATE_TIMES
    }),
    getCategoryBySlug: builder.query({
      query: (slug: string) => `${CATEGORIES_URL}/${slug}`,
      providesTags: (result, error, arg) => [{ type: Tags.Categories, id: arg }],
      keepUnusedDataFor: REVALIDATE_TIMES
    })
  })
})

export const {
  useGetCategoriesQuery,
  useGetCategoryBySlugQuery
} = categoriesApiSlice
