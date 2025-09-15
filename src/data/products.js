import pcGamer from "../assets/pc-gamer.png";
import notebook from "../assets/notebook.png";
import monitor from "../assets/monitor.png";

export const PRODUCTS = [
  { 
    id: 1, nombre: "PC Gamer Ryzen 5", precio: 580000, categoria: "pcs", stock: 5,
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
    id: 2, nombre: "PC Office i5", precio: 430000, categoria: "pcs", stock: 0,
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
    id: 3, nombre: "PC Gamer Ryzen 7", precio: 690000, categoria: "pcs", stock: 7,
    descripcion: "Potente PC con AMD Ryzen 7, ideal para gaming en 1440p y multitarea exigente.",
    img: pcGamer,
    caracteristicas: {
      accesorios: "Incluye teclado gamer RGB",
      almacenamiento: "480GB SSD NVMe",
      conectividad: "Ethernet: Sí | Wi-Fi: Sí | Bluetooth: Sí | HDMI: Sí",
      fuente: "650W 80+ Bronze",
      ram: "16GB DDR4 (2x8GB) - Expandible 64GB",
      motherboard: "B450M DS3H",
      procesador: "Ryzen 7 3700X | 8C/16T | 3.6-4.4GHz",
      puertos: "USB 3.1, HDMI, DP, Audio/Mic",
      sistema: "Windows 11 listo para instalar",
      uso: "Gaming 1440p, streaming, edición"
    }
  },
  { 
    id: 4, nombre: "PC Office i3", precio: 350000, categoria: "pcs", stock: 8,
    descripcion: "Compacta y accesible con Intel i3. Perfecta para estudiantes y tareas del hogar.",
    img: pcGamer,
    caracteristicas: {
      accesorios: "No incluye periféricos",
      almacenamiento: "500GB HDD SATA",
      conectividad: "Ethernet: Sí | Wi-Fi: No | HDMI: Sí",
      fuente: "400W Genérica",
      ram: "4GB DDR4 - Expandible 16GB",
      motherboard: "H310M-K",
      procesador: "Intel i3 9100F | 4C | 3.6GHz",
      puertos: "USB 2.0, HDMI, VGA",
      sistema: "No incluido",
      uso: "Estudio, ofimática, navegación"
    }
  },
  { 
    id: 5, nombre: "PC Gamer Intel i5", precio: 550000, categoria: "pcs", stock: 6,
    descripcion: "Intel i5 con gráfica dedicada para eSports y juegos competitivos en 1080p.",
    img: pcGamer,
    caracteristicas: {
      accesorios: "Teclado y mouse gamer",
      almacenamiento: "480GB SSD NVMe",
      conectividad: "Ethernet: Sí | Wi-Fi: Sí | HDMI: Sí",
      fuente: "600W Certificada",
      ram: "16GB DDR4 (2x8GB)",
      motherboard: "B560M-A",
      procesador: "Intel i5 11400F | 6C/12T | 2.6-4.4GHz",
      puertos: "USB 3.0, HDMI, DP",
      sistema: "Windows 10 Home",
      uso: "Gaming competitivo 1080p"
    }
  },
  { 
    id: 6, nombre: "PC Workstation Xeon", precio: 1200000, categoria: "pcs", stock: 2,
    descripcion: "Estación profesional para diseño, CAD y modelado 3D con Xeon.",
    img: pcGamer,
    caracteristicas: {
      accesorios: "No incluye periféricos",
      almacenamiento: "1TB NVMe + 2TB HDD",
      conectividad: "Ethernet: Sí | Wi-Fi: Sí | HDMI: Sí",
      fuente: "750W Gold",
      ram: "32GB DDR4 ECC - Expandible 128GB",
      motherboard: "WS C621E Sage",
      procesador: "Xeon W-2295 | 18C/36T | 3.0GHz",
      puertos: "USB 3.2, HDMI, Thunderbolt",
      sistema: "Windows 11 Pro",
      uso: "Diseño, CAD, 3D profesional"
    }
  },

  { 
    id: 7, nombre: "Notebook Dell i7", precio: 720000, categoria: "notebooks", stock: 9,
    descripcion: "Notebook Intel i7, potente y portátil para trabajo y estudio.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "512GB NVMe",
      conectividad: "Wi-Fi | BT | HDMI",
      ram: "16GB DDR4",
      pantalla: "15.6'' Full HD IPS",
      procesador: "i7 1165G7 | 4C/8T",
      puertos: "USB-C, USB 3.1, HDMI, Audio",
      sistema: "Windows 11 Home",
      uso: "Multitarea, oficina, estudio"
    }
  },
  { 
    id: 8, nombre: "Notebook Lenovo Ryzen 7", precio: 810000, categoria: "notebooks", stock: 5,
    descripcion: "Ryzen 7 portátil, ideal para multitarea avanzada y edición.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "512GB NVMe",
      conectividad: "Wi-Fi | BT | HDMI",
      ram: "16GB DDR4",
      pantalla: "15.6'' Full HD IPS",
      procesador: "Ryzen 7 4800H | 8C/16T",
      puertos: "USB-C, USB 3.1, HDMI, Audio",
      sistema: "Windows 11 Home",
      uso: "Programación, edición de video"
    }
  },
  { 
    id: 9, nombre: "Notebook HP i5", precio: 650000, categoria: "notebooks", stock: 10,
    descripcion: "Equilibrio entre autonomía y rendimiento con Intel i5.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "256GB NVMe",
      conectividad: "Wi-Fi | BT | HDMI",
      ram: "8GB DDR4",
      pantalla: "14'' Full HD",
      procesador: "i5 1135G7 | 4C/8T",
      puertos: "USB 3.0, USB-C, HDMI",
      sistema: "Windows 10 Home",
      uso: "Oficina, estudio, entretenimiento"
    }
  },
  { 
    id: 10, nombre: "Notebook Asus Gamer", precio: 950000, categoria: "notebooks", stock: 4,
    descripcion: "Pantalla 144Hz y GPU dedicada. Gaming fluido en movilidad.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "512GB NVMe",
      conectividad: "Wi-Fi | BT | HDMI",
      ram: "16GB DDR4",
      pantalla: "15.6'' Full HD 144Hz",
      procesador: "i7 10750H | 6C/12T",
      grafica: "NVIDIA GTX 1660Ti 6GB",
      puertos: "USB 3.0, USB-C, HDMI",
      sistema: "Windows 11 Home",
      uso: "Gaming 1080p"
    }
  },
  { 
    id: 11, nombre: "Notebook Acer Aspire 3", precio: 480000, categoria: "notebooks", stock: 12,
    descripcion: "Ligera y confiable con excelente autonomía diaria.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "256GB SSD",
      conectividad: "Wi-Fi | BT | HDMI",
      ram: "8GB DDR4",
      pantalla: "15.6'' HD",
      procesador: "i3 1115G4 | 2C/4T",
      puertos: "USB 3.0, HDMI, Audio",
      sistema: "Windows 10 Home",
      uso: "Clases online y oficina"
    }
  },
  { 
    id: 12, nombre: "Notebook MacBook Air M1", precio: 1050000, categoria: "notebooks", stock: 3,
    descripcion: "Chip M1 con gran eficiencia y potencia en formato ultraligero.",
    img: notebook,
    caracteristicas: {
      almacenamiento: "256GB SSD",
      conectividad: "Wi-Fi 6 | BT 5.0",
      ram: "8GB Unified",
      pantalla: "13.3'' Retina",
      procesador: "Apple M1 (8-core)",
      puertos: "2x Thunderbolt / USB 4",
      sistema: "macOS",
      uso: "Diseño, edición, productividad"
    }
  },

  { 
    id: 13, nombre: "Monitor 27'' LG IPS", precio: 250000, categoria: "monitores", stock: 11,
    descripcion: "27'' IPS Full HD 75Hz. Colores precisos y buena visión.",
    img: monitor,
    caracteristicas: {
      resolucion: "1920x1080",
      panel: "IPS",
      refresco: "75Hz",
      conectividad: "HDMI, VGA",
      uso: "Oficina y edición ligera"
    }
  },
  { 
    id: 14, nombre: "Monitor 24'' Samsung", precio: 190000, categoria: "monitores", stock: 15,
    descripcion: "Compacto de 24'' ideal para oficina y hogar.",
    img: monitor,
    caracteristicas: {
      resolucion: "1920x1080",
      panel: "VA",
      refresco: "60Hz",
      conectividad: "HDMI, VGA",
      uso: "Ofimática y entretenimiento"
    }
  },
  { 
    id: 15, nombre: "Monitor 32'' Curvo Samsung", precio: 320000, categoria: "monitores", stock: 6,
    descripcion: "Curvo 32'' para inmersión total en pelis y gaming.",
    img: monitor,
    caracteristicas: {
      resolucion: "1920x1080",
      panel: "VA Curvo",
      refresco: "75Hz",
      conectividad: "HDMI, DP",
      uso: "Gaming y multimedia"
    }
  },
  { 
    id: 16, nombre: "Monitor 29'' Ultrawide LG", precio: 400000, categoria: "monitores", stock: 5,
    descripcion: "Ultrawide 29'' para productividad y multitarea.",
    img: monitor,
    caracteristicas: {
      resolucion: "2560x1080",
      panel: "IPS",
      refresco: "75Hz",
      conectividad: "HDMI, DP",
      uso: "Multitarea y edición"
    }
  },
  { 
    id: 17, nombre: "Monitor 24'' AOC Gamer", precio: 210000, categoria: "monitores", stock: 9,
    descripcion: "144Hz y 1ms: ideal para eSports competitivos.",
    img: monitor,
    caracteristicas: {
      resolucion: "1920x1080",
      panel: "TN",
      refresco: "144Hz",
      conectividad: "HDMI, DP",
      uso: "eSports competitivo"
    }
  },
  { 
    id: 18, nombre: "Monitor 34'' Ultrawide", precio: 520000, categoria: "monitores", stock: 4,
    descripcion: "34'' UltraWide QHD para edición y productividad al máximo.",
    img: monitor,
    caracteristicas: {
      resolucion: "3440x1440",
      panel: "IPS",
      refresco: "75Hz",
      conectividad: "HDMI, DP",
      uso: "Edición, diseño, multitarea"
    }
  },
];

export function fetchProducts(delayMs = 600) {
  return new Promise((resolve) => setTimeout(() => resolve(PRODUCTS), delayMs));
}

export function fetchProductById(id, delayMs = 600) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = PRODUCTS.find((p) => p.id === Number(id));
      found ? resolve(found) : reject(new Error("Producto no encontrado"));
    }, delayMs);
  });
}
