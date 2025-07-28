import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div

         className={`w-[64px] h-[64px] rounded-full bg-[#979797] flex justify-center items-center absolute top-[40%] right-0 -translate-y-1/2 ${className}`}
     
      onClick={onClick}>
        <FaLongArrowAltRight  className='text-white'/>
    </div>
     
    
  )
}

export default NextArrow