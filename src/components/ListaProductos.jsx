import { useState, useEffect } from "react";
import { Producto } from "./Producto";

export function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, nombre: "PC Gamer Ryzen 5", precio: 580000 },
          { id: 2, nombre: "Notebook Dell i7", precio: 720000 },
          { id: 3, nombre: "Monitor 27'' LG", precio: 250000 },
        ]);
      }, 2000);
    });

    obtenerProductos
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  return (
    <section id="productos" className="container mt-5">
      <h3 className="mb-4">Productos Destacados</h3>
      {cargando ? (
        <p className="text-muted">Cargando productos...</p>
      ) : (
        productos.map((prod) => (
          <Producto key={prod.id} nombre={prod.nombre} precio={prod.precio} />
        ))
      )}
    </section>
  );
}
