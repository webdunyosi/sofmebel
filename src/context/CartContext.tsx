import React, { useState } from "react"
import type { ReactNode } from "react"
import type { CartItem, Product } from "../types/index"
import { CartContext } from "./CartContextCreator"

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  const saveToLocalStorage = (cartItems: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }

  const addToCart = (product: Product, quantity: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id,
      )

      let updatedItems
      if (existingItem) {
        updatedItems = prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      } else {
        updatedItems = [...prevItems, { product, quantity }]
      }

      saveToLocalStorage(updatedItems)
      return updatedItems
    })
  }

  const removeFromCart = (productId: string) => {
    setItems((prevItems) => {
      const updated = prevItems.filter((item) => item.product.id !== productId)
      saveToLocalStorage(updated)
      return updated
    })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setItems((prevItems) => {
      const updated = prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      )
      saveToLocalStorage(updated)
      return updated
    })
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem("cart")
  }

  const getTotalPrice = () => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    )
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
