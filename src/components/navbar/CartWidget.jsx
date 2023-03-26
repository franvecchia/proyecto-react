import React from 'react'
import './navbar.css'
import Carrito from '../../img/carrito-de-compras.png'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../CarritoContext'

const CartWidget = () => {

    const {productosTotales} = useCartContext();
    
    return (
        <>
            <Link to='/carrito' className='btn nav-button'>
                <img src={Carrito} alt={"Carrito de compras"} className='carrito' />
                <span className='carrito-numero'>{productosTotales() || '0' }</span>
            </Link>
        </>
    )
}

export default CartWidget