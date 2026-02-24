import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../hooks/useCart"
import { CartItemComponent } from "../components/CartItemComponent"

export const Cart: React.FC = () => {
  const { items, getTotalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="container-custom py-12 text-center animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">Savatchangiz bo'sh</h1>
        <p className="text-gray-600 mb-6">
          Hozir savatchangizda hech qanday mebel yo'q. Mebellarni ko'rish uchun
          astamizdagi tugmasini bosing.
        </p>
        <Link
          to="/products"
          className="inline-block px-8 py-3 bg-gradient-to-r from-red-700 to-red-800 text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
        >
          Mebellar sahifasiga o'tish
        </Link>
      </div>
    )
  }

  return (
    <div className="container-custom py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-8 animate-slide-in-up">
        Savatchangiz
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-lg shadow-lg backdrop-blur-glass border border-white/20">
            {items.map((item, index) => (
              <div
                key={item.product.id}
                style={{ animationDelay: `${index * 0.05}s` }}
                className="animate-slide-in-up"
              >
                <CartItemComponent item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="backdrop-blur-glass bg-white/40 p-6 rounded-lg h-fit shadow-lg border border-white/20 animate-slide-in-right">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Jami hisob</h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Mahsulotlar:</span>
              <span className="font-bold text-red-700">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Yetkazib berish:</span>
              <span className="font-bold">$0.00</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg">
                <span className="font-bold">Jami:</span>
                <span className="font-bold text-red-700">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full px-4 py-3 bg-gradient-to-r from-red-700 to-red-800 text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md mb-3"
          >
            Buyurtma qilish
          </button>

          <button
            onClick={() => navigate("/products")}
            className="w-full px-4 py-3 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:text-white transition-all duration-300 mb-3"
          >
            Xarid qilishni davom ettirish
          </button>

          <button
            onClick={clearCart}
            className="w-full py-2 text-red-600 hover:bg-red-100/50 rounded-lg transition-all duration-300 font-semibold"
          >
            Savatchani tozalash
          </button>
        </div>
      </div>
    </div>
  )
}
