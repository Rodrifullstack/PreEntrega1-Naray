import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Link, useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import Spinner from "../Spinner/Spinner"

const ItemDetailContainer = () => {
  const [existeProducto,setExisteProducto] = useState(true)
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const { productId } = useParams()

  useEffect(() => {

    getDoc(doc(db, "products", productId))
      .then((querySnapshot) => {

        const product = { id: querySnapshot.id, ...querySnapshot.data() }
        setProduct(product)
        if (product.category === undefined){
          setExisteProducto(false)
        }

      })
      .catch((error) => {
        console.log(error)
        console.log('PRODUCTO NO ENCONTRADO')
      })
      .finally(() => {
        setLoading(false)
      });

  }, [productId])



  if(!existeProducto){
    return(
      <>
        <h3> El producto no existe </h3>
        <Link to='/'> <button className="Option">Volver al inicio</button></Link>
      </>
    )
  }

  return (
    <>
      {(!loading)
        ? (<div>
          <ItemDetail {...product} />
        </div>) : (
          <>
            <Spinner />
            <h2> Cargado Producto...</h2>
          </>
        )}
    </>
  )
}

export default ItemDetailContainer