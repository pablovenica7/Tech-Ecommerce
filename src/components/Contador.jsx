import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container text-center my-5">
      <h4>Contador de Ejemplo</h4>
      <p className="fs-3">{contador}</p>
      <button className="btn btn-primary me-2" onClick={incrementar}>
        +
      </button>
      <button className="btn btn-danger" onClick={decrementar}>
        -
      </button>
    </div>
  );
}
