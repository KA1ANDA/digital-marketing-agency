import React from 'react';
import NavigationAndContacts from './NavigationAndContacts/NavigationAndContacts';
import LinkeAndText from './LineAndText/LinkeAndText';





function Footer() {
  return (
    <div className=' flex bg-black px-[60px] pt-[55px] pb-[50px] flex-col items-center md:items-start gap-[50px] md:rounded-t-[45px] '>
      <NavigationAndContacts />
      <LinkeAndText />
    </div>
  );
}

export default Footer;
