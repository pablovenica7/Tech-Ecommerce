import { useRef } from "react";
import "./Contacto.css";

export function Contacto() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert("¡Mensaje enviado! Te responderemos a la brevedad.");
    form.reset();
  };

  return (
    <main className="contacto-wrapper">
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <article className="contact-card shadow-lg">
              <header className="mb-4 text-center">
                <h1 className="contact-title">Contacto</h1>
                <p className="contact-subtitle">
                  Contanos qué necesitás y te respondemos en el día hábil.
                </p>
              </header>

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre y apellido"
                        required
                        minLength={3}
                      />
                      <label htmlFor="nombre">Nombre y apellido*</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="name@correo.com"
                        required
                      />
                      <label htmlFor="email">Email*</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        id="telefono"
                        name="telefono"
                        placeholder="+54 351 000 0000"
                        pattern="^[0-9+\s()-]{6,}$"
                      />
                      <label htmlFor="telefono">Teléfono (opcional)</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="asunto"
                        name="asunto"
                        placeholder="Tema del mensaje"
                        required
                        minLength={3}
                      />
                      <label htmlFor="asunto">Asunto*</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control h-120"
                        id="mensaje"
                        name="mensaje"
                        placeholder="Tu mensaje"
                        required
                        minLength={10}
                      />
                      <label htmlFor="mensaje">Mensaje*</label>
                    </div>
                  </div>

                  <div className="col-12 d-flex align-items-center justify-content-between mt-2">
                    <small className="text-muted">*Campos obligatorios</small>
                    <button type="submit" className="btn btn-dark btn-lg rounded-4 px-4">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>

              <footer className="contact-meta mt-4">
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="meta-item">
                      <span className="meta-label">Email</span>
                      <span className="meta-value">contacto@veyor.com</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="meta-item">
                      <span className="meta-label">Teléfono</span>
                      <span className="meta-value">+54 351 123 4567</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="meta-item">
                      <span className="meta-label">Horario</span>
                      <span className="meta-value">Lun a Vie · 9 a 18 hs</span>
                    </div>
                  </div>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
