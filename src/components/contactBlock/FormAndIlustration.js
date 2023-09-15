import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import contactImgs from './../../imgs/contactUs/contact.png'




function FormAndIlustration() {

  const [isLargeScreen, setIsLargeScreen] = useState
  (false);


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
    <div className='flex md:w-[1240px] md:px-[100px] md:pt-[60px] md:pb-[80px] items-start gap-[10px] flex-shrink-0 rounded-[45px] bg-white relative'>
      <ContactForm />

      {!isLargeScreen &&
        <img src={contactImgs} className=' absolute -right-[0px]'></img>
      }
      
  
    </div>
  );
}

export default FormAndIlustration;
