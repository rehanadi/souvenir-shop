'use client'

import { useState, useEffect } from "react"
import { useSelector } from "@/lib/redux"
import { formatPrice } from "@/utils/products"
import CheckoutLink from "@/components/cart/CheckoutLink"

const CartTotal: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return

  return (
    <div className="card">
      <div className='card-body px-4 py-5'>
        <h4 className='card-title pb-5'>Cart total</h4>
        <div className="pb-5 d-flex justify-content-between">
          <span style={{ fontWeight: '500' }}>Total:</span>
          <span>{formatPrice(cart?.itemsPrice || 0)}</span>
        </div>
        <div className='card-text pb-2'>
          <div className='d-grid gap-2'>
            <CheckoutLink />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
