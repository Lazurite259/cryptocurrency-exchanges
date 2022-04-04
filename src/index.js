import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import Exchange from './components/Exchange';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:exchange" element={<Exchange />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

