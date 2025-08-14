import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';
import { ListaProductos } from './components/ListaProductos';
import { Contador } from './components/Contador';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a VEYOR!" />
      <ListaProductos />
      <Contador />
      <Footer />
    </>
  );
}

export default App;
