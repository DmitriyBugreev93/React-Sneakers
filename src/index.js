import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router";

import './index.scss';
import 'macro-css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/React-Sneakers/">
      <App />
    </Router>
  </React.StrictMode>
);

