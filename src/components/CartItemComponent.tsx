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
    <div className="flex gap-4 border-b py-4 items-center">
      {/* Product Image */}
      <img
        src={item.product.image}
        alt={item.product.nameUz}
        className="w-20 h-20 object-cover rounded"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="font-bold text-gray-800">{item.product.nameUz}</h3>
        <p className="text-gray-600 text-sm">${item.product.price}</p>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="text-right min-w-24">
        <p className="font-bold text-lg">
          ${(item.product.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.product.id)}
        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        O'chirish
      </button>
    </div>
  )
}
