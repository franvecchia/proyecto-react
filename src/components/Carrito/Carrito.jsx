import React from 'react'
import { Link } from 'react-router-dom';
import { UsarContextCarrito } from '../../CarritoContext'
import ItemCarrito from '../ItemCarrito/ItemCarrito';
import './Carrito.css'
import {addDoc, collection, getFirestore} from 'firebase/firestore'

const Carrito = () => {
    const {carrito, precioTotal} = UsarContextCarrito();
    const {vaciarCarrito} = UsarContextCarrito();

    const order = {
      buyer: {
        name: 'Francisco',
        email: 'franvecchia00@gmail.com',
        phone: '123123',
        address: 'hola'
      },
      items: carrito.map(producto => ({id: producto.id, titulo: producto.titulo, precio: producto.precio, cantidad: producto.cantidad})),
      total: precioTotal()
    }

    const manejarClick = () => {
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

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
      <button className='agregar-carrito' onClick={manejarClick}>Terminar Compra</button>
      <button className='agregar-carrito' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      </div>
    </>
  )
}

export default Carrito