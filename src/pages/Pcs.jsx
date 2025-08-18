export function Pcs() {
  const pcs = [
    {
      id: 1,
      nombre: "PC Gamer Ryzen 5",
      procesador: "Ryzen 5 5600X",
      ram: "16GB DDR4",
      gpu: "NVIDIA RTX 3060",
      almacenamiento: "1TB SSD",
    },
    {
      id: 2,
      nombre: "PC Oficina Intel i5",
      procesador: "Intel Core i5 12400",
      ram: "8GB DDR4",
      gpu: "Intel UHD Graphics",
      almacenamiento: "512GB SSD",
    },
    {
      id: 3,
      nombre: "PC Creativa Ryzen 7",
      procesador: "Ryzen 7 5800X",
      ram: "32GB DDR4",
      gpu: "NVIDIA RTX 3070",
      almacenamiento: "2TB HDD + 1TB SSD",
    },
    {
      id: 4,
      nombre: "PC Compacta Intel i3",
      procesador: "Intel Core i3 10100",
      ram: "8GB DDR4",
      gpu: "Intel UHD Graphics",
      almacenamiento: "256GB SSD",
    },
    {
      id: 5,
      nombre: "PC Profesional AMD",
      procesador: "Ryzen 9 5900X",
      ram: "32GB DDR4",
      gpu: "NVIDIA RTX 3080",
      almacenamiento: "2TB SSD",
    },
    {
      id: 6,
      nombre: "PC Económica",
      procesador: "AMD Athlon 3000G",
      ram: "4GB DDR4",
      gpu: "Integrada Radeon Vega 3",
      almacenamiento: "500GB HDD",
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="mb-4">Nuestras PCs de Escritorio</h2>
      <div className="row">
        {pcs.map((pc) => (
          <div className="col-md-4 mb-4" key={pc.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{pc.nombre}</h5>
                <ul className="list-unstyled text-muted">
                  <li><strong>Procesador:</strong> {pc.procesador}</li>
                  <li><strong>RAM:</strong> {pc.ram}</li>
                  <li><strong>GPU:</strong> {pc.gpu}</li>
                  <li><strong>Almacenamiento:</strong> {pc.almacenamiento}</li>
                </ul>
                <button className="btn btn-outline-dark mt-3 w-100">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
