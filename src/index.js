// Main JS script (entry file for our app; first thing read)
// NPM packages should be defined inside the main JS file
// Components are capitalized; convention
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// notice here that we didn't metnion "Card.js"; because by default files without extensions are assumed to be JS files
import Card from "./Card"
import reportWebVitals from './reportWebVitals';
import 'tachyons'
// multiple objects/functions can be imported by using curly braces
import {robots} from "./robots"

// <Card /> is just a react COMPONENT
// This can be changed to input any HTML element or component
// Components can have their own "props" i.e. properties defined here and accessed in it's JS file

ReactDOM.render(
  <React.StrictMode>
      {/* wrapping component in "div" element so we can have multiple Card components */}
      {/* using "props" i.e. properties to get distinct data */}
      {/* NOTE: JS code should always be inside curly braces */}
      <div>
        <Card name={robots[0].name} email={robots[0].email} hobby={robots[0].hobby} id={robots[0].id}/>
        <Card name={robots[1].name} email={robots[1].email} hobby={robots[1].hobby} id={robots[1].id}/>
        <Card name={robots[2].name} email={robots[2].email} hobby={robots[2].hobby} id={robots[2].id}/>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
