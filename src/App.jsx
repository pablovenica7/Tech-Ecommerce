import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';
import { ListaProductos } from './components/ListaProductos';
import { Contador } from './components/Contador';

function App() {
  return (
    <>
      <NavBar />
      <header className="hero-section d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 className="display-4 fw-bold">Tecnología que te potencia</h1>
          <p className="lead text-muted">Equipos de alto rendimiento para quienes van más allá.</p>
          <a href="#productos" className="btn btn-dark mt-3 px-4 py-2">Ver productos</a>
        </div>
      </header>
      <ItemListContainer mensaje="¡Bienvenido a VEYOR!" />
      <ListaProductos />
      <Contador />
      <Footer />
    </>
  );
}

export default App;
