import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App titulo={process.env.REACT_APP_TITLE}/>,
  document.getElementById('root')
);

