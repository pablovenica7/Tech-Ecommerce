import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useCart } from "./CartContext";
import Swal from "sweetalert2";

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone || !paymentMethod) {
      Swal.fire({
        icon: "warning",
        title: "Faltan datos",
        text: "Por favor completa todos los campos antes de continuar",
        confirmButtonColor: "orange",
      });
      return;
    }

    const order = {
      buyer,
      items,
      total: totalPrice,
      paymentMethod,
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);

      clearCart();

      Swal.fire({
        icon: "success",
        title: "¡Compra realizada!",
        html: `
          <p>Gracias por tu compra, <b>${buyer.name}</b>.</p>
          <p>Total: <b>$${totalPrice.toLocaleString()}</b></p>
          <p><small>Tu número de orden es:</small></p>
          <p style="font-size:14px; color:#2e7df6;"><b>${docRef.id}</b></p>
        `,
        confirmButtonColor: "orange",
      });
    } catch (error) {
      console.error("Error al registrar la orden:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo registrar tu compra. Intenta nuevamente.",
        confirmButtonColor: "red",
      });
    }
  };

  return (
    <main className="container py-5">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={buyer.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={buyer.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Método de pago</label>
          <select
            className="form-select"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Selecciona un método</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="transferencia">Transferencia bancaria</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Finalizar compra
        </button>
      </form>
    </main>
  );
}
