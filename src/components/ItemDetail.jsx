import { useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "../context/CartContext";

export function ItemDetail({ producto }) {
  if (!producto) return null;

  const { nombre, precio, descripcion, categoria, img, caracteristicas, stock } = producto;
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(stock, q + 1));

  const handleBuy = () => {
    addItem(producto, qty);
    Swal.fire({
      icon: "success",
      title: "¡Producto agregado!",
      text: `Agregaste ${qty} unidad(es) de "${nombre}" al carrito.`,
      confirmButtonColor: "#ff7a1a",
    });
  };

  return (
    <div className="detalle-container">
      {/* Cabecera */}
      <div className="detalle-header">
        <h1 className="detalle-title">{nombre}</h1>
        <hr className="detalle-divider" />
      </div>

      {/* Imagen + Panel de compra */}
      <div className="detalle-top">
        {/* Imagen */}
        <div className="detalle-imgbox">
          {img ? (
            <img src={img} alt={nombre} className="detalle-img" />
          ) : (
            <div className="detalle-img placeholder" />
          )}
        </div>

        {/* Panel de compra */}
        <aside className="detalle-info">
          <span className="categoria-badge">{categoria}</span>

          <section className="precio-box-simple">
            <div className="precio-monto">
              ${precio.toLocaleString("es-AR")}
            </div>
            <div className="precio-metodo">
              Precio pagando en <strong>efectivo, transferencia o depósito</strong>
            </div>
            <div className="precio-sin-imp">
              Precio sin impuestos nacionales:{" "}
              <strong>${Math.round(precio * 0.91).toLocaleString("es-AR")}</strong>
            </div>
          </section>

          {stock > 0 ? (
            <>
              <div className="qty-row">
                <label className="qty-label">Cantidad (Stock: {stock})</label>
                <div className="qty-control">
                  <button className="qty-btn" onClick={dec} aria-label="Restar">−</button>
                  <input
                    className="qty-input"
                    type="number"
                    min={1}
                    max={stock}
                    value={qty}
                    onChange={(e) => {
                      const val = Math.max(1, Math.min(stock, Number(e.target.value) || 1));
                      setQty(val);
                    }}
                  />
                  <button className="qty-btn" onClick={inc} aria-label="Sumar">+</button>
                </div>
              </div>

              <button className="btn-comprar" onClick={handleBuy}>
                Comprar
              </button>
            </>
          ) : (
            <p className="sin-stock" style={{ color: "#d32f2f", fontWeight: 700 }}>
              Producto sin stock
            </p>
          )}
        </aside>
      </div>

      {/* Descripción */}
      {descripcion && (
        <>
          <hr className="detalle-divider" />
          <div className="detalle-desc">
            <h2>Descripción</h2>
            <p>{descripcion}</p>
          </div>
        </>
      )}

      {/* Características */}
      {caracteristicas && (
        <>
          <hr className="detalle-divider" />
          <div className="detalle-caracteristicas">
            <h2>Características</h2>
            <div className="caracteristicas-grid">
              {Object.entries(caracteristicas).map(([clave, valor]) => (
                <div key={clave} className="caracteristica">
                  <h3>{clave.charAt(0).toUpperCase() + clave.slice(1)}</h3>
                  <p>{valor}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
