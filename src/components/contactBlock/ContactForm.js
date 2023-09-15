import React, { useEffect, useState } from 'react';





function ContactForm() {


  return (

    <>
      <form className='flex flex-col px-[30px] py-[40px] md:px-0 md:py-0 w-full items-start gap-10 '>
        <div className='flex items-start gap-[35px] '>
          
            <input type='radio' id='sayHi' name='radio' value='sayHi' className='w-7 h-7 accent-green'></input>
            <label htmlFor='sayHi' className=' text-lg'>Say Hi</label>
          
            <input type='radio' id='quote' name='radio' value='quote' className='w-7 h-7 accent-green'></input>
            <label htmlFor='quote' className=' text-lg'>Get a Quote</label>
              
        </div>

        <div className='flex flex-col w-full md:items-start gap-[10px] md:gap-[5px]'>
          <label htmlFor='name' className=' text-base font-normal'>Name</label>
          <input type='text' placeholder='Name' id='name' className='flex  md:w-[556px] py-[18px] px-[30px] items-start gap-[10px] rounded-[14px] border-2 border-black'></input>
        </div>

        <div className='flex flex-col w-full items-start gap-[10px] md:gap-[5px]'>
          <label htmlFor='email'>Email*</label>
          <input type='email' placeholder='Email' id='email' className='flex w-full md:w-[556px] py-[18px] px-[30px] items-start gap-[10px] rounded-[14px] border-2 border-black'></input>
        </div>

        <div className='flex w-full md:h-[223px] flex-col items-start gap-[10px] md:gap-[5px]'>
          <label htmlFor='message'>Message*</label>
          <textarea placeholder='Message' id='message' className='flex  w-full md:w-[556px]  h-[132px] md:h-[190px] py-[18px] px-[30px] items-start gap-[10px] rounded-[14px] border-2 border-black  flex-shrink-0 resize-none'></textarea>
        </div>

         
        <button type='submit' className='flex w-full md:w-[556px] py-5 px-[35px] justify-center items-center gap-[10px] rounded-[14px] bg-black text-white'>Send Message</button>
        
        
      </form>

    
    
    </>
    


  );
}

export default ContactForm;
