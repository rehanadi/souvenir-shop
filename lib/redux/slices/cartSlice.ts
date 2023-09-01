import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Cart, CartItem, ShippingAddress, ShippingMethod, PaymentMethod } from '@/lib/types'
import { updateCart } from '@/utils/cart'

export const shippingAddressState = {
  firstName: '', 
  lastName: '', 
  address: '', 
  provinceId: '', 
  province: '', 
  cityId: '', 
  city: '', 
  subdistrictId: '', 
  subdistrict: '', 
  postalCode: '', 
  phone: '', 
  company: '', 
  comments: ''
} as ShippingAddress

export const shippingMethodState = {
  courier: '',
  service: '',
  cost: 0
} as ShippingMethod

export const paymentMethodState = {
  name: '',
  code: '',
  minimumAmount: 1
} as PaymentMethod

export const cartState = { 
  cartItems: [],
  shippingAddress: shippingAddressState,
  shippingMethod: shippingMethodState,
  paymentMethod: paymentMethodState,
  itemsPrice: 0,
  shippingPrice: 0,
  totalPrice: 0
} as Cart

const initialState = (
  typeof window !== "undefined" && localStorage.getItem('cart') 
  ? JSON.parse(localStorage.getItem('cart') || JSON.stringify(cartState)) 
  : cartState
) as Cart

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload
      const existItem = state.cartItems.find(item => item.id === newItem.id)

      if (existItem) {
        state.cartItems = state.cartItems.map(item => item.id === existItem.id ? newItem : item)
      } else {
        state.cartItems.push(newItem)
      }

      return updateCart(state)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
      return updateCart(state)
    },
    saveShippingAddress: (state, action: PayloadAction<ShippingAddress>) => {
      state.shippingAddress = action.payload
      return updateCart(state)
    },
    saveShippingMethod: (state, action: PayloadAction<ShippingMethod>) => {
      state.shippingMethod = action.payload 
      return updateCart(state)
    },
    savePaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.paymentMethod = action.payload 
      return updateCart(state)
    },
    clearCart: (state, action) => {
      const shippingAddress = { ...state.shippingAddress, comments: '' } as ShippingAddress
      state = cartState
      state.shippingAddress = shippingAddress

      return updateCart(state)
    }
  }
})

export const {
  addToCart, 
  removeFromCart, 
  saveShippingAddress, 
  saveShippingMethod,
  savePaymentMethod,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
