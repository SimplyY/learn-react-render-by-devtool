import React from 'react';
import ReactDOM from 'react-dom';
import Learn from './Learn';

window.onload = () => {
  ReactDOM.render(
    <Learn />,
    document.querySelector('#container')
  );
};
