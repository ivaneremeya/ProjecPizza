import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const PizzasSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
    // Redux Toolkit позволяет нам писать "мутирующую" логику в редукторах. Это
    // на самом деле не изменяет состояние, потому что оно использует библиотеку Immer,
    // которая обнаруживает изменения в "черновом состоянии" и создает совершенно новое
    // неизменяемое состояние, основанное на этих изменениях
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

// Action // Создатели действий генерируются для каждой функции уменьшения обращений
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer