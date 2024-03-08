import { Link } from "react-router-dom"

const Item = ({id, name, img, category, price}) => {
  return (
    <div className="card" style={{width:300,margin:30, padding: 20, borderRadius:20, boxShadow:'0px 0px 10px 2px rgba(0, 0, 0, 0.2)'}}>
    <img src={img} className="card-img-top" style={{display:"flex"}}/>
    {/* <img src="..." className="card-img-top" alt="..."/> */}
    <article>
      <h4>{name}</h4>
      <p>Categoria: {category}</p>
      <h4>$ {price}</h4>
      <Link to={`/item/${id}`} ><button>Ver detalle</button></Link>
    </article>
    

    </div>
  )
}

export default Item