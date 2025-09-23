import { Link } from "react-router-dom";

export function Producto({ id, nombre, precio, img, stock }) {
  return (
    <div className="product-card position-relative">
      {(!stock || stock <= 0) && (
        <span
          className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded bg-danger text-white fw-bold"
          style={{ fontSize: "0.8rem" }}
        >
          Sin stock
        </span>
      )}

      <Link
        to={stock && stock > 0 ? `/producto/${id}` : "#"}
        className="product-link"
        style={{ pointerEvents: stock && stock > 0 ? "auto" : "none" }}
      >
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
    </div>
  );
}

