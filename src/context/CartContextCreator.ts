import { createContext } from "react"
import type { CartContextType } from "../types/index"

export const CartContext = createContext<CartContextType | undefined>(undefined)
