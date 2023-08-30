'use client'

import { useRouter } from 'next/navigation'
import { useCreatePaymentRequestMutation } from '@/lib/redux'
import { MdPayment } from 'react-icons/md'
import { toast } from 'react-toastify'
import type { Order, PaymentRequest } from '@/lib/types'
import styles from '@/styles/orders.module.scss'

type PaymentButtonProps = React.FC<{ order: Order }>

const PaymentButton: PaymentButtonProps = ({ order }) => {
  const [createPaymentRequest, { isLoading }] = useCreatePaymentRequestMutation()

  const router = useRouter()

  const handlePay = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    try {
      const { paymentRequest } = await createPaymentRequest(order).unwrap() as { 
        paymentRequest: PaymentRequest
      }

      router.push(paymentRequest.redirectURL)
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong')
    }
  }

  return (
    <button 
      className='btn btn-success' 
      onClick={handlePay} 
      disabled={isLoading}
    >
      <span className={styles.btnIcon}>
        <MdPayment />
      </span>
      {' '}
      Pay Order
    </button>
  )
}

export default PaymentButton
