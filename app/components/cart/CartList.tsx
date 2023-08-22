'use client'

import { useState, useEffect } from "react"
import { useSelector } from "@/lib/redux"
import type { CartState } from "@/lib/types"
import Spinner from "@/components/ui/Spinner"
import CartItem from "@/components/cart/CartItem"

const CartList: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false)
  const cart: CartState = useSelector(state => state.cart)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return <Spinner />

  return (
    <ul className='list-group list-group-flush'>
      {cart?.cartItems?.map(item => (
        <li key={item.id} className='list-group-item'>
          <CartItem item={item} />
        </li>
      ))}
    </ul>
  )
}

export default CartList
