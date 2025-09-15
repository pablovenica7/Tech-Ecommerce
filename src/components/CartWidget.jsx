import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function CartWidget() {
  const { totalUnidades } = useCart();

  return (
    <Link to="/carrito" className="cart-widget">
      🛒
      {totalUnidades > 0 && (
        <span className="cart-count">{totalUnidades}</span>
      )}
    </Link>
  );
}
