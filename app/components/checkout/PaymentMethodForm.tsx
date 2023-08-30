'use client'

import { useState, useEffect, useTransition } from "react"
import { useRouter } from 'next/navigation'
import { 
  useDispatch, 
  useSelector, 
  useGetPaymentChannelsQuery, 
  savePaymentMethod,
  useCreateOrderMutation,
  clearCart
} from "@/redux"
import { toast } from 'react-toastify'
import type { Order } from "@prisma/client"
import type { PaymentChannel } from "@/lib/types"
import Alert from "@/components/ui/Alert"
import Spinner from '@/components/ui/Spinner'
import BackToShippingMethodLink from '@/components/checkout/BackToShippingMethodLink'
import ContinueButton from '@/components/checkout/ContinueButton'
import styles from '@/styles/checkout.module.scss'

const PaymentMethodForm: React.FC = () => {
  const cart = useSelector(state => state.cart)
  const { shippingMethod, paymentMethod } = cart

  const { data, isLoading: loadingChannels, error: errorChannels } = useGetPaymentChannelsQuery(null)
  const channels: PaymentChannel[] = data?.paymentChannels || []

  const [createOrder, { isLoading: loadingOrder, error: errorOrder }] = useCreateOrderMutation()
  const errorOrderMsg = errorOrder ? JSON.parse(JSON.stringify(errorOrder))['data']['message'] : null

  const dispatch = useDispatch()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  
  const loading = loadingChannels || loadingOrder || isPending
  
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return

  if (!shippingMethod.courier && !isPending) {
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

  if (loadingChannels) return <Spinner />
  if (errorChannels) return <Alert />

  const handleSavePaymentMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const name = value.split('|')[0]
    const code = value.split('|')[1]
    const minimumAmount = Number(value.split('|')[2]) || 1

    dispatch(savePaymentMethod({ name, code, minimumAmount }))
    toast.success('Payment method have been updated')
  }

  const handleCreateOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { order } = await createOrder(cart).unwrap() as { order: Order }
      toast.success('Order have been created')
      
      startTransition(() => {
        dispatch(clearCart(null))
        router.push(`/orders/${order.id}`)
      })
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong')
    }
  }

  return (
    <form onSubmit={handleCreateOrder}>
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
                  onChange={handleSavePaymentMethod}
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
      {errorOrderMsg && (
        <div className="mt-5">
          <Alert text={errorOrderMsg} />
        </div>
      )}
    </form>
  )
}

export default PaymentMethodForm
