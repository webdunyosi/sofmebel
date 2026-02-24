import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Products } from "./pages/Products"
import { ProductDetail } from "./pages/ProductDetail"
import { Cart } from "./pages/Cart"
import { Checkout } from "./pages/Checkout"
import { NotFound } from "./pages/NotFound"

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
