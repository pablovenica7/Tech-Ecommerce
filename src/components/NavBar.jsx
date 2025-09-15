import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export function NavBar() {
  return (
    <nav className="custom-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">VEYOR</Link>

        <div className="navbar-links d-flex gap-3">
          <NavLink to="/" className="nav-link">Inicio</NavLink>
          <NavLink to="/categoria/pcs" className="nav-link">PCs</NavLink>
          <NavLink to="/categoria/notebooks" className="nav-link">Notebooks</NavLink>
          <NavLink to="/categoria/monitores" className="nav-link">Monitores</NavLink>
        </div>

        <CartWidget />
      </div>
    </nav>
  );
}
