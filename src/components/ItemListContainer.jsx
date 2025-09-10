import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListaProductos } from './ListaProductos';
import { fetchProducts } from '../data/products';

function cap(text) {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

export function ItemListContainer({ mensaje }) {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const [categoria, setCategoria] = useState('todos');
  const [orden, setOrden] = useState("");

  useEffect(() => {
    setCargando(true);
    fetchProducts()
      .then((data) => {
        setProductos(data);
        setCategoria(idCategoria ?? 'todos');
      })
      .finally(() => setCargando(false));
  }, [idCategoria]);

  const categorias = ['todos', ...Array.from(new Set(productos.map(p => p.categoria)))];

  const filtrarYOrdenar = () => {
    let lista = categoria === 'todos'
      ? [...productos]
      : productos.filter(p => p.categoria === categoria);

    if (orden === 'mayor') lista.sort((a, b) => b.precio - a.precio);
    if (orden === 'menor') lista.sort((a, b) => a.precio - b.precio);

    return lista;
  };

  const titulo = idCategoria ? `Categoría: ${cap(idCategoria)}` : 'Catálogo';

  return (
    <main className="container mt-5 catalogo-container">
      <h2 className="catalogo-title">{titulo}</h2>

      <div className="row g-4 catalogo-layout">
        {/* ==== Filtros (izquierda) ==== */}
        <aside className="col-12 col-lg-3">
          <div className="catalogo-filtros">
            <div className="filtros-header">Filtros</div>
            <ul className="list-unstyled mb-0">
              {categorias.map(cat => (
                <li key={cat} className="mb-2">
                  <button
                    className={`filtro-btn ${categoria === cat ? 'active' : ''}`}
                    onClick={() => setCategoria(cat)}
                  >
                    {cap(cat)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ==== Ordenar + Productos (derecha) ==== */}
        <section className="col-12 col-lg-9">
          <div className="d-flex justify-content-end mb-3">
            <div className="ordenar-box">
              <span className="ordenar-title">Ordenar por</span>
              <select
                className="ordenar-select"
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
              >
                <option value="" disabled hidden>Ordenar por</option>
                <option value="todo">Todos</option>
                <option value="mayor">Mayor precio</option>
                <option value="menor">Menor precio</option>
              </select>
            </div>
          </div>

          {cargando
            ? <p className="text-muted">Cargando productos...</p>
            : <ListaProductos productos={filtrarYOrdenar()} />
          }
        </section>
      </div>
    </main>
  );
}
