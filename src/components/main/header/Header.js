import React from 'react';
import mainImg from '../../../imgs/main.png'



function Header() {
  return (
    <div className=' my-[70px] px-[100px] flex justify-between items-start'>
      <div className='flex flex-col gap-9'>
        <div className=' w-[531px] text-6xl font-medium   leading-normal'>Navigating the digital landscape for success</div>
        <div className='w-[498px] text-xl font-normal my-[35px]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</div>
        <button className='flex py-5 px-[35px] items-start gap-[10px] border rounded-[14px] bg-black text-white text-xl w-fit'>Book a consultation</button>
      </div>
      <div className=''>
        <img src={mainImg} className='w-[600px] h-[515px] object-contain ' ></img>
      </div>
    </div>
  );
}

export default Header;
