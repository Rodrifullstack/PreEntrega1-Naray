import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial)
  
  const increment = () => {
    if(count < stock){
      setCount( perv => perv + 1)
    }
  }

  const decrement = () => {
    if(count > 1){
      setCount( perv => perv - 1)
    }
  }

  return(
    <>
      <h4>Unidades: {count}</h4>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button type="button" className="btn btn-dark" onClick={() => onAdd(count)} disabled={!stock}>Agregar al Carrito</button>
    </>
  )
}

export default ItemCount