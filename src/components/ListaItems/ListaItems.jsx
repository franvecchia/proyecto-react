import React from 'react'
import Item from '../Item/Item'

const ListaItems = ({data = []}) => {
  return (
    data.map(productos => <Item key={productos.id} info={productos} />)
  )
}

export default ListaItems