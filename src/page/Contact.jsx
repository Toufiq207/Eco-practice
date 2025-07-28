import React from 'react'
import Container from '../component/Container'
import Button from '../component/Button'


const Contact = () => {
  return (
    <section className='py-[140px]'>
      <Container>
        <h2 className='text-[39px] text-secondary font-dm font-bold'>Fill up a Form</h2>
           <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Name <br />
          <input className='py-6 w-w49 border-b border-[#F0F0F0] mb-6' type="text" name="" id="name" placeholder='Your name here' />
          </label>
          <br />
        <label className='text-base text-secondary font-dm font-bold ' htmlFor="email">Email <br/>
          <input className='py-6 w-w49 border-b border-[#F0F0F0] mb-6' type="text" name="" id="email" placeholder='Your email here' />
          </label>
          <br />
        <label className='text-base text-secondary font-dm font-bold' htmlFor="message">Message <br />
          <textarea className='py-6 w-w49 border-b border-[#F0F0F0] mb-6' type="text" name="" id="message" placeholder='Your message here' />
          </label>
          <br />
          <Button className='mb-[140px]' text='Post'/>
        <iframe className='w-full h-[572px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.237844153655!2d90.3973168743956!3d23.868883784219154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59ad99e526d%3A0x8301be280dfeb039!2sCreative%20IT%20Institute%2C%20Uttara%20Campus!5e1!3m2!1sen!2sbd!4v1753025512400!5m2!1sen!2sbd"></iframe>
      </Container>
    </section>
  )
}

export default Contact