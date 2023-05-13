//import {getUnProducto} from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [products, setProductos] = useState (null);

    const {idItem} = useParams();

    useEffect ( ()=> {
        const nuevoDoc = doc(db, "productos", idItem);

        getDoc (nuevoDoc)
        .then (res => {
            const data = res.data ();
            const nuevoProducto = {id: res.id, ...data}
            setProductos (nuevoProducto);
        })
        .catch ( error => console.log(error))
    }, [idItem])
  
    return (
    <div>
        <ItemDetail {...products}/>
    </div>
  )

}

export default ItemDetailContainer

//    useEffect (() =>{
//        getUnProducto(idItem)
//        .then(res => setProductos (res))
//    }, [idItem])