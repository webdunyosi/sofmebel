export interface Product {
  id: string
  name: string
  nameUz: string
  category: string
  price: number
  image: string
  description: string
  descriptionUz: string
  rating: number
  reviews: number
  inStock: boolean
  color?: string
  material?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  customerName: string
  customerPhone: string
  customerEmail: string
  address: string
  city: string
  status: "pending" | "confirmed" | "shipped" | "delivered"
  createdAt: Date
}

export interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}
