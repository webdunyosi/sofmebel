import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../hooks/useCart"

export const Checkout: React.FC = () => {
  const { items, getTotalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  })

  if (items.length === 0) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Savatchangiz bo'sh</h1>
        <button onClick={() => navigate("/products")} className="btn-primary">
          Mebellar sahifasiga o'tish
        </button>
      </div>
    )
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      alert(
        `Rahmat! Buyurtmangiz qabul qilindi.\n\n` +
          `Buyurtma raqami: #${Math.floor(100000 + Math.random() * 900000)}\n` +
          `Jami: $${getTotalPrice().toFixed(2)}\n\n` +
          `Biz ${formData.phone} raqamiga qayta aloqada bo'lamiz.`,
      )
      clearCart()
      navigate("/")
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Buyurtma rasmiylashtirish</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-6">
              Sizning ma'lumotlaringiz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Ism
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Ism"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Familiya
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Familiya"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="email@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Telefon raqami
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="+998 90 123 45 67"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Yashash manzili
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={3}
                placeholder="Ko'cha, uy raqami, xonasi..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Shahar
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Tashkent"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-bold text-white transition ${
                isLoading ? "bg-gray-400 cursor-not-allowed" : "btn-primary"
              }`}
            >
              {isLoading
                ? "Buyurtma rasmiylashtirilyapti..."
                : "Buyurtmani tasdiqlash"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-2xl font-bold mb-6">Buyurtma xulosaси</h2>

          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex justify-between text-gray-700"
              >
                <span>
                  {item.product.nameUz} x {item.quantity}
                </span>
                <span className="font-bold">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg">
                <span className="font-bold">Jami:</span>
                <span className="font-bold text-blue-600">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center">
            Buyurtmani rasmiylashtirish orqali siz bizning shartlarni qabul
            qilyapsiz.
          </p>
        </div>
      </div>
    </div>
  )
}
