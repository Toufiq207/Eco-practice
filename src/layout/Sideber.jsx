import React, { useEffect, useState } from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import SideberIcon from '../assets/Sideber.png'
import { IoSearchSharp } from 'react-icons/io5'
import {FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { ImCross } from "react-icons/im";

import { useDispatch, useSelector} from 'react-redux'
import { decrement, increment, removeItem } from '../slice/addtocardSlice'
import Button from '../component/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Sideber = () => {
  let dispatch=useDispatch()
  let [show,SetShow]=useState(false)
  let [total,setTotal]=useState(0)
  // let [input,setInput]=useState("")
  let [alldata,SetAlldata]=useState([])
  let [search,SetSearch]=useState([])
  let [input,SetInput]=useState("")
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
  let handleRemove=(item)=>{
   dispatch(removeItem(item))
  
}
let handleChange=(e)=>{
  SetInput(e.target.value)
let searce=alldata.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
  SetSearch(searce);
  
}
// let handlSearce=()=>{
//   console.log(input);
  
  
// }
  useEffect(()=>{
async function alldata(){
let data=await axios.get("https://dummyjson.com/products")
SetAlldata(data.data.products);

}
alldata()
  },[])
  
 
  


  useEffect(()=>{
let total=0

data.map(item=>{
   total+=item.quantity*item.price

  
},[data])
 setTotal(total);

  })

   
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
                <input onChange={handleChange} className='bg-white py-4 pl-6 pr-16 w-full placeholder:text-[#C4C4C4] placeholder:text-sm placeholder:font-normal' type="text" placeholder='Search products.....'/>
                <IoSearchSharp  className=' absolute top-1/2 right-6 -translate-y-1/2' />
              {
                search.length>0 &&
                input.length>0 &&
                <div className='w-full py-[40px] bg-white px-[20px] absolute top-[62px] border border-black z-10'>
                {
                  search.map(item=>(
                    <Link to="/shop"><p className='cursor-pointer'><Image className='w-[20px]' src={item.thumbnail}/>{item.title}=={item.price}</p></Link>
                  ))
                }


              </div>
              }



                </div>
                <div className='w-4/12 '>
                <Flex className='justify-end'>
                  <FaUser />
                <IoMdArrowDropdown className='mr-10 ml-2.5'/>
                <FaShoppingCart onClick={ handleShow}/>
                </Flex>
                {
                show &&<div className='w-1/3 h-screen bg-black absolute top-0 right-0 z-10 '>
                  <ImCross className='text-2xl text-white my-4 mx-6' onClick={ handleShow}/>
                  <ul className='flex text-white justify-between items-center px-5 py-5 border border-white text-xl font-semibold'>
                    <li>Action:</li>
                    <li>Product:</li>
                    <li>Price:</li>
                    <li>Quantity:</li>
                    <li>Subtotal:</li>
                  </ul>
                  
                  {
                    data.length>0 ?
                    <>
                    {  data.map(item=>(
                        
                        
                      <ul className='flex text-white justify-between items-center px-5 py-3 border border-white cursor-pointer'>
                      
                      <li onClick={()=>handleRemove(item)}><ImCross className='text-xs ml-6'/></li>
                      <li>{item.title.substring(0,15)}....</li>
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
                    <div  className='flex items-center justify-center mt-20 gap-x-4'>
                     <Link to="/cart">
                      <Button className='bg-white !text-black hover:!text-white hover !border-white' text='View Cart'/>
                     </Link>
                   <Link to="/cheakout">  <Button className='bg-white !text-black hover:!text-white hover !border-white' text='Checkout'/></Link> 
                    </div>
                    </>
                    
                    :
                    <h1 className='text-white text-2xl font-dm font-bold text-center pt-[200px]'>Card is Empty</h1>
                  }
                  <h1 className='text-white text-2xl font-dm font-bold absolute bottom-6 right-6'>Total:{Math.round(total)}</h1>
                </div>
}
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sideber