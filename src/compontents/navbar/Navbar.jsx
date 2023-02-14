import React from 'react';
import Logo from '../../img/cofax.png';
import CartWidget from './CartWidget';

const navbar = () => {

    const options = [
        {id:0, title:'Categorías'},
        {id:1,title:'Nosotros'},
        {id:2,title:'Armá tu PC'}
    ]

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
                <a className="nav-title navbar-img" href="#"><img src={Logo} alt={"Logo de la empresa"} className='nav-img' />Cofax</a>
                <div className="collapse navbar-collapse orden" id="navbarTogglerDemo03">
                    <div className='navbar-nav mb-2 mb-lg-0'>
                        {options.map(item => (<a className='nav-list' href='#'>{item.title}</a>))}
                    </div>
                </div>
                <button className="btn nav-button" type="button">Ingresar</button>
                <CartWidget />
            </div>
        </nav>
    </header>
)
}

export default navbar;