import React from "react"
import { Link } from "react-router-dom"
import {
  IoCall,
  IoMail,
  IoLocation,
  IoLogoInstagram,
  IoLogoFacebook,
  IoCard,
  IoCheckmarkCircle,
} from "react-icons/io5"
import { FaTelegram } from "react-icons/fa"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900 text-gray-100 relative overflow-hidden">
      {/* subtle decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-800/30 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-amber-300">Sof</span>
              <span className="ml-1">Mebel</span>
            </h3>
            <p className="text-sm text-gray-200 mb-4">
              Sifatli, zamonaviy mebellar - ishonchli tanlov.
            </p>
            <div className="space-y-2 text-sm text-gray-200">
              <a href="tel:+998900000000" className="flex items-center gap-2">
                <IoCall className="w-4 h-4" /> +998 90 000 00 00
              </a>
              <a
                href="mailto:info@sofmebel.uz"
                className="flex items-center gap-2"
              >
                <IoMail className="w-4 h-4" /> info@sofmebel.uz
              </a>
              <div className="flex items-center gap-2">
                <IoLocation className="w-4 h-4" /> Tashkent, Uzbekistan
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Tezkor havolalar</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link to="/" className="hover:underline">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline">
                  Mebellar katalogi
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:underline">
                  Mening savatcham
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Mahsulotlar</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#sofas" className="hover:underline">
                  Divanlar
                </a>
              </li>
              <li>
                <a href="#chairs" className="hover:underline">
                  Kreslo va stullar
                </a>
              </li>
              <li>
                <a href="#tables" className="hover:underline">
                  Stollar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Biz bilan bog'laning</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#instagram"
                className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center text-amber-300"
              >
                <IoLogoInstagram className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center text-amber-300"
              >
                <IoLogoFacebook className="w-5 h-5" />
              </a>
              <a
                href="#telegram"
                className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center text-amber-300"
              >
                <FaTelegram className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-3 border-t border-red-800">
              <p className="text-xs text-gray-300 mb-2">Toʻlov usullari</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-red-800/60 rounded text-xs">
                  Card
                </span>
                <span className="px-2 py-1 bg-red-800/60 rounded text-xs">
                  Mobile
                </span>
                <span className="px-2 py-1 bg-red-800/60 rounded text-xs">
                  Bank
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-red-800">
          <div>
            <h4 className="font-bold mb-3">News va taklif</h4>
            <p className="text-sm text-gray-200 mb-4">
              Yangiliklardan birinchi bo'lib xabardor bo'ling
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email..."
                className="flex-1 px-4 py-2 rounded-lg bg-red-800/60 text-white focus:outline-none text-sm"
              />
              <button className="px-4 py-2 bg-amber-400 text-slate-900 rounded-lg font-bold">
                <IoCheckmarkCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="text-right md:text-left">
            <h4 className="font-bold mb-3">Zamanasiga savoy bo'ling</h4>
            <p className="text-sm text-gray-200">
              Bizning ijtimoiy tarmoqlarda kuzatib boring
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-red-800 bg-red-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; 2026 SofMebel. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:underline">
              Maxfiylik siyosati
            </a>
            <a href="#terms" className="hover:underline">
              Shartlar
            </a>
            <a href="#cookies" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
