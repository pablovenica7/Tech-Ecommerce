export function Home() {
  return (
    <section
      className="d-flex flex-column flex-md-row align-items-center justify-content-between"
      style={{
        background: "linear-gradient(to right, #ff9a43, #ff6f00)",
        minHeight: "100vh",
        padding: "3rem",
        color: "#fff",
      }}
    >
      <div className="text-center text-md-start mb-5 mb-md-0">
        <h1 className="display-4 fw-bold">Tecnología que te potencia</h1>
        <p className="lead">
          Equipos diseñados para maximizar tu rendimiento y creatividad.
        </p>
        <a href="/pcs" className="btn btn-light mt-3 px-4 py-2 fw-semibold">
          Ver productos
        </a>
      </div>

      <div className="text-center">
        <img
          src="/src/assets/img-home.png"
          alt="Personas usando PC"
          className="img-fluid"
          style={{ maxWidth: "480px" }}
        />
      </div>
    </section>
  );
}

