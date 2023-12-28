import { configureStore } from '@reduxjs/toolkit'
import shopReducer from "../Features/ShopSlice"

export const store = configureStore({
  reducer: {
    shop:shopReducer
  },
})