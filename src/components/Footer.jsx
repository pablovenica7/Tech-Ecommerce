export function Footer() {
  return (
    <footer className="py-5">
      <div className="row container mx-auto">
        <div className="col-6 col-md-2 mb-3">
          <h5>Sección</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Inicio</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Productos</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Precios</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Sobre Nosotros</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Sección</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Inicio</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Productos</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Precios</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Sobre Nosotros</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Sección</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Inicio</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Productos</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Precios</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Sobre Nosotros</a></li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Suscribite al newsletter</h5>
            <p>Resumen mensual con novedades y ofertas exclusivas.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email</label>
              <input id="newsletter1" type="email" className="form-control" placeholder="Correo electrónico" />
              <button className="btn btn-primary" type="button">Suscribirse</button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top container mx-auto">
        <p>© 2025 VEYOR, Inc. Todos los derechos reservados.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis" href="#" aria-label="Instagram">📸</a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="#" aria-label="Facebook">📘</a></li>
        </ul>
      </div>
    </footer>
  );
}
