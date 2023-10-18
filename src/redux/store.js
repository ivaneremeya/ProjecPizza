import { configureStore } from '@reduxjs/toolkit'
// import cardReducer from './slice/cardSlice'
import filterReducer from './slice/filterSlice'
// import pizassReducer from './slice/pizass'

export const store = configureStore({
  reducer: {
   filter:filterReducer,
  } ,
})