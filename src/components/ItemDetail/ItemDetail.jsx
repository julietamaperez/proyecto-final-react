import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CarritoContext } from '../Context/CarritoContext'
import { useContext } from 'react'


const ItemDetail = ({ nombre, img, precio, id, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const {agregarProducto} = useContext (CarritoContext);



  const administrarCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados:" + cantidad);
    const item = {id, nombre, precio, img};
    agregarProducto(item,cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre}</h2>
      <img src={img} alt={nombre} />
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <p>Colabora de forma significativa con el fortalecimiento del sistema inmunológico. La suplementación con hierro es una de las principales opciones. El mineral es importante para la acción preventiva contra las anemias junto con el ácido fólico también presente, y en estados que pueden comprometer la salud y energía para la realización de las actividades diarias.</p>
      {
        agregarCantidad > 0 ? (<Link to="/cart">Terminar 
        compra </Link>) : (<ItemCount inicial={1} stock={stock}
          funcionAgregar={administrarCantidad} />)
      }
    </div>
  )
}

export default ItemDetail