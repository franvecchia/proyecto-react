import React from 'react'
import './navbar.css'
import Carrito from '../../img/carrito-de-compras.png'

const cartWidget = () => {
    return (
        <button className="btn nav-button" type="button">
            <img src={Carrito} alt={"Carrito de compras"} className='carrito' />2
        </button>
    )
}

export default cartWidget