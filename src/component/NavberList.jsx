import React from 'react'

const NavberList = ({text,className}) => {
  return (
   <li className={`text-sm text-primary font-normal hover:font-bold font-dm list-none hover:text-secondary cursor-pointer duration-500 ${className}`}>{text}</li>
  )
}

export default NavberList