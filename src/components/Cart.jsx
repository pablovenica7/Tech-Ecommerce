import { useCart } from "../components/CartContext";

export function Cart() {
  const { items, totalPrice, addItemToCart, removeItemFromCart } = useCart();

  return (
    <main className="container mt-5 pt-5">
      <h2 className="mb-4">Carrito de Compras</h2>

      {items.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div className="row g-4">
          <div className="col-lg-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between bg-white shadow-sm rounded p-3 mb-3"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.nombre}
                    className="img-fluid rounded"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <div>
                    <h5 className="mb-1">{item.nombre}</h5>
                    <p className="mb-0 text-muted">
                      ${item.precio.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => addItemToCart(item, -1)} // restar 1
                  >
                    −
                  </button>
                  <span>{item.cantidad}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => addItemToCart(item, 1)} // sumar 1
                  >
                    +
                  </button>
                </div>

                <div className="fw-bold me-3">
                  ${(item.precio * item.cantidad).toLocaleString()}
                </div>

                <button
                  className="btn btn-link text-danger fs-5"
                  onClick={() => removeItemFromCart(item.id)}
                  title="Eliminar producto"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

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
              <a href="/checkout" className="btn btn-primary w-100">
                Finalizar compra
              </a>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
