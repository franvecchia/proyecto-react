import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar';
import './components/navbar/Navbar';
import Carrito from './components/Carrito'
import './components/Main.css';
import ItemListContainer from './components/ItemListContainer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetallesContainer from './components/DetallesContainer';
import CarritoProvider from './CarritoContext';
import './config'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>} />
          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route exact path='/carrito' element={<Carrito/>} />
          <Route exact path='/detalle/:detalleId' element={<DetallesContainer/>} />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(); 