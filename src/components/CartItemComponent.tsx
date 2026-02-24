import React from "react"
import type { CartItem } from "../types/index"
import { useCart } from "../hooks/useCart"

interface CartItemComponentProps {
  item: CartItem
}

export const CartItemComponent: React.FC<CartItemComponentProps> = ({
  item,
}) => {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex gap-4 border-b border-gray-200 py-4 items-center backdrop-blur-glass bg-white/30 px-4 rounded-lg transition-all hover:bg-white/50 animate-fade-in">
      {/* Product Image */}
      <img
        src={item.product.image}
        alt={item.product.nameUz}
        className="w-20 h-20 object-cover rounded-lg shadow-md"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="font-bold text-gray-800">{item.product.nameUz}</h3>
        <p className="text-red-600 font-semibold text-sm">
          ${item.product.price}
        </p>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-1">
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
          className="px-2 py-1 bg-white rounded hover:bg-gray-200 transition-colors duration-200 font-bold"
        >
          −
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          className="px-2 py-1 bg-white rounded hover:bg-gray-200 transition-colors duration-200 font-bold"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="text-right min-w-24">
        <p className="font-bold text-lg text-red-700">
          ${(item.product.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.product.id)}
        className="px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
      >
        O'chirish
      </button>
    </div>
  )
}
