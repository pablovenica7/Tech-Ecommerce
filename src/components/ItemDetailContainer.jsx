import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
      <main className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="text-muted mt-3">Cargando detalle...</p>
      </main>
    );
  }

  if (!producto) {
    return (
      <main className="container py-5 text-center">
        <h2 className="mb-3">Producto no encontrado</h2>
        <p>
          Revisá el enlace o volvé al{" "}
          <Link to="/catalogo" className="text-decoration-none text-primary">
            catálogo
          </Link>
          .
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
