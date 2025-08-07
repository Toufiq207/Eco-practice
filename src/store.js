import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slice/counterSlice'
import  breadcumb  from './slice/breadcumb'



export default configureStore({
  reducer: {
  counter:counterSlice,
  active:breadcumb
  },
})


