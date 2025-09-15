import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="detalle-container">
        <h2>Carrito vacío</h2>
        <p>No agregaste productos todavía.</p>
        <Link to="/catalogo" className="btn-comprar" style={{ display: "inline-block", width: "auto", padding: "0 18px" }}>
          Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="detalle-container">
      <h2 style={{ color: "#fff" }}>Carrito de compras</h2>
      <div className="caracteristicas-grid" style={{ marginBottom: 20 }}>
        {cart.map((item) => (
          <div key={item.id} className="caracteristica">
            <h3>{item.nombre}</h3>
            <p>Cantidad: <strong>{item.cantidad}</strong></p>
            <p>Precio unitario: ${item.precio.toLocaleString("es-AR")}</p>
            <p>Subtotal: <strong>${(item.precio * item.cantidad).toLocaleString("es-AR")}</strong></p>
            <button onClick={() => removeItem(item.id)} className="filtro-btn" style={{ borderColor: "#eee", color: "#111", background: "#fff" }}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <h3 style={{ color: "#fff" }}>
        Total: ${totalPrice().toLocaleString("es-AR")}
      </h3>

      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <button onClick={clearCart} className="filtro-btn" style={{ borderColor: "#eee", color: "#111", background: "#fff" }}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn-comprar" style={{ display: "inline-block", width: "auto", padding: "0 18px" }}>
          Finalizar compra
        </Link>
      </div>
    </div>
  );
}
