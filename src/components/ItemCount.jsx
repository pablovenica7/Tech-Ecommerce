import { useState } from "react";

export function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);
  const inc = () => setCount(c => (c < stock ? c + 1 : c));
  const dec = () => setCount(c => (c > 1 ? c - 1 : c));

  return (
    <div>
      <div className="d-flex align-items-center gap-3 mb-3">
        <button className="btn btn-outline-dark" onClick={dec} aria-label="Restar">-</button>
        <span className="fs-5">{count}</span>
        <button className="btn btn-outline-dark" onClick={inc} aria-label="Sumar">+</button>
      </div>
      <button className="btn btn-dark" onClick={() => onAdd?.(count)} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
}
