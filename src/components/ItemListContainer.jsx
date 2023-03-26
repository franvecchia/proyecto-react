import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import Main from './Main';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'



const ItemListContainer = () => {

  const [data,setData] = useState([]);
  const {categoriaId} = useParams()

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos');
    if (categoriaId) {
      const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
      getDocs (queryFilter)
        .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
    }else{
      getDocs (queryCollection)
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

export default ItemListContainer