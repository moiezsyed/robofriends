// Main JS script (entry file for our app; first thing read)
// NPM packages should be defined inside the main JS file
// Components are capitalized; convention
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// notice here that we didn't metnion "CardList.js"; because by default files without extensions are assumed to be JS files
import CardList from "./CardList"
import reportWebVitals from './reportWebVitals';
import 'tachyons'
// multiple objects/functions can be imported by using curly braces
import {robots} from "./robots"

// <Card /> is just a react COMPONENT
// This can be changed to input any HTML element or component
// Components can have their own "props" i.e. properties defined here and accessed in it's JS file

ReactDOM.render(
  <React.StrictMode>
      <CardList robots={robots} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
