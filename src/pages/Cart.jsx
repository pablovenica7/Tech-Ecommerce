import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="detalle-container">
        <h2>Carrito vacío</h2>
        <Link to="/catalogo">Ir al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="detalle-container">
      <h2>Carrito de compras</h2>
      {cart.map(item => (
        <div key={item.id} className="caracteristica">
          <h3>{item.nombre}</h3>
          <p>Cantidad: {item.cantidad}</p>
          <p>Precio unitario: ${item.precio.toLocaleString("es-AR")}</p>
          <p>Subtotal: ${(item.precio * item.cantidad).toLocaleString("es-AR")}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${totalPrice().toLocaleString("es-AR")}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
}
