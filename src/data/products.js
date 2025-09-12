import pcGamer from "../assets/pc-gamer.png";
import notebook from "../assets/notebook.png";
import monitor from "../assets/monitor.png";

const PRODUCTS = [
  { 
    id: 1,
    nombre: "PC Gamer Ryzen 5",
    precio: 580000,
    categoria: "pcs",
    descripcion: "Configuración equilibrada con procesador AMD Ryzen 5, pensada para juegos en 1080p con excelente rendimiento gráfico y multitarea fluida. Ideal para quienes buscan una PC confiable y con gran relación precio/calidad.",
    img: pcGamer
  },
  { 
    id: 2,
    nombre: "PC Office i5",
    precio: 430000,
    categoria: "pcs",
    descripcion: "Equipo de escritorio con procesador Intel i5, diseñado para tareas de oficina, navegación web, videollamadas y entretenimiento multimedia. Silenciosa y eficiente, perfecta para el día a día.",
    img: pcGamer
  },
  { 
    id: 3,
    nombre: "PC Gamer Ryzen 7",
    precio: 690000,
    categoria: "pcs",
    descripcion: "Potente PC equipada con procesador AMD Ryzen 7, ideal para gaming en 1440p y multitarea exigente. Ofrece fluidez en títulos modernos, streaming y creación de contenido sin compromisos.",
    img: pcGamer
  },
  { 
    id: 4,
    nombre: "PC Office i3",
    precio: 350000,
    categoria: "pcs",
    descripcion: "Compacta y accesible, equipada con procesador Intel i3. Perfecta para estudiantes y usuarios que buscan un equipo económico para ofimática, clases online y tareas básicas del hogar.",
    img: pcGamer
  },
  { 
    id: 5,
    nombre: "PC Gamer Intel i5",
    precio: 550000,
    categoria: "pcs",
    descripcion: "Equipada con procesador Intel i5 y gráfica dedicada, diseñada para eSports y juegos competitivos. Ofrece altos FPS y estabilidad en títulos populares como CS2, Valorant y Fortnite.",
    img: pcGamer
  },
  { 
    id: 6,
    nombre: "PC Workstation Xeon",
    precio: 1200000,
    categoria: "pcs",
    descripcion: "Estación de trabajo con procesador Intel Xeon, orientada a profesionales de diseño gráfico, edición de video, CAD y modelado 3D. Máxima potencia y confiabilidad para proyectos de alto nivel.",
    img: pcGamer
  },

  { 
    id: 7,
    nombre: "Notebook Dell i7",
    precio: 720000,
    categoria: "notebooks",
    descripcion: "Notebook con procesador Intel i7 de última generación, ideal para estudiantes y profesionales que requieren portabilidad con gran potencia de procesamiento y diseño elegante.",
    img: notebook
  },
  { 
    id: 8,
    nombre: "Notebook Lenovo Ryzen 7",
    precio: 810000,
    categoria: "notebooks",
    descripcion: "Portátil de alto rendimiento con procesador AMD Ryzen 7, ideal para multitarea avanzada, programación, edición de video y uso intensivo en movilidad.",
    img: notebook
  },
  { 
    id: 9,
    nombre: "Notebook HP i5",
    precio: 650000,
    categoria: "notebooks",
    descripcion: "Laptop versátil con procesador Intel i5, pensada para usuarios que buscan equilibrio entre autonomía, portabilidad y potencia. Perfecta para oficina, estudio y entretenimiento.",
    img: notebook
  },
  { 
    id: 10,
    nombre: "Notebook Asus Gamer",
    precio: 950000,
    categoria: "notebooks",
    descripcion: "Notebook gamer con pantalla de 144Hz y tarjeta gráfica dedicada. Diseñada para juegos exigentes y experiencia inmersiva en movilidad sin perder fluidez.",
    img: notebook
  },
  { 
    id: 11,
    nombre: "Notebook Acer Aspire 3",
    precio: 480000,
    categoria: "notebooks",
    descripcion: "Ligera, confiable y con excelente autonomía. Perfecta para clases online, tareas de oficina y uso cotidiano. Su diseño compacto la hace fácil de transportar.",
    img: notebook
  },
  { 
    id: 12,
    nombre: "Notebook MacBook Air M1",
    precio: 1050000,
    categoria: "notebooks",
    descripcion: "Diseño premium de Apple con chip M1, reconocido por su eficiencia energética y potencia. Ideal para edición de video, diseño gráfico y trabajo creativo en un formato ultraligero.",
    img: notebook
  },

  { 
    id: 13,
    nombre: "Monitor 27'' LG IPS",
    precio: 250000,
    categoria: "monitores",
    descripcion: "Monitor de 27 pulgadas con panel IPS Full HD y 75Hz. Ofrece colores precisos y gran ángulo de visión, perfecto para trabajo de oficina, edición ligera y entretenimiento.",
    img: monitor
  },
  { 
    id: 14,
    nombre: "Monitor 24'' Samsung",
    precio: 190000,
    categoria: "monitores",
    descripcion: "Pantalla compacta y nítida de 24 pulgadas, ideal para espacios reducidos. Excelente opción para oficina y uso doméstico con eficiencia energética y diseño minimalista.",
    img: monitor
  },
  { 
    id: 15,
    nombre: "Monitor 32'' Curvo Samsung",
    precio: 320000,
    categoria: "monitores",
    descripcion: "Pantalla curva de 32 pulgadas que brinda inmersión total en películas y videojuegos. Diseño moderno con colores vibrantes y comodidad para sesiones largas.",
    img: monitor
  },
  { 
    id: 16,
    nombre: "Monitor 29'' Ultrawide LG",
    precio: 400000,
    categoria: "monitores",
    descripcion: "Monitor ultrawide de 29 pulgadas, diseñado para aumentar la productividad. Ideal para multitarea, edición y disfrutar de una experiencia panorámica en videojuegos.",
    img: monitor
  },
  { 
    id: 17,
    nombre: "Monitor 24'' AOC Gamer",
    precio: 210000,
    categoria: "monitores",
    descripcion: "Monitor gamer con frecuencia de 144Hz y tiempo de respuesta de 1ms. Perfecto para eSports competitivos, garantizando fluidez y precisión en cada partida.",
    img: monitor
  },
  { 
    id: 18,
    nombre: "Monitor 34'' Ultrawide",
    precio: 520000,
    categoria: "monitores",
    descripcion: "Impresionante monitor ultrawide de 34 pulgadas, ideal para edición de video, diseño profesional y multitarea. Su resolución panorámica ofrece máxima productividad y experiencia envolvente.",
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
