'use client'

import { useState, useEffect, useTransition } from "react"
import { useRouter } from 'next/navigation'
import { 
  useDispatch, 
  useSelector, 
  useGetCouriersQuery, 
  saveShippingMethod 
} from "@/redux"
import { toast } from 'react-toastify'
import Alert from "@/components/ui/Alert"
import Spinner from '@/components/ui/Spinner'
import BackToShippingAddressLink from '@/components/checkout/BackToShippingAddressLink'
import ContinueButton from '@/components/checkout/ContinueButton'
import type { Courier } from "@/lib/types"
import { formatPrice } from "@/utils/products"
import { formatCourier } from "@/utils/shipping"
import styles from '@/styles/checkout.module.scss'

const ShippingMethodForm: React.FC = () => {
  const cart = useSelector(state => state.cart)
  const subdistrictId = cart.shippingAddress.subdistrictId
  const shippingMethod = cart.shippingMethod
  
  const { data, isLoading, error } = useGetCouriersQuery(subdistrictId)
  const couriers: Courier[] = data?.couriers || []

  const dispatch = useDispatch()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const loading = isLoading || isPending
  
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return

  if (!subdistrictId) {
    return (
      <>
        <Alert 
          variant="info" 
          text="Please complete shipping address first" 
        />
        <div className='mt-4'>
          <BackToShippingAddressLink />
        </div>
      </>
    )
  }

  if (isLoading) return <Spinner />
  if (error) return <Alert />

  const handleSaveShippingMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const courier = value.split('|')[0]
    const service = value.split('|')[1]
    const cost = Number(value.split('|')[2]) || 0

    // Save shipping method
    dispatch(saveShippingMethod({ courier, service, cost }))
    toast.success('Shipping method have been updated')
  }

  const handleGoToPaymentMethod = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!shippingMethod.courier) {
      toast.error('Please choose shipping method!')
      return
    }
    
    startTransition(() => {
      router.push('/checkout/payment-method')
    })
  }

  return (
    <form onSubmit={handleGoToPaymentMethod}>
      {couriers.map(courier => (
        <span key={courier.code}>
          {courier.costs.length > 0 && (
            <section key={courier.code} className="mb-4">
              <h5 className={styles.subSectionTitle}>{courier.name}</h5>
              <div className='list-group list-group-flush'>
                {courier.costs.map(service => (
                  <label key={service.service} className='list-group-item'>
                    {service.cost.map((cost, index) => (
                      <span key={index} className="d-flex justify-content-between">
                        <span>
                          <input 
                            className='form-check-input me-2' 
                            type='radio' 
                            name='shippingMethod' 
                            value={`${courier.code.toUpperCase()}|${service.service}|${cost.value}`}
                            onChange={handleSaveShippingMethod}
                            checked={
                              shippingMethod.courier === courier.code.toUpperCase() &&
                              shippingMethod.service === service.service
                            }
                          />
                          {` ${formatCourier(courier.code, service.service, cost.etd)}`}
                        </span>
                        <span>
                          {formatPrice(cost.value)}
                        </span>
                      </span>
                    ))}
                  </label>
                ))}
              </div>
            </section>
          )}
        </span>
      ))}
      <div className='mt-5 d-flex justify-content-between'>
        <BackToShippingAddressLink />
        <ContinueButton 
          text='Continue to payment method' 
          disabled={loading} 
        />
      </div>
    </form>
  )
}

export default ShippingMethodForm
