import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@/config/constants'

export enum Tag {
  Categories = 'Categories',
  Products = 'Products',
  Orders = 'Orders'
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: [Tag.Categories, Tag.Products, Tag.Orders],
  endpoints: builder => ({})
})
