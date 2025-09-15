import { useState } from "react";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ nombre: "", email: "", direccion: "" });

  if (cart.length === 0) {
    return (
      <div className="detalle-container">
        <h2>No hay productos en el carrito</h2>
        <Link to="/catalogo" className="btn-comprar" style={{ display: "inline-block", width: "auto", padding: "0 18px" }}>
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.direccion) {
      Swal.fire("Faltan datos", "Completá todos los campos", "warning");
      return;
    }

    Swal.fire({
      icon: "success",
      title: "¡Gracias por tu compra!",
      text: `Tu pedido por $${totalPrice().toLocaleString("es-AR")} fue registrado.`,
      confirmButtonColor: "#ff7a1a",
    });

    clearCart();
    setForm({ nombre: "", email: "", direccion: "" });
  };

  return (
    <div className="detalle-container">
      <h2 style={{ color: "#fff" }}>Finalizar compra</h2>

      <form onSubmit={handleSubmit} className="checkout-form" style={{ display: "grid", gap: 12, maxWidth: 520 }}>
        <input type="text" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo electrónico" value={form.email} onChange={handleChange} required />
        <input type="text" name="direccion" placeholder="Dirección" value={form.direccion} onChange={handleChange} required />
        <button type="submit" className="btn-comprar">Confirmar compra</button>
      </form>
    </div>
  );
}
