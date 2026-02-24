import React, { useState } from "react"
import { products } from "../data/products"
import { ProductCard } from "../components/ProductCard"

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const categories = Array.from(new Set(products.map((p) => p.category)))

  const filtered = products.filter((product) => {
    const matchCategory =
      !selectedCategory || product.category === selectedCategory
    const matchSearch =
      !searchQuery ||
      product.nameUz.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.descriptionUz.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="container-custom py-8">
      <h1 className="text-4xl font-bold mb-8">Bizning mebellar to'plami</h1>

      {/* Filters */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Search */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Qidiruv
            </label>
            <input
              type="text"
              placeholder="Mebel qidiring..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Kategoriya
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Barcha kategoriyalar</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-600 mb-6">{filtered.length} ta mebel topildi</p>

      {/* Products Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            Sizning qidiruvingizga mos mebellar topilmadi. Iltimos, boshqa
            qidiruv parametrlarini sinab ko'ring.
          </p>
        </div>
      )}
    </div>
  )
}
