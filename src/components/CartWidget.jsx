import carrito from "../assets/icono_carrito.png";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

export function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="position-relative">
      <img src={carrito} alt="Carrito" className="icono-navbar" />
      {totalQuantity > 0 && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ fontSize: "0.75rem" }}
        >
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}
