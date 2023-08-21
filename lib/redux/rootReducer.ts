import { apiSlice } from "./slices"
import cartReducer from "./slices/cartSlice"

export const reducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  cart: cartReducer
}
