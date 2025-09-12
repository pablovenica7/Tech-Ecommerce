import { useState } from "react";
import Swal from "sweetalert2";

export function ItemDetail({ producto }) {
  if (!producto) return null;

  const { nombre, precio, descripcion, categoria, img, caracteristicas } = producto;
  const [qty, setQty] = useState(1);

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => q + 1);

  const handleBuy = () => {
    Swal.fire({
      icon: "success",
      title: "¡Producto agregado!",
      text: `Agregaste ${qty} unidad(es) de "${nombre}" al carrito.`,
      confirmButtonText: "Listo",
      confirmButtonColor: "#ff7a1a",
    });
  };

  return (
    <div className="detalle-container">
      <div className="detalle-layout">
        {/* Galería e info principal */}
        <section className="detalle-gallery">
          <h1 className="detalle-title">{nombre}</h1>

          <div className="detalle-imgbox">
            {img ? (
              <img src={img} alt={nombre} className="detalle-img" />
            ) : (
              <div className="detalle-img placeholder" />
            )}
          </div>

          {descripcion && (
            <div className="detalle-desc">
              <p>{descripcion}</p>
            </div>
          )}

          {/* 🔽 Sección de características técnicas */}
          {caracteristicas && (
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
          )}
        </section>

        {/* Panel lateral de compra */}
        <aside className="detalle-info">
          <span className="categoria-badge">{categoria}</span>

          <section className="precio-box-simple">
            <div className="precio-monto">
              ${precio.toLocaleString("es-AR")}
            </div>
            <div className="precio-metodo">
              Precio pagando en{" "}
              <strong>efectivo, transferencia bancaria o depósito</strong>
            </div>
            <div className="precio-sin-imp">
              Precio sin impuestos nacionales:{" "}
              <strong>
                ${Math.round(precio * 0.91).toLocaleString("es-AR")}
              </strong>
            </div>
          </section>

          {/* Selector de cantidad */}
          <div className="qty-row">
            <label className="qty-label">Cantidad</label>
            <div className="qty-control">
              <button className="qty-btn" onClick={dec} aria-label="Restar">
                −
              </button>
              <input
                className="qty-input"
                type="number"
                min={1}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, Number(e.target.value) || 1))
                }
              />
              <button className="qty-btn" onClick={inc} aria-label="Sumar">
                +
              </button>
            </div>
          </div>

          {/* Botón de compra */}
          <button className="btn-comprar" onClick={handleBuy}>
            Comprar
          </button>
        </aside>
      </div>
    </div>
  );
}
