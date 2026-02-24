import React, { useState } from "react"
import { Link } from "react-router-dom"
import type { Product } from "../types/index"
import { useCart } from "../hooks/useCart"
import { IoCart, IoCheckmark } from "react-icons/io5"

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
      {/* Product Image */}
      <div className="relative h-56 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Sotuvda yo'q</span>
          </div>
        )}
        {product.inStock && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            Sotuvda
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2">
          {product.nameUz}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
          {product.descriptionUz}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-lg">
                {i < Math.round(product.rating) ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-600 font-medium">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Specs */}
        <div className="flex gap-2 mb-4 text-xs">
          {product.color && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
              {product.color}
            </span>
          )}
          {product.material && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
              {product.material}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mb-6">
          <p className="text-3xl font-bold text-blue-700">${product.price}</p>
          <p className="text-xs text-gray-500 mt-1">Jami narx</p>
        </div>

        {/* Add to Cart */}
        {product.inStock ? (
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-4 py-2 border-l border-r border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-2 rounded-lg transition font-bold text-white flex items-center justify-center gap-2 ${
                  isAdded
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isAdded ? (
                  <>
                    <IoCheckmark className="w-5 h-5" /> Qo'shildi
                  </>
                ) : (
                  <>
                    <IoCart className="w-5 h-5" /> Savatchaga
                  </>
                )}
              </button>
            </div>

            {/* View Details */}
            <Link
              to={`/product/${product.id}`}
              className="block w-full text-center py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              Batafsil ko'rish
            </Link>
          </div>
        ) : (
          <button
            disabled
            className="w-full py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed font-semibold"
          >
            Sotuvda yo'q
          </button>
        )}
      </div>
    </div>
  )
}
