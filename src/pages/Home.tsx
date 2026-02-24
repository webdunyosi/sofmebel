import React from "react"
import { Link } from "react-router-dom"
import { products } from "../data/products"
import { ProductCard } from "../components/ProductCard"

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-700 via-blue-800 to-slate-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-amber-400 text-blue-900 rounded-full text-sm font-bold">
                Eng yaxshi mebel katalogi
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Sizning uyingizni{" "}
                <span className="text-amber-400">zamonaviy</span> qiling
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                SofMebel - sifatli, zamonaviy va mas'uliyatli narxdagi
                mebellarning eng yirik katalogi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="px-8 py-3 bg-amber-400 text-blue-900 font-bold rounded-lg hover:bg-amber-300 transition shadow-lg"
                >
                  Mebellarni ko'rish →
                </Link>
                <button
                  onClick={() => alert("Uchrashuvni belgilash")}
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition"
                >
                  Uchrashув belgilash
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="bg-linear-to-br from-amber-300 to-amber-400 rounded-2xl h-96 flex items-center justify-center text-6xl">
                  🛋️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700">
                500+
              </div>
              <p className="text-gray-600 text-sm md:text-base">Mebellar</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700">
                10K+
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Xush xohli xaridor
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700">
                24/7
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Customer Support
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700">
                100%
              </div>
              <p className="text-gray-600 text-sm md:text-base">Kafolat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nega SofMebel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold text-2xl text-gray-800 mb-3">
                Tez yetkazib berish
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sizning buyurtmangizni 24-48 soat ichida yetkazib beramiz.
                Tashkent va viloyatlarda.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-bold text-2xl text-gray-800 mb-3">
                Sifatli mahsulot
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Barcha mebellar eng yuqori sifat kontrollidan o'tib, sertifikat
                bilan keladi.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="text-5xl mb-4">💰</div>
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

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Ommabop mebellar</h2>
            <p className="text-gray-600 text-lg">
              Eng ko'p buyurtma qilinadigan mahsulotlar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="px-8 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition shadow-lg"
            >
              Barcha mebellarni ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Yangi mebellar haqida bilish uchun
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Eng birinchi eksklyuziv taklif va chegirmalarni olib qoling
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Sizning email..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button className="px-8 py-3 bg-amber-400 text-blue-900 font-bold rounded-lg hover:bg-amber-300 transition whitespace-nowrap">
              Obuna ol
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            O'z uyingizni zamonaviy qiling
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            SofMebel bilan siz eng yaxshi narxda eng sifatli mobilyani topasiz.
            Bugundan boshlang!
          </p>
          <button
            onClick={() => alert("Showroom: +998 90 000 00 00")}
            className="px-8 py-3 bg-amber-400 text-blue-900 font-bold rounded-lg hover:bg-amber-300 transition shadow-lg"
          >
            ☎️ Qo'ng'iroq qilish
          </button>
        </div>
      </section>
    </div>
  )
}
