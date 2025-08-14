export function Producto(props) {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text text-muted">Precio: ${props.precio.toLocaleString()}</p>
        <button className="btn btn-outline-dark">Comprar</button>
      </div>
    </div>
  );
}
