import {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const getItemsFromLocalStorage = JSON.parse(localStorage.getItem("ctdCommerceCart")) || []

  const [ items, setItems ] = useState(getItemsFromLocalStorage)

  const clearCart = () => {
    setItems([])
    localStorage.setItem("ctdCommerceCart", JSON.stringify([]))
  }

  const addToCart = (item) => {
    const itemInCart = items.find(i => i.id === item.id) || item
    const quantity = itemInCart?.quantity || 0
    itemInCart.quantity = quantity + 1

    const newState = [
      ...items.filter(i => i.id !== item.id),
      itemInCart
    ].sort((a, b) => a.id - b.id)

    localStorage.setItem("ctdCommerceCart", JSON.stringify(newState))
    setItems(newState)
  }

  const removeFromCart = (item) => {
    const itemInCart = items.find(i => i.id === item.id)
    if (!itemInCart) {
      return
    }

    const quantity = itemInCart.quantity

    const newState = quantity > 1
      ?
        [
          ...items.filter(i => i.id !== item.id), 
          {
            ...itemInCart, 
            quantity: quantity - 1
          }
        ].sort((a, b) => a.id - b.id)
      : items.filter(itemInCart => itemInCart.id !== item.id).sort((a, b) => a.id - b.id)

    localStorage.setItem("ctdCommerceCart", JSON.stringify(newState))
    setItems(newState)
  }

  const value = {
    items,
    addToCart,
    removeFromCart,
    clearCart
  }

  return (
      <CartContext.Provider value={value}>
          {children}
      </CartContext.Provider>
  )
}