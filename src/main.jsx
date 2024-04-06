import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/home/HomePage.jsx'; // Assuming this is your main component
import About from './components/about/About.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <About/>
  </React.StrictMode>
);
