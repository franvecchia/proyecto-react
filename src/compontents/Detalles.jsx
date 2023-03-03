import React from 'react'
import './ItemListContainer.css'

const Detalles = ({data}) => {

  return (
    <>
      <div>
          <div className='detalles-orden'>
            <div className='card-box'>
              <img src={data.imagen} alt="imagen de productos" className='detalles-img' />
              <p className='detalles-titulo text-center'>{data.titulo}</p>
              <p className='detalles-descripcion'>{data.descripcion}</p>
                <p className='card-precio'>- ARS {data.precio}</p>
                <p className='detalles-descripcion'>- Rating: {data.rating}</p>
                <p className='detalles-descripcion'>- {data.cantidad}</p>
              <button className='agregar-carrito'>Agregar al Carrito</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Detalles