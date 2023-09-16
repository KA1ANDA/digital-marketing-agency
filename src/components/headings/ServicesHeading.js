import React from 'react';



function ServicesHeading() {
  return (
    <div className=' flex flex-col items-center mt-[60px] mb-10 md:mt-[140px] md:mb-20 px-5 md:px-[100px] md:flex md:flex-row md:items-start gap-10 '>
      <div className=' text-[40px] font-medium leading-normal flex flex-col items-start bg-green gap-[10px] px-[7px] rounded-[7px]'>Services</div>
      <div className=' text-base text-center md:text-start md:text-start md:text-lg leading-normal font-normal w-[390px] md:w-[580px] flex-shrink-0'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</div>
    </div>
  );
}

export default ServicesHeading;
