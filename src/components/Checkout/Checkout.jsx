import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"
import CheckOutForm from "../CheckOutForm/CheckOutForm"
import { Link } from "react-router-dom"
import Spinner from "../Spinner/Spinner"

const Checkout = () => {


  const [loading, setLoading] = useState(false)
  const [orderCreated, setCreatedOrder] = useState(false)
  const [orderId, setOrderId] = useState('')


  const { cart, totalQuantity, total, clearCart } = useContext(CartContext)

  const createOrder = async ({name,phone,email}) => {

    setLoading(true)
    try {

      const totQuantity = totalQuantity()

      const objOrder = {
        buyer: {
          name: name,
          phone: phone,
          email: email
        },
        items: cart,
        totQuantity,
        total,
        date: new Date()

      }

      const ids = cart.map((item) => item.id)

      const productRef = collection(db, "products")

      const productsAddedFromFirestore = await getDocs(query(productRef, where(documentId(), "in", ids)))

      const { docs } = productsAddedFromFirestore

      const outOfStock = []
      const batch = writeBatch(db)

      docs.forEach((doc) => {
        const dataDoc = doc.data()
        const stockDB = dataDoc.stock

        const productAddedToCart = cart.find((prod) => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity

        if (stockDB >= prodQuantity) {
          //Actualizar

          batch.update(doc.ref, { stock: stockDB - prodQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, "orders")
        const orderAdded = await addDoc(orderRef, objOrder)

        console.log(`El id de su orden es: ${orderAdded.id}`)
        setOrderId(orderAdded.id)
        clearCart()
        setCreatedOrder(true)

      } else {
        console.log("Hay productos en su carrito que estan fuera de stock")
      }

    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <>
        <Spinner/>
        <h3>Se esta generando su orden</h3>
      </>
    )
  }

  if (orderCreated) {
    return (
      <>
        <h1>Su orden ha sido creada correctamente</h1>
        <br/>
        <br/>
        <h3>¡Gracias por su compra!</h3>
        <h3>Codigo identificador de orden: <strong>{orderId}</strong></h3>
        <br/>
        <br/>
        <Link to='/'><button className="Option"> Volver al Inicio</button></Link>
      </>
    )
  }

  return (
    <>
      <h1>Checkout</h1>
      <CheckOutForm onConfirm={createOrder}/>
    </>
  )
}

export default Checkout