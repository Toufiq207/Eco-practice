import React from 'react'
import Flex from './Flex'
import { FiPlus } from 'react-icons/fi'

const SubCatgory = ({text}) => {
  return (

              <Flex className='pl-6 items-center justify-between border-b border-[#F0F0F0] py-5'>
            <p className='text-base text-red-500 font-dm font-normal'>{text}</p>
            <FiPlus className='text-base text-red-500 font-dm font-normal'/>
          </Flex>
          

  )
}

export default SubCatgory