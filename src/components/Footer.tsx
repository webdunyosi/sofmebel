import React from "react"
import { Link } from "react-router-dom"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              <span className="text-amber-400">Sof</span>
              <span>Mebel</span>
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Sifatli, zamonaviy va mas'uliyatli narxdagi mebellarning eng yirik
              katalogi.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+998900000000"
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition"
              >
                <span>📞</span>
                <span>+998 90 000 00 00</span>
              </a>
              <a
                href="mailto:info@sofmebel.uz"
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition"
              >
                <span>📧</span>
                <span>info@sofmebel.uz</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <span>📍</span>
                <span>Tashkent, Uzbekistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">
              Tezkor havolalar
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-amber-400 transition"
                >
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-amber-400 transition"
                >
                  Mebellar katalogi
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-400 hover:text-amber-400 transition"
                >
                  Mening savatcham
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-amber-400 transition"
                >
                  Bog'lanish
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Mahsulotlar</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#sofas"
                  className="text-gray-400 hover:text-amber-400 transition"
                >
                  Divanlar
                </a>
              </li>
              <li>
                <a
                  href="#chairs"
                  className="text-gray-400 hover:text-amber-400 transition"
                >
                  Kreslo va stullar
                </a>
              </li>
              <li>
                <a
                  href="#tables"
                  className="text-gray-400 hover:text-amber-400 transition"
                >
                  Stollar
                </a>
              </li>
              <li>
                <a
                  href="#beds"
                  className="text-gray-400 hover:text-amber-400 transition"
                >
                  Krovatlar
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Payments */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">
              Biz bilan bog'langin
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <a
                  href="#instagram"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition text-lg"
                >
                  📷
                </a>
                <a
                  href="#facebook"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition text-lg"
                >
                  👍
                </a>
                <a
                  href="#telegram"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition text-lg"
                >
                  ✈️
                </a>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500 mb-3">Toʻlov usullari</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                    💳 Card
                  </span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                    📱 Mobile
                  </span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                    🏦 Bank
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-800">
          <div>
            <h4 className="text-white font-bold mb-4">News va taklif</h4>
            <p className="text-sm text-gray-400 mb-4">
              Eng birinchi yangi mahsulot va chegirmalar haqida xabar bering
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email..."
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
              />
              <button className="px-4 py-2 bg-amber-400 text-slate-900 rounded-lg font-bold hover:bg-amber-300 transition">
                ✓
              </button>
            </div>
          </div>
          <div className="text-right md:text-left">
            <h4 className="text-white font-bold mb-4">
              Zamanasiga savoy bo'ling
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Bizning social tarmoqlarimizda obunaski
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 SofMebel. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-amber-400 transition">
              Maxfiylik siyosati
            </a>
            <a href="#terms" className="hover:text-amber-400 transition">
              Shartlar
            </a>
            <a href="#cookies" className="hover:text-amber-400 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
