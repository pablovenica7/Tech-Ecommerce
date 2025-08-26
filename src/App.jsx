import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contacto } from './pages/Contacto';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function NotFound() {
  return (
    <main className="container py-5">
      <h2>404 - Página no encontrada</h2>
      <p>Verificá la URL o navegá desde el menú.</p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<ItemListContainer mensaje="Catálogo de productos" />} />
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
