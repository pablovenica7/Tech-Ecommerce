import { useState } from "react";
import { useCart } from "../components/CartContext";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

export function Checkout() {
  const { cart, totalPrecio, clearCart } = useCart();
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [loading, setLoading] = useState(false);

  const db = getFirestore();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.telefono) {
      Swal.fire("Error", "Completá todos los campos", "error");
      return;
    }

    if (cart.length === 0) {
      Swal.fire("Error", "El carrito está vacío", "error");
      return;
    }

    setLoading(true);

    try {
      const order = {
        buyer: form,
        items: cart.map((p) => ({
          id: p.id,
          nombre: p.nombre,
          precio: p.precio,
          cantidad: p.cantidad,
        })),
        total: totalPrecio,
        fecha: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "orders"), order);
      clearCart();

      Swal.fire({
        icon: "success",
        title: "¡Compra realizada!",
        text: `Tu ID de orden es: ${docRef.id}`,
        confirmButtonColor: "#28a745",
      });
    } catch (error) {
      Swal.fire("Error", "No se pudo generar la orden", "error");
      console.error("Error en Checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mt-5 pt-5">
      <h2 className="mb-4">Finalizar compra</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Nombre y apellido</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            className="form-control"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 text-end">
          <button
            type="submit"
            className="btn btn-success"
            disabled={loading}
          >
            {loading ? "Procesando..." : "Comprar"}
          </button>
        </div>
      </form>
    </main>
  );
}
