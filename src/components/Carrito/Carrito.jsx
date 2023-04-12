import React from 'react'
import { Link } from 'react-router-dom';
import { UsarContextCarrito } from '../../CarritoContext'
import ItemCarrito from '../ItemCarrito/ItemCarrito';
import './Carrito.css'

const Carrito = () => {
    const {carrito, precioTotal} = UsarContextCarrito();
    const {vaciarCarrito} = UsarContextCarrito();

  if (carrito.length === 0) {
    return (
        <>
            <p className='no-hay-carrito mt-5'>No hay elementos en el carrito.</p>
            <Link to='/' className='ir-al-menu'>Ir al menú</Link>
        </>
    )
  }

  return (
    <>
      {
        carrito.map( producto => <ItemCarrito key={producto.id} producto={producto} />)
      }
      <div className='carrito-extra container mt-5'>
        <p className='precio-total'>
          Total= ${precioTotal()}
        </p>
        <Link className='agregar-carrito' to='/formulario'>Finalizar Compra</Link>
        <button className='agregar-carrito' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      </div>
    </>
  )
}

export default Carrito