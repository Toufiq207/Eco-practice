import React, { useState } from 'react'
import Flex from '../component/Flex'
import { FiMinus, FiPlus } from "react-icons/fi";
import {useDispatch, useSelector} from 'react-redux'
import { catgoryFuntion } from '../slice/catgorySlice';
const Catagory = ({text,type}) => {
  console.log(type);
  
  let dispatch=useDispatch()
     let catagory=useSelector((state)=>state.catagory.value)
     let handleMinus=()=>{
 
  dispatch(catgoryFuntion(false))
}
let handlePlus=()=>{
  dispatch(catgoryFuntion(true))
}
  return (
    <div>
                <Flex className='items-center justify-between border-b border-[#F0F0F0] py-5'>
            <p className='text-base text-primary font-dm font-normal'>{text}</p>
<div >
  {
    type=="true"?
catagory? 

<FiMinus onClick={handleMinus}  className='text-base text-primary font-dm font-normal'/>
:


  <FiPlus onClick={handlePlus}  className='text-base text-primary font-dm font-normal'/>
  :""
           } 
</div>
          </Flex>
       
    </div>
  )
}

export default Catagory