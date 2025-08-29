import React, { useState } from 'react'
import Container from '../component/Container'
import Heading from '../component/Heading'
import Flex from '../component/Flex'
import Button from '../component/Button'
 import { ToastContainer, toast } from 'react-toastify';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Login = () => {

  const auth = getAuth();
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let handleEmail=(e)=>{
    setEmail(e.target.value);
    
  }
  let handlePassword=(e)=>{
       setPassword(e.target.value);
  }
  let handlelogin=()=>{
     if(!email){
       toast.error('Please enter your Email');
     }else if(!password){
       toast.error('Please enter your password');
     }else{
      createUserWithEmailAndPassword(auth, email, password)

  .then((userCredential) => {
   toast.success('Registation done');
   
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
      if(errorCode.includes("auth/email-already-in-use")){
         toast.error('Please enter valid Email');
      }
  });
     }
       
       
  }
  return (
  <section className='pt-[124px] pb-[140px]'>
    <ToastContainer 
    position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

    
    />
    <Container>
      <Heading text='Login'/>
      <p>Home  >  Login</p>
      <p className='text-base text-primary font-dm font-normal pb-[60px] mb-[57px] pt-[128px] border-b border-[#F0F0F0] w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <h2 className='text-[39px] text-secondary font-dm font-bold'>Returning Customer</h2>
<Flex className='gap-x-[39px]'>
   <label className='text-base text-secondary font-dm font-bold ' htmlFor="email">Email address <br/>
          <input onChange={handleEmail} className='py-6 w-[508px] border-b border-[#F0F0F0] mb-6' type="text" name="" id="email" placeholder='company@domain.com' />
          </label>
          <br />
 <label className='text-base text-secondary font-dm font-bold ' htmlFor="password">Password <br/>
          <input onChange={handlePassword} className='py-6 w-[508px] border-b border-[#F0F0F0] mb-6' type="Password" name="" id="password" placeholder='Enter your Password' />
          </label>
</Flex>
<div className="border-b border-[#F0F0F0] pb-[70px]">
  <div onClick={handlelogin}> <Button  text="Login"/></div>
 
</div>

<h2 className='text-[39px] text-secondary font-dm font-bold pt-[58px]'>New Customer</h2>


 <p className='text-base text-primary font-dm font-normal pb-[60px] mb-[57px]  w-[644px] pt-[38px] pb-[51px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
 <Button  text="Continue"/>
    </Container>
  </section>
  )
}

export default Login