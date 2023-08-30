import { ORIGIN_SUBDISTRICT_ID, DESTINATION_TYPE, WEIGHT_IN_GRAMS, COURIERS } from "@/config/constants"

export const getProvinces = async () => {
  const res = await fetch(`${process.env.RAJAONGKIR_API_URL}/province`, {
    headers: {
      'key': process.env.RAJAONGKIR_API_KEY || ''
    }
  })
  const data = await res.json()
  const provinces = data?.rajaongkir?.results || []

  return provinces
}

export const getCities = async (provinceId: string) => {
  if (!provinceId) return []

  const res = await fetch(`${process.env.RAJAONGKIR_API_URL}/city?province=${provinceId}`, {
    headers: {
      'key': process.env.RAJAONGKIR_API_KEY || ''
    }
  })
  const data = await res.json()
  const cities = data?.rajaongkir?.results || []

  return cities
}

export const getSubdistricts = async (cityId: string) => {
  if (!cityId) return []

  const res = await fetch(`${process.env.RAJAONGKIR_API_URL}/subdistrict?city=${cityId}`, {
    headers: {
      'key': process.env.RAJAONGKIR_API_KEY || ''
    }
  })
  const data = await res.json()
  const subdistricts = data?.rajaongkir?.results || []

  return subdistricts
}

export const getCouriers = async (subdistrictId: string) => {
  if (!subdistrictId) return []

  const body = {
    origin: ORIGIN_SUBDISTRICT_ID,
    originType: DESTINATION_TYPE,
    destination: subdistrictId,
    destinationType: DESTINATION_TYPE,
    weight: WEIGHT_IN_GRAMS,
    courier: COURIERS
  }

  const res = await fetch(`${process.env.RAJAONGKIR_API_URL}/cost`, {
    method: 'POST',
    headers: {
      'key': process.env.RAJAONGKIR_API_KEY || '',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const data = await res.json()
  const couriers = data?.rajaongkir?.results || []

  return couriers
}
