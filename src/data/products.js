import pcGamer from "../assets/pc-gamer.png";
import notebook from "../assets/notebook.png";
import monitor from "../assets/monitor.png";

const PRODUCTS = [
  { 
    id: 1,
    nombre: "PC Gamer Ryzen 5",
    precio: 580000,
    categoria: "pcs",
    descripcion: "Configuración equilibrada con procesador AMD Ryzen 5, pensada para juegos en 1080p con excelente rendimiento gráfico y multitarea fluida.",
    img: pcGamer,
    caracteristicas: {
      accesorios: "Teclado y Mouse incluidos",
      almacenamiento: "240GB SSD SATA",
      conectividad: "Ethernet: Sí | Wi-Fi: Sí | Bluetooth: No | HDMI: Sí",
      fuente: "500W Genérica",
      ram: "8GB DDR4 (1x8GB) - Expandible hasta 64GB",
      motherboard: "A520M-K CSM",
      procesador: "AMD 3000G | 2 Núcleos / 4 Hilos | 3.5GHz | 4MB SmartCache",
      puertos: "USB 2.0, HDMI, Audio/Mic 3.5mm",
      sistema: "No incluido | Compatible Windows 11",
      uso: "Hogar, oficina y gaming básico"
    }
  },
  { 
    id: 2,
    nombre: "PC Office i5",
    precio: 430000,
    categoria: "pcs",
    descripcion: "Equipo de escritorio con procesador Intel i5, diseñado para tareas de oficina, navegación web, videollamadas y entretenimiento multimedia.",
    img: pcGamer,
    caracteristicas: {
      accesorios: "No incluye periféricos",
      almacenamiento: "1TB HDD SATA",
      conectividad: "Ethernet: Sí | Wi-Fi: Sí | Bluetooth: Sí | HDMI: Sí",
      fuente: "450W Genérica",
      ram: "8GB DDR4 - Expandible hasta 32GB",
      motherboard: "H510M-E",
      procesador: "Intel Core i5 10400 | 6 Núcleos / 12 Hilos | 2.9GHz hasta 4.3GHz",
      puertos: "USB 3.0, HDMI, VGA, Audio/Mic 3.5mm",
      sistema: "Windows 11 Pro (licencia de prueba)",
      uso: "Ofimática, navegación y videollamadas"
    }
  },
  { 
    id: 3,
    nombre: "PC Gamer Ryzen 7",
    precio: 690000,
    categoria: "pcs",
    descripcion: "Potente PC equipada con procesador AMD Ryzen 7, ideal para gaming en 1440p y multitarea exigente.",
    img: pcGamer,
    caracteristicas: {
      accesorios: "Incluye teclado gamer RGB",
      almacenamiento: "480GB SSD NVMe",
      conectividad: "Ethernet: Sí | Wi-Fi: Sí | Bluetooth: Sí | HDMI: Sí",
      fuente: "650W Certificada 80+ Bronze",
      ram: "16GB DDR4 (2x8GB) - Expandible hasta 64GB",
      motherboard: "B450M DS3H",
      procesador: "AMD Ryzen 7 3700X | 8 Núcleos / 16 Hilos | 3.6GHz hasta 4.4GHz",
      puertos: "USB 3.1, HDMI, DisplayPort, Audio/Mic",
      sistema: "Windows 11 listo para instalar",
      uso: "Gaming en 1440p, streaming y edición de video"
    }
  },
  { 
    id: 4,
    nombre: "PC Office i3",
    precio: 350000,
    categoria: "pcs",
    descripcion: "Compacta y accesible, equipada con procesador Intel i3. Perfecta para estudiantes y tareas básicas del hogar.",
    img: pcGamer,
    caracteristicas: {
      accesorios: "No incluye periféricos",
      almacenamiento: "500GB HDD SATA",
      conectividad: "Ethernet: Sí | Wi-Fi: No | HDMI: Sí",
      fuente: "400W Genérica",
      ram: "4GB DDR4 - Expandible hasta 16GB",
      motherboard: "H310M-K",
      procesador: "Intel Core i3 9100F | 4 Núcleos | 3.6GHz",
      puertos: "USB 2.0, HDMI, VGA",
      sistema: "No incluido",
      uso: "Estudio, ofimática y navegación básica"
    }
  },
  { 
    id: 5,
    nombre: "PC Gamer Intel i5",
    precio: 550000,
    categoria: "pcs",
    descripcion: "Equipada con procesador Intel i5 y gráfica dedicada, diseñada para eSports y juegos competitivos.",
    img: pcGamer,
    caracteristicas: {
      accesorios: "Incluye teclado y mouse gamer",
      almacenamiento: "480GB SSD NVMe",
      conectividad: "Ethernet: Sí | Wi-Fi: Sí | HDMI: Sí",
      fuente: "600W Certificada",
      ram: "16GB DDR4 (2x8GB)",
      motherboard: "B560M-A",
      procesador: "Intel Core i5 11400F | 6 Núcleos / 12 Hilos | 2.6GHz hasta 4.4GHz",
      puertos: "USB 3.0, HDMI, DisplayPort, Audio",
      sistema: "Windows 10 Home",
      uso: "Gaming competitivo en 1080p"
    }
  },
  { 
    id: 6,
    nombre: "PC Workstation Xeon",
    precio: 1200000,
    categoria: "pcs",
    descripcion: "Estación de trabajo orientada a profesionales de diseño gráfico, CAD y modelado 3D.",
    img: pcGamer,
    caracteristicas: {
      accesorios: "No incluye periféricos",
      almacenamiento: "1TB SSD NVMe + 2TB HDD",
      conectividad: "Ethernet: Sí | Wi-Fi: Sí | HDMI: Sí",
      fuente: "750W Certificada Gold",
      ram: "32GB DDR4 ECC - Expandible hasta 128GB",
      motherboard: "WS C621E Sage",
      procesador: "Intel Xeon W-2295 | 18 Núcleos / 36 Hilos | 3.0GHz",
      puertos: "USB 3.2, HDMI, Thunderbolt, Audio",
      sistema: "Windows 11 Pro",
      uso: "Diseño gráfico, CAD, modelado y edición 3D profesional"
    }
  },

  { 
    id: 7,
    nombre: "Notebook Dell i7",
    precio: 720000,
    categoria: "notebooks",
    descripcion: "Notebook con procesador Intel i7, ideal para estudiantes y profesionales.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "512GB SSD NVMe",
      conectividad: "Wi-Fi: Sí | Bluetooth: Sí | HDMI: Sí",
      ram: "16GB DDR4",
      pantalla: "15.6'' Full HD IPS",
      procesador: "Intel Core i7 1165G7 | 4 Núcleos / 8 Hilos",
      puertos: "USB-C, USB 3.1, HDMI, Audio",
      sistema: "Windows 11 Home",
      uso: "Trabajo, estudio y multitarea avanzada"
    }
  },
  { 
    id: 8,
    nombre: "Notebook Lenovo Ryzen 7",
    precio: 810000,
    categoria: "notebooks",
    descripcion: "Portátil de alto rendimiento con procesador AMD Ryzen 7, ideal para multitarea avanzada.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "512GB SSD NVMe",
      conectividad: "Wi-Fi: Sí | Bluetooth: Sí | HDMI: Sí",
      ram: "16GB DDR4",
      pantalla: "15.6'' Full HD IPS",
      procesador: "AMD Ryzen 7 4800H | 8 Núcleos / 16 Hilos",
      puertos: "USB-C, USB 3.1, HDMI, Audio",
      sistema: "Windows 11 Home",
      uso: "Programación, edición de video y diseño"
    }
  },
  { 
    id: 9,
    nombre: "Notebook HP i5",
    precio: 650000,
    categoria: "notebooks",
    descripcion: "Laptop versátil con procesador Intel i5, pensada para usuarios que buscan equilibrio entre autonomía, portabilidad y potencia.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "256GB SSD NVMe",
      conectividad: "Wi-Fi: Sí | Bluetooth: Sí | HDMI: Sí",
      ram: "8GB DDR4",
      pantalla: "14'' Full HD",
      procesador: "Intel Core i5 1135G7 | 4 Núcleos / 8 Hilos",
      puertos: "USB 3.0, USB-C, HDMI, Audio",
      sistema: "Windows 10 Home",
      uso: "Oficina, estudio y entretenimiento"
    }
  },
  { 
    id: 10,
    nombre: "Notebook Asus Gamer",
    precio: 950000,
    categoria: "notebooks",
    descripcion: "Notebook gamer con pantalla de 144Hz y tarjeta gráfica dedicada.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "512GB SSD NVMe",
      conectividad: "Wi-Fi: Sí | Bluetooth: Sí | HDMI: Sí",
      ram: "16GB DDR4",
      pantalla: "15.6'' Full HD 144Hz",
      procesador: "Intel Core i7 10750H | 6 Núcleos / 12 Hilos",
      grafica: "NVIDIA GTX 1660Ti 6GB",
      puertos: "USB 3.0, USB-C, HDMI, Audio",
      sistema: "Windows 11 Home",
      uso: "Gaming exigente en 1080p"
    }
  },
  { 
    id: 11,
    nombre: "Notebook Acer Aspire 3",
    precio: 480000,
    categoria: "notebooks",
    descripcion: "Ligera, confiable y con excelente autonomía.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "256GB SSD",
      conectividad: "Wi-Fi: Sí | Bluetooth: Sí | HDMI: Sí",
      ram: "8GB DDR4",
      pantalla: "15.6'' HD",
      procesador: "Intel Core i3 1115G4 | 2 Núcleos / 4 Hilos",
      puertos: "USB 3.0, HDMI, Audio",
      sistema: "Windows 10 Home",
      uso: "Clases online, tareas de oficina y uso cotidiano"
    }
  },
  { 
    id: 12,
    nombre: "Notebook MacBook Air M1",
    precio: 1050000,
    categoria: "notebooks",
    descripcion: "Diseño premium de Apple con chip M1.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "256GB SSD",
      conectividad: "Wi-Fi 6 | Bluetooth 5.0",
      ram: "8GB Unified Memory",
      pantalla: "13.3'' Retina",
      procesador: "Apple M1 | 8 Núcleos",
      puertos: "2x Thunderbolt / USB 4",
      sistema: "macOS",
      uso: "Diseño, edición de video y productividad avanzada"
    }
  },

  { 
    id: 13,
    nombre: "Monitor 27'' LG IPS",
    precio: 250000,
    categoria: "monitores",
    descripcion: "Monitor de 27 pulgadas con panel IPS Full HD y 75Hz.",
    img: monitor,
    caracteristicas: {
      resolucion: "1920x1080 Full HD",
      panel: "IPS",
      refresco: "75Hz",
      conectividad: "HDMI, VGA",
      uso: "Trabajo de oficina y edición ligera"
    }
  },
  { 
    id: 14,
    nombre: "Monitor 24'' Samsung",
    precio: 190000,
    categoria: "monitores",
    descripcion: "Pantalla compacta y nítida de 24 pulgadas, ideal para oficina y hogar.",
    img: monitor,
    caracteristicas: {
      resolucion: "1920x1080 Full HD",
      panel: "VA",
      refresco: "60Hz",
      conectividad: "HDMI, VGA",
      uso: "Ofimática y entretenimiento básico"
    }
  },
  { 
    id: 15,
    nombre: "Monitor 32'' Curvo Samsung",
    precio: 320000,
    categoria: "monitores",
    descripcion: "Pantalla curva de 32 pulgadas que brinda inmersión total en películas y videojuegos.",
    img: monitor,
    caracteristicas: {
      resolucion: "1920x1080 Full HD",
      panel: "VA Curvo",
      refresco: "75Hz",
      conectividad: "HDMI, DisplayPort",
      uso: "Gaming y multimedia inmersivo"
    }
  },
  { 
    id: 16,
    nombre: "Monitor 29'' Ultrawide LG",
    precio: 400000,
    categoria: "monitores",
    descripcion: "Monitor ultrawide de 29 pulgadas, diseñado para aumentar la productividad.",
    img: monitor,
    caracteristicas: {
      resolucion: "2560x1080 Ultrawide",
      panel: "IPS",
      refresco: "75Hz",
      conectividad: "HDMI, DisplayPort",
      uso: "Multitarea, edición y productividad"
    }
  },
  { 
    id: 17,
    nombre: "Monitor 24'' AOC Gamer",
    precio: 210000,
    categoria: "monitores",
    descripcion: "Monitor gamer con frecuencia de 144Hz y tiempo de respuesta de 1ms.",
    img: monitor,
    caracteristicas: {
      resolucion: "1920x1080 Full HD",
      panel: "TN",
      refresco: "144Hz",
      conectividad: "HDMI, DisplayPort",
      uso: "eSports y gaming competitivo"
    }
  },
  { 
    id: 18,
    nombre: "Monitor 34'' Ultrawide",
    precio: 520000,
    categoria: "monitores",
    descripcion: "Impresionante monitor ultrawide de 34 pulgadas, ideal para edición de video y productividad.",
    img: monitor,
    caracteristicas: {
      resolucion: "3440x1440 UltraWide QHD",
      panel: "IPS",
      refresco: "75Hz",
      conectividad: "HDMI, DisplayPort",
      uso: "Edición de video, diseño y multitarea avanzada"
    }
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
