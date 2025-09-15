import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchProducts } from "../data/products";
import ListaProductos from "./ListaProductos";

export default function ItemListContainer() {
  const { idCategoria } = useParams();
  const { pathname } = useLocation();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts(800).then((data) => {
      const filtrados = idCategoria
        ? data.filter((p) => p.categoria === idCategoria)
        : data;
      setProductos(filtrados);
      setLoading(false);
    });
  }, [idCategoria, pathname]);

  if (loading) return <p className="loader">Cargando productos...</p>;

  return (
    <div className="catalogo-container">
      <h1 className="catalogo-title">
        {idCategoria ? `Categoría: ${idCategoria.toUpperCase()}` : "Catálogo completo"}
      </h1>
      <ListaProductos productos={productos} />
    </div>
  );
}
