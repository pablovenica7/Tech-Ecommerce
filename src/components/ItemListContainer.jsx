import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListaProductos } from "./ListaProductos";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

function cap(text) {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

export function ItemListContainer() {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [categoria, setCategoria] = useState("todos");
  const [orden, setOrden] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      setCargando(true);
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productosFirestore = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosFirestore);
        setCategoria(idCategoria ?? "todos");
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, [idCategoria]);

  const categorias = ["todos", ...Array.from(new Set(productos.map((p) => p.categoria)))];

  const filtrarYOrdenar = () => {
    let lista = categoria === "todos"
      ? [...productos]
      : productos.filter((p) => p.categoria === categoria);

    if (orden === "mayor") lista.sort((a, b) => b.precio - a.precio);
    if (orden === "menor") lista.sort((a, b) => a.precio - b.precio);

    return lista;
  };

  const titulo = idCategoria ? `Categoría: ${cap(idCategoria)}` : "Catálogo";

  return (
    <main className="container mt-5 catalogo-container">
      <h2 className="catalogo-title">{titulo}</h2>

      <div className="row g-4 catalogo-layout">
        <aside className="col-12 col-lg-3">
          <div className="catalogo-filtros">
            <div className="filtros-header">Filtros</div>
            <ul className="list-unstyled mb-0">
              {categorias.map((cat) => (
                <li key={cat} className="mb-2">
                  <button
                    className={`filtro-btn ${categoria === cat ? "active" : ""}`}
                    onClick={() => setCategoria(cat)}
                  >
                    {cap(cat)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="col-12 col-lg-9">
          <div className="ordenar-box d-flex align-items-center gap-2 justify-content-end">
            <select
              className="ordenar-select"
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="" disabled hidden>
                Ordenar por
              </option>
              <option value="todo">Todos</option>
              <option value="mayor">Mayor precio</option>
              <option value="menor">Menor precio</option>
            </select>
          </div>

          {cargando ? (
            <p className="text-muted">Cargando productos...</p>
          ) : (
            <ListaProductos productos={filtrarYOrdenar()} />
          )}
        </section>
      </div>
    </main>
  );
}
