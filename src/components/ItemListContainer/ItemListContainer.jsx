
import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductosPorCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query, doc } from "firebase/firestore";
import { db } from '../../services/firebase/config';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { idCategoria } = useParams();

useEffect (() =>{

const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;
  
     funcionProductos(idCategoria)
   .then(res => setProducts (res))
     .catch(error => console.error (error))
   },[idCategoria])


  return (
    <>
      <h2 style={{ textAlign: "center" }}> Productos</h2>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer

//useEffect (() =>{

//  const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;
  
//      funcionProductos(idCategoria)
//    .then(res => setProducts (res))
//     .catch(error => console.error (error))
//   },[idCategoria])


//useEffect (() =>{
//  const misProductos = idCategoria? query(collection(db,"productos"), where("idCat", "==", idCategoria)): collection(db, "productos");
//  getDocs(misProductos)
//  .then(res=>{
//    const nuevosProductos = res.docs.map(doc => {
//        const data = doc.data()
//        return {id:doc.id, ...data}
//    })
//    setProducts(nuevosProductos);
//  })
//  .catch(error => console.log (error))
//},[idCategoria])