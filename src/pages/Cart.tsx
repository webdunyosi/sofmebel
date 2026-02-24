import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../hooks/useCart"
import { CartItemComponent } from "../components/CartItemComponent"

export const Cart: React.FC = () => {
  const { items, getTotalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Savatchangiz bo'sh</h1>
        <p className="text-gray-600 mb-6">
          Hozir savatchangizda hech qanday mebel yo'q. Mebellarni ko'rish uchun
          astamizdagi tugmasini bosing.
        </p>
        <Link to="/products" className="btn-primary">
          Mebellar sahifasiga o'tish
        </Link>
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Savatchangiz</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            {items.map((item) => (
              <CartItemComponent key={item.product.id} item={item} />
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Jami hisob</h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Mahsulotlar:</span>
              <span className="font-bold">${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Yetkazib berish:</span>
              <span className="font-bold">$0.00</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg">
                <span className="font-bold">Jami:</span>
                <span className="font-bold text-red-600">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="btn-primary w-full mb-3"
          >
            Buyurtma qilish
          </button>

          <button
            onClick={() => navigate("/products")}
            className="btn-outline w-full mb-3"
          >
            Xarid qilishni davom ettirish
          </button>

          <button
            onClick={clearCart}
            className="w-full py-2 text-red-600 hover:bg-red-50 rounded transition"
          >
            Savatchani tozalash
          </button>
        </div>
      </div>
    </div>
  )
}
