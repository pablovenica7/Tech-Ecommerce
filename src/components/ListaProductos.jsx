import { Producto } from "./Producto";

export function ListaProductos({ productos = [] }) {
  if (!productos.length) {
    return <p className="text-muted">No hay productos para mostrar.</p>;
  }

  return (
    <div className="row g-4">
      {productos.map((prod) => (
        <div className="col-12 col-md-6 col-lg-4" key={prod.id}>
          <Producto 
            id={prod.id} 
            nombre={prod.nombre} 
            precio={prod.precio} 
            categoria={prod.categoria} 
            img={prod.img}
          />
        </div>
      ))}
    </div>
  );
}
