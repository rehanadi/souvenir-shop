import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@/config/constants'
import { TagTypes } from '@/lib/types'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: [TagTypes.Products],
  endpoints: builder => ({})
})
