import React from 'react';
import ProcessCard from './ProcessCard';


const ProcessCardInfo = [
  {
    number:'01',
    title:'Consultation',
    text:'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    number:'02',
    title:'Research and Strategy Development',
    text:'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    number:'03',
    title:'Implementation',
    text:'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    number:'04',
    title:'Monitoring and Optimization',
    text:'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    number:'05',
    title:'Reporting and Communication',
    text:'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    number:'06',
    title:'Continual Improvement',
    text:'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
]

function ProcessBlock() {
  return (
    <div className=' flex md:inline-flex p-[20px] md:px-[100px] flex-col items-center md:items-start gap-[30px]'>
      {ProcessCardInfo.map(el => 
        <ProcessCard number={el.number} title={el.title} text={el.text}/>
      )}
    </div>
  );
}

export default ProcessBlock;
