import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../CarritoContext'
import ItemCarrito from './ItemCarrito';
import './Carrito.css'
import {addDoc, collection, getFirestore} from 'firebase/firestore'

const Carrito = () => {
    const {cart, precioTotal} = useCartContext();
    const {vaciarCarrito} = useCartContext();

    const order = {
      buyer: {
        name: 'Francisco',
        email: 'franvecchia00@gmail.com',
        phone: '123123',
        address: 'hola'
      },
      items: cart.map(producto => ({id: producto.id, titulo: producto.titulo, precio: producto.precio, cantidad: producto.cantidad})),
      total: precioTotal(),
    }

    const manejarClick = () => {
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

  if (cart.length === 0) {
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
         cart.map( product => <ItemCarrito key={product.id} product={product} />)
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