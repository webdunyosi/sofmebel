import React, { useState } from "react"
import { Link } from "react-router-dom"
import { products } from "../data/products"
import { ProductCard } from "../components/ProductCard"
import {
  IoFlash,
  IoStar,
  IoPricetag,
  IoCheckmark,
} from "react-icons/io5"

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Telegram Bot Configuration (replace with your actual token and chat ID)
  const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"
  const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE"

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const sendToTelegram = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Barcha maydonlarni to'ldiring")
      return
    }

    setLoading(true)

    try {
      const message = `
🎉 *Yangi Aloqa Xabari* 🎉

👤 *Ism:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Telefon:* ${formData.phone}
💬 *Xabar:* ${formData.message}

_SofMebel Website dan yuborildi_
      `

      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        },
      )

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert("Xabar yuborishda xato yuz berdi")
      }
    } catch (error) {
      console.error("Telegram xatosi:", error)
      alert("Xabar yuborishda xato yuz berdi")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-slate-900 text-white py-32">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                Eng yaxshi mebel katalogi
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Sizning uyingizni{" "}
                <span className="gradient-text">zamonaviy</span> qiling
              </h1>
              <p className="text-xl text-red-100 leading-relaxed">
                SofMebel - sifatli, zamonaviy va mas'uliyatli narxdagi
                mebellarning eng yirik katalogi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
                >
                  Mebellarni ko'rish →
                </Link>
                <button
                  onClick={() => alert("Uchrashuvni belgilash")}
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-900 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Uchrashув belgilash
                </button>
              </div>
            </div>
            <div className="hidden lg:block animate-slide-in-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 transform">
                <img
                  src="/header.jpg"
                  alt="SofMebel Showroom"
                  className="w-full h-96 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-white via-red-50 to-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center p-6 rounded-2xl backdrop-blur-glass hover:shadow-lg transition-all cursor-pointer transform hover:scale-105 animate-scale-in">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                +500
              </div>
              <p className="text-gray-600 text-sm md:text-base">Mebellar</p>
            </div>
            <div
              className="text-center p-6 rounded-2xl backdrop-blur-glass hover:shadow-lg transition-all cursor-pointer transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                10K+
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Xush xohli xaridor
              </p>
            </div>
            <div
              className="text-center p-6 rounded-2xl backdrop-blur-glass hover:shadow-lg transition-all cursor-pointer transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                24/7
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Customer Support
              </p>
            </div>
            <div
              className="text-center p-6 rounded-2xl backdrop-blur-glass hover:shadow-lg transition-all cursor-pointer transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                100%
              </div>
              <p className="text-gray-600 text-sm md:text-base">Kafolat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 animate-slide-in-up">
            Nega SofMebel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-glass bg-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-up border border-white/20">
              <IoFlash className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-400 rounded-lg p-2 mb-4 text-white" />
              <h3 className="font-bold text-2xl text-gray-800 mb-3">
                Tez yetkazib berish
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sizning buyurtmangizni 24-48 soat ichida yetkazib beramiz.
                Tashkent va viloyatlarda.
              </p>
            </div>
            <div
              className="backdrop-blur-glass bg-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-up border border-white/20"
              style={{ animationDelay: "0.1s" }}
            >
              <IoStar className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-400 rounded-lg p-2 mb-4 text-white" />
              <h3 className="font-bold text-2xl text-gray-800 mb-3">
                Sifatli mahsulot
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Barcha mebellar eng yuqori sifat kontrollidan o'tib, sertifikat
                bilan keladi.
              </p>
            </div>
            <div
              className="backdrop-blur-glass bg-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-up border border-white/20"
              style={{ animationDelay: "0.2s" }}
            >
              <IoPricetag className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-400 rounded-lg p-2 mb-4 text-white" />
              <h3 className="font-bold text-2xl text-gray-800 mb-3">
                Mas'uliyatli narxlar
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bozordagi eng yaxshi qiymat-narx nisbati. Chegirmalar va
                aksiyalar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Bizning Showroom</h2>
            <p className="text-gray-600 text-lg">
              Tashkent premium showroomda mebellarni ko'rib chiqing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Video card (opens YouTube in new tab) */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer">
              <a
                href="https://www.youtube.com/watch?v=KHG6ylx9J2o"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-64 overflow-hidden"
                aria-label="Open Living Room video on YouTube"
              >
                <img
                  src="/showroom/1.jpg"
                  alt="Living Room video thumbnail"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-red-600"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">Living Room Collection</h3>
                </div>
              </a>
            </div>

            {/* Bedroom Elegance - YouTube video */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer">
              <a
                href="https://www.youtube.com/watch?v=0V6PASSliBk"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-64 overflow-hidden"
                aria-label="Open Bedroom Elegance video on YouTube"
              >
                <img
                  src="/showroom/2.jpg"
                  alt="Bedroom Elegance video thumbnail"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-red-600"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">Bedroom Elegance</h3>
                </div>
              </a>
            </div>

            {/* Office Solutions - YouTube video */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer">
              <a
                href="https://www.youtube.com/watch?v=XmByRmE5_P0"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-64 overflow-hidden"
                aria-label="Open Office Solutions video on YouTube"
              >
                <img
                  src="/showroom/3.jpg"
                  alt="Office Solutions video thumbnail"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-red-600"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">Office Solutions</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-4xl font-bold mb-3">Ommabop mebellar</h2>
            <p className="text-gray-600 text-lg">
              Eng ko'p buyurtma qilinadigan mahsulotlar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-scale-in"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-slide-in-up">
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-gradient-to-r from-red-700 to-red-800 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 shadow-md"
            >
              Barcha mebellarni ko'rish →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white py-20"
      >
        {/* Animated Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-in-up">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Biz bilan bog'lanish</h2>
            <p className="text-xl text-red-100">
              Sizning savol va taklif uchun biz shunga tayyormiz
            </p>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="bg-green-500/20 backdrop-blur-glass border border-green-400/30 rounded-2xl p-8 text-center animate-scale-in">
              <IoCheckmark className="w-16 h-16 mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-2">Rahmat!</h3>
              <p className="text-green-100">
                Sizning xabar muvaffaqiyatli yuborildi. Tez orada aloqa qilamiz.
              </p>
            </div>
          ) : (
            <form
              onSubmit={sendToTelegram}
              className="backdrop-blur-glass bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Input */}
                <div className="animate-slide-in-left">
                  <label className="block text-sm font-bold mb-2">Ism</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Sizning ismingiz..."
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 backdrop-blur-sm transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="animate-slide-in-right">
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="sizning@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 backdrop-blur-sm transition-all"
                  />
                </div>

                {/* Phone Input */}
                <div
                  className="animate-slide-in-left"
                  style={{ animationDelay: "0.1s" }}
                >
                  <label className="block text-sm font-bold mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+998 90 000 00 00"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 backdrop-blur-sm transition-all"
                  />
                </div>

                {/* Subject Input - optional but using message */}
                <div
                  className="animate-slide-in-right"
                  style={{ animationDelay: "0.1s" }}
                >
                  <label className="block text-sm font-bold mb-2">Mavzu</label>
                  <input
                    type="text"
                    placeholder="Xabari mavzusi (ixtiyoriy)"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 backdrop-blur-sm transition-all"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div
                className="mb-6 animate-slide-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <label className="block text-sm font-bold mb-2">Xabar</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Sizning xabaringiz yoki savol..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 backdrop-blur-sm transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 hover:scale-105 transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed animate-slide-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                {loading ? "Yuborilmoqda..." : "Xabar yuborish"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
