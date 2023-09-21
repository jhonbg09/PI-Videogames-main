import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


ReactDOM.render(
  //1. Envolver la app con BrowerRouter y exportarla para crear las rutas
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
