import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListaProductos } from './ListaProductos';

// Fuente de datos simulada (podés moverla a otro archivo si querés)
const DATA = [
  { id: 1, nombre: "PC Gamer Ryzen 5", precio: 580000, categoria: "pcs" },
  { id: 2, nombre: "Notebook Dell i7", precio: 720000, categoria: "notebooks" },
  { id: 3, nombre: "Monitor 27'' LG", precio: 250000, categoria: "monitores" },
  { id: 4, nombre: "PC Office i5", precio: 430000, categoria: "pcs" },
  { id: 5, nombre: "Notebook Lenovo Ryzen 7", precio: 810000, categoria: "notebooks" },
  { id: 6, nombre: "Monitor 24'' Samsung", precio: 190000, categoria: "monitores" },
];

export function ItemListContainer(props) {
  const { idCategoria } = useParams(); // puede venir undefined (en /catalogo)
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);

    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(DATA);
      }, 1200);
    });

    obtenerProductos
      .then((data) => {
        if (idCategoria) {
          const filtrados = data.filter(p => p.categoria === idCategoria);
          setProductos(filtrados);
        } else {
          setProductos(data);
        }
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
      })
      .finally(() => setCargando(false));
  }, [idCategoria]);

  return (
    <section className="container mt-5">
      <h2 className="mb-4">
        {idCategoria ? `${props.mensaje}: ${idCategoria}` : props.mensaje}
      </h2>

      {cargando
        ? <p className="text-muted">Cargando productos...</p>
        : <ListaProductos productos={productos} />
      }
    </section>
  );
}
