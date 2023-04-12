import React, { useState } from 'react'
import './Detalles.css'
import { UsarContextCarrito } from '../../CarritoContext'
import {Link} from 'react-router-dom'
import ContadorItems from '../ContadorItems/ContadorItems'

const Detalles = ({data}) => {

  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const {agregarProducto} = UsarContextCarrito();

  const onAdd = (cantidad) => {
    setIrAlCarrito(true);
    agregarProducto(data,cantidad);
  }

  return (
    <>
      <div>
          <div className='detalles-orden'>
            <div className='card-box'>
              <img src={data.imagen} alt="imagen de productos" className='detalles-img' />
              <p className='detalles-titulo text-center'>{data.titulo}</p>
              <p className='detalles-descripcion'>{data.descripcion}</p>
              <p className='card-precio'>- Precio: ARS {data.precio}</p>
              <p className='detalles-descripcion'>- Rating: {data.rating}</p>
              <p className='detalles-descripcion'>- {data.cantidad}</p>
                {
                  irAlCarrito 
                  ? <Link to='/carrito' className='agregar-carrito'>Agregado. Ver Carrito</Link> 
                  : <ContadorItems initial={1} stock={10} onAdd={onAdd}></ ContadorItems>
                }
            </div>
          </div>
      </div>
    </>
  )
}

export default Detalles