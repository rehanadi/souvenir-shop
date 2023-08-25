'use client'

import { useState, useEffect } from "react"
import { useSelector } from "@/lib/redux"
import styles from '@/styles/cart.module.scss'

const CartBadge: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false)
  const { cartItems } = useSelector(state => state.cart)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return
  
  return (
    <>
      {cartItems?.length > 0 && (
        <span className={`translate-middle badge rounded-pill bg-danger ${styles.badge}`}>
          {cartItems?.length}
        </span>
      )}
    </>
  )
}

export default CartBadge
