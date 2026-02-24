import React from "react"
import { Link } from "react-router-dom"
import { products } from "../data/products"
import { ProductCard } from "../components/ProductCard"

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">SofMebel</h1>
            <p className="text-xl mb-8">
              Sifatli va zamonaviy mebellarni taqdim etuvchi yuqori darajali
              kompaniya. Sizning uyingiz uchun eng yaxshi mebellarni topish
              uchun biz shu yerda qamaydik.
            </p>
            <Link
              to="/products"
              className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
            >
              Mebellarni ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-bold text-lg mb-2">Tez yetkazib berish</h3>
              <p className="text-gray-600">
                Biz sizning buyurtmangizni tezda va xavfsiz yetkazib beramiz.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold text-lg mb-2">Sifatli mahsulot</h3>
              <p className="text-gray-600">
                Barcha mebellarimiz eng yuqori sifat standartlarini qoniqtiradi.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Mas'uliyatli narxlar</h3>
              <p className="text-gray-600">
                Biz bugungi bozorda eng mas'uliyatli narxlarni taqdim etamiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Ommabop mebellar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="btn-primary">
              Barcha mebellarni ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sizning ideal mebelini topish uchun tayyor?
          </h2>
          <p className="text-lg mb-6">
            Bizning keng mehvar vo'zu mebellar to'plamiga qarang va bugundan
            buyin o'z uyingizni remont qiling.
          </p>
          <Link
            to="/products"
            className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
          >
            Mebellarni ko'rish
          </Link>
        </div>
      </section>
    </div>
  )
}
