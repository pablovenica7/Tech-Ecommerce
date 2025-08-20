import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import logo from '../assets/logo_navbar.png';

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent custom-navbar fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <Link className="navbar-brand col-lg-3 me-0" to="/">
            <img src={logo} alt="Logo VEYOR" className="logo-navbar"/>
          </Link>
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/pcs">PCs de Escritorio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
          </ul>
          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

