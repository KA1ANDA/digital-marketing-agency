import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className=' md:max-w-[1440px] mx-auto font-space'>
      <App />
    </div>
  </React.StrictMode>
);



