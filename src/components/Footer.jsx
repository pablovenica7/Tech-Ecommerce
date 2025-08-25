import { Link } from "react-router-dom";
import logoFacebook from "../assets/logo_facebook.svg";
import logoInstagram from "../assets/logo_instagram.svg";

export function Footer() {
  return (
    <footer className="py-5">
      <div className="row container mx-auto">
        <div className="col-6 col-md-3 mb-3">
          <h5>Navegación</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">Inicio</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/catalogo" className="nav-link p-0 text-body-secondary">Catálogo</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/contacto" className="nav-link p-0 text-body-secondary">Contacto</Link>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-3 mb-3">
          <h5>Categorías</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/categoria/pcs" className="nav-link p-0 text-body-secondary">PCs de Escritorio</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/categoria/notebooks" className="nav-link p-0 text-body-secondary">Notebooks</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/categoria/monitores" className="nav-link p-0 text-body-secondary">Monitores</Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-6 mb-3">
          <h5>Contacto</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <span className="nav-link p-0 text-body-secondary">Av. Colón 1234, Córdoba, Argentina</span>
            </li>
            <li className="nav-item mb-2">
              <a href="tel:+543511234567" className="nav-link p-0 text-body-secondary">+54 351 123 4567</a>
            </li>
            <li className="nav-item mb-2">
              <a href="mailto:contacto@veyor.com" className="nav-link p-0 text-body-secondary">contacto@veyor.com</a>
            </li>
            <li className="nav-item mb-2">
              <span className="nav-link p-0 text-body-secondary">Lun a Vie de 9 a 18 hs</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top container mx-auto">
        <p>© 2025 VEYOR, Inc. Todos los derechos reservados.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <img src={logoInstagram} alt="Instagram" className="footer-icon" />
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <img src={logoFacebook} alt="Facebook" className="footer-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
