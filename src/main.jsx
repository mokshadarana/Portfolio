/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './HomePage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)
*/
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';

/*Since reactDOM is not supported we are changing it to createROOT
ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);
*/

createRoot(document.getElementById('root')).render(<App />);

