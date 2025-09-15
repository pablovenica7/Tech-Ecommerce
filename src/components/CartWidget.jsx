import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import carritoIcon from "../assets/icono_carrito.png";

export default function CartWidget() {
  const { totalItems } = useCart();
  return (
    <Link to="/carrito" className="cart-widget">
      <img src={carritoIcon} alt="Carrito" className="cart-icon" />
      {totalItems() > 0 && <span className="cart-count">{totalItems()}</span>}
    </Link>
  );
}
