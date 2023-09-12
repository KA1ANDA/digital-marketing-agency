import React from 'react';
import FirstCardSection from './FirstCardSection';
import SecondCardSection from './SecondCardSection';
import ThirdCardSection from './ThirdCardSection';



function ServicesBlock() {
  return (
    <div className='inline-flex flex-col items-start gap-10'>
      <FirstCardSection />
      <SecondCardSection />
      <ThirdCardSection />
    </div>
  );
}

export default ServicesBlock;
