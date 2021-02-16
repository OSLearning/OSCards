import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './styles.css';
import App from './App.jsx';

// renders our React app while also importing our styling into our App.jsx

render(
  <App/>,
  document.getElementById('root')
);