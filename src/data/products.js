import pcGamer from "../assets/pc-gamer.png";
import notebook from "../assets/notebook.png";
import monitor from "../assets/monitor.png";

const PRODUCTS = [
  { 
    id: 1,
    nombre: "PC Gamer Ryzen 5",
    precio: 580000,
    categoria: "pcs",
    descripcion: "Equilibrada para juegos en 1080p con buena relación calidad/precio.",
    img: pcGamer
  },
  { 
    id: 2,
    nombre: "PC Office i5",
    precio: 430000,
    categoria: "pcs",
    descripcion: "Ideal para ofimática, multimedia y tareas cotidianas.",
    img: pcGamer
  },
  { 
    id: 3,
    nombre: "PC Gamer Ryzen 7",
    precio: 690000,
    categoria: "pcs",
    descripcion: "Potencia extra para jugar en 1440p y multitarea exigente.",
    img: pcGamer
  },
  { 
    id: 4,
    nombre: "PC Office i3",
    precio: 350000,
    categoria: "pcs",
    descripcion: "Compacta y económica, perfecta para estudiantes.",
    img: pcGamer
  },
  { 
    id: 5,
    nombre: "PC Gamer Intel i5",
    precio: 550000,
    categoria: "pcs",
    descripcion: "Óptima para eSports con gráficos competitivos.",
    img: pcGamer
  },
  { 
    id: 6,
    nombre: "PC Workstation Xeon",
    precio: 1200000,
    categoria: "pcs",
    descripcion: "Rendimiento profesional para diseño gráfico y CAD.",
    img: pcGamer
  },

  { 
    id: 7,
    nombre: "Notebook Dell i7",
    precio: 720000,
    categoria: "notebooks",
    descripcion: "Potente y versátil para trabajo y estudio avanzado.",
    img: notebook
  },
  { 
    id: 8,
    nombre: "Notebook Lenovo Ryzen 7",
    precio: 810000,
    categoria: "notebooks",
    descripcion: "Rendimiento portátil de alta gama para multitarea.",
    img: notebook
  },
  { 
    id: 9,
    nombre: "Notebook HP i5",
    precio: 650000,
    categoria: "notebooks",
    descripcion: "Equilibrio entre movilidad, autonomía y potencia.",
    img: notebook
  },
  { 
    id: 10,
    nombre: "Notebook Asus Gamer",
    precio: 950000,
    categoria: "notebooks",
    descripcion: "Pantalla 144Hz y GPU dedicada para gaming.",
    img: notebook
  },
  { 
    id: 11,
    nombre: "Notebook Acer Aspire 3",
    precio: 480000,
    categoria: "notebooks",
    descripcion: "Ligera y práctica para uso diario y clases online.",
    img: notebook
  },
  { 
    id: 12,
    nombre: "Notebook MacBook Air M1",
    precio: 1050000,
    categoria: "notebooks",
    descripcion: "Eficiencia energética y diseño premium de Apple.",
    img: notebook
  },

  { 
    id: 13,
    nombre: "Monitor 27'' LG IPS",
    precio: 250000,
    categoria: "monitores",
    descripcion: "Panel IPS Full HD con 75Hz para trabajo y ocio.",
    img: monitor
  },
  { 
    id: 14,
    nombre: "Monitor 24'' Samsung",
    precio: 190000,
    categoria: "monitores",
    descripcion: "Compacto y nítido, ideal para oficina y hogar.",
    img: monitor
  },
  { 
    id: 15,
    nombre: "Monitor 32'' Curvo Samsung",
    precio: 320000,
    categoria: "monitores",
    descripcion: "Inmersión total para películas y gaming.",
    img: monitor
  },
  { 
    id: 16,
    nombre: "Monitor 29'' Ultrawide LG",
    precio: 400000,
    categoria: "monitores",
    descripcion: "Más espacio de trabajo para multitarea y edición.",
    img: monitor
  },
  { 
    id: 17,
    nombre: "Monitor 24'' AOC Gamer",
    precio: 210000,
    categoria: "monitores",
    descripcion: "144Hz y 1ms para eSports competitivos.",
    img: monitor
  },
  { 
    id: 18,
    nombre: "Monitor 34'' Ultrawide",
    precio: 520000,
    categoria: "monitores",
    descripcion: "Ideal para edición de video y productividad.",
    img: monitor
  },
];

export function fetchProducts(delayMs = 1000) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(PRODUCTS), delayMs)
  );
}

export function fetchProductById(id, delayMs = 800) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = PRODUCTS.find((p) => p.id === Number(id));
      found ? resolve(found) : reject(new Error("Producto no encontrado"));
    }, delayMs);
  });
}
