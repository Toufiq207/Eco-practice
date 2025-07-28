import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const PrevArrow = ({ className, style, onClick }) => {
  return (
  <div

         className={`w-[64px] h-[64px] rounded-full bg-[#979797] flex justify-center items-center absolute top-[40%] -left-[25px] -translate-y-1/2 z-10 ${className}`}
     
      onClick={onClick}>
        <FaLongArrowAltLeft  className='text-white'/>
    </div>
  )
}

export default PrevArrow