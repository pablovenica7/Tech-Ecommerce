import "./Home.css";
import personasImg from "../assets/img-home.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="hero-section d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-start">
            <h1 className="mb-4">Tecnología que te potencia</h1>
            <p className="lead mb-4">
              Descubrí la nueva generación de computadoras de alto rendimiento para profesionales y entusiastas.
            </p>
            <Link to="/pcs" className="btn btn-warning btn-lg">
              Ver PCs de Escritorio
            </Link>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={personasImg}
              alt="Personas usando computadoras"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
