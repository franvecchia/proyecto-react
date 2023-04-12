import React from 'react';
import Logo from '../../img/cofax.png';
import CartWidget from '../CarritoWidget/CarritoWidget';
import {NavLink} from 'react-router-dom';

const navbar = () => {

return (
    <header>
        <nav className="navbar navbar-expand-lg mt-2">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className='navbar-toggler-icon'></span>
                </button>
                <NavLink className="nav-title navbar-img" to='/'><img src={Logo} alt={"Logo de la empresa"} className='nav-img' />Cofax</NavLink>
                <div className="collapse navbar-collapse orden" id="navbarTogglerDemo03">
                    <ul className='navbar-nav mt-2 mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink className='nav-list' aria-current="page" to='/'>Inicio</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-list' to='/categoria/componentes'>Componentes</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className='nav-list' to='/categoria/perifericos'>Perifericos</NavLink>
                        </li>
                    </ul>
                </div>
                <button className='btn nav-button' type="button">Ingresar</button>
                <CartWidget />
            </div>
        </nav>
    </header>
)
}

export default navbar;