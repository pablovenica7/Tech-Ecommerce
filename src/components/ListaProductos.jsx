import { Producto } from "./Producto";

export function ListaProductos({ productos = [] }) {
  if (!productos.length) {
    return <p className="text-muted">No hay productos para mostrar.</p>;
  }

  return (
    <div className="row g-4 catalogo-grid">
      {productos.map((p) => (
        <div key={p.id} className="col-12 col-sm-6 col-lg-4 d-flex">
          <Producto {...p} />
        </div>
      ))}
    </div>
  );
}
