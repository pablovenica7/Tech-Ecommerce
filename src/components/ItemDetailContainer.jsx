import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { fetchProductById } from "../data/products";

export function ItemDetailContainer() {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    fetchProductById(idProducto)
      .then(setProducto)
      .catch(() => setProducto(null))
      .finally(() => setCargando(false));
  }, [idProducto]);

  if (cargando) {
    return (
      <main className="container py-5">
        <p className="text-muted">Cargando detalle...</p>
      </main>
    );
  }

  if (!producto) {
    return (
      <main className="container py-5">
        <h2>Producto no encontrado</h2>
        <p>Revisá el enlace o volvé al <a href="/catalogo">catálogo</a>.</p>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <ItemDetail producto={producto} />
    </main>
  );
}
