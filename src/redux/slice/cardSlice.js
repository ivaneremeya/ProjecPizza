import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    increment: (state) => {
   
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = cardSlice.actions

export default cardSlice.reducer