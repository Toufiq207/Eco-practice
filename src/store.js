import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slice/counterSlice'
import  breadcumb  from './slice/breadcumb'
import  catgorySlice from './slice/catgorySlice'



export default configureStore({
  reducer: {
  counter:counterSlice,
  active:breadcumb,
  catagory:catgorySlice,
  },
})


