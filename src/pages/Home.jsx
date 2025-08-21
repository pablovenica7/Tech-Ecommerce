import "./Home.css";
import personas from "../assets/img-home.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="hero-section fade-in">
      <div className="hero-text">
        <h1>
          Tecnología que te <span className="highlight">potencia</span>
        </h1>
        <h2>
          Soluciones modernas y eficientes para llevar tu rendimiento al siguiente nivel.
        </h2>
        <Link to="/pcs">
          <button className="btn-cta">Ver PCs de escritorio</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src={personas} alt="Personas usando computadoras" className="hero-img" />
      </div>
    </main>
  );
}
