import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {

  const { cart, clearCart, totalQuantity, total } = useContext(CartContext)


  if (totalQuantity() === 0) {
    return (
      <>
        <h1>Carrito vacío</h1>
        <br/>
        <br/>
        <h4>¡Hay un carrito que llenar!</h4>
        <Link to='/' className="Option"> <button className="Button"> Todos los productos </button></Link>
      </>
    )
  }

  return (
    <div>
      <h2>Carrito de compras:</h2>
      <br />
      <ul className="list-group">
        {cart.map(p => <CartItem key={p.id} {...p} />)}
      </ul>
      <br />
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button"> Limpiar carrito</button>
      <Link to='/checkout' className="Option">
        <button className="Button">
          Checkout
        </button>
      </Link>
    </div>
  )
}

export default Cart