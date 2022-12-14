import { configureStore } from '@reduxjs/toolkit'
import cartsSlice from './slice/cartsSlice'
import goodsSlice from './slice/goodsSlice'

export const store = configureStore({
  reducer: {
    goods:goodsSlice,
    carts:cartsSlice
  },
})