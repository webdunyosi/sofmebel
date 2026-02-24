import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"
import {
  IoCall,
  IoTime,
  IoLocation,
  IoLogoInstagram,
  IoLogoFacebook,
  IoMenu,
  IoClose,
  IoCart,
} from "react-icons/io5"

export const Header: React.FC = () => {
  const { getTotalItems } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"uz" | "ru">("uz")

  return (
    <header>
      {/* Top Info Bar */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-3 gap-4 text-sm">
            {/* Left Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center sm:justify-start">
              <a
                href="tel:+998900000000"
                className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition"
              >
                <IoCall className="w-5 h-5" />
                <span>+998 00 000 00 00</span>
              </a>
              <div className="flex items-center gap-2 text-gray-700">
                <IoTime className="w-5 h-5" />
                <span>10:00 – 21:00, har kuni</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <IoLocation className="w-5 h-5" />
                <span>Tashkent, premium showroom</span>
              </div>
            </div>

            {/* Right Info */}
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="#instagram"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  <IoLogoInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#facebook"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  <IoLogoFacebook className="w-5 h-5" />
                </a>
              </div>

              {/* Language Switcher */}
              <div className="flex gap-1 border-l pl-4">
                <button
                  onClick={() => setLanguage("uz")}
                  className={`px-2 py-1 rounded font-semibold transition ${
                    language === "uz"
                      ? "bg-red-700 text-white"
                      : "text-gray-700 hover:text-red-700"
                  }`}
                >
                  Uz
                </button>
                <button
                  onClick={() => setLanguage("ru")}
                  className={`px-2 py-1 rounded font-semibold transition ${
                    language === "ru"
                      ? "bg-red-700 text-white"
                      : "text-gray-700 hover:text-red-700"
                  }`}
                >
                  Ru
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-linear-to-r from-red-700 to-red-800 sticky top-0 z-50">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Sof Mebel Logo"
                className="h-16 w-auto hover:opacity-80 transition"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12 flex-1 justify-center">
              <Link
                to="/"
                className="text-white hover:text-amber-300 transition font-medium"
              >
                {language === "uz" ? "Bosh sahifa" : "Главная"}
              </Link>
              <Link
                to="/products"
                className="text-white hover:text-amber-300 transition font-medium"
              >
                {language === "uz" ? "Mebel" : "Мебель"}
              </Link>
              <a
                href="#accessories"
                className="text-white hover:text-amber-300 transition font-medium"
              >
                {language === "uz" ? "Aksessuarlar" : "Аксессуары"}
              </a>
              <a
                href="#magazine"
                className="text-white hover:text-amber-300 transition font-medium"
              >
                {language === "uz" ? "Online Magazin" : "Онлайн Магазин"}
              </a>
              <a
                href="#about"
                className="text-white hover:text-amber-300 transition font-medium"
              >
                {language === "uz" ? "Biz haqimizda" : "О нас"}
              </a>
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              {/* Call Button */}
              <a
                href="tel:+998900000000"
                className="flex items-center gap-2 px-4 py-2 text-white hover:text-amber-300 transition"
              >
                <IoCall className="w-5 h-5" />
                <span className="font-medium">
                  {language === "uz" ? "Qo'ng'iroq qilish" : "Позвонить"}
                </span>
              </a>

              {/* Schedule Button */}
              <button className="px-6 py-2 bg-yellow-400 text-red-900 rounded-full font-bold hover:bg-yellow-300 transition shadow-lg">
                {language === "uz"
                  ? "Uchrashuvni belgilash"
                  : "Записать встречу"}
                <span className="ml-2">→</span>
              </button>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 text-white hover:text-amber-300 transition"
              >
                <IoCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {mobileMenuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <IoMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-3">
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:bg-red-600 rounded transition"
              >
                {language === "uz" ? "Bosh sahifa" : "Главная"}
              </Link>
              <Link
                to="/products"
                className="block px-4 py-2 text-white hover:bg-red-600 rounded transition"
              >
                {language === "uz" ? "Mebel" : "Мебель"}
              </Link>
              <a
                href="#accessories"
                className="block px-4 py-2 text-white hover:bg-red-600 rounded transition"
              >
                {language === "uz" ? "Aksessuarlar" : "Аксессуары"}
              </a>
              <a
                href="#magazine"
                className="block px-4 py-2 text-white hover:bg-red-600 rounded transition"
              >
                {language === "uz" ? "Online Magazin" : "Онлайн Магазин"}
              </a>
              <a
                href="#about"
                className="block px-4 py-2 text-white hover:bg-red-600 rounded transition"
              >
                {language === "uz" ? "Biz haqimizda" : "О нас"}
              </a>
              <button className="w-full px-4 py-2 bg-yellow-400 text-red-900 rounded-full font-bold hover:bg-yellow-300 transition">
                {language === "uz"
                  ? "Uchrashuvni belgilash"
                  : "Записать встречу"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
