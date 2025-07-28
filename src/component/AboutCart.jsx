import React from 'react'

const AboutCart = ({text,pra}) => {
  return (
    <div className='w-[506px]'>
        <h5 className='text-[25px] text-secondary font-dm font-bold pb-3 '>{text}</h5>
        <p className='text-base text-primary font-dm font-normal'>{pra}</p>
    </div>
  )
}

export default AboutCart