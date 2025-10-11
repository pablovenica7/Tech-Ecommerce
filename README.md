# 🛒 VEYOR - E-commerce

🌐 **Visita el sitio:** [techecommerce-veyor.netlify.app](https://techecommerce-veyor.netlify.app/)  

---

📌 Proyecto final del curso **ReactJS** (Coderhouse): una aplicación web de tipo **e-commerce** desarrollada como  
**Single Page Application (SPA)** con React. Incluye catálogo de productos, carrito de compras,  
checkout y conexión a **Firebase Firestore**.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React + Vite**
- 🌐 **React Router DOM** → navegación SPA
- 🎨 **Bootstrap 5 + CSS personalizado**
- 🔥 **Firebase Firestore** → base de datos y órdenes de compra
- 💬 **SweetAlert2** → alertas interactivas
- 🛍️ **Context API** → manejo global del carrito

---

## 📂 Estructura del proyecto

```
src/
 ├── assets/        # 📸 Imágenes e íconos (solo en desarrollo)
 ├── components/    # 🧩 Componentes reutilizables (NavBar, Cart, Checkout, etc.)
 ├── data/          # 🔗 Funciones de acceso a Firestore
 ├── pages/         # 📄 Vistas principales (Home, Contacto, etc.)
 ├── App.jsx        # 📌 Rutas principales de la aplicación
 ├── main.jsx       # 🚀 Renderizado inicial con CartProvider
 └── index.css      # 🎨 Estilos globales
```

> En producción, las imágenes se sirven desde `public/assets/` para compatibilidad total con Netlify.

---

## ⚙️ Requisitos previos

- 📥 Tener instalado **Node.js** (v16 o superior recomendado)  
  👉 [Descargar Node.js](https://nodejs.org/)
- 🔑 Tener una cuenta en **Firebase** con un proyecto configurado en **Firestore**

---

## ▶️ Pasos para ejecutar el proyecto

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/pablovenica7/Tech-Ecommerce.git
cd Tech-Ecommerce
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar Firebase
El proyecto ya incluye las credenciales necesarias en `firebaseConfig.js`, por lo que no es necesario crear un `.env`.  
Con esas credenciales, la app se conecta directamente a la base de datos Firestore.

### 4️⃣ Ejecutar en modo desarrollo
```bash
npm run dev
```
👉 La app estará disponible en: **http://localhost:5173**

### 5️⃣ Compilar para producción
```bash
npm run build
```

---

## ✨ Funcionalidades principales

✔️ Catálogo de productos dinámico desde Firestore  
✔️ Filtro por categorías y orden de precios  
✔️ Detalle de producto con control de stock  
✔️ Carrito de compras con estado global (Context API)  
✔️ Resumen de compra y proceso de Checkout  
✔️ Creación de órdenes en Firestore con ID único  
✔️ Validaciones (campos vacíos, carrito vacío, stock limitado)  
✔️ Alertas y feedback al usuario con SweetAlert2  
✔️ Deploy profesional en **Netlify**

---

## 👨‍💻 Autor

**Pablo Venica**  
📅 Proyecto final de ReactJS – 2025  
📚 Curso dictado por [Coderhouse](https://www.coderhouse.com/)

---

🎯 *VEYOR: Tecnología que te potencia.*
