import { createSlice } from '@reduxjs/toolkit'

export const addtocardSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
      addtocard: (state,action) => {

  
   
  
  let alldata=state.value.find(item=>item.title===action.payload.title)
  if(alldata){


    alldata.quantity+=1
  }else{
state.value.push({...action.payload,quantity:1})
  }
  
  
  
  
      // state.value += 1
    },
      increment: (state,action) => {

 state.value.map(item=>{
if(item.title===action.payload.title){
  item.quantity+=1
}
  
 })
   
  // console.log(action.payload);
  

  
  
  
  
      // state.value += 1
    },
      decrement: (state,action) => {

 state.value.map(item=>{
if(item.title===action.payload.title){
  if(item.quantity>1){
    item.quantity-=1
  }
}
  
 })
   
  // console.log(action.payload);
  

  
  
  
  
      // state.value += 1
    },
    
    
    
    
  },
})


export const { addtocard,increment,decrement } = addtocardSlice.actions

export default addtocardSlice.reducer