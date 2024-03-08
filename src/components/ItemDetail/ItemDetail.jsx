import ItemCount from "../ItemCount/ItemCount"
import '../../App.css'

const ItemDetail = ({name, img, category, price, description, stock}) => {
  return (
    <div className="card" style={{margin:30, padding: 20, borderRadius:20, boxShadow:'0px 0px 10px 2px rgba(0, 0, 0, 0.2)'}}>
    <article>
      <h2>{name}</h2>
      <img src={img} style={{width: 300}}/>
      <p className="pCustomParagraph">Categoria: {category}</p>
      <p className="pCustomParagraph">Descripcion: {description}</p>
      <h4>Precio: {price}</h4>
      <ItemCount stock={stock}/>
    </article>
    </div>
  )
}

export default ItemDetail