import { createSlice } from '@reduxjs/toolkit'

export const breadcumb = createSlice({
  name: 'bread',
  initialState: {
    daybefore:null,
    prevalue: null,
    currentvalue: null,
  },
  reducers: {
     activebutton: (state,action) => {

//   console.log(state.value);
//   console.log(action.payload);
  state.daybefore=state.prevalue
  state.prevalue=state.currentvalue
  state.currentvalue=action.payload
  
  
      // state.value += 1
    },
    
  },
})


export const {activebutton} = breadcumb.actions

export default breadcumb.reducer