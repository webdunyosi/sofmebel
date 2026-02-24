import React from "react"
import { Link } from "react-router-dom"

export const NotFound: React.FC = () => {
  return (
    <div className="container-custom py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Izlagan sahifangiz topilmadi!
      </p>
      <Link to="/" className="btn-primary">
        Bosh sahifaga qaytish
      </Link>
    </div>
  )
}
