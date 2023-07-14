import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Testing from './Testing';
import FunctionalComponent from './FunctionalComponents';
import StateInReact from './StateInReact';
import PropsDataTransfer from './PropsDataTransfer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Testing></Testing> */}
    {/* <FunctionalComponent></FunctionalComponent> */}
    
     <StateInReact message= 'Visible'></StateInReact>
     {/* <PropsDataTransfer></PropsDataTransfer> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
