import React, {useContext, useState} from 'react'
export const useCartContext = () =>  useContext(CarritoContext);

const CarritoContext = React.createContext([]);

const CarritoProvider = ({children}) => {
  const [cart, setearCarrito] = useState([]);

  const agregarProducto = (item,cantidad) => {
    if (estaEnCarrito(item.id)) {
      setearCarrito(cart.map(product => {
        return product.id === item.id ? {...product, cantidad : product.cantidad + cantidad} : product
      }));
    } else {
      setearCarrito([...cart, {...item, cantidad}]);
    }
  }

  const precioTotal = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
  }

  const productosTotales = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

  const vaciarCarrito = () => setearCarrito([]);

  const estaEnCarrito = (id) => {
    return cart.find(product => product.id === id) ? true : false;
  }

  const borrarProducto = (id) => setearCarrito(cart.filter(product => product.id !== id));

  return (
    <CarritoContext.Provider value={{vaciarCarrito, estaEnCarrito, borrarProducto, agregarProducto, precioTotal, productosTotales, cart}}>
      {children}
    </CarritoContext.Provider>

  )
}

export default CarritoProvider