import React from 'react'
import Navber from '../layout/Navber'
import Sideber from '../layout/Sideber'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'

const Rootpage = () => {
  return (
    <div>
        <Navber/>
       <Sideber/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default Rootpage