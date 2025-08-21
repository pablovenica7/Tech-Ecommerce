import "./Contacto.css";
import Swal from "sweetalert2";

export function Contacto() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const nombre  = form.nombre?.value.trim()  || "";
    const email   = form.email?.value.trim()   || "";
    const mensaje = form.mensaje?.value.trim() || "";

    if (!nombre || !email || !mensaje) {
      Swal.fire({
        icon: "error",
        title: "Faltan campos por completar",
        text: "Por favor llená todos los campos antes de enviar.",
        confirmButtonText: "Entendido",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "¡Mensaje enviado!",
      text: "Te responderemos a la brevedad.",
      confirmButtonText: "Listo",
    });

    form.reset();
  };

  return (
    <main className="contacto-wrapper">
      <section className="container contacto-split">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-line">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="form-line">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Tu email"
                />
              </div>
              <div className="form-line">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Contanos tu consulta"
                />
              </div>
              <button type="submit" className="btn-cta-large">ENVIAR MENSAJE</button>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <div className="contact-side">
              <h2 className="contact-side__title">
                <span>Contacta</span>
                <span className="divider"></span>
                <span>nos</span>
              </h2>
              <p className="contact-side__text">
                Es muy importante para nosotros mantenernos en contacto contigo.
                Estamos listos para responder cualquier consulta que tengas. ¡Escribinos!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
