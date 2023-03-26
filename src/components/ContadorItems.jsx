import React,{useState} from 'react'
import './ItemListContainer.css';

const ContadorItems = ({ initial, stock, onAdd}) => {
    const [count,setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

  return (
    <div className='detalles-bg'>
        <button disabled={count <= 1} onClick={decrease} className='botones-contador'>-</button>
        <span className='numero-contador'>{count}</span>
        <button disabled= {count >= stock} onClick={increase} className='botones-contador'>+</button>
        <div className='detalles-bg'>
            <button onClick={() => onAdd(count)} className='agregar-carrito'>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ContadorItems