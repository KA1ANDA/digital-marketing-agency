import React from 'react';





function FooterContacts() {
  return (
    <div className='flex items-start gap-[154px]'>
      <div className='flex flex-col items-start gap-[27px]'>
        <div className='flex flex-col items-start gap-[10px] px-[7px] rounded-[7px] bg-green text-xl leading-normal font-medium'>
          Contact us:
        </div>
        <div className='flex flex-col items-start gap-5 text-white text-lg leading-normal'>
          <div>Email: info@positivus.com</div>
          <div>Phone: 555-567-8901</div>
          <div>Address: 1234 Main St <br />
Moonstone City, Stardust State 12345</div>
        </div>
      </div>
      <div className='flex py-[58px] px-10 items-start gap-5 rounded-[14px] bg-[#292A32]'>
        <input type='text' placeholder='Email' className='flex w-[285px] py-[22px] px-[35px] items-start gap-[10px] rounded-[14px] border border-white bg-[#292A32] placeholder:text-white text-white'></input>
        <button className='flex py-5 px-[35px] items-start gap-[10px] rounded-[14px] bg-green' >Subscribe to news</button>
      </div>
    </div>
  );
}

export default FooterContacts;
