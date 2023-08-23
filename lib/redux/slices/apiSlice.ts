import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@/config/constants'

export enum Tags {
  Products = 'Products',
  Categories = 'Categories'
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: [Tags.Products, Tags.Categories],
  endpoints: builder => ({})
})
