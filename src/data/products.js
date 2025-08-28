const PRODUCTS = [
  { 
    id: 1, 
    nombre: "PC Gamer Ryzen 5", 
    precio: 580000, 
    categoria: "pcs", 
    descripcion: "PC gamer equilibrada para 1080p.", 
    img: "/assets/imagenes/pc-gamer.png" 
  },
  { 
    id: 2, 
    nombre: "Notebook Dell i7", 
    precio: 720000, 
    categoria: "notebooks", 
    descripcion: "Notebook potente para trabajo y estudio.", 
    img: "/assets/imagenes/notebook.png" 
  },
  { 
    id: 3, 
    nombre: "Monitor 27'' LG", 
    precio: 250000, 
    categoria: "monitores", 
    descripcion: "Panel IPS Full HD con 75Hz.", 
    img: "/assets/imagenes/monitor.png" 
  },
  { 
    id: 4, 
    nombre: "PC Office i5", 
    precio: 430000, 
    categoria: "pcs", 
    descripcion: "Ideal para ofimática y multimedia.", 
    img: "/assets/imagenes/pc-gamer.png" 
  },
  { 
    id: 5, 
    nombre: "Notebook Lenovo Ryzen 7", 
    precio: 810000, 
    categoria: "notebooks", 
    descripcion: "Rendimiento portátil de alta gama.", 
    img: "/assets/imagenes/notebook.png" 
  },
  { 
    id: 6, 
    nombre: "Monitor 24'' Samsung", 
    precio: 190000, 
    categoria: "monitores", 
    descripcion: "Compacto y nítido para oficina.", 
    img: "/assets/imagenes/monitor.png" 
  },
];

export function fetchProducts(delayMs = 1000) {
  return new Promise((resolve) => setTimeout(() => resolve(PRODUCTS), delayMs));
}

export function fetchProductById(id, delayMs = 800) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = PRODUCTS.find(p => p.id === Number(id));
      found ? resolve(found) : reject(new Error("Producto no encontrado"));
    }, delayMs);
  });
}
