import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Carrito from './components/Carrito/Carrito'
import ListaItemsContainer from './components/ListaItemsContainer/ListaItemsContainer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetallesContainer from './components/DetallesContainer/DetallesContainer';
import CarritoProveedor from './CarritoContext';
import './config'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CarritoProveedor>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ListaItemsContainer/>} />
          <Route exact path='/categoria/:categoriaId' element={<ListaItemsContainer/>} />
          <Route exact path='/carrito' element={<Carrito/>} />
          <Route exact path='/detalle/:detalleId' element={<DetallesContainer/>} />
        </Routes>
      </CarritoProveedor>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(); 