import React from 'react'
import Gamer from '../img/gamer.webp';
import Lider from '../img/dirigir.png';
import Variedad from '../img/upc.png';
import Precio from '../img/mejor-precio.png'

const Main = () => {
  return (
    <>
        <div className='container mt-5 landing'>
        <div className='row'>
          <div className='col-5 titulo-y-subtitulo'>
            <h1 className='titulo'>Cofax Hardware</h1>
            <h2 className='subtitulo'>Más de 10 años brindando los mejores servicios informáticos.</h2>
          </div>
          <div className='col-5'>
            <img src={Gamer} alt={"foto portada"} className='main-img' />
          </div>
        </div>
      </div>
      <h3 className='separador'> Porque confiar en nosotros</h3>
      <div className='container-fluid'>
        <div className='row orden'>
          <div className='col-3 main-box'>
            <img src={Lider} alt={"Card liderazgo"} className='box-img' />
            <p className='box-text'>Somos de las empresas líder en el ámbito de la computación</p>
          </div>
          <div className='col-3 main-box'>
            <img src={Variedad} alt={"Card variedad"} className='box-img' />
            <p className='box-text'>Contamos con una variedad de productos y de marcas para que elijas la mejor opción</p>
          </div>
          <div className='col-3 main-box'>
            <img src={Precio} alt={"Card liderazgo"} className='box-img' />
            <p className='box-text'>Contamos con buenos precios y buena política de garantía y devolución ante cualquier conflicto</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main