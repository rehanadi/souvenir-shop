import type { Cart } from '@/lib/types'
import { shippingMethodState } from '@/lib/redux'

export const addDecimals = (num: number): number => {
  return Number((Math.round(num * 100) / 100).toFixed(2))
}

export const updateCart = (state: Cart) => {
  // Sync shipping
  if (!state.shippingAddress.subdistrictId) {
    state.shippingMethod = shippingMethodState
  }

  // Calculate prices
  state.itemsPrice = addDecimals(state.cartItems.reduce(
    (acc, item) => acc + (item.price * item.qty), 0
  ))
  state.shippingPrice = state.shippingMethod.cost || 0
  state.totalPrice = addDecimals(
    Number(state.itemsPrice) + 
    Number(state.shippingPrice)
  )

  // Update local storage
  localStorage.setItem('cart', JSON.stringify(state))

  return state
}
