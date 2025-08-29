import React, { useEffect, useState } from 'react'
import Banner from '../layout/Banner'
import Adds from '../layout/Adds'
import Container from '../component/Container'
import CardItem from '../component/CardItem'
import Heading from '../component/Heading'
import Blendere from '../assets/blendere.png'
import Bag from '../assets/bag.png'
import Jhuri from '../assets/jhuri.png'
import Watch from '../assets/watch.jpg'
import Promossoin from '../assets/promossoin.png'
import Flex from '../component/Flex'
import Image from '../component/Image'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from '../component/NextArrow'
import PrevArrow from '../component/prevArrow'
import axios from 'axios'
import { Link } from 'react-router-dom'






const Homepage = () => {
let [alldata,SetAlldata]=useState([])

    var settings = {
 arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
        prevArrow:<PrevArrow/>
  };
  useEffect(()=>{
async function alldata(){
let data=await axios.get("https://dummyjson.com/products")
SetAlldata(data.data.products);

}
alldata()
  },[])
  
  

  return (
  
 <>
 <Banner/>
 <Adds/>
 <Container>


  <Heading className='pb-10 ' text='New Arrivals' />






<Slider {...settings}>
  {
    alldata.map(item=>(

 <div >
 <CardItem img={item.thumbnail} title={item.title} price={item.price}/>
      </div>
 

    ))
  }
     
     
    </Slider>
  
{/* <Flex className='justify-between'>

  


  

  


  </Flex> */}
 </Container>
 <Container>


  <Heading className='pb-10 pt-[118px]' text='Our Bestsellers' />
<Flex className="gap-x-[45px] pb-[50px]">
 {
    alldata.map((item,index)=>(
 (index>4 && index<9) ?
 <CardItem img={item.thumbnail} title={item.title} price={item.price}/>
      : ""
    ))
  }
  </Flex>

{/* <Flex className='justify-between mb-[130px]'>


  <CardItem img={Blendere} title='Product one ' price='20'/>
  <CardItem img={ Watch} title='Product two ' price='15'/>
  <CardItem img={Jhuri } title='Product three ' price='17'/>
  <CardItem img={ Bag} title='Product four ' price='18'/>

  </Flex> */}
 </Container>
<Container>

   <Image className='mb-[128px]'src={Promossoin}/>
</Container>

 <Container>


  <Heading className='pb-10 pt-[118px]' text='Special Offers' />
<Flex className="gap-x-[45px] pb-[50px]">
 {
    alldata.map((item,index)=>(
 (index>10 && index<15) ?
 <CardItem img={item.thumbnail} title={item.title} price={item.price}/>
      : ""
    ))
  }
  </Flex>
 </Container>
 </>
  )
}

export default Homepage