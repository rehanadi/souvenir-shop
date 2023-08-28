'use client'

import { useState, useEffect, useTransition } from "react"
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector, useGetPaymentChannelsQuery, savePaymentMethod } from "@/lib/redux"
import { toast } from 'react-toastify'
import type { PaymentChannel } from "@/lib/types"
import Alert from "@/components/ui/Alert"
import Spinner from '@/components/ui/Spinner'
import BackToShippingMethodLink from '@/components/checkout/BackToShippingMethodLink'
import ContinueButton from '@/components/checkout/ContinueButton'
import { formatPrice } from "@/utils/products"
import styles from '@/styles/checkout.module.scss'

const PaymentMethodForm: React.FC = () => {
  const { data, isLoading, error } = useGetPaymentChannelsQuery(undefined)
  const channels: PaymentChannel[] = data?.paymentChannels || []

  const { shippingAddress, shippingMethod, paymentMethod, totalPrice } = useSelector(state => state.cart)

  const dispatch = useDispatch()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  
  const loading = isLoading || isPending
  
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return

  if (!shippingMethod.courier) {
    return (
      <>
        <Alert 
          variant="info" 
          text="Please complete shipping method first" 
        />
        <div className='mt-4'>
          <BackToShippingMethodLink />
        </div>
      </>
    )
  }

  if (isLoading) return <Spinner />
  if (error) return <Alert />

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const name = value.split('|')[0]
    const code = value.split('|')[1]
    const minimumAmount = Number(value.split('|')[2]) || 1

    dispatch(savePaymentMethod({ name, code, minimumAmount }))
    toast.success('Payment method have been updated')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!shippingAddress.subdistrictId) {
      toast.error('Please complete shipping address!')
      return
    } else if (!shippingMethod.courier) {
      toast.error('Please choose shipping method!')
      return
    } else if (!paymentMethod) {
      toast.error('Please choose payment method!')
      return
    } else if (totalPrice < paymentMethod.minimumAmount) {
      toast.error(`Total amount must be equal or larger than ${formatPrice(paymentMethod.minimumAmount)}!`)
      return
    }

    // Complete order
    toast.success('Complete order')
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {channels.map(channel => (
        <section key={channel.code} className="mb-4">
        <h5 className={styles.subSectionTitle}>{channel.name}</h5>
        <div className="row mb-5">
          {channel.paymentMethods.map(method => (
            <label key={method.code} className='col-4 py-4'>
              <input 
                className='form-check-input me-3' 
                type='radio' 
                name='paymentMethod' 
                value={`${method.name}|${method.code}|${method.minimumAmount}`}
                onChange={handleChange}
                checked={method.code === paymentMethod.code}
              />
              <img src={method.image} alt={method.name} title={method.name} />
            </label>
          ))}
        </div>
      </section>
      ))}
      <div className='mt-5 d-flex justify-content-between'>
        <BackToShippingMethodLink />
        <ContinueButton 
          text='Complete order' 
          disabled={loading} 
        />
      </div>
    </form>
  )
}

export default PaymentMethodForm
