import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import Blendere from '../assets/blendere.png'
import Balti from '../assets/balti.png'
import Button from '../component/Button'
import AboutCart from '../component/AboutCart'
import Heading from '../component/Heading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const About = () => {
let data=useSelector((state)=>state.active.prevalue)

 

 
  return (
    <section className='py-[140px]'>
      <Container>
       
       <Heading text='About'/>
            <p  className='pb-[100px]'><Link to={data=='Home' ? "/":`/${data}`}>{data}</Link> > About</p>
        <Flex className='justify-between pb-[128px] pt-[136px]'>
         <div className='w-[49%] relative'> 
          <Image className='w-full ' src={Blendere}/>
          <Button className='absolute bottom-10 left-1/2 -translate-x-1/2' text='Our Brands'/>
          </div>
         <div className='w-[49%] relative'> 
          <Image className='w-full ' src={Balti}/>
          <Button className='absolute bottom-10 left-1/2 -translate-x-1/2' text='Our Brands'/>
          </div>
          
        </Flex>
        <p className='text-f39 text-secondary font-dm font-normal'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
    <Flex className='justify-between pt-[128px]'>
    <AboutCart text='Our Vision' pra='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.'/>
    <AboutCart text='Our Vision' pra='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.'/>
    <AboutCart text='Our Brands' pra='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.'/>

    </Flex>
      </Container>
    </section>
  )
}

export default About