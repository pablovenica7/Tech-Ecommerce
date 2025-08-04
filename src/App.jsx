import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a VEYOR!" />
      <Footer />
    </>
  );
}

export default App;
