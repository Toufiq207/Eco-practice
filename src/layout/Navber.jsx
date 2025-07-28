import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import Orebi from '../assets/OREBI©.png'
import NavberList from '../component/NavberList'
import { Link } from 'react-router-dom'
const Navber = () => {
  return (
    <nav className='py-8'>
        <Container>
            <Flex>
                <div className='w-5/12 '>
            <Link to="/">    <Image src={Orebi}/></Link>
                </div>
            <div className='w-7/12 '>
        <ul className='flex gap-x-10'>
              <Link to="/"><NavberList text='Home'/></Link>
              <Link to="/shop">    <NavberList text='Shop'/></Link>

              <Link to="/about">    <NavberList text='About'/></Link>
              <Link to="/contact">    <NavberList text='Contact'/></Link>
           
              <Link to="/journal">    <NavberList text='Journal'/></Link>
      
        
        
        </ul>
            </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navber