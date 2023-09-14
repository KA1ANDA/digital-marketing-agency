import React from 'react';
import ContactForm from './ContactForm';
import contactImgs from './../../imgs/contactUs/contact.png'




function FormAndIlustration() {
  return (
    <div className='flex w-[1240px] px-[100px] pt-[60px] pb-[80px] items-start gap-[10px] flex-shrink-0 rounded-[45px] bg-white relative'>
      <ContactForm />
      
      <img src={contactImgs} className=' absolute -right-[0px]'></img>
      
    </div>
  );
}

export default FormAndIlustration;
