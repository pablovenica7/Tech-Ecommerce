import logoFacebook from "../assets/logo_facebook.svg";
import logoInstagram from "../assets/logo_instagram.svg";

export function Footer() {
  return (
    <footer className="py-5">
      <div className="row container mx-auto">
        <div className="col-6 col-md-2 mb-3">
          <h5>Categorias</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Inicio</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">PCs de Escritorio</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contacto</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Contacto</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Dirección: Av. Colón 1234, Córdoba, Argentina</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Teléfono: +54 351 123 4567</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Email: contacto@veyor.com</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Horarios: Lun a Vie de 9 a 18 hs</a></li>
          </ul>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top container mx-auto">
        <p>© 2025 VEYOR, Inc. Todos los derechos reservados.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="https://www.instagram.com" aria-label="Instagram">
              <img src={logoInstagram} alt="Instagram" className="footer-icon" />
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="https://www.facebook.com" aria-label="Facebook">
              <img src={logoFacebook} alt="Facebook" className="footer-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
