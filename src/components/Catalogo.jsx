import { useState, useEffect } from "react";
import { fetchProducts } from "../data/products";
import { Producto } from "../components/Producto";

export function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState("todos");
  const [orden, setOrden] = useState("todo");

  useEffect(() => {
    fetchProducts().then(setProductos);
  }, []);

  const categorias = ["todos", ...new Set(productos.map(p => p.categoria))];

  const filtrarYOrdenar = () => {
    let filtrados =
      categoria === "todos"
        ? [...productos]
        : productos.filter(p => p.categoria === categoria);

    if (orden === "mayor") {
      filtrados.sort((a, b) => b.precio - a.precio);
    } else if (orden === "menor") {
      filtrados.sort((a, b) => a.precio - b.precio);
    }

    return filtrados;
  };

  return (
    <main className="catalogo-container">
      <h2 className="catalogo-title">Catálogo</h2>

      <div className="catalogo-layout">
        <aside className="catalogo-filtros">
          <h3 className="filtros-title">Filtros</h3>
          <ul>
            {categorias.map(cat => (
              <li key={cat}>
                <button
                  className={`filtro-btn ${categoria === cat ? "active" : ""}`}
                  onClick={() => setCategoria(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="catalogo-content">
          <div className="ordenar-box">
            <label htmlFor="ordenar">Ordenar por:</label>
            <select
              id="ordenar"
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="todo">Todo</option>
              <option value="mayor">Mayor precio</option>
              <option value="menor">Menor precio</option>
            </select>
          </div>

          <div className="productos-grid">
            {filtrarYOrdenar().map(p => (
              <Producto key={p.id} {...p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
