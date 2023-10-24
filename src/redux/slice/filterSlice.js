import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoriesState: 0,
    paginationState: 1,
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
    setPaginationState: (state, action) => {
      state.paginationState = action.payload
    },
    setFilters: (state, action) => {
      state.categoriesState = Number(action.payload.categoriesState)
      state.useSort = action.payload.useSort
      state.paginationState = Number(action.payload.paginationState)
    },
  },
})

export const { setCategoriesState, setUseSort, setPaginationState, setFilters} = filterSlice.actions

export default filterSlice.reducer