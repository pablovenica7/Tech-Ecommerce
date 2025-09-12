import { useState } from "react";
import Swal from "sweetalert2";

export function ItemDetail({ producto }) {
  if (!producto) return null;

  const { nombre, precio, descripcion, categoria, img } = producto;
  const [qty, setQty] = useState(1);

  const dec = () => setQty(q => Math.max(1, q - 1));
  const inc = () => setQty(q => q + 1);

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

          {/* 🔽 Nueva sección de características técnicas */}
          <div className="detalle-caracteristicas">
            <h2>Características</h2>
            <div className="caracteristicas-grid">
              <div className="caracteristica">
                <h3>Accesorios</h3>
                <p>Teclado y Mouse incluidos</p>
              </div>
              <div className="caracteristica">
                <h3>Almacenamiento</h3>
                <p>Interfaz: SATA<br/>Capacidad: 240GB</p>
              </div>
              <div className="caracteristica">
                <h3>Conectividad</h3>
                <p>Ethernet: Sí<br/>Wi-Fi: Sí<br/>Bluetooth: No<br/>HDMI: Sí</p>
              </div>
              <div className="caracteristica">
                <h3>Fuente</h3>
                <p>500W Genérica</p>
              </div>
              <div className="caracteristica">
                <h3>Memoria RAM</h3>
                <p>8GB DDR4 (1x8GB)<br/>Expandable hasta 64GB</p>
              </div>
              <div className="caracteristica">
                <h3>Motherboard</h3>
                <p>A520M-K CSM</p>
              </div>
              <div className="caracteristica">
                <h3>Procesador</h3>
                <p>AMD 3000G<br/>2 Núcleos / 4 Hilos<br/>3.5GHz<br/>4MB SmartCache</p>
              </div>
              <div className="caracteristica">
                <h3>Puertos</h3>
                <p>USB 2.0, HDMI, Audio/Mic 3.5mm</p>
              </div>
              <div className="caracteristica">
                <h3>Sistema Operativo</h3>
                <p>No incluido, compatible con Windows 11</p>
              </div>
              <div className="caracteristica">
                <h3>Uso recomendado</h3>
                <p>Hogar y oficina (básico)<br/>Gaming ligero<br/>Arquitectura y diseño básico</p>
              </div>
            </div>
          </div>
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

          <button className="btn-comprar" onClick={handleBuy}>
            Comprar
          </button>
        </aside>
      </div>
    </div>
  );
}
