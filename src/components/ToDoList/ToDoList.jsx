import {useState, useEffect} from 'react'
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoList.css'

const ToDoList = () => {
    const [todos, setTodos] = useState(() =>{
        const guardadoTodos = localStorage.getItem('todos');
        if(guardadoTodos){
            return JSON.parse(guardadoTodos);
        } else{
            return [];
        }
    });

    const [inputValue, setInputValue] = useState('');

    const agregarTodo = (text) => {
        setTodos([...todos, text]);
    }

    const borrarTodo = (todoABorrar) => {
        const actualizarTodos = todos.filter((todo) => todo!== todoABorrar);
        setTodos(actualizarTodos);
    }

    const manejadorSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim()){
            agregarTodo(inputValue);
            setInputValue('');
        }
    }

    useEffect(() =>{
        localStorage.setItem ('todos', JSON.stringify (todos));
    },[todos] )



  return (
    <div>
        <h1>Lista de tareas pendientes</h1>
        <form onSubmit={ manejadorSubmit }>
            <input type="text" placeholder='Agregar una tarea' value={inputValue} onChange={ (e) => setInputValue (e.target.value)}/>
            <button type='submit'>Agregar</button>
        </form>
        <ul>
            {
                todos.map((todo, index) => (
                    <ToDoItem
                    key = {index}
                    todo = {todo}
                    borrarTodo={borrarTodo}
                    />
                ))

            }
        </ul>

    </div>
  )
}

export default ToDoList