import { useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "./CartContext";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";

export function ItemDetail({ producto }) {
  if (!producto) return null;

  const { nombre, precio, descripcion, categoria, img, caracteristicas, stock } = producto;
  const { addItemToCart } = useCart();
  const [added, setAdded] = useState(false);

  const onAdd = (cantidad) => {
    addItemToCart(producto, cantidad);
    setAdded(true);
    Swal.fire({
      icon: "success",
      title: "¡Producto agregado!",
      text: `Agregaste ${cantidad} unidad(es) de "${nombre}" al carrito.`,
      confirmButtonText: "Listo",
      confirmButtonColor: "#ff7a1a",
    });
  };

  // ✅ Las imágenes están en /public/assets/, por lo que se usan directamente
  const imagePath = img;

  return (
    <div className="detalle-container">
      <div className="detalle-header">
        <h1 className="detalle-title">{nombre}</h1>
        <hr className="detalle-divider" />
      </div>

      <div className="detalle-top">
        <div className="detalle-imgbox">
          {img ? (
            <img src={imagePath} alt={nombre} className="detalle-img" />
          ) : (
            <div className="detalle-img placeholder" />
          )}
        </div>

        <aside className="detalle-info">
          <span className="categoria-badge">{categoria}</span>

          <section className="precio-box-simple">
            <div className="precio-monto">${precio.toLocaleString("es-AR")}</div>
            <div className="precio-metodo">
              Precio pagando en <strong>efectivo, transferencia bancaria o depósito</strong>
            </div>
            <div className="precio-sin-imp">
              Precio sin impuestos nacionales:{" "}
              <strong>${Math.round(precio * 0.91).toLocaleString("es-AR")}</strong>
            </div>
          </section>

          <div className="qty-row mt-3">
            {!stock || stock <= 0 ? (
              <p className="text-danger fw-semibold">Producto sin stock</p>
            ) : !added ? (
              <>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                <p className="text-muted mt-2">Stock disponible: {stock} unidades</p>
              </>
            ) : (
              <div className="d-grid gap-2">
                <Link className="btn btn-dark" to="/cart">
                  Ir al carrito
                </Link>
                <Link className="btn btn-outline-secondary" to="/catalogo">
                  Seguir comprando
                </Link>
                <p className="text-muted mt-2">Stock disponible: {stock} unidades</p>
              </div>
            )}
          </div>
        </aside>
      </div>

      {descripcion && (
        <>
          <hr className="detalle-divider" />
          <div className="detalle-desc">
            <h2>Descripción</h2>
            <p>{descripcion}</p>
          </div>
        </>
      )}

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
