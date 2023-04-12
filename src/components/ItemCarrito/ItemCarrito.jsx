import React from 'react'
import { UsarContextCarrito} from '../../CarritoContext'
import './ItemCarrito.css'

const ItemCarrito = ({ producto }) => {
  const {borrarProducto} = UsarContextCarrito();

  return (
    <div className='item-carrito container mt-5'>
      <img src={producto.imagen} alt="imagen del producto a comprar" className='carrito-img'/>
      <div className='item-carrito-detalles'>
        <p className='item-carrito-titulo'>{producto.titulo}</p>
        <p className='item-carrito-cps'>Cantidad: {producto.cantidad}</p>
        <p className='item-carrito-cps'>Precio: ${producto.precio}</p>
        <p className='item-carrito-cps'>Subotal: ${producto.cantidad * producto.precio}</p>
        <button onClick={() => borrarProducto(producto.id)} className='agregar-carrito'>Eliminar</button>
      </div>
    </div>
  )
}

export default ItemCarrito