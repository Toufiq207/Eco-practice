
import { createSlice } from '@reduxjs/toolkit'

export const catgorySlice = createSlice({
  name: 'catgory',
  initialState: {
    value: false,
  },
  reducers: {
    catgoryFuntion: (state,action) => {

  state.value=action.payload
  
  
  
      // state.value += 1
    },
    
    
    
  },
})


    
    
export const { catgoryFuntion } = catgorySlice.actions

export default catgorySlice.reducer