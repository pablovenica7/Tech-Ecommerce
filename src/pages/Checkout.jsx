import { useState } from "react";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ nombre: "", email: "", direccion: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "¡Gracias por tu compra!",
      text: `Tu pedido por $${totalPrice().toLocaleString("es-AR")} fue registrado.`,
      confirmButtonColor: "#ff7a1a"
    });
    clearCart();
  };

  return (
    <div className="detalle-container">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo electrónico" value={form.email} onChange={handleChange} required />
        <input type="text" name="direccion" placeholder="Dirección" value={form.direccion} onChange={handleChange} required />
        <button type="submit" className="btn-comprar">Confirmar compra</button>
      </form>
    </div>
  );
}
