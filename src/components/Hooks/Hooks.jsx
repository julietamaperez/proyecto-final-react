import { useContador } from "./customhook"

const Hooks = () => {
    const {contador, incrementar, decrementar} = useContador (1, 10);
  return (
    <div>
        <h2>Contador</h2>
        <button onClick={decrementar}>-</button>
        <button> {contador} </button>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default Hooks