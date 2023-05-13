import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, stock, img}) => {
  return (
    <div className='cardProducto'>
      <img className='imgProducto' src={img} alt={nombre} />
      <h3>Nombre: {nombre} </h3>
      <p> Precio: {precio} </p>
      <p>ID: {id} </p>
      <p>STOCK: {stock}</p>
      <Link className='Ver-detalles' to={`/item/${id}`}>Ver más</Link>
    </div>
  )
}

export default Item