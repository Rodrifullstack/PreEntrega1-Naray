import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ id, name, price, quantity, img }) => {
  const { removeItem } = useContext(CartContext)

  return (
      <li className="list-group-item">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              <img src={img} style={{width: 75}}/>
            </div>
            <div className="col">
              Producto: {name}
            </div>
            <div className="col">
              Cantidad: {quantity}
            </div>
            <div className="col">
              Precio: ${price}
            </div>
            <div className="col">
              Subtotal: ${price * quantity}
            </div>
            <div className="col">
              <button onClick={() => removeItem(id)}> X </button>
            </div>
          </div>
        </div>
      </li>
  )
}

export default CartItem