import { ItemCount } from "./ItemCount";

export function ItemDetail({ producto }) {
  const { nombre, precio, descripcion, categoria } = producto;

  const handleAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} unidad(es) de "${nombre}" al carrito.`);
  };

  return (
    <div className="row g-4 align-items-start">
      <div className="col-12 col-md-6">
        <div className="bg-light border rounded-3 w-100" style={{ aspectRatio: '1 / 1' }} />
      </div>

      <div className="col-12 col-md-6">
        <h2 className="mb-2">{nombre}</h2>
        <p className="text-muted mb-1">Categoría: <strong>{categoria}</strong></p>
        <p className="fs-4 fw-semibold">Precio: ${precio.toLocaleString()}</p>
        <p className="mb-4">{descripcion}</p>

        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  );
}
