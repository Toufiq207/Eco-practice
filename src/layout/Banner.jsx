import React from 'react'
import Image from '../component/Image'

import BannerOne from '../assets/bannerOne.jpg'
import Two from '../assets/two.png'
import Car from '../assets/car.png'
import Refresh from '../assets/refresh.png'
import Container from '../component/Container'
import Flex from '../component/Flex'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
     <section className='border-b brder-[#F0F0F0]'>
<Link to='/shop'>    <Image  className='w-full' src={BannerOne}/></Link>
    <Container>
<Flex className='justify-between'>
        <Flex className='items-center gap-x-[16px] py-[30px]'>
        <Image src={Two}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Two years warranty</p>
      </Flex>
      <Flex className='items-center gap-x-[16px] py-[30px]'>
        <Image src={Car}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Free shipping</p>
      </Flex>
      <Flex className='items-center gap-x-[16px] py-[30px]'>
        <Image src={Refresh}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Return policy in 30 days</p>
      </Flex>
</Flex>
    </Container>
  </section>
  )
}

export default Banner