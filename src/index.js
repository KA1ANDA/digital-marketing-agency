import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className=' max-w-[1440px]  md:w-fit mx-auto font-space '>
      <App />
    </div>
  </React.StrictMode>
);



