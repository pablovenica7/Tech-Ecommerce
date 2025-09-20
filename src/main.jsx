import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./components/CartContext.jsx";
import "./firebaseConfig";
// import { uploadProducts } from "./data/uploadProducts"; 
// ⚠️ Descomentar solo una vez para subir productos a Firestore
// uploadProducts();

const DOMElement = document.getElementById("root");
const VDOMElement = createRoot(DOMElement);

VDOMElement.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
