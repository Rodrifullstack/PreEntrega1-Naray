import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"

const Checkout = () => {


  const [loading, setLoading] = useState(false)
  const [orderCreated, setCreatedOrder] = useState(false)


  const { cart, totalQuantity, total, clearCart } = useContext(CartContext)

  const createOrder = async () => {

    setLoading(true)
    try {

      const totQuantity = totalQuantity()

      const objOrder = {
        buyer: {
          firstName: "Rodri",
          lastName: "Naray",
          phone: '12334345',
          email: 'asd@gmail.com'
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
        <h1>Se esta generando su orden</h1>
      </>
    )
  }

  if (orderCreated) {
    return (
      <>
        <h1>Su orden fue creada correctamente</h1>
      </>
    )
  }

  return (
    <>
      <h1>Checkout</h1>
      {'formulario'}
      <button className="Option" onClick={createOrder}> Crear Orden </button>
    </>
  )
}

export default Checkout