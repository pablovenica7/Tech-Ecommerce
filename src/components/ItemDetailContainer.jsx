import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

// Misma fuente de datos que en ItemListContainer (podés unificarla en un módulo)
const DATA = [
  { id: 1, nombre: "PC Gamer Ryzen 5", precio: 580000, categoria: "pcs", descripcion: "PC gamer equilibrada para 1080p." },
  { id: 2, nombre: "Notebook Dell i7", precio: 720000, categoria: "notebooks", descripcion: "Notebook para trabajo y estudio." },
  { id: 3, nombre: "Monitor 27'' LG", precio: 250000, categoria: "monitores", descripcion: "Panel IPS Full HD 75Hz." },
  { id: 4, nombre: "PC Office i5", precio: 430000, categoria: "pcs", descripcion: "Ofimática y multimedia." },
  { id: 5, nombre: "Notebook Lenovo Ryzen 7", precio: 810000, categoria: "notebooks", descripcion: "Rendimiento portátil alto." },
  { id: 6, nombre: "Monitor 24'' Samsung", precio: 190000, categoria: "monitores", descripcion: "Compacto y nítido para oficina." },
];

export function ItemDetailContainer() {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);

    const obtenerProducto = new Promise((resolve, reject) => {
      setTimeout(() => {
        const found = DATA.find(p => p.id === Number(idProducto));
        if (found) resolve(found);
        else reject(new Error("Producto no encontrado"));
      }, 1000);
    });

    obtenerProducto
      .then((data) => setProducto(data))
      .catch((err) => {
        console.error(err);
        setProducto(null);
      })
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
        <p>Verificá el enlace o volvé al <a href="/catalogo">catálogo</a>.</p>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <ItemDetail producto={producto} />
    </main>
  );
}
