import React from 'react'
import { useCartContext } from '../CarritoContext'
import './Carrito.css'

const ItemCarrito = ({ product }) => {
    const {borrarProducto} = useCartContext();

  return (
    <div className='item-carrito container mt-5'>
      <img src={product.imagen} alt="imagen del producto a comprar" className='carrito-img'/>
      <div className='item-carrito-detalles'>
        <p className='item-carrito-titulo'>{product.titulo}</p>
        <p className='item-carrito-cps'>Cantidad: {product.cantidad}</p>
        <p className='item-carrito-cps'>Precio: ${product.precio}</p>
        <p className='item-carrito-cps'>Subotal: ${product.cantidad * product.precio}</p>
        <button onClick={() => borrarProducto(product.id)} className='agregar-carrito'>Eliminar</button>
      </div>
    </div>
  )
}

export default ItemCarrito