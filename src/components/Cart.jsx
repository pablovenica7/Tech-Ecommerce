import { useCart } from "../components/CartContext";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

export function Cart() {
  const { items, totalPrice, clearCart } = useCart();

  const handleFinalizarCompra = async () => {
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
    };

    try {
      const ordenesCollection = collection(db, "orders");
      const docRef = await addDoc(ordenesCollection, nuevaOrden);

      Swal.fire(
        "Compra realizada",
        `Tu ID de orden es: ${docRef.id}`,
        "success"
      );
      clearCart();
    } catch (error) {
      Swal.fire("Error", "No se pudo finalizar la compra", "error");
      console.error(error);
    }
  };

  return (
    <main className="container mt-5 pt-5">
      <h2>Carrito de Compras</h2>

      {items.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.nombre} x {item.cantidad}
                <span>${(item.precio * item.cantidad).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <h4>Total: ${totalPrice.toLocaleString()}</h4>
          <button className="btn btn-success mt-3" onClick={handleFinalizarCompra}>
            Finalizar compra
          </button>
        </>
      )}
    </main>
  );
}
