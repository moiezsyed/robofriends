// Main JS script (entry file for our app; first thing read)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// notice here that we didn't metnion "App.js"; because by default files without extensions are assumed to be JS files
import App from './App';
import Hello from "./Hello"
import reportWebVitals from './reportWebVitals';

// The <App /> is just a react component, which displays the REACT logo onto the screen
// This can be changed to input any HTML element or component

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
