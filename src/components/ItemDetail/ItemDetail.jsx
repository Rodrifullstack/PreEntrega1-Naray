import ItemCount from "../ItemCount/ItemCount"
import {  useContext, useState } from "react"
import '../../App.css'
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id,name, img, category, price, description, stock}) => {
  const [cantidadAgregada,setCantidadAgreagda] = useState(0)
  
  const { addItem } = useContext(CartContext)

  const onAdd = (cantidad) => {
    setCantidadAgreagda(cantidad)
    
    const item = {
      id, name, price, img
    }

    addItem(item,cantidad)

  }



  return (
    <div className="card" style={{margin:30, padding: 20, borderRadius:20, boxShadow:'0px 0px 10px 2px rgba(0, 0, 0, 0.2)'}}>
      <article>
        <h2>{name}</h2>
        <img src={img} style={{width: 300}}/>
        <p className="pCustomParagraph">Categoria: {category}</p>
        <p className="pCustomParagraph">Descripcion: {description}</p>
        <h4>Precio: {price}</h4>
        { cantidadAgregada > 0 ? (
            <Link to='/cart'><button type="button" className="btn btn-dark">Finalizar Compra</button></Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={onAdd}/>  
        )}
      </article>
    </div>
  )
}

export default ItemDetail