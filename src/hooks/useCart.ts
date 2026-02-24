import { useContext } from "react"
import { CartContext } from "../context/CartContextCreator"
import type { CartContextType } from "../types/index"

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
