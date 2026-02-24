import React, { useState } from "react"
import { Link } from "react-router-dom"
import type { Product } from "../types/index"
import { useCart } from "../hooks/useCart"

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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold">Sotuvda yo'q</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">
          {product.nameUz}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.descriptionUz}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < Math.round(product.rating) ? "★" : "☆"}</span>
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          {product.color && (
            <p className="text-sm text-gray-600">Rang: {product.color}</p>
          )}
        </div>

        {/* Add to Cart */}
        {product.inStock ? (
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-16 px-2 py-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-2 rounded transition font-bold ${
                isAdded
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isAdded ? "✓ Qo'shildi" : "Savatchaga qo'sh"}
            </button>
          </div>
        ) : (
          <button
            disabled
            className="w-full py-2 bg-gray-400 text-white rounded cursor-not-allowed"
          >
            Sotuvda yo'q
          </button>
        )}

        {/* View Details */}
        <Link
          to={`/product/${product.id}`}
          className="block mt-2 text-center text-blue-600 hover:underline text-sm"
        >
          Batafsil ma'lumot
        </Link>
      </div>
    </div>
  )
}
