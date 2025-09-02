import { Link } from "react-router-dom";

export function Producto({ id, nombre, precio, img }) {
  const cuota12 = Math.ceil(precio / 12);

  return (
    <Link to={`/producto/${id}`} className="catalog-card h-100">
      <div className="catalog-img-wrap">
        {img ? (
          <img src={img} alt={nombre} className="catalog-img" />
        ) : (
          <div className="catalog-img placeholder"></div>
        )}
      </div>

      <div className="catalog-body">
        <h3 className="catalog-title">{nombre}</h3>

        <div className="catalog-price-box">
          <span className="catalog-price">${precio.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
}
