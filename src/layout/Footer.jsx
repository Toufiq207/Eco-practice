import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import NavberList from '../component/NavberList'
import Image from '../component/Image'
import FooterLogo from '../assets/FooterLogo.png'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
const Footer = () => {
  return (
   <footer className='bg-[#F5F5F3] py-[55px] '>
    <Container>
        <Flex>
            <div className='w-1/8  '>
            <h6 className='text-base text-secondary font-dm font-bold pb-4'>MENU</h6>
           <ul className='flex flex-col gap-y-[6px]'>
             <NavberList text='Home'/>
            <NavberList text='Shop'/>
            <NavberList text='About'/>
            <NavberList text='Contacts'/>
            <NavberList text='Journal'/>
           </ul>
            </div>
            <div className='w-1/8 '>
              <h6 className='text-base text-secondary font-dm font-bold pb-4'>SHOP</h6>
           <ul className='flex flex-col gap-y-[6px]'>
             <NavberList text='Category 1'/>
            <NavberList text='Category 2'/>
            <NavberList text='Category 3'/>
            <NavberList text='Category 4'/>
            <NavberList text='Category 5'/>
           </ul>
            </div>
            <div className='w-1/8 '> 
            <h6 className='text-base text-secondary font-dm font-bold pb-4'>HELP</h6>
           <ul className='flex flex-col gap-y-[6px]'>
             <NavberList text='Privacy Policy'/>
            <NavberList text='Terms & Conditions'/>
            <NavberList text='Special E-shop'/>
            <NavberList text='Shipping'/>
            <NavberList text='Secure Payments'/>
           </ul>
           </div>
            <div className='w-2/8 '>
               <h6 className='text-base text-secondary font-dm font-bold pb-4'>(052) 611-5711
</h6>
               <h6 className='text-base text-secondary font-dm font-bold pb-4'>company@domain.com
</h6>
<p className='text-sm text-primary font-normal font-dm '>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className='w-3/8 '>
            
            <Image  src={FooterLogo}/>
            
            </div>
        </Flex>
        <Flex className='justify-between pt-16'>
            <Flex className='gap-x-6'>
                <FaFacebookF />
                <FaLinkedinIn />
                <BsInstagram />
            </Flex>
            <div>
                <p className='text-sm text-primary font-normal font-dm '>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
        </Flex>
    </Container>
   </footer>
  )
}

export default Footer