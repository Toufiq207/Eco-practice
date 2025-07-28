import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import Add1 from '../assets/add1.jpg'
import Add2 from '../assets/add2.jpg'
import Add3 from '../assets/add3.jpg'

const Adds = () => {
  return (
    <section className='pt-[140px] pb-[128px]'>
        <Container>
            <Flex className='justify-between'>
                <div className='w-[49%]'>
                <Image className='w-full' src={Add1}/>
                </div>
                <div className='w-[49%]'>
                
                 <Image className='w-full' src={Add2}/>
                  <Image className='w-full pt-10' src={Add3}/>
                
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Adds