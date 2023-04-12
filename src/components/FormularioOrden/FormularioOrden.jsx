import React, {useState} from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './FormularioOrden.css'
import { UsarContextCarrito } from '../../CarritoContext';
import {Link } from 'react-router-dom';

const FormularioOrden = () => {
  const [nombreComprador, setearNombreComprador] = useState('');
  const [telefonoComprador, setearTelefonoComprador] = useState('');
  const [emailComprador, setearEmailComprador] = useState('');
  const [direccionComprador, setearDireccionComprador] = useState('');
  const {carrito, precioTotal} = UsarContextCarrito();
  const [irAlMenu, setIrAlMenu] = useState(false);
  const {vaciarCarrito} = UsarContextCarrito();

  const db = getFirestore();
  const ColeccionOrdenes = collection(db,'ordenes');

  const resetearForm = () => {
    setearNombreComprador('');
    setearTelefonoComprador('');
    setearEmailComprador('');
    setearDireccionComprador('');
    vaciarCarrito();
  };

  const manejarClick = (e) => {
    e.preventDefault();
    setIrAlMenu(true);

    const orden = {
      comprador: {
        nombre: nombreComprador,
        email: telefonoComprador,
        telefono: emailComprador,
        direccion: direccionComprador
      },
      items: carrito.map(producto => ({id: producto.id, titulo: producto.titulo, precio: producto.precio, cantidad: producto.cantidad})),
      total: precioTotal()
    };

    addDoc(ColeccionOrdenes, orden)
    .then((docRef) => {
      console.log('Documento enviado. ID:', docRef.id);
      resetearForm();
    })
    .catch((e) => {
      console.log('Error al agregar el documento', e);
    });
  };

  return (
    <>
      <div>
        <p className='texto-formulario mt-5'>Antes de finalizar la compra, complete sus datos personales para poder entregarle sus productos.</p>
        <form className='formulario-orden' onSubmit={manejarClick}>
          <label className='textos-label'>
            Nombre:
            <input type="text" className='input-formularios' value={nombreComprador} onChange={(e) => setearNombreComprador(e.target.value)} />
          </label>
          <label className='textos-label'>
            Teléfono:
            <input type="text" value={telefonoComprador} className='input-formularios' onChange={(e) => setearTelefonoComprador(e.target.value)} />
          </label>
          <label className='textos-label'>
            Email:   
            <input type="email" value={emailComprador} className='input-formularios' onChange={(e) => setearEmailComprador(e.target.value)} />
          </label>
          <label className='textos-label'>
            Dirección:
            <input type="text" value={direccionComprador} className='input-formularios' onChange={(e) => setearDireccionComprador(e.target.value)} />
          </label>
          {
            irAlMenu ?
            <>
              <p className='texto mt-3'>¡Muchas gracias por su compra! Nos contactaremos a su mail a la brevedad.</p>
              <Link to='/' className='ir-al-menu mt-3'>Volver Al Menú</Link>
            </>
            :
            <>
            <p className='precio-total mt-3'>Total= ${precioTotal()}</p> 
            <button type="submit" className="emitir-compra mt-3">Emitir compra</button>
          </>
          }
        </form>
      </div>
    </>
  )
}

export default FormularioOrden