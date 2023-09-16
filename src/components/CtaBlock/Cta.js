import React, { useEffect, useState } from 'react';
import cardImage7 from './../../imgs/cardImages/cardImage7.png'





function Cta() {

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
    <div  data-aos="fade-up" className='flex w-full px-[20px] md:px-[100px] justify-center items-center -gap-[715px] mt-[70px] md:mt-[100px]  '>
      <div className='flex w-full justify-center p-[50px] md:w-[1240px] md:h-[347px] md:px-[60px] items-center gap-[275px] flex-shrink-0 rounded-[45px] bg-white'>
        <div className='flex flex-col items-start gap-[26px]'>
          <div className='w-[290px] md:w-[500px] text-3xl leading-normal font-medium'>Let’s make things happen</div>
          <div className=' w-[290px] md:w-[500px] text-lg leading-normal font-normal'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</div>
          <button className='w-[290px] md:w-auto flex py-5 px-[35px] items-start gap-[10px] rounded-[14px] bg-black text-center text-xl text-white'>Get your free proposal</button>
        </div>
        {!isLargeScreen && <img src={cardImage7} className='w-[359px] h-[394px] '></img>  }
          
      </div>
    </div>
  );
}

export default Cta;
