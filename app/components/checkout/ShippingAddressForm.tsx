'use client'

import { useState, useEffect, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { 
  useDispatch, 
  useSelector,
  useGetProvincesQuery, 
  useGetCitiesQuery, 
  useGetSubdistrictsQuery, 
  saveShippingAddress
} from '@/lib/redux'
import { toast } from 'react-toastify'
import type { Province, City, Subdistrict } from '@/lib/types'
import Alert from "@/components/ui/Alert"
import BackToCartLink from '@/components/checkout/BackToCartLink'
import ContinueButton from '@/components/checkout/ContinueButton'
import Required from '@/components/checkout/Required'
import styles from '@/styles/checkout.module.scss'

const ShippingAddressForm: React.FC = () => {
  const cart = useSelector(state => state.cart)
  const [shippingAddress, setShippingAddress] = useState(cart.shippingAddress)

  const { data: dataProvinces, isLoading: loadingProvinces } = useGetProvincesQuery(null)
  const provinces: Province[] = dataProvinces?.provinces || []

  const { data: dataCities, isLoading: loadingCities } = useGetCitiesQuery(shippingAddress.provinceId)
  const cities: City[] = dataCities?.cities || []

  const { data: dataSubdistricts, isLoading: loadingSubdistricts } = useGetSubdistrictsQuery(shippingAddress.cityId)
  const subdistricts: Subdistrict[] = dataSubdistricts?.subdistricts || []

  const dispatch = useDispatch()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const loading = loadingProvinces || loadingCities || loadingSubdistricts || isPending
  
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return

  if (!cart.itemsPrice) {
    return (
      <>
        <Alert 
          variant="info" 
          text="Please fill in cart first" 
        />
        <div className='mt-4'>
          <BackToCartLink />
        </div>
      </>
    )
  }

  type ChangeEvent = (
    React.ChangeEvent<HTMLInputElement> | 
    React.ChangeEvent<HTMLTextAreaElement> | 
    React.ChangeEvent<HTMLSelectElement>
  )

  const handleChange = (e: ChangeEvent) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeProvince = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceId = e.target.value
    const province = provinces.find(
      province => province.province_id === provinceId
    )?.province || ''

    setShippingAddress({
      ...shippingAddress,
      provinceId,
      province,
      cityId: '',
      city: '',
      subdistrictId: '',
      subdistrict: ''
    })
  }

  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityId = e.target.value
    const city = cities.find(
      city => city.city_id === cityId
    )?.city_name || ''

    setShippingAddress({
      ...shippingAddress,
      cityId,
      city,
      subdistrictId: '',
      subdistrict: ''
    })
  }

  const handleChangeSubdistrict = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subdistrictId = e.target.value
    const subdistrict = subdistricts.find(
      subdistrict => subdistrict.subdistrict_id === subdistrictId
    )?.subdistrict_name || ''
    
    setShippingAddress({
      ...shippingAddress,
      subdistrictId,
      subdistrict
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate shipping address
    if (
      !shippingAddress.firstName || !shippingAddress.lastName ||
      !shippingAddress.address || !shippingAddress.provinceId ||
      !shippingAddress.cityId || !shippingAddress.subdistrictId ||
      !shippingAddress.postalCode || !shippingAddress.phone
    ) {
      toast.error('Please complete shipping address form!')
      return
    }

    startTransition(() => {
      dispatch(saveShippingAddress(shippingAddress))
      toast.success('Shipping address have been saved')
      router.push('/checkout/shipping-method')
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={`form-row row ${styles.formRow}`}>
        <div className='form-group col-md-6'>
          <label htmlFor='firstName'>First name <Required /></label>
          <input 
            type='text' 
            className='form-control' 
            id='firstName' 
            name='firstName' 
            value={shippingAddress.firstName}
            onChange={handleChange}
            required 
          />
        </div>
        <div className='form-group col-md-6'>
          <label htmlFor='lastName'>Last name <Required /></label>
          <input 
            type='text' 
            className='form-control' 
            id='lastName' 
            name='lastName' 
            value={shippingAddress.lastName} 
            onChange={handleChange}
            required 
          />
        </div>
      </div>

      <div className={`form-group ${styles.formRow}`}>
        <label htmlFor='address'>Address <Required /></label>
        <textarea 
          className='form-control' 
          id='address' 
          name='address' 
          rows={3} 
          value={shippingAddress.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className={`form-row row ${styles.formRow}`}>
        <div className='form-group col-md-6'>
          <label htmlFor='provinceId'>Province <Required /></label>
          <select 
            id='provinceId' 
            name='provinceId'
            className='form-control' 
            required 
            value={shippingAddress.provinceId}
            onChange={handleChangeProvince}
          >
            <option value=''></option>
            {provinces?.map(province => (
              <option 
                key={province.province_id} 
                value={province.province_id}
              >{province.province}</option>
            ))}
          </select>
        </div>
        <div className='form-group col-md-6'>
          <label htmlFor='cityId'>City <Required /></label>
          <select 
            id='cityId' 
            name='cityId' 
            className='form-control' 
            required
            value={shippingAddress.cityId}
            onChange={handleChangeCity}
            >
            <option value=''></option>
            {cities?.map(city => (
              <option 
                key={city.city_id} 
                value={city.city_id}
              >{`${city.type} ${city.city_name}`}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={`form-row row ${styles.formRow}`}>
        <div className='form-group col-md-6'>
          <label htmlFor='subdistrictId'>Subdistrict <Required /></label>
          <select 
            id='subdistrictId' 
            name='subdistrictId' 
            className='form-control' 
            value={shippingAddress.subdistrictId}
            onChange={handleChangeSubdistrict}
            required
          >
            <option value=''></option>
            {subdistricts?.map(subdistrict => (
              <option 
                key={subdistrict.subdistrict_id} 
                value={subdistrict.subdistrict_id}
              >{subdistrict.subdistrict_name}</option>
            ))}
          </select>
        </div>
        <div className='form-group col-md-6'>
          <label htmlFor='postalCode'>Postal code <Required /></label>
          <input 
            type='number' 
            className='form-control' 
            id='postalCode' 
            name='postalCode' 
            maxLength={6} 
            value={shippingAddress.postalCode}
            onChange={handleChange}
            required 
          />
        </div>
      </div>

      <div className={`form-row row ${styles.formRow}`}>
        <div className='form-group col-md-6'>
          <label htmlFor='phone'>Phone number <Required /></label>
          <input 
            type='number' 
            className='form-control' 
            id='phone' 
            name='phone' 
            maxLength={20} 
            value={shippingAddress.phone}
            onChange={handleChange}
            required 
          />
        </div>
        <div className='form-group col-md-6'>
          <label htmlFor='company'>Company (optional)</label>
          <input 
            type='text' 
            className='form-control' 
            id='company' 
            name='company' 
            value={shippingAddress.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={`form-group ${styles.formRow}`}>
        <label htmlFor='comments'>Comments (optional)</label>
        <textarea 
          className='form-control' 
          id='comments' 
          name='comments' 
          rows={3}
          value={shippingAddress.comments}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className={`form-group mt-5 d-flex justify-content-between ${styles.formRow}`}>
        <BackToCartLink />
        <ContinueButton 
          text='Continue to shipping method' 
          disabled={loading} 
        />
      </div>
    </form>
  )
}

export default ShippingAddressForm
