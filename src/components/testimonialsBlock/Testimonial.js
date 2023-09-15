import React, { useEffect, useState } from 'react';





function Testimonials({name,rank,text}) {
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
    <div className='flex flex-col text-black border-2  gap-5 items-end h-full  '>
      
      {isLargeScreen ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="330" height="327" viewBox="0 0 330 327" fill="none">
       <mask id="path-1-inside-1_322_146" fill="white">
       <path fill-rule="evenodd" clip-rule="evenodd" d="M45 0C20.1472 0 0 20.1472 0 45V257.384C0 280.955 18.131 300.293 41.2035 302.225L66 326.384L90.6336 302.384H284.99C309.843 302.384 330 282.237 330 257.384V45C330 20.1472 309.853 0 285 0H45Z"/>
       </mask>
       <path fill-rule="evenodd" clip-rule="evenodd" d="M45 0C20.1472 0 0 20.1472 0 45V257.384C0 280.955 18.131 300.293 41.2035 302.225L66 326.384L90.6336 302.384H284.99C309.843 302.384 330 282.237 330 257.384V45C330 20.1472 309.853 0 285 0H45Z" fill="#191A23"/>
       <path d="M41.2035 302.225L41.9014 301.509L41.6444 301.259L41.287 301.229L41.2035 302.225ZM66 326.384L65.3022 327.1L66 327.78L66.6978 327.1L66 326.384ZM90.6336 302.384V301.384H90.227L89.9358 301.668L90.6336 302.384ZM1 45C1 20.6995 20.6995 1 45 1V-1C19.5949 -1 -1 19.5949 -1 45H1ZM1 257.384V45H-1V257.384H1ZM41.287 301.229C18.728 299.34 1 280.43 1 257.384H-1C-1 281.479 17.5341 301.247 41.1201 303.222L41.287 301.229ZM66.6978 325.668L41.9014 301.509L40.5057 302.941L65.3022 327.1L66.6978 325.668ZM89.9358 301.668L65.3022 325.668L66.6978 327.1L91.3315 303.1L89.9358 301.668ZM284.99 301.384H90.6336V303.384H284.99V301.384ZM329 257.384C329 281.684 309.291 301.384 284.99 301.384V303.384C310.395 303.384 331 282.789 331 257.384H329ZM329 45V257.384H331V45H329ZM285 1C309.301 1 329 20.6995 329 45H331C331 19.5949 310.405 -1 285 -1V1ZM45 1H285V-1H45V1Z" fill="#B9FF66" mask="url(#path-1-inside-1_322_146)"/>

       <foreignObject x="30" y="30" width="330" height="240">
        <p xmlns="http://www.w3.org/1999/xhtml" className=' text-white h-[240px] w-[270px] text-base md:text-lg leading-normal font-normal text-start '>{text}</p>
        </foreignObject>
        </svg>
      :
        <svg xmlns="http://www.w3.org/2000/svg" width="606" height="266" viewBox="0 0 606 266" fill="none">
        <mask id="path-1-inside-1_341_510" fill="white">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M45 0C20.1472 0 0 20.1472 0 45V192.952C0 217.805 20.1676 237.952 45.0204 237.952H56.3613L83 266L109.639 237.952H560.979C585.832 237.952 606 217.805 606 192.952V45C606 20.1472 585.853 0 561 0H45Z"/>
        </mask>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M45 0C20.1472 0 0 20.1472 0 45V192.952C0 217.805 20.1676 237.952 45.0204 237.952H56.3613L83 266L109.639 237.952H560.979C585.832 237.952 606 217.805 606 192.952V45C606 20.1472 585.853 0 561 0H45Z" fill="#191A23"/>
        <path d="M56.3613 237.952L57.0864 237.264L56.7907 236.952H56.3613V237.952ZM83 266L82.2749 266.689L83 267.452L83.7251 266.689L83 266ZM109.639 237.952V236.952H109.209L108.914 237.264L109.639 237.952ZM1 45C1 20.6995 20.6995 1 45 1V-1C19.5949 -1 -1 19.595 -1 45H1ZM1 192.952V45H-1V192.952H1ZM45.0204 236.952C20.7193 236.952 1 217.252 1 192.952H-1C-1 218.358 19.6159 238.952 45.0204 238.952V236.952ZM56.3613 236.952H45.0204V238.952H56.3613V236.952ZM83.7251 265.311L57.0864 237.264L55.6362 238.641L82.2749 266.689L83.7251 265.311ZM108.914 237.264L82.2749 265.311L83.7251 266.689L110.364 238.641L108.914 237.264ZM560.979 236.952H109.639V238.952H560.979V236.952ZM605 192.952C605 217.252 585.281 236.952 560.979 236.952V238.952C586.384 238.952 607 218.358 607 192.952H605ZM605 45V192.952H607V45H605ZM561 1C585.3 1 605 20.6995 605 45H607C607 19.5949 586.405 -1 561 -1V1ZM45 1H561V-1H45V1Z" fill="#B9FF66" mask="url(#path-1-inside-1_341_510)"/>
        

        <foreignObject x="52" y="35" width="502" height="200">
        <p xmlns="http://www.w3.org/1999/xhtml" className='text-white w-[502px] text-lg leading-normal font-normal text-start '>{text}</p>
        </foreignObject>

        </svg>
      }

      
      <div className=' w-[270px]  md:w-[526px]  flex flex-col  items-start'>
        <div className=' text-xl leading-normal font-medium text-green'>{name}</div>
        <div className=' text-lg leading-normal font-normal text-white'>{rank}</div>
      </div>
    </div>
  );
}

export default Testimonials;
