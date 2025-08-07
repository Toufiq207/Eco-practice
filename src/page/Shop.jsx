import React, { useState } from 'react'
import Container from '../component/Container';
import Flex from '../component/Flex'
import {  useSelector } from 'react-redux';
import Heading from '../component/Heading';
import { Link } from 'react-router-dom';
import Pagination from '../component/Pagination';
import Image from '../component/Image';
import Icon1 from '../assets/pageaIcon1.png'
import Icon2 from '../assets/pageaIcon2.png'


const Shop = () => {
  let data=useSelector((state)=>state.active.prevalue)
 


  return (
    <Container>
       <Heading text='Shop'/>
                         <p  className='pb-[100px]'><Link to={data=='Home' ? "/":`/${data}`}>{data}</Link> > Shop</p>
        

        <Flex>
          <div className='w-3/12 '> Shop by Category</div>
          <div className='w-9/12 '>
      <Flex className='justify-between pb-[60px]'>
            <Flex className='gap-x-5'>
              <div> <Image src={ Icon1 }/></div>
              <div>  <Image src={ Icon2}/></div>
           
          
          </Flex>
<Flex className='gap-x-[40px]'>
       <Flex className='gap-x-[14px] items-center'>
           <p>Sort by:</p>
          <select className='border border-primary py-2 px-5'>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Green</option>
          </select>
         </Flex>

         <Flex className='gap-x-[14px] items-center'>
           <p>Show:</p>
          <select className='border border-primary py-2 px-5'>
            <option value="">6</option>
            <option value="">12</option>
            <option value="">24</option>
            <option value="">36</option>
          </select>
         </Flex>
</Flex>
      </Flex>
          
            <Pagination itemsPerPage={12} />

          </div>
        </Flex>
    </Container> 

       
  )
}

export default Shop