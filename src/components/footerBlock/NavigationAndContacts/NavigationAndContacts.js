import React, { useEffect, useState } from 'react';
import FooterNav from './FooterNav';
import FooterContacts from './FooterContacts';





function NavigationAndContacts() {
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
    <div className='flex flex-col items-center md:items-start gap-[66px]'>
      <FooterNav />
      {!isLargeScreen && <FooterContacts />}
    
    </div>
  );
}

export default NavigationAndContacts;
