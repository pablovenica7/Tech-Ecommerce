// src/data/products.js
const PRODUCTS = [
  { id: 1, nombre: "PC Gamer Ryzen 5",        precio: 580000, categoria: "pcs",       descripcion: "PC gamer equilibrada para 1080p." },
  { id: 2, nombre: "Notebook Dell i7",        precio: 720000, categoria: "notebooks", descripcion: "Notebook para trabajo y estudio." },
  { id: 3, nombre: "Monitor 27'' LG",         precio: 250000, categoria: "monitores", descripcion: "Panel IPS Full HD 75Hz." },
  { id: 4, nombre: "PC Office i5",            precio: 430000, categoria: "pcs",       descripcion: "Para ofimática y multimedia." },
  { id: 5, nombre: "Notebook Lenovo Ryzen 7", precio: 810000, categoria: "notebooks", descripcion: "Rendimiento portátil alto." },
  { id: 6, nombre: "Monitor 24'' Samsung",    precio: 190000, categoria: "monitores", descripcion: "Compacto y nítido para oficina." },
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
