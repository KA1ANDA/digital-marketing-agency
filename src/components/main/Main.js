import React from 'react';
import Navigation from './navigationBar/Navigation';
import Header from './header/Header';
import Logotypes from './logotypes/Logotypes';


function Main() {
  return (
    <div className=' mt-[30px] md:mt-[60px]'>
      <Navigation />
      <Header />
      <Logotypes />
    </div>
  );
}

export default Main;
