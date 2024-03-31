import { createContext, useState } from "react";


export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  console.log(cart)


  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(perv => [...perv, { ...item, quantity }])
      setTotal((prev) => prev + item.price * quantity)
    } else {
      console.error('El producto ya fue agregado')
    }
  }

  const removeItem = (itemId) => {
    const removedItem = cart.find( prod => prod.id === itemId)
    setTotal((prev) => prev - removedItem.price * removedItem.quantity)
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart([])
    setTotal(0)
  }

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
  }

  const totalQuantity = () => {
    return cart.reduce((acumulador, item) => acumulador + item.quantity, 0);

  }

  const getTotal = () => {
    return total
  }

  return (
    <CartContext.Provider value={{ cart, total, addItem, removeItem, clearCart, totalQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  )

}