import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import logo from '../assets/logo_navbar.png';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg custom-navbar fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <Link className="navbar-brand col-lg-3 me-0" to="/">
            <img src={logo} alt="Logo VEYOR" className="logo-navbar" />
          </Link>
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">Inicio</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/catalogo">Catálogo</NavLink></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/categoria/pcs">PCs de Escritorio</Link></li>
                <li><Link className="dropdown-item" to="/categoria/notebooks">Notebooks</Link></li>
                <li><Link className="dropdown-item" to="/categoria/monitores">Monitores</Link></li>
              </ul>
            </li>
            <li className="nav-item"><NavLink className="nav-link" to="/contacto">Contacto</NavLink></li>
          </ul>
          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}
