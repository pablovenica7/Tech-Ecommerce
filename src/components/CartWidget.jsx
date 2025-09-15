import carrito from "../assets/icono_carrito.png";
import user from "../assets/icono_user.png";

export function CartWidget() {
  return (
    <div className="d-flex align-items-center gap-3">
      <img src={carrito} alt="Carrito" className="icono-navbar" />
      <img src={user} alt="Usuario" className="icono-navbar" />
    </div>
  );
}
