export function Home() {
  return (
    <section className="container my-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
      <div className="text-center text-md-start mb-4 mb-md-0">
        <h1 className="display-4 fw-bold">Tecnología que te potencia</h1>
        <p className="lead text-muted">Tu próximo equipo está a un clic de distancia.</p>
        <a href="/pcs" className="btn btn-dark mt-3 px-4 py-2">Ver PCs</a>
      </div>
      <div className="text-center">
        <img
          src="https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377_960_720.jpg"
          alt="PC de escritorio"
          className="img-fluid rounded shadow"
          style={{ maxWidth: '450px' }}
        />
      </div>
    </section>
  );
}
