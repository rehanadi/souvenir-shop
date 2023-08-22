import type { CartState } from '@/lib/types'

export const addDecimals = (num: number): number => {
  return Number((Math.round(num * 100) / 100).toFixed(2))
}

export const updateCart = (state: CartState) => {
  // Calculate prices
  state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0))
  state.shippingPrice = 0
  state.totalPrice = addDecimals(
    Number(state.itemsPrice) + 
    Number(state.shippingPrice)
  )

  localStorage.setItem('cart', JSON.stringify(state))
  return state
}
