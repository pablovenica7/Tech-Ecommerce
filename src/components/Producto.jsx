import { Link } from "react-router-dom";

export function Producto({ id, nombre, precio, img }) {
  return (
    <div className="product-card">
      <Link to={`/producto/${id}`} className="product-link">
        <div className="product-img-wrap">
          {img ? (
            <img src={img} alt={nombre} className="product-img" />
          ) : (
            <div className="product-img placeholder"></div>
          )}
        </div>

        <div className="product-body">
          <h3 className="product-title">{nombre}</h3>
          <p className="product-price">${precio.toLocaleString()}</p>
        </div>
      </Link>

      <div className="product-actions">
        <Link to={`/producto/${id}`} className="btn-product">Comprar</Link>
        <Link to={`/producto/${id}`} className="btn-product">Ver detalle</Link>
      </div>
    </div>
  );
}
