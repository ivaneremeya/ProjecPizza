import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoriesState: 0,
  
    useSort: { name: 'популярности', sortProperti: 'rating'}
  
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    
    setCategoriesState: (state, action) => {
      state.categoriesState = action.payload
    },
    setUseSort: (state, action) => {
      state.useSort = action.payload
    },
  },
})

export const { setCategoriesState, setUseSort } = filterSlice.actions

export default filterSlice.reducer