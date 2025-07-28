import React from 'react'
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






const Homepage = () => {


    var settings = {
 arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
        prevArrow:<PrevArrow/>
  };

  return (
  
 <>
 <Banner/>
 <Adds/>
 <Container>


  <Heading className='pb-10 ' text='New Arrivals' />






<Slider {...settings}>
      <div >
 <CardItem img={Blendere} title='Product one ' price='20'/>
      </div>
      <div >
        <CardItem img={ Watch} title='Product two ' price='15'/>
      </div>
      <div >
    <CardItem img={Jhuri } title='Product three ' price='17'/>
      </div>
      <div >
          <CardItem img={ Bag} title='Product four ' price='18'/>
      </div >
      <div >
        <CardItem img={Blendere} title='Product one ' price='20'/>
      </div>
      <div>
     <CardItem img={ Watch} title='Product two ' price='15'/>
      </div>
      <div >
      <CardItem img={Jhuri } title='Product three ' price='17'/>
      </div>
      <div>
         <CardItem img={ Bag} title='Product four ' price='18'/>
      </div>
    </Slider>
  
{/* <Flex className='justify-between'>

  


  

  


  </Flex> */}
 </Container>
 <Container>


  <Heading className='pb-10 pt-[118px]' text='Our Bestsellers' />
<Flex className='justify-between mb-[130px]'>


  <CardItem img={Blendere} title='Product one ' price='20'/>
  <CardItem img={ Watch} title='Product two ' price='15'/>
  <CardItem img={Jhuri } title='Product three ' price='17'/>
  <CardItem img={ Bag} title='Product four ' price='18'/>

  </Flex>
 </Container>
<Container>

   <Image className='mb-[128px]'src={Promossoin}/>
</Container>

 <Container>


  <Heading className='pb-10 pt-[118px]' text='Special Offers' />
<Flex className='justify-between mb-[130px]'>


  <CardItem img={Blendere} title='Product one ' price='20'/>
  <CardItem img={ Watch} title='Product two ' price='15'/>
  <CardItem img={Jhuri } title='Product three ' price='17'/>
  <CardItem img={ Bag} title='Product four ' price='18'/>

  </Flex>
 </Container>
 </>
  )
}

export default Homepage