import React from 'react';
import cardImage7 from './../../imgs/cardImages/cardImage7.png'





function Cta() {
  return (
    <div className='flex w-full px-[100px] items-center -gap-[715px] mt-[100px] '>
      <div className='flex w-[1240px] h-[347px] px-[60px] items-center gap-[275px] flex-shrink-0 rounded-[45px] bg-white'>
        <div className='flex flex-col items-start gap-[26px]'>
          <div className='w-[500px] text-3xl leading-normal font-medium'>Let’s make things happen</div>
          <div className=' text-lg leading-normal font-normal'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</div>
          <button className='flex py-5 px-[35px] items-start gap-[10px] rounded-[14px] bg-black text-center text-xl text-white'>Get your free proposal</button>
        </div>
          <img src={cardImage7} className='w-[359px] h-[394px] '></img> 
      </div>
    </div>
  );
}

export default Cta;
