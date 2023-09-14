import React from 'react';






function LinkeAndText() {
  return (
    <div className='flex flex-col items-start gap-[50px] text-white'>
      <span className=' w-[1120px] h-[1px] bg-white'></span>
      <div className='flex gap-10 items-start'>
        <div>© 2023 Positivus. All Rights Reserved.</div>
        <div className=' underline'>Privacy Policy</div>
      </div>
    </div>
  );
}

export default LinkeAndText;
