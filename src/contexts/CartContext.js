import {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

  const [ items, setItems ] = useState([])

  const addToCart = (item) => {
    const itemInCart = items.find(i => i.id === item.id) || item
    const quantity = itemInCart?.quantity || 0
    itemInCart.quantity = quantity + 1
    setItems(current => [...current.filter(i => i.id !== item.id), itemInCart])
  }

  const removeFromCart = (item) => {
    const itemInCart = items.find(i => i.id === item.id)
    if (!itemInCart) {
      return
    }

    const quantity = itemInCart.quantity

    if (quantity > 1) {
      setItems(current => [...current.filter(i => i.id !== item.id), {...itemInCart, quantity: quantity - 1}])
    } else {
      setItems(current => current.filter(itemInCart => itemInCart.id !== item.id))
    }
  }

  const value = {
    items,
    addToCart,
    removeFromCart
  }

  return (
      <CartContext.Provider value={value}>
          {children}
      </CartContext.Provider>
  )
}