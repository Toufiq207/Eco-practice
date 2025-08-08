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
import Pagination2 from '../component/Pagination2';


const Shop = () => {
  let data=useSelector((state)=>state.active.prevalue)
  let [desing,setDesing]=useState(true)
  let [desing2,setDesing2]=useState(false)
  let handleDesing=()=>{
    setDesing(true)
    setDesing2(false)
  }
  let handleDesing2=()=>{
    setDesing2(true)
    setDesing(false)
  }
 


  return (
    <Container>
       <Heading text='Shop'/>
                         <p  className='pb-[100px]'><Link to={data=='Home' ? "/":`/${data}`}>{data}</Link> > Shop</p>
        

        <Flex>
          <div className='w-3/12 '> Shop by Category</div>
          <div className='w-9/12 '>
      <Flex className='justify-between pb-[60px]'>
            <Flex className='gap-x-5'>
              <div onClick={handleDesing}> <Image src={ Icon1 }/></div>
              <div onClick={handleDesing2}>  <Image src={ Icon2}/></div>
           
          
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
          {desing?<Pagination itemsPerPage={12} />:null}
          {desing2?<Pagination2 itemsPerPage={12} />:null}
            

          </div>
        </Flex>
    </Container> 

       
  )
}

export default Shop