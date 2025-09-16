import carrito from "../assets/icono_carrito.png";
import user from "../assets/icono_user.png";
import { useCart } from "./CartContext";

export function CartWidget() {
  const { totalUnidades } = useCart();

  return (
    <div className="d-flex align-items-center gap-3">
      <div className="position-relative">
        <img src={carrito} alt="Carrito" className="icono-navbar" />
        {totalUnidades > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "0.75rem" }}
          >
            {totalUnidades}
          </span>
        )}
      </div>
      <img src={user} alt="Usuario" className="icono-navbar" />
    </div>
  );
}
