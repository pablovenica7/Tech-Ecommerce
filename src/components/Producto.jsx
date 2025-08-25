import { Link } from "react-router-dom";

export function Producto(props) {
  const { id, nombre, precio } = props;

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text text-muted mb-4">Precio: ${precio.toLocaleString()}</p>

        <div className="mt-auto d-flex gap-2">
          <Link className="btn btn-outline-dark" to={`/producto/${id}`}>
            Ver detalle
          </Link>
          <Link className="btn btn-dark" to={`/producto/${id}`}>
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
}
