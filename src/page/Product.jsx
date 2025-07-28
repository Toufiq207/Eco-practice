import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import Balti from '../assets/balti.png'
import SunGlass from '../assets/sunGlass.png'
import Table from '../assets/table .png'
import ErePhone from '../assets/erePhone.png'
import Flex from '../component/Flex'
import Heading from '../component/Heading'
import { FaStar } from 'react-icons/fa'
import Button from '../component/Button'
const Product = () => {
  return (
   <section className='py-[150px]'>
    <Container>
    <Flex className='flex-wrap justify-between gap-y-10'>
      <div className='w-w49'> <Image  className="w-full"  src={Balti}/></div>
      <div className='w-w49'>    <Image  className="w-full"  src={SunGlass}/></div>
      <div className='w-w49'>  <Image className="w-full"   src={ErePhone}/></div>
      <div className='w-w49'>  <Image className="w-full"   src={Table}/></div>
       
   
     
     
    </Flex>
    <Heading className='pt-12 pb-4' text='Product'/>
    <Flex className='gap-x-6 items-center'>
      <ul className='flex gap-x-[2px] '>
        <li><FaStar className='text-[#FFD881] text-sm'/></li>
        <li><FaStar className='text-[#FFD881] text-sm'/></li>
        <li><FaStar className='text-[#FFD881] text-sm'/></li>
        <li><FaStar className='text-[#FFD881] text-sm'/></li>
        <li><FaStar className='text-[#FFD881] text-sm'/></li>
      </ul>
      <p className='text-sm text-primary font-dm font-normal'>1 Review</p>
    </Flex>
    <Flex className='items-center gap-x-[22px] py-6 border-b border-[#F0F0F0] w-w49'>
      <p className='text-base text-primary font-dm font-normal'><del>$88.00</del></p>
      <p className='text-xl text-secondary font-dm font-bold'>$44.00</p>
    </Flex>
    <Flex className='items-center gap-x-[53px] pt-[33px]'>
      <h4 className='text-base text-secondary  font-dm font-bold'>COLOR:</h4>
      <ul className='flex gap-x-[15px]'>
<li className='w-[20px] h-[20px] rounded-full bg-[#979797] hover:scale-[1.5] duration-500'></li>
<li className='w-[20px] h-[20px] rounded-full bg-[#FF8686] hover:scale-[1.5] duration-500'></li>
<li className='w-[20px] h-[20px] rounded-full bg-[#979797] hover:scale-[1.5] duration-500'></li>
<li className='w-[20px] h-[20px] rounded-full bg-[#B6B6B6] hover:scale-[1.5] duration-500'></li>
<li className='w-[20px] h-[20px] rounded-full bg-[#15CBA5] hover:scale-[1.5] duration-500'></li>



      </ul>
    </Flex>
    <Flex className='items-center gap-x-[80px] pt-[33px]'>
      <h4 className='text-base text-secondary  font-dm font-bold'>SIZE:</h4>
      <select className='py-2 px-12 border border-[#F0F0F0]'>
        <option value="">S</option>
        <option value="">M</option>
        <option value="">L</option>
        <option value="">XL</option>
        
      </select>
    </Flex>
    <Flex className='items-center gap-x-[37px] pt-[33px] border-b border-[#F0F0F0] w-w49 pb-[30px]'>
      <h4 className='text-base text-secondary  font-dm font-bold'>QUANTITY:</h4>
   
   <div className='py-2 px-8 border border-[#F0F0F0] flex gap-x-5'>
    <span>+</span>
    <span>1</span>
    <span>-</span>
   </div>
    </Flex>
    <Flex className='items-center gap-x-[37px] pt-[33px] border-b border-[#F0F0F0] w-w49 pb-[30px]'>
      <h4 className='text-base text-secondary  font-dm font-bold'>STATUS:</h4>
      <h5 className='text-base text-primary  font-dm font-normal'>In stock</h5>
   
 
 
    </Flex>

    <Flex className='gap-x-[20px] pt-[33px] border-b border-[#F0F0F0] w-w49 pb-[30px]'>
      <Button text='Add to Wish List'/>
    <Button text='Add to Cart'/>
    </Flex>
    <Flex className='justify-between pt-[33px] border-b border-[#F0F0F0] w-w49 pb-[30px]'>
      <h4 className='text-base text-secondary  font-dm font-bold'>FEATURES & DETAILS</h4>
    <p className='text-secondary text-lg font-bold'>+</p>
    </Flex>
    <Flex className='justify-between pt-[33px] border-b border-[#F0F0F0] w-w49 pb-[30px]'>
      <h4 className='text-base text-secondary  font-dm font-bold'>SHIPPING & RETURNS</h4>
    <p className='text-secondary text-lg font-bold'>+</p>
    </Flex>
    <div className=' pt-[33px]  w-w49 pb-[30px]'>
 <p className='text-base text-primary font-dm font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</p>
 
    </div>
      <Flex className='gap-x-[62px] pt-[33px]'>
      <h4 className='text-xl text-primary  font-dm font-normal'>Description</h4>
      <h4 className='text-xl text-secondary  font-dm font-bold pb-[123px]'>Reviews (1)</h4>
 
    </Flex>
     <p className='text-base text-primary font-dm font-normal  border-b border-[#F0F0F0] w-full pb-[30px]'>1 review for Product</p>
        <Flex className='justify-between items-center pt-6'>
           <Flex className='gap-x-[37px] items-center'>
           <p className='text-sm text-primary font-dm font-normal'>John Ford</p>
      <ul className='flex gap-x-[2px] '>
        <li><FaStar className='text-[#FFD881] text-sm'/></li>
        <li><FaStar className='text-[#FFD881] text-sm'/></li>
        <li><FaStar className='text-[#FFD881] text-sm'/></li>
        <li><FaStar className='text-[#FFD881] text-sm'/></li>
        <li><FaStar className='text-[#FFD881] text-sm'/></li>
      </ul>
    
    </Flex>
     <p className='text-sm text-primary font-dm font-normal'>6 month ago</p>
        </Flex>
        <p className='text-sm text-primary font-dm font-normal  border-b border-[#F0F0F0] w-full py-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <h4 className='text-xl text-secondary  font-dm font-bold py-12'>Add a Review</h4>
        <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Name <br />
          <input className='py-6 w-w49 border-b border-[#F0F0F0] mb-6' type="text" name="" id="name" placeholder='Your name here' />
          </label>
          <br />
        <label className='text-base text-secondary font-dm font-bold ' htmlFor="email">Email <br/>
          <input className='py-6 w-w49 border-b border-[#F0F0F0] mb-6' type="text" name="" id="email" placeholder='Your email here' />
          </label>
          <br />
        <label className='text-base text-secondary font-dm font-bold' htmlFor="review">Review <br />
          <textarea className='py-6 w-w49 border-b border-[#F0F0F0] mb-6' type="text" name="" id="review" placeholder='Your review here' />
          </label>
          <br />
          <Button text='Post'/>
    </Container>
   </section>
  )
}

export default Product