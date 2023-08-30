'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { useSelector } from "@/redux"
import Spinner from "@/components/ui/Spinner"
import CartItem from "@/components/cart/CartItem"

const CartList: React.FC = () => {
  const { cartItems, itemsPrice } = useSelector(state => state.cart)
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return <Spinner />

  if (!itemsPrice) {
    return (
      <div>
        Fill your cart with our best
        {' '}
        <Link href='/products' className="text-success">products</Link>
      </div>
    )
  }

  return (
    <ul className='list-group list-group-flush'>
      {cartItems.map(item => (
        <li key={item.id} className='list-group-item'>
          <CartItem item={item} />
        </li>
      ))}
    </ul>
  )
}

export default CartList
