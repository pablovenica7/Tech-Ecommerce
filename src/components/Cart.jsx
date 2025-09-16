import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, removeItem, clearCart, totalUnidades, totalPrecio } = useCart();

  if (cart.length === 0) {
    return (
      <main className="container mt-5 pt-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/catalogo" className="btn btn-primary mt-3">
          Ir al catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="container mt-5 pt-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.cantidad}</td>
              <td>${item.precio.toLocaleString("es-AR")}</td>
              <td>${(item.precio * item.cantidad).toLocaleString("es-AR")}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <button className="btn btn-outline-danger" onClick={clearCart}>
          Vaciar carrito
        </button>
        <div>
          <h5>Total de unidades: {totalUnidades}</h5>
          <h4>Total a pagar: ${totalPrecio.toLocaleString("es-AR")}</h4>
        </div>
      </div>

      <div className="mt-4 text-end">
        <Link to="/checkout" className="btn btn-success">
          Finalizar compra
        </Link>
      </div>
    </main>
  );
}
