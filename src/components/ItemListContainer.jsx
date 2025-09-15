import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListaProductos } from "./ListaProductos";
import { PRODUCTS } from "../bd/products"; // usando mock

export function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setProductos(PRODUCTS.filter((p) => p.categoria === id));
    } else {
      setProductos(PRODUCTS);
    }
  }, [id]);

  return (
    <div className="catalogo-container">
      <h1 className="catalogo-title">
        {id ? `Categoría: ${id.toUpperCase()}` : "Catálogo completo"}
      </h1>
      <ListaProductos productos={productos} />
    </div>
  );
}
