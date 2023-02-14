import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './compontents/navbar/Navbar';
import './compontents/navbar/Navbar';
import Main from './compontents/Main';
import './compontents/Main.css';
import ItemListContainer from './compontents/ItemListContainer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Main />
    <ItemListContainer greeting="Productos" />
  </React.StrictMode>
);

reportWebVitals();
