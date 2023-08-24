'use client'

import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import { FaMinus, FaPlus } from 'react-icons/fa'
import RemainStock from '@/components/products/RemainStock'
import { useDispatch, addToCart } from "@/lib/redux"
import useQty from '@/hooks/useQty'
import type { CartItem } from "@/lib/types"

type CartItemQtyProps = React.FC<{ item: CartItem }> 

const CartItemQty: CartItemQtyProps = ({ item }) => {
  const minimalQty: number = 1
  const [qty, setQty] = useState(item?.qty || minimalQty)

  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()

  const {
    maximalQty,
    isValidQty,
    decrementQty,
    incrementQty
  } = useQty({ qty, minimalQty, setQty, product: item })

  const handleAddToCart = () => {
    if (qty === item?.qty) return

    if (!isValidQty) {
      toast.error('Please fill in a valid quantity!')
      setQty(item?.qty)
      return
    }

    dispatch(addToCart({ ...item, qty }))
    toast.success(`Product “${item?.name}” have been updated in your cart`)
    setQty(qty)
  }

  const handleIncrementQty = () => {
    incrementQty()
    inputRef.current?.focus()
  }

  const handleDecrementQty = () => {
    decrementQty()
    inputRef.current?.focus()
  }

  return (
    <>
      <div className='input-group'>
        <span className='input-group-btn'>
          <button 
            className='btn btn-default' 
            onClick={handleDecrementQty}
          >
            <FaMinus />
          </button>
        </span>
        <input 
          type='number' 
          id="qty" 
          name='qty'
          className='form-control' 
          ref={inputRef}
          value={qty}
          max={maximalQty}
          onChange={e => setQty(Number(e.target.value))}
          onBlur={handleAddToCart}
        />
        <span className='input-group-btn'>
          <button 
            className='btn btn-default' 
            onClick={handleIncrementQty}
          >
            <FaPlus />
          </button>
        </span>
      </div>
      <div className='mt-3 text-center'>
        <RemainStock 
          isUseStock={item?.isUseStock} 
          remainStock={item?.remainStock} 
        />
      </div>
    </>
  )
}

export default CartItemQty
