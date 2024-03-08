import { useState } from "react"

const ItemCount = ({stock}) => {
  const [count, setCount] = useState(0)
  
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
    </>
  )
}

export default ItemCount