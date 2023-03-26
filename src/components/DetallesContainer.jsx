import React, {useEffect, useState} from 'react'
import Detalles from './Detalles'
import { useParams } from 'react-router-dom'
import {getFirestore, doc, getDoc} from 'firebase/firestore'
 

const DetallesContainer = () => {
  const [data,setData] = useState({});
  const {detalleId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', detalleId)
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))  
  }, [detalleId])
    
  return (
        <Detalles data={data}/>
    )
}

export default DetallesContainer