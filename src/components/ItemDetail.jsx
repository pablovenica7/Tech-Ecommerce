import { ItemCount } from "./ItemCount";
import Swal from "sweetalert2";

export function ItemDetail({ producto }) {
  const { nombre, precio, descripcion, categoria, img } = producto;

  const handleAdd = (cantidad) => {
    Swal.fire({
      icon: "success",
      title: "¡Producto agregado!",
      text: `Agregaste ${cantidad} unidad(es) de "${nombre}" al carrito.`,
      confirmButtonText: "Listo",
      confirmButtonColor: "#ff7a1a",
    });
  };

  return (
    <div className="row g-4 align-items-start">
      <div className="col-12 col-md-6">
        <div className="img-container">
          {img ? (
            <img
              src={img}
              alt={nombre}
              className="img-fluid"
            />
          ) : (
            <div className="bg-light border rounded-3 w-100" style={{ aspectRatio: "1 / 1" }} />
          )}
        </div>
      </div>

      <div className="col-12 col-md-6">
        <h2 className="mb-2">{nombre}</h2>
        <p className="text-muted mb-1">
          Categoría: <strong>{categoria}</strong>
        </p>
        <p className="fs-4 fw-semibold">Precio: ${precio.toLocaleString()}</p>
        <p className="mb-4">{descripcion}</p>

        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  );
}
