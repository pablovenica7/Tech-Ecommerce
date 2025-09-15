import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

// Páginas
import Home from "./pages/Home";        // opcional, lo dejamos en /home
import Contacto from "./pages/Contacto";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* Consigna: / => Catálogo */}
          <Route path="/" element={<ItemListContainer />} />

          {/* Catálogo explícito */}
          <Route path="/catalogo" element={<ItemListContainer />} />

          {/* Categorías y detalle */}
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />

          {/* Carrito y Checkout */}
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Extras (opcional) */}
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Redirecciones útiles */}
          <Route path="/producto/:idProducto" element={<Navigate to="/detalle/:idProducto" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
