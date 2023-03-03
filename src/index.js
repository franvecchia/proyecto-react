import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './compontents/navbar/Navbar';
import './compontents/navbar/Navbar';
import './compontents/Main.css';
import ItemListContainer from './compontents/ItemListContainer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetallesContainer from './compontents/DetallesContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route exact path='/detalle/:detalleId' element={<DetallesContainer/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();