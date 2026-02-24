import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"

export const Header: React.FC = () => {
  const { getTotalItems } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-600">SofMebel</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Bosh sahifa
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Mebellar
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Biz haqida
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Bog'lanish
            </Link>
          </nav>

          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative p-2 text-gray-700 hover:text-blue-600 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {getTotalItems() > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {getTotalItems()}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Bosh sahifa
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Mebellar
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Biz haqida
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Bog'lanish
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
