import Swal from 'sweetalert2';

export function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value.trim();
    const email = e.target.email.value.trim();
    const mensaje = e.target.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      Swal.fire({
        icon: 'error',
        title: 'Formulario incompleto',
        text: 'Por favor completá todos los campos antes de enviar.',
        confirmButtonColor: '#d33'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      text: 'Gracias por contactarte. Te responderemos a la brevedad.',
      confirmButtonColor: '#198754'
    });

    e.target.reset(); // limpia el formulario
  };

  return (
    <section className="container my-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="nombre@correo.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea className="form-control" id="mensaje" name="mensaje" rows="4" placeholder="Escribí tu consulta..." />
        </div>
        <button type="submit" className="btn btn-dark w-100">Enviar mensaje</button>
      </form>
    </section>
  );
}
