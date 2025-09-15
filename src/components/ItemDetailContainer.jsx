import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../data/products";
import { ItemDetail } from "./ItemDetail";

export default function ItemDetailContainer() {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductById(idProducto, 700)
      .then((data) => setProducto(data))
      .finally(() => setLoading(false));
  }, [idProducto]);

  if (loading) return <p className="loader">Cargando detalle...</p>;

  return <ItemDetail producto={producto} />;
}
