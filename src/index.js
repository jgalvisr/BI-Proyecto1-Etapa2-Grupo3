import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
// Fonts
import './fonts/Lato/Lato-Italic.ttf'
import './fonts/Lato/Lato-Light.ttf'
import './fonts/Lato/Lato-Regular.ttf'
import './fonts/Lato/Lato-Thin.ttf'
import './fonts/Lato/Lato-Bold.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
