import React from 'react'
import Container from '../component/Container'
import Heading from '../component/Heading'
import Flex from '../component/Flex'
import Button from '../component/Button'
const Login = () => {
  return (
  <section className='pt-[124px] pb-[140px]'>
    <Container>
      <Heading text='Login'/>
      <p>Home  >  Login</p>
      <p className='text-base text-primary font-dm font-normal pb-[60px] mb-[57px] pt-[128px] border-b border-[#F0F0F0] w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <h2 className='text-[39px] text-secondary font-dm font-bold'>Returning Customer</h2>
<Flex className='gap-x-[39px]'>
   <label className='text-base text-secondary font-dm font-bold ' htmlFor="email">Email address <br/>
          <input className='py-6 w-[508px] border-b border-[#F0F0F0] mb-6' type="text" name="" id="email" placeholder='company@domain.com' />
          </label>
          <br />
 <label className='text-base text-secondary font-dm font-bold ' htmlFor="password">Password <br/>
          <input className='py-6 w-[508px] border-b border-[#F0F0F0] mb-6' type="Password" name="" id="password" placeholder='Enter your Password' />
          </label>
</Flex>
<div className="border-b border-[#F0F0F0] pb-[70px]">
  <Button  text="Login"/>
</div>

<h2 className='text-[39px] text-secondary font-dm font-bold pt-[58px]'>New Customer</h2>


 <p className='text-base text-primary font-dm font-normal pb-[60px] mb-[57px]  w-[644px] pt-[38px] pb-[51px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
 <Button  text="Continue"/>
    </Container>
  </section>
  )
}

export default Login