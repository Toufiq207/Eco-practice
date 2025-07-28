import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import ErrorIcon from '../assets/404.png'
import { IoSearch } from 'react-icons/io5'
import Button from '../component/Button'


const Error = () => {
  return (
 
    <section className='pt-[81px] pb-[140px]'>
      <Container>
      <Image src={ErrorIcon}/>
      <p className='text-base text-primary font-dm font-normal pb-[60px] mb-[57px]  w-[644px] pt-[49px] pb-[51px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      <div className='w-[643px] border border-[#F0F0F0] relative'>
        <input className='p-5 w-full' type="text" placeholder='Type to search '/>
        <IoSearch className='absolute right-5 top-1/2 -translate-y-1/2'/>
      </div>
      <Button className='mt-[60px]' text='Back to Home'/>
      </Container>
    </section>
  )
}

export default Error