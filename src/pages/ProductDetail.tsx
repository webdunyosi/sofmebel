import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { products } from "../data/products"
import { useCart } from "../hooks/useCart"
import { IoCheckmark } from "react-icons/io5"

export const ProductDetail: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Mebel topilmadi</h1>
        <button onClick={() => navigate("/products")} className="btn-primary">
          Mebellar sahifasiga qaytish
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="container-custom py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-gray-600">
        <button onClick={() => navigate("/")} className="hover:text-red-600">
          Bosh sahifa
        </button>
        {" / "}
        <button
          onClick={() => navigate("/products")}
          className="hover:text-red-600"
        >
          Mebellar
        </button>
        {" / "}
        <span>{product.nameUz}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.nameUz}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.nameUz}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex text-yellow-400 text-2xl">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.round(product.rating) ? "★" : "☆"}
                </span>
              ))}
            </div>
            <span className="text-gray-600">
              {product.rating} / 5 ({product.reviews} sharh)
            </span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-red-600 mb-6">
            ${product.price}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Specifications */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-bold text-gray-800 mb-4">Xususiyatlar</h3>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Kategoriya:</strong> {product.category}
              </p>
              {product.color && (
                <p>
                  <strong>Rang:</strong> {product.color}
                </p>
              )}
              {product.material && (
                <p>
                  <strong>Material:</strong> {product.material}
                </p>
              )}
              <p>
                <strong>Mavjudlik:</strong>{" "}
                <span
                  className={
                    product.inStock ? "text-green-600" : "text-red-600"
                  }
                >
                  {product.inStock ? "Sotuvda mavjud" : "Sotuvda yo'q"}
                </span>
              </p>
            </div>
          </div>

          {/* Add to Cart */}
          {product.inStock ? (
            <div className="flex gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border-l border-r">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2 ${
                  isAdded ? "bg-green-600 text-white" : "btn-primary"
                }`}
              >
                {isAdded ? (
                  <>
                    <IoCheckmark className="w-5 h-5" /> Savatchaga qo'shildi
                  </>
                ) : (
                  "Savatchaga qo'sh"
                )}
              </button>
            </div>
          ) : (
            <button
              disabled
              className="w-full py-3 bg-gray-400 text-white rounded-lg font-bold cursor-not-allowed"
            >
              Sotuvda yo\'q
            </button>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Shunga o'xshash mebellar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <img
                  src={p.image}
                  alt={p.nameUz}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">{p.nameUz}</h3>
                  <p className="text-red-600 font-bold">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
