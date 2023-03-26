import React from 'react'
import {Link} from 'react-router-dom'
import './ItemListContainer.css'

const Item = ({info}) => {

  return (
    <>
        <div className='col-3'>
            <div className='card-box'>
                <img src={info.imagen} alt="imagen de productos" className='card-img' />
                <p className='card-titulos'>{info.titulo}</p>
                <Link className='ver-detalles' to={`/detalle/${info.id}`}>Ver detalles</Link>
            </div>
        </div>
    </>
  )
}

export default Item