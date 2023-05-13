import { useState, useEffect } from "react";
import { db } from "../../services/firebase/config";
import './Productos.css'
import { collection, doc, query, updateDoc, onSnapshot } from "firebase/firestore";


const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "productos"));

    const modificar = onSnapshot(q, function (querySnapShot) {
      const docs = [];
      querySnapShot.forEach(function (doc) {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setProductos(docs);
    })
    return () => {
      modificar();
    };
  }, []);



  

  const manejadorCompra = (id, stock) => {
    if (stock > 0) {
      const productoRef = doc(db, "productos", id);
      updateDoc(productoRef, {
        stock: stock - 1,
      })
        .then(() => {
          console.log("El stock se actualizó correctamente");
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  return (
    <div className="productos">
      {
        productos.map((producto) => (
          <div className="producto" key={producto.id}>
            <p>{Image}</p>
            <h2>Nombre:{producto.nombre}</h2>
            <p>Precio: {producto.precio}</p>
            <p>Stock:{producto.stock}</p>
            <button onClick={() => manejadorCompra(producto.id, producto.stock)}>Comprar</button>
          </div>
        ))
      }
    </div>
  )
}

export default Productos