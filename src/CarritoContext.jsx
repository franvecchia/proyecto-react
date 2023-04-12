import React, {useContext, useState} from 'react'
export const UsarContextCarrito = () =>  useContext(CarritoContext);

const CarritoContext = React.createContext([]);

const CarritoProveedor = ({children}) => {
  const [carrito, setearCarrito] = useState([]);

  const agregarProducto = (item,cantidad) => {
    if (estaEnCarrito(item.id)) {
      setearCarrito(carrito.map(producto => {
        return producto.id === item.id ? {...producto, cantidad : producto.cantidad + cantidad} : producto
      }));
    } else {
      setearCarrito([...carrito, {...item, cantidad}]);
    }
  }

  const precioTotal = () => {
    return carrito.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
  }

  const productosTotales = () => carrito.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

  const vaciarCarrito = () => setearCarrito([]);

  const estaEnCarrito = (id) => {
    return carrito.find(producto => producto.id === id) ? true : false;
  }

  const borrarProducto = (id) => setearCarrito(carrito.filter(producto => producto.id !== id));

  return (
    <CarritoContext.Provider value={{vaciarCarrito, estaEnCarrito, borrarProducto, agregarProducto, precioTotal, productosTotales, carrito}}>
      {children}
    </CarritoContext.Provider>

  )
}

export default CarritoProveedor