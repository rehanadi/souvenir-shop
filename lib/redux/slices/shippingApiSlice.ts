import { apiSlice } from "./apiSlice";
import { SHIPPING_URL } from "@/config/constants";

export const shippingApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProvinces: builder.query({
      query: () => `${SHIPPING_URL}/provinces`
    }),
    getCities: builder.query({
      query: (provinceId: string) => `${SHIPPING_URL}/cities?provinceId=${provinceId}`
    }),
    getSubdistricts: builder.query({
      query: (cityId: string) => `${SHIPPING_URL}/subdistricts?cityId=${cityId}`
    }),
    getCouriers: builder.query({
      query: (subdistrictId: string) => `${SHIPPING_URL}/couriers?subdistrictId=${subdistrictId}`
    })
  })
})

export const {
  useGetProvincesQuery,
  useGetCitiesQuery,
  useGetSubdistrictsQuery,
  useGetCouriersQuery
} = shippingApiSlice
