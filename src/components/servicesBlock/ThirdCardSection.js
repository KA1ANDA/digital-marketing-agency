import React from 'react';
import cardImage5 from './../../imgs/cardImages/cardImage5.png'
import cardImage6 from './../../imgs/cardImages/cardImage6.png'



function ThirdCardSection() {
  return (
    <div className='flex flex-col  px-[20px] md:flex-row md:px-[100px] items-start gap-10 '>


      <div className='flex flex-col  md:flex-row w-full md:w-[600px] p-[50px] justify-between items-center border rounded-[45px] bg-green shadow-[0px_5px_0px_0px] shadow-black'>
        <div className='flex flex-col justify-center items-start gap-[15px] md:gap-[93px]'>
          <div>
            <span className='flex flex-col items-start bg-white text-[30px] font-medium leading-normal px-[7px] gap-[10px] rounded-[7px] w-fit'>Content</span>
            <span className='flex flex-col items-start bg-white text-[30px] font-medium leading-normal px-[7px] gap-[10px] rounded-[7px] w-fit'>Creation</span>
          </div>
          <a className='flex items-center gap-[15px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
              <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23"/>
              <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66"/>
            </svg>
            <div className=' text-xl font-normal'>
              Learn more
            </div>
          </a>
        </div>
        <div className='mt-[50px] w-[165px] h-[129px] md:w-[210px] md:h-[170px] flex justify-center items-center flex-shrink-0'>
          <img src={cardImage5}></img>
        </div>
      </div>



      <div className='flex flex-col  md:flex-row w-full md:w-[600px] p-[50px] justify-between items-center border rounded-[45px] bg-black shadow-[0px_5px_0px_0px] shadow-black'>
        <div className='flex flex-col justify-center items-start gap-[15px] md:gap-[93px]'>
          <div>
            <span className='flex flex-col items-start bg-green text-[30px] font-medium leading-normal px-[7px] gap-[10px] rounded-[7px] w-fit'>Analytics and</span>
            <span className='flex flex-col items-start bg-green text-[30px] font-medium leading-normal px-[7px] gap-[10px] rounded-[7px] w-fit'>Tracking</span>
          </div>
          <a className='flex items-center gap-[15px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
              <circle cx="20.5" cy="20.5" r="20.5" fill="white"/>
              <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="black"/>
            </svg>
            <div className=' text-xl font-normal text-white'>
              Learn more
            </div>
          </a>
        </div>
        <div className='mt-[50px] w-[165px] h-[129px] md:w-[210px] md:h-[170px] flex justify-center items-center flex-shrink-0'>
          <img src={cardImage6}></img>
        </div>
      </div>
      

      
    </div>
  );
}

export default ThirdCardSection;
