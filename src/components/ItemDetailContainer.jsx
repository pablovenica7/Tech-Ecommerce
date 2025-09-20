import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export function ItemDetailContainer() {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      setCargando(true);
      try {
        const ref = doc(db, "products", idProducto);
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error("Error obteniendo producto:", error);
        setProducto(null);
      } finally {
        setCargando(false);
      }
    };

    fetchProducto();
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
        <p>
          Revisá el enlace o volvé al <a href="/catalogo">catálogo</a>.
        </p>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <ItemDetail producto={producto} />
    </main>
  );
}
