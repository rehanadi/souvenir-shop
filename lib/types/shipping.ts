export type Province = {
  province_id: string
  province: string
}

export type City = {
  city_id: string
  province_id: string
  province: string
  type: string
  city_name: string
  postal_code: string
}

export type Subdistrict = {
  subdistrict_id: string
  province_id: string
  province: string
  city_id: string
  city: string
  type: string
  subdistrict_name: string
}

export type ShippingAddress = {
  firstName: string
  lastName: string
  address: string
  provinceId: string
  province?: string
  cityId: string
  city?: string
  subdistrictId: string
  subdistrict?: string
  postalCode: string
  phone: string
  company?: string
  comments?: string
}
