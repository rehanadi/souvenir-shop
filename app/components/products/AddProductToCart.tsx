'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch, addToCart } from "@/lib/redux"
import type { Product, CartItem } from "@/lib/types"
import useQty from '@/hooks/useQty'
import RemainStock from '@/components/products/RemainStock'
import AddToCartButton from "@/components/cart/AddToCartButton"

type AddProductToCartProps = React.FC<{ product: Product }> 

const AddProductToCart: AddProductToCartProps = ({ product }) => {
  const minimalQty: number = 1
  const [qty, setQty] = useState(minimalQty)

  const dispatch = useDispatch()

  const {
    maximalQty,
    isEmptyStock,
    isValidQty,
    decrementQty,
    incrementQty,
    validateQty
  } = useQty({ qty, minimalQty, setQty, product })

  const handleAddToCart = () => {
    if (!isValidQty) {
      toast.error('Please fill in a valid quantity!')
      validateQty()
      return
    }

    const cartItem: CartItem = {
      id: product.id, 
      name: product.name, 
      slug: product.slug, 
      image: product.image || '', 
      price: product.price, 
      isUseStock: product.isUseStock, 
      remainStock: product.remainStock, 
      qty
    }

    dispatch(addToCart(cartItem))
    toast.success(`Product “${product.name}” have been added to your cart`)
    setQty(minimalQty)
  }

  return (
    <>
      <ul className='list-group list-group-flush mt-1'>
        <li className='list-group-item mt-2'>
          {isEmptyStock ? (
            <div className="row">
              <div className="col-12">
                <span className='text-danger'>
                  Out of stock
                </span>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-6">
                <label htmlFor="qty" className='form-label'>Quantity:</label>
                <div className='input-group'>
                  <span className='input-group-btn'>
                    <button 
                      className='btn btn-default' 
                      onClick={decrementQty}
                    >
                      <FaMinus />
                    </button>
                  </span>
                  <input 
                    type='number' 
                    id="qty" 
                    name='qty' 
                    className='form-control' 
                    value={qty}
                    max={maximalQty}
                    onChange={e => setQty(Number(e.target.value))}
                    onBlur={validateQty}
                  />
                  <span className='input-group-btn'>
                    <button 
                      className='btn btn-default' 
                      onClick={incrementQty}
                    >
                      <FaPlus />
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div style={{ marginTop: '2.5rem' }}>
                  <RemainStock 
                    isUseStock={product?.isUseStock} 
                    remainStock={product?.remainStock} 
                  />
                </div>
              </div>
            </div>
          )}
        </li>
      </ul>
      <ul className='list-group list-group-flush mt-4'>
        <li className='list-group-item'>
          <div className='d-grid gap-2'>
            <AddToCartButton 
              disabled={!isValidQty} 
              onClick={handleAddToCart}
            />
          </div>
        </li>
      </ul>
    </>
  )
}

export default AddProductToCart
