import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import CountUpComponent from './CountUpComponent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <CountUpComponent
      end={50}
      suffix='%'
      className='text-bg-warning'
      text='prova uno'
    />
  </React.StrictMode>,
);
