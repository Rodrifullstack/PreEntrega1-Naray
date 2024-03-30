import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const { productId } = useParams()

  useEffect(() => {

    getDoc(doc(db, "products", productId))
      .then((querySnapshot) => {
        // console.log(querySnapshot)
        const product = { id: querySnapshot.id, ...querySnapshot.data() }
        setProduct(product)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      });

    // getProductById(productId)
    //   .then( res => {
    //     setProduct(res)
    //   })
    //   .catch( error => {
    //     console.log(error)
    //   })
  }, [productId])

  return (
    <>
      {(!loading)
        ? (<div>
          <ItemDetail {...product} />
        </div>) : (
          <h2> Cargado Producto...</h2>
        )}
    </>
  )
}

export default ItemDetailContainer