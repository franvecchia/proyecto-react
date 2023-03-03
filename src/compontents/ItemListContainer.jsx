import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import Main from './Main';



const ItemListContainer = () => {

  const productos = [
    {
      id: 1,
      titulo: "Placa de Video GeForce MSI G210 1GB DDR3 Low Profile",
      precio: "13.650",
      descripcion: "nvidia Geforce gaming, gama baja para juegos de poco requerimiento de graficos",
      categoria: "componentes",
      imagen: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/912-V809-2808_800.jpg",
      rating: "7.3",
      cantidad: "buen stock"
    },
    {
      id: 2,
      titulo: "Teclado Mecanico Redragon Dark Avenger K568 RGB Switch Red ",
      precio: "12.620",
      descripcion: "Teclado mecanico excelente para videojuegos y para escribir. Switch red, sin teclado numerico",
      categoria: "perifericos",
      imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21943_Teclado_Mecanico_Redragon_Dark_Avenger_K568_RGB_Switch_Red_99c1f75a-grn.jpg",
      rating: "9.1",
      cantidad: "stock alto"
    },
    {
      id: 3,
      titulo: "Fuente Corsair 450W 80 Plus Bronze CV450F",
      precio: "17.450",
      descripcion: "fuente de 450W, certificacion 80 plus, formato ATX. Uno de los mejores productos del mercado en relacion precio-calidad.",
      categoria: "componentes",
      imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20117_Fuente_Corsair_450W_80_Plus_Bronze_CV450_0adbe0de-grn.jpg",
      rating: "8.1",
      cantidad: "stock bajo"
    },
    {
      id: 4,
      titulo: "Procesador AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Cooler",
      precio: "51.050",
      descripcion: "El procesador mas popular dentro del area gaming y con mas compras a nivel mundial, bueno para juegos gama media-alta.",
      categoria: "componentes",
      imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16749_Procesador_AMD_RYZEN_5_3600_4.2GHz_Turbo_AM4_Wraith_Stealth_Cooler_f8ab4915-grn.jpg",
      rating: "7.0",
      cantidad: "buen stock"
    },
    {
      id: 5,
      titulo: "Procesador Intel Core i5 12400F 4.4GHz Turbo Socket 1700",
      precio: "77.700",
      descripcion: "procesador intel gama media-alta con 16 nucleos. Es de la ultima generacion de los i5, socket 1700.",
      categoria: "componentes",
      imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29677_Procesador_Intel_Core_i5_12400F_4.4GHz_Turbo_Socket_1700_Alder_Lake_d61e2fc4-grn.jpg",
      rating: "6.3",
      cantidad: "stock bajo"
    },
    {
      id: 6,
      titulo: "Mouse Redragon Griffin M607 RGB Black",
      precio: "4.799",
      descripcion: "Mouse gamer negro RGB con 7 botones, muy buena movilidad con 7200 de dpi maximo.",
      categoria: "perifericos",
      imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_10720_Mouse_Redragon_Griffin_M607_RGB_Black_2d8e05f1-grn.jpg",
      rating: "8.3",
      cantidad: "stock alto"
    },
    {
      id: 7,
      titulo: "Memoria Team DDR4 8GB 3200MHz Elite Plus Red",
      precio: "16.399",
      descripcion: "Memoria RAM gama media que se podrá utilizar muy bien en computadoras gama media",
      categoria: "componentes",
      imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24796_Memoria_Team_DDR4_8GB_3200MHz_Elite_Plus_Red_f8b42869-grn.jpg",
      rating: "7.5",
      cantidad: "buen stock"
    },
    {
      id: 8,
      titulo: "Placa de Video MSI GeForce RTX 3090 24GB GDDR6X GAMING",
      precio: "422.050",
      descripcion: "El ultimo modelo de la serie 3000 de nvidia. Con esta tarjeta grafica podras jugar cualquier videojuego que quieras",
      categoria: "componentes",
      imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35042_Placa_de_Video_MSI_GeForce_RTX_3090_24GB_GDDR6X_GAMING_X_TRIO_55c418e2-grn.jpg",
      rating: "6.0",
      cantidad: "stock bajo"
    }
  ]

  const [data,setData] = useState([]);

  const {categoriaId} = useParams()

  useEffect(() => {
    const getData = new Promise (resolve => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    if (categoriaId) {
      getData.then(res => setData(res.filter(producto => producto.categoria === categoriaId)));
    }else {
      getData.then(res => setData(res));
    }
  }, [categoriaId])

  return (
    <>
      <Main />
      <h3 className='separador'>Productos</h3>
      <div className='container'>
        <p className='texto-categorias ms-3'> Más Vendidos</p>
        <a href="#" className='ver-mas ms-3'>Ver Más</a>
        <div className="row">
          <ItemList data={data} />
        </div>
      </div>
    </>
  )
}

export default ItemListContainer