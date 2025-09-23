import { useState } from "react";
import { useCart } from "./CartContext";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [metodoPago, setMetodoPago] = useState("");

  const handleConfirmarCompra = async () => {
    if (!metodoPago) {
      Swal.fire("Error", "Selecciona un método de pago", "error");
      return;
    }

    if (items.length === 0) {
      Swal.fire("Error", "El carrito está vacío", "error");
      return;
    }

    const nuevaOrden = {
      buyer: {
        nombre: "Juan",
        email: "juan@gmail.com",
        telefono: "1234567890",
      },
      fecha: serverTimestamp(),
      items: items.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.cantidad,
      })),
      total: totalPrice,
      metodoPago,
    };

    try {
      const ordenesCollection = collection(db, "orders");
      const docRef = await addDoc(ordenesCollection, nuevaOrden);

      Swal.fire({
        icon: "success",
        title: "¡Gracias por tu compra!",
        html: `
          <p>Total: <b>$${totalPrice.toLocaleString()}</b></p>
          <p><small>Tu número de orden es:</small></p>
          <p style="font-size:14px; color:#2e7df6;"><b>${docRef.id}</b></p>
        `,
        confirmButtonColor: "orange",
      });

      clearCart();
    } catch (error) {
      Swal.fire("Error", "No se pudo generar la orden", "error");
      console.error(error);
    }
  };

  return (
    <main className="container mt-5 pt-5">
      <h2 className="mb-4">Método de Pago</h2>

      <div className="bg-white shadow-sm rounded p-4">
        <div className="mb-3">
          <label className="form-label">Selecciona un método</label>
          <select
            className="form-select"
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
          >
            <option value="">-- Elegir --</option>
            <option value="Tarjeta">Tarjeta de crédito/débito</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Transferencia">Transferencia bancaria</option>
          </select>
        </div>

        <h4>Total: ${totalPrice.toLocaleString()}</h4>

        <button
          className="btn btn-success mt-3 w-100"
          onClick={handleConfirmarCompra}
        >
          Finalizar compra
        </button>
      </div>
    </main>
  );
}
