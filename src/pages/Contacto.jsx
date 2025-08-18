export function Contacto() {
  return (
    <section className="container my-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Contacto</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="nombre@correo.com" required />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea className="form-control" id="mensaje" rows="4" placeholder="Escribí tu consulta..." required></textarea>
        </div>
        <button type="submit" className="btn btn-dark w-100">Enviar mensaje</button>
      </form>
    </section>
  );
}
