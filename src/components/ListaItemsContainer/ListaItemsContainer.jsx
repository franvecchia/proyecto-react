import React, { useEffect, useState } from 'react'
import './ListaItemsContainer.css'
import {useParams} from 'react-router-dom';
import ItemList from '../ListaItems/ListaItems';
import Main from '../Main/Main';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'



const ListaItemsContainer = () => {

  const [data,setData] = useState([]);
  const {categoriaId} = useParams()

  useEffect(() => {
    const querydb = getFirestore();
    const queryColleccion = collection(querydb, 'productos');
    if (categoriaId) {
      const queryFiltro = query(queryColleccion, where('categoria', '==', categoriaId))
      getDocs (queryFiltro)
        .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
    }else{
      getDocs (queryColleccion)
        .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
    } 
  }, [categoriaId])

  return (
    <>
      <Main />
      <h3 className='separador'>Productos</h3>
      <div className='container'>
        <p className='texto-categorias ms-3'> Más Vendidos</p>
        <a href="#" className='ver-mas ms-3'>Ver Más</a>
        <div className="row">
          <ItemList data={data} />
        </div>
      </div>
    </>
  )
}

export default ListaItemsContainer