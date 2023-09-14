import React from 'react';
import FooterNav from './FooterNav';
import FooterContacts from './FooterContacts';





function NavigationAndContacts() {
  return (
    <div className='flex flex-col items-start gap-[66px]'>
      <FooterNav />
      <FooterContacts />
    </div>
  );
}

export default NavigationAndContacts;
