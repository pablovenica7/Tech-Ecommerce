import "./Home.css";
import personasImg from "../assets/img-home.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Tecnología que te <span style={{ color: "#fff" }}>potencia</span>
        </h1>
        <h2>
          Soluciones modernas y eficientes para llevar tu rendimiento al siguiente nivel.
        </h2>
        <Link to="/pcs">
          <button className="btn btn-home">Ver PCs de escritorio</button>
        </Link>
      </div>
      <img className="hero-img" src={personasImg} alt="Personas usando computadoras" />
    </section>
  );
}
