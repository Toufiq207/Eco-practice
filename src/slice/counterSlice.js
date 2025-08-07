import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state,action) => {

  state.value+=action.payload
  
  
      // state.value += 1
    },
    decrement: (state,action) => {

  state.value-=action.payload
  
  
      // state.value += 1
    },
    
    
  },
})


export const { increment,decrement } = counterSlice.actions

export default counterSlice.reducer