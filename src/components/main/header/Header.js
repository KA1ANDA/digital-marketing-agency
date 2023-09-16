import React, { useEffect, useState } from 'react';
import mainImg from '../../../imgs/main.png'



function Header() {

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
  return (
    <div id='aboutUs' className='  w-full flex-col justify-between my-[70px] items-center  md:px-[100px] flex md:flex-row  md:items-start '>

      {isLargeScreen ? 
      <>
        <div className='flex flex-col gap-9  justify-center items-center'>
          <div className='  w-[390px] text-[43px] md:text-6xl font-medium   leading-normal'>Navigating the digital landscape for success</div>
          <div className=''>
            <img src={mainImg} className=' object-cover ' ></img>
          </div> 
          <div className='w-[390px] md:w-[498px] text-xl font-normal my-[35px]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</div> 
          <button className='w-[390px] flex py-5 px-[35px] justify-center gap-[10px]  rounded-[14px] bg-black text-white text-xl '>Book a consultation</button>
        </div>
      </>
      :
      <>
        <div className='flex flex-col gap-9'>
          <div className=' w-[531px] text-6xl font-medium   leading-normal'>Navigating the digital landscape for success</div>
          <div className='w-[498px] text-xl font-normal my-[35px]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</div>
          <button className='flex py-5 px-[35px] items-start gap-[10px] rounded-[14px] bg-black text-white text-xl w-fit'>Book a consultation</button>
        </div>
        <div className=''>
          <img src={mainImg} className='w-[600px] h-[515px] object-contain ' ></img>
        </div>   
      </>
      }
     
    </div>
  );
}

export default Header;
