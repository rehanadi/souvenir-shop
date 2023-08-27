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

const PaymentMethodForm: React.FC = () => {
  const { data, isLoading, error } = useGetPaymentChannelsQuery(undefined)
  const channels: PaymentChannel[] = data?.paymentChannels || []

  const { shippingAddress, shippingMethod, paymentMethod } = useSelector(state => state.cart)

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
    dispatch(savePaymentMethod(e.target.value))
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
        <h5 style={{ fontSize: '1rem', fontWeight: '500' }}>{channel.name}</h5>
        <div className='list-group list-group-flush'>
          {channel.paymentMethods.map(method => (
            <label key={method.code} className='list-group-item py-3'>
              <input 
                className='form-check-input me-3' 
                type='radio' 
                name='paymentMethod' 
                value={method.code}
                onChange={handleChange}
                checked={method.code === paymentMethod}
              />
              <img src={method.image} alt={method.name} />
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
