
import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../Context/CarritoContext';

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);

  const ImagenCarrito = "https://cdn-icons-png.flaticon.com/512/1058/1058965.png";
  return (
    <Link to='/cart'>
      <img className='ImagenCarrito' src={ImagenCarrito} alt="carrito" />
      {
        totalCantidad
      }

    </Link>
  )
}

export default CartWidget
