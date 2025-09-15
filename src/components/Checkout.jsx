import { useState } from "react";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

export function Checkout() {
  const { cart, totalPrecio, clearCart } = useCart();
  const [form, setForm] = useState({ nombre: "", email: "", direccion: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.direccion) {
      Swal.fire("Error", "Completa todos los campos", "error");
      return;
    }

    Swal.fire({
      icon: "success",
      title: "¡Compra confirmada!",
      text: `Gracias ${form.nombre}, tu pedido fue registrado por $${totalPrecio.toLocaleString("es-AR")}.`,
      confirmButtonColor: "#ff7a1a",
    });

    clearCart();
    setForm({ nombre: "", email: "", direccion: "" });
  };

  if (cart.length === 0) {
    return <p className="cart-empty">No hay productos en el carrito.</p>;
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección de entrega"
          value={form.direccion}
          onChange={handleChange}
        />
        <button type="submit" className="btn-comprar">Confirmar compra</button>
      </form>
    </div>
  );
}
