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
      <h2 className="mb-4">Carrito de Compras</h2>

      {items.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div className="row g-4">
          {/* Lista de productos */}
          <div className="col-lg-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between bg-white shadow-sm rounded p-3 mb-3"
              >
                {/* Imagen */}
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.nombre}
                    className="img-fluid rounded"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  {/* Nombre y precio unitario */}
                  <div>
                    <h5 className="mb-1">{item.nombre}</h5>
                    <p className="mb-0 text-muted">
                      ${item.precio.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Controles de cantidad */}
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-outline-secondary btn-sm">−</button>
                  <span>{item.cantidad}</span>
                  <button className="btn btn-outline-secondary btn-sm">+</button>
                </div>

                {/* Subtotal */}
                <div className="fw-bold">
                  ${(item.precio * item.cantidad).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* Resumen de compra */}
          <aside className="col-lg-4">
            <div className="bg-white shadow-sm rounded p-3">
              <h5 className="mb-3">Resumen</h5>
              <p className="d-flex justify-content-between">
                <span>{items.length} producto(s)</span>
                <span>${totalPrice.toLocaleString()}</span>
              </p>
              <hr />
              <p className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
              </p>
              <button
                className="btn btn-primary w-100 mb-2"
                onClick={handleFinalizarCompra}
              >
                Iniciar compra
              </button>
              <a href="/catalogo" className="btn btn-outline-secondary w-100">
                Ver más productos
              </a>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
