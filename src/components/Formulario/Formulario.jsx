import './Formulario.css'
import { useState } from 'react'
import { db } from '../../services/firebase/config'
import { collection, addDoc } from 'firebase/firestore'

const Formulario = () => {
const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState ("");
const [telefono, setTelefono] = useState(""); 

const manejadorFormulario =(event) =>{
    event.preventDefault();
    addDoc (collection(db,"usuarios"), {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
    })

    setNombre("");
    setApellido("");
    setTelefono ("");
}

return (
    <form onSubmit={manejadorFormulario}>
        <label htmlFor="">Nombre</label>
        <input type="text" value={nombre} onChange={(event) => setNombre (event.target.value)} required />

        <label htmlFor="">Apellido</label>
        <input type="text"  value={apellido} onChange={(event) => setApellido (event.target.value)} required/>
    
        <label htmlFor="">Celular</label>
        <input type="text"  value={telefono} onChange={(event) => setTelefono (event.target.value)} required/>
    
    <button type="submit">Enviar</button>
    
    </form>
)
}

export default Formulario
