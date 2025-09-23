🛒 Tech-Ecommerce

📌 Proyecto final del curso ReactJS: una aplicación web de tipo e-commerce desarrollada como
Single Page Application (SPA) con React. Incluye catálogo de productos, carrito de compras,
checkout y conexión a Firebase Firestore.

🚀 Tecnologías utilizadas

⚛️ React + Vite

🌐 React Router DOM → navegación SPA

🎨 Bootstrap 5 + CSS personalizado

🔥 Firebase Firestore → base de datos y órdenes de compra

💬 SweetAlert2 → alertas interactivas

🛍️ Context API → manejo global del carrito

📂 Estructura del proyecto
src/
 ├── assets/        # 📸 Imágenes e íconos
 ├── components/    # 🧩 Componentes reutilizables (NavBar, Cart, Checkout, etc.)
 ├── data/          # 🔗 Funciones de acceso a Firestore
 ├── pages/         # 📄 Vistas principales (Home, Contacto)
 ├── App.jsx        # 📌 Rutas principales de la aplicación
 ├── main.jsx       # 🚀 Renderizado inicial con CartProvider
 └── index.css      # 🎨 Estilos globales

⚙️ Requisitos previos

📥 Instalar Node.js (v16 o superior recomendado).
👉 Descargar Node.js

🔑 Tener una cuenta en Firebase con un proyecto configurado en Firestore.

▶️ Pasos para ejecutar el proyecto
1️⃣ Clonar el repositorio
git clone https://github.com/pablovenica7/Tech-Ecommerce.git
cd Tech-Ecommerce

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar Firebase

Este proyecto ya incluye las credenciales necesarias en firebaseConfig.js.
El archivo está configurado así:

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd-f-V4dIEdk0M2JTx9AzWsHY9CMq6ekA",
  authDomain: "techecommerce-veyor-900b9.firebaseapp.com",
  projectId: "techecommerce-veyor-900b9",
  storageBucket: "techecommerce-veyor-900b9.firebasestorage.app",
  messagingSenderId: "312429392753",
  appId: "1:312429392753:web:172d95a903356edd5d7cd0",
  measurementId: "G-8GXKFQKQLT"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


👉 Con estas credenciales, la app se conecta directamente a la base de datos en Firestore.
No es necesario crear un .env ni configurar nada extra.

4️⃣ Ejecutar en modo desarrollo
npm run dev

👉 La app estará disponible en: http://localhost:5173

5️⃣ Compilar para producción
npm run build

✨ Funcionalidades principales

✔️ Catálogo de productos dinámico desde Firestore

✔️ Filtro por categorías y orden de precios

✔️ Detalle de producto con ItemCount y control de stock

✔️ Carrito de compras con estado global (Context API)

✔️ Resumen de compra y Checkout

✔️ Creación de órdenes en Firestore con ID único

✔️ Validaciones: campos vacíos, carrito vacío, stock limitado

✔️ Alertas modernas con SweetAlert2

👨‍💻 Autor

Pablo Venica
📅 Proyecto final de ReactJS – 2025
