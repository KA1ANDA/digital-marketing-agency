import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import {AiFillStar} from 'react-icons/ai'



const Testimonials = [
  {
    text:'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name:'John Smith',
    rank:'Marketing Director at XYZ '
  },
  {
    text:'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name:'John Doe',
    rank:'Marketing Director'
  },
  {
    text:'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name:'Emma Smith',
    rank:'Director at XYZ Corp'
  },
  {
    text:'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name:'Emma Smith',
    rank:'Director at XYZ Corp'
  },
  {
    text:'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name:'Emma Smith',
    rank:'Director at XYZ Corp'
  },
  {
    text:'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name:'Emma Smith',
    rank:'Director at XYZ Corp'
  },
  
]


function TestimonialsBlock() {

  const [isLargeScreen, setIsLargeScreen] = useState(false);


  useEffect(() => {
  
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth <= 768);
    };

  
    checkScreenSize();

   
    window.addEventListener('resize', checkScreenSize);

    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  let screenSize = () =>{

    if(isLargeScreen){
      return 1
    }else{
      return 3
    }
  }

 

  return (
    <div className=' mx-[20px] md:inline-flex pt-[30px] md:pt-[84px] md:pb-[68px] md:mx-[100px] items-center rounded-[45px] bg-black text-white justify-center md:w-[1240px] h-[625px] overflow-hidden '>
      <div className=''>
      
<>
      <Swiper
        cssMode={true}
        navigation={true}
        
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={screenSize()}
        spaceBetween={10}
        // width={606}
        // height={200}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="myFirstSwiper"
      >
      
          {Testimonials.map((el) => (
            <SwiperSlide  className='text-black'>
              <Testimonial text={el.text} name={el.name} rank={el.rank}/>
            </SwiperSlide>
          ))}

        
      

      </Swiper>
    </>


      </div>
    </div>
  );
}

export default TestimonialsBlock;
