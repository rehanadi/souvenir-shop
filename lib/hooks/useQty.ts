'use client'

import type { Product } from '@prisma/client'
import type { SetStateAction, Dispatch } from 'react'

type UseQtyProps = {
  qty: number, 
  minimalQty: number,
  setQty: Dispatch<SetStateAction<number>>,
  product: Product
}

const useQty = ({ qty, minimalQty = 1, setQty, product }: UseQtyProps)  => {
  const maximalQty = product?.isUseStock ? product?.remainStock : 0
  const canDecrementQty = qty > minimalQty
  const canIncrementQty = !(product?.isUseStock && qty >= product?.remainStock)
  const isDeficitQty = qty < minimalQty
  const isSurplusQty = product?.isUseStock && qty > product?.remainStock
  const isEmptyStock = product?.isUseStock && product?.remainStock === 0
  const isValidQty = !isDeficitQty && !isSurplusQty && !isEmptyStock

  const decrementQty = () => canDecrementQty && setQty(prevQty => prevQty - 1)
  const incrementQty = () => canIncrementQty && setQty(prevQty => prevQty + 1)
  const validateQty = () => isDeficitQty ? setQty(minimalQty) : isSurplusQty ? setQty(product?.remainStock) : null

  return {
    maximalQty,
    isEmptyStock,
    isValidQty,
    decrementQty,
    incrementQty,
    validateQty
  }
}

export default useQty
