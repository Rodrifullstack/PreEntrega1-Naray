import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import Spinner from "../Spinner/Spinner"

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const { productId } = useParams()

  useEffect(() => {

    getDoc(doc(db, "products", productId))
      .then((querySnapshot) => {

        const product = { id: querySnapshot.id, ...querySnapshot.data() }
        setProduct(product)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      });

  }, [productId])

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