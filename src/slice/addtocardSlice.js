import { createSlice } from '@reduxjs/toolkit'

export const addtocardSlice = createSlice({
  name: 'cart',
  initialState: {
    value: localStorage.getItem("cart" )?JSON.parse(localStorage.getItem("cart")):[],
  },
  reducers: {
      addtocard: (state,action) => {

  
   
  
  let alldata=state.value.find(item=>item.title===action.payload.title)
  if(alldata){


    alldata.quantity+=1
  }else{
state.value.push({...action.payload,quantity:1})
  }
  
  
  localStorage.setItem("cart",JSON.stringify(state.value))
  
      // state.value += 1
    },
      increment: (state,action) => {

 state.value.map(item=>{
if(item.title===action.payload.title){
  item.quantity+=1
}
  
 })
   
  // console.log(action.payload);
  

  
  
    localStorage.setItem("cart",JSON.stringify(state.value))
  
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
  

  
    localStorage.setItem("cart",JSON.stringify(state.value))
  
  
      // state.value += 1
    },
      removeItem: (state,action) => {

 state.value.map((item,index)=>{
if(item.title===action.payload.title){
  state.value.splice(index,1);
  
}
  
 })
   
  // console.log(action.payload);
  

    localStorage.setItem("cart",JSON.stringify(state.value))
  
  
  
      // state.value += 1
    },
    
    
    
    
  },
})


      
export const { addtocard,increment,decrement,removeItem } = addtocardSlice.actions

export default addtocardSlice.reducer