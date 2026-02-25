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
    <div className="border-b border-gray-200 py-2 px-2 sm:py-3 sm:px-3 backdrop-blur-glass bg-white/30 rounded-lg transition-all hover:bg-white/50 animate-fade-in">
      {/* Mobile Layout */}
      <div className="flex gap-2 sm:gap-3 items-start mb-2">
        {/* Product Image */}
        <img
          src={item.product.image}
          alt={item.product.nameUz}
          className="w-14 sm:w-16 h-14 sm:h-16 object-cover rounded-lg shadow-sm flex-shrink-0"
        />

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-800 text-xs sm:text-sm truncate">
            {item.product.nameUz}
          </h3>
          <p className="text-red-600 font-semibold text-xs">
            ${item.product.price}
          </p>
        </div>

        {/* Total Price - Mobile */}
        <div className="text-right flex-shrink-0">
          <p className="font-bold text-xs sm:text-sm text-red-700">
            ${(item.product.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Controls Row */}
      <div className="flex gap-2 justify-between items-center">
        {/* Quantity Control */}
        <div className="flex items-center gap-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md p-0.5">
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            className="px-1.5 py-0.5 text-xs sm:text-sm bg-white rounded hover:bg-gray-200 transition-colors duration-200 font-bold"
          >
            −
          </button>
          <span className="w-5 sm:w-7 text-center text-xs sm:text-sm font-semibold">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            className="px-1.5 py-0.5 text-xs sm:text-sm bg-white rounded hover:bg-gray-200 transition-colors duration-200 font-bold"
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => removeFromCart(item.product.id)}
          className="px-2 py-0.5 text-xs bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md hover:shadow-md hover:scale-105 transition-all duration-200 font-semibold whitespace-nowrap"
        >
          O'chirish
        </button>
      </div>
    </div>
  )
}
