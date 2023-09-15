import React from 'react';






function LinkeAndText() {
  return (
    <div className='flex w-full flex-col items-center md:items-start gap-[50px] text-white'>
      <span className=' w-full  md:w-[1120px] h-[1px] bg-white'></span>
      <div className='flex flex-col md:flex-row gap-10 items-center md:items-start '>
        <div>© 2023 Positivus. All Rights Reserved.</div>
        <div className=' underline'>Privacy Policy</div>
      </div>
    </div>
  );
}

export default LinkeAndText;
