import React from 'react'
import Image from './Image'

import Flex from './Flex'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { FaCodeCompare } from 'react-icons/fa6'

const CardItem = ({img,title,price}) => {
  return (
    <div className='w-[370px]   relative group '>
       
<div className='overflow-hidden'>

        <div className='w-full '>
         <Image className='w-full' src={img}/>
       </div>
       <Flex className='justify-between items-center pt-6 pb-4'>
        <h4 className='text-xl text-secondary font-dm font-bold'>{title}</h4>
        <p className='text-base text-primary font-dm font-normal'>${price}</p>

       </Flex>
       <p className='text-base text-primary font-dm font-normal'>Black</p>
       <button className='py-2 px-8 bg-black text-white text-sm font-dm font-bold absolute top-5 left-5'>New</button>
       
       <div className='w-full bg-white absolute -bottom-[60px] left-0 group-hover:bottom-[92px] duration-500 opacity-0 group-hover:opacity-100'>


<ul  className='flex flex-col py-6 px-8 items-end cursor-pointer '>
    <li className='text-base text-primary font-dm font-normal hover: text-secondary  hover:font-bold duration-500'>Add to Wish List <FaHeart  className='inline text-sm ml-4'/></li>
    <li className='text-base text-primary font-dm font-normal hover: text-secondary  hover:font-bold duration-500'>Compare <FaCodeCompare  className='inline text-sm ml-4'/></li>
    <li className='text-base text-primary font-dm font-normal hover: text-secondary  hover:font-bold duration-500'>Add to Cart <FaShoppingCart  className='inline text-sm ml-4'/></li>


</ul>


       </div>




</div>
        </div>
       
  )
}

export default CardItem