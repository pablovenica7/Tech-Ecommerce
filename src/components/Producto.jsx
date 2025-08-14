export function Producto(props) {
  return (
    <div className="card p-3 mb-3 shadow-sm">
      <h5>{props.nombre}</h5>
      <p>Precio: ${props.precio}</p>
    </div>
  );
}
