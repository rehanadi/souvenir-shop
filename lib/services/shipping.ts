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
  if (!provinceId) provinceId = '0'

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
  if (!cityId) cityId = '0'

  const res = await fetch(`${process.env.RAJAONGKIR_API_URL}/subdistrict?city=${cityId}`, {
    headers: {
      'key': process.env.RAJAONGKIR_API_KEY || ''
    }
  })
  const data = await res.json()
  const subdistricts = data?.rajaongkir?.results || []

  return subdistricts
}
