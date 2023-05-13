import './ToDoItem.css'

const ToDoItem = ({todo, borrarTodo}) => {
  return (
    <li>
        <span>{todo}</span>
        <button onClick={() => borrarTodo (todo)}> Eliminar </button>
    </li>
  )
}

export default ToDoItem