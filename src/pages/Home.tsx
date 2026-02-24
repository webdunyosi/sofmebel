import React from "react"
import { Link } from "react-router-dom"
import { products } from "../data/products"
import { ProductCard } from "../components/ProductCard"
import { IoFlash, IoStar, IoPricetag, IoCall } from "react-icons/io5"

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6)

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
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/showroom/1.jpg"
                  alt="Showroom 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">
                      Living Room Collection
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/showroom/2.jpg"
                  alt="Showroom 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Bedroom Elegance</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/showroom/3.jpg"
                  alt="Showroom 3"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Office Solutions</h3>
                  </div>
                </div>
              </div>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white py-16">
        {/* Animated Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Yangi mebellar haqida bilish uchun
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            Eng birinchi eksklyuziv taklif va chegirmalarni olib qoling
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Sizning email..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 backdrop-blur-sm"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md whitespace-nowrap">
              Obuna ol
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-in-up">
          <h2 className="text-4xl font-bold mb-4">
            O'z uyingizni zamonaviy qiling
          </h2>
          <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
            SofMebel bilan siz eng yaxshi narxda eng sifatli mobilyani topasiz.
            Bugundan boshlang!
          </p>
          <button
            onClick={() => alert("Showroom: +998 90 000 00 00")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 hover:scale-105 transition-all duration-300 shadow-md"
          >
            <IoCall className="w-5 h-5" /> Qo'ng'iroq qilish
          </button>
        </div>
      </section>
    </div>
  )
}
