import React, { useState } from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import SideberIcon from '../assets/Sideber.png'
import { IoSearchSharp } from 'react-icons/io5'
import {FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { ImCross } from "react-icons/im";

import { useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../slice/addtocardSlice'

const Sideber = () => {
  let dispatch=useDispatch()
  let [show,SetShow]=useState(false)
  let data=useSelector((state)=>state.addtocart.value)
 
  
  let handleShow=()=>{
    SetShow(!show)

  }
  let handleIncrement=(item)=>{
    dispatch(increment(item))
    
  }
  let handleDecrement=(item)=>{
    
    dispatch(decrement(item))
  }
  return (
    <section className='bg-[#F5F5F3] py-6'>
        <Container>
            <Flex className='items-center'>
                <div className='w-4/12 '>
                
               <Flex className='gap-x-2.5 items-center'>
                 <Image src={SideberIcon}/>
                <p className='text-sm text-secondary font-normal font-dm'>Shop by Category</p>
               </Flex>
                </div>
                <div className='w-8/12  relative'>
                <input className='bg-white py-4 pl-6 pr-16 w-full placeholder:text-[#C4C4C4] placeholder:text-sm placeholder:font-normal' type="text" placeholder='Search products.....'/>
                <IoSearchSharp className=' absolute top-1/2 right-6 -translate-y-1/2' />
              
                </div>
                <div className='w-4/12 '>
                <Flex className='justify-end'>
                  <FaUser />
                <IoMdArrowDropdown className='mr-10 ml-2.5'/>
                <FaShoppingCart onClick={ handleShow}/>
                </Flex>
                {
                show &&<div className='w-1/3 h-screen bg-black absolute top-0 right-0 z-10 '>
                  <ImCross className='text-2xl text-white' onClick={ handleShow}/>
                  <ul className='flex text-white justify-between items-center px-5 py-3 border border-white'>
                    <li>Product:</li>
                    <li>Price:</li>
                    <li>Quantity:</li>
                    <li>Subtotal:</li>
                  </ul>
                  
                    {data.map(item=>(
                      <ul className='flex text-white justify-between items-center px-5 py-3 border border-white cursor-pointer'>
                      <li>{item.title}</li>
                      {/* <Image className='w-[20px]' src={item.img}/> */}
                      <li>${item.price}</li>
                      <li className='flex gap-x-3 border border-white px-8 py-2'>
                        <span onClick={()=>handleDecrement(item)}>-</span>
                        <span>{item.quantity}</span>
                        <span onClick={()=>handleIncrement(item)}>+</span>
                      </li>
                      <li >${item.quantity*item.price}</li>
                      </ul>


                    ))
                    }
                  
                </div>
}
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sideber