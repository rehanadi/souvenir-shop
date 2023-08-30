import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@/config/constants'

export enum Tags {
  Categories = 'Categories',
  Products = 'Products',
  Orders = 'Orders'
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: [Tags.Categories, Tags.Products, Tags.Orders],
  endpoints: builder => ({})
})
