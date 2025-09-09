import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contacto } from './pages/Contacto';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Catalogo } from './pages/Catalogo';

function NotFound() {
  return (
    <main className="container py-5">
      <h2>404 - Página no encontrada</h2>
      <p>Verificá la URL o navegá desde el menú.</p>
    </main>
  );
}

function App() {
  useEffect(() => {
    let lastScroll = 0;
    const navbar = document.querySelector(".custom-navbar");

    function onScroll() {
      const current = window.scrollY;
      if (current > lastScroll && current > 80) {
        navbar.classList.remove("show");
        navbar.classList.add("hide");
      } else {
        navbar.classList.remove("hide");
        navbar.classList.add("show");
      }
      lastScroll = current;
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer mensaje="Categoría" />} />
        <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
