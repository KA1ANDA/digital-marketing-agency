import React from 'react';
import Main from './components/main/Main';
import ServicesHeading from './components/headings/ServicesHeading'
import ServicesBlock from './components/servicesBlock/ServicesBlock';
import Cta from './components/CtaBlock/Cta';
import CaseStudiesHeading from './components/headings/CaseStudiesHeading'
import CaseStudiesBlock from './components/caseStudiesBlock/CaseStudiesBlock.js';
import OurWorkingProcessHeading from './components/headings/OurWorkingProcessHeading';
import ProcessBlock from './components/processBlock/ProcessBlock';
import TeamHeading from './components/headings/TeamHeading';
import GroupOfCards from './components/teamGroupOfCards/GroupOfCards';
import TestimonialsHeading from './components/headings/TestimonialsHeading';
import TestimonialsBlock from './components/testimonialsBlock/TestimonialsBlock';
import ContactUsHeading from './components/headings/ContactUsHeading';
import ContactBlock from './components/contactBlock/ContactBlock';



function App() {
  return (
    <div className=''>
      <Main />
      <ServicesHeading />
      <ServicesBlock />
      <Cta />
      <CaseStudiesHeading />
      <CaseStudiesBlock />
      <OurWorkingProcessHeading />
      <ProcessBlock />
      <TeamHeading />
      <GroupOfCards />
      <TestimonialsHeading />
      <TestimonialsBlock/>
      <ContactUsHeading />
      <ContactBlock />
    </div>
  );
}

export default App;
