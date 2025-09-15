import { useCart } from "../context/CartContext";

export function Cart() {
  const { cart, removeFromCart, clearCart, totalPrecio } = useCart();

  if (cart.length === 0) {
    return <p className="cart-empty">Tu carrito está vacío 🛒</p>;
  }

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.nombre}</span>
            <span>{item.qty} x ${item.precio.toLocaleString("es-AR")}</span>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrecio.toLocaleString("es-AR")}</h3>
      <button onClick={clearCart} className="btn-clear">
        Vaciar carrito
      </button>
    </div>
  );
}
