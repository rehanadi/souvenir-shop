'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { MdShoppingCartCheckout } from 'react-icons/md'
import { useSelector } from "@/lib/redux"
import type { CartState } from "@/lib/types"
import { formatPrice } from "@/utils/products"
import styles from '@/styles/cart.module.scss'

const CartTotals: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false)
  const cart: CartState = useSelector(state => state.cart)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return

  return (
    <div className="card">
      <div className='card-body px-4 py-5'>
        <h4 className='card-title pb-5'>Cart Totals</h4>
        <div className="row pb-5">
          <div className="col-4" style={{ fontWeight: '500' }}>Total:</div>
          <div className="col-8">Rp{formatPrice(cart?.itemsPrice || 0)}</div>
        </div>
        <div className='card-text pb-2'>
          <div className='d-grid gap-2'>
            <Link 
              href='/checkout/shipping-address' 
              className={`btn btn-success ${styles.checkoutLink}`}
            >
              <span className={styles.btnIcon}>
                <MdShoppingCartCheckout />
              </span>
              {' '}
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTotals
