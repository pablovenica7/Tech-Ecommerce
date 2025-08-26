import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListaProductos } from './ListaProductos';
import { fetchProducts } from '../data/products';

export function ItemListContainer({ mensaje }) {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    fetchProducts()
      .then((data) => {
        setProductos(idCategoria ? data.filter(p => p.categoria === idCategoria) : data);
      })
      .finally(() => setCargando(false));
  }, [idCategoria]);

  return (
    <section className="container mt-5">
      <h2 className="mb-4">
        {idCategoria ? `${mensaje}: ${idCategoria}` : mensaje}
      </h2>

      {cargando
        ? <p className="text-muted">Cargando productos...</p>
        : <ListaProductos productos={productos} />
      }
    </section>
  );
}
