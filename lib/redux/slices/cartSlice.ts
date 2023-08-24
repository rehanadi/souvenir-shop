import { createSlice } from '@reduxjs/toolkit'
import type { CartState, CartItem } from '@/lib/types'
import { updateCart } from '@/utils/cart'

const cartState = { 
  cartItems: [],
  shippingAddress: {},
  paymentMethod: ''
} as CartState

const initialState = 
  typeof window !== "undefined" && localStorage.getItem('cart') 
  ? JSON.parse(localStorage.getItem('cart') || JSON.stringify(cartState)) 
  : cartState

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      const existItem = state.cartItems.find((item: CartItem) => item.id === newItem.id)

      if (existItem) {
        state.cartItems = state.cartItems.map((item: CartItem) => item.id === existItem.id ? newItem : item)
      } else {
        state.cartItems.push(newItem)
      }

      return updateCart(state)
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item: CartItem) => item.id !== action.payload)
      return updateCart(state)
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload
      return updateCart(state)
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload 
      return updateCart(state)
    },
    clearCart: (state, action) => {
      state.cartItems = []
      return updateCart(state)
    }
  }
})

export const {
  addToCart, 
  removeFromCart, 
  saveShippingAddress, 
  savePaymentMethod,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
