import React from 'react';
import createRoot from 'react-dom/client';

import ReactDOM from 'react-dom/client';
import './styles/index.scss';
//import App from './App';
import AppRouter from './app/Approuter';
import reportWebVitals from './reportWebVitals';

const root= createRoot(document.getElementById('root'));
root.render(<AppRouter />);
console.log ('hello');

ReactDOM.render(<AppRouter />, document.getElementById('root'));

  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
