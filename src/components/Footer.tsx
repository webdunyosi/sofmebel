import React from "react"
import { Link } from "react-router-dom"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">SofMebel</h3>
            <p className="text-sm mb-4">
              Sifatli va zamonaviy mebellarni taqdim etuvchi kompaniya.
            </p>
            <div className="space-y-2 text-sm">
              <p>📞 +998 90 123 45 67</p>
              <p>📧 info@sofmebel.uz</p>
              <p>📍 Tashkent, Uzbekistan</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Tez havolalar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition">
                  Mebellar
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  Biz haqida
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Bog'lanish
                </Link>
              </li>
            </ul>
          </div>

          {/* Category Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Kategoriyalar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sofas" className="hover:text-blue-400 transition">
                  Divanlar
                </a>
              </li>
              <li>
                <a href="#chairs" className="hover:text-blue-400 transition">
                  Kreslo va stullar
                </a>
              </li>
              <li>
                <a href="#tables" className="hover:text-blue-400 transition">
                  Stollar
                </a>
              </li>
              <li>
                <a href="#beds" className="hover:text-blue-400 transition">
                  Krovatlar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 SofMebel. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
