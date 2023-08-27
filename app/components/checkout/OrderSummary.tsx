'use client'

import { useState, useEffect } from "react"
import { useSelector } from '@/lib/redux'
import { formatPrice } from '@/lib/utils/products'
import styles from '@/styles/checkout.module.scss'

const OrderSummary: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return

  return (
    <>
      {cart?.cartItems?.length > 0 && (
        <table className='table table-borderless mb-5'>
          <thead>
            <tr>
              <th scope='col' className="bg-body-secondary" style={{ fontWeight: '500' }}>Product</th>
              <th scope='col' className="bg-body-secondary" style={{ fontWeight: '500' }}>Qty</th>
              <th scope='col' className="bg-body-secondary" style={{ fontWeight: '500' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart?.cartItems.map(item => (
              <tr key={item.id}>
                <td className="bg-body-secondary">{item.name}</td>
                <td className="bg-body-secondary text-right">{item.qty}</td>
                <td className="bg-body-secondary text-right">{formatPrice(item.qty * item.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
      <table className='table table-borderless' style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td className="bg-body-secondary" style={{ fontWeight: '500' }}>Subtotal:</td>
            <td className="bg-body-secondary text-right">{formatPrice(cart?.itemsPrice || 0)}</td>
          </tr>
          <tr>
            <td className="bg-body-secondary" style={{ fontWeight: '500' }}>Shipping:</td>
            <td className="bg-body-secondary text-right">{cart?.shippingPrice ? formatPrice(cart?.shippingPrice || 0) : '-'}</td>
          </tr>
          <tr>
            <td className="bg-body-secondary" style={{ fontWeight: '600', fontSize: '1.1rem' }}>Total:</td>
            <td className="bg-body-secondary text-right">{formatPrice(cart?.totalPrice || 0)}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default OrderSummary
