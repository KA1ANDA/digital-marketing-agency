import React, { useState } from 'react';




function ProcessCard({number , title , text}) {

  const [openCard , setOpenCard] = useState(false)

  const toggleOpenCard = () => {
    setOpenCard(!openCard)
  }

  return (
    <div className={`flex w-[1234px] py-[41px] px-[60px] flex-col items-start gap-[10px] rounded-[45px] border ${openCard ? 'bg-green' : 'bg-white'}  shadow-[0px_5px_0px_0px] shadow-black transition-all `}>
      <div className='flex w-[1117px] justify-between items-center'>
        <div className='flex items-center gap-[25px]'>
          <div className=' text-6xl leading-normal font-medium'>{number}</div>
          <div className=' text-3xl leading-normal font-medium'>{title}</div>
        </div>
        {openCard ? 
          <svg className=' cursor-pointer' onClick={toggleOpenCard} xmlns="http://www.w3.org/2000/svg" width="58" height="59" viewBox="0 0 58 59" fill="none">
            <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23"/>
            <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black"/>
          </svg>
          :
          <svg className=' cursor-pointer' onClick={toggleOpenCard} xmlns="http://www.w3.org/2000/svg" width="58" height="59" viewBox="0 0 58 59" fill="none">
            <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23"/>
            <path d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z" fill="#191A23"/>
          </svg>
        }
      </div>
      {openCard &&
      <>
        <span className='w-[1114px] h-[1px] bg-black my-[30px]'></span>
        <div className='w-[1114px] text-lg leading-normal font-normal'>{text}</div>
      </> 
      }
    </div>
  );
}

export default ProcessCard;
