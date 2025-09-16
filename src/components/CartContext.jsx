import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(producto, cantidad) {
    setCart((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + cantidad } : p
        );
      } else {
        return [...prev, { ...producto, cantidad }];
      }
    });
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const totalUnidades = cart.reduce((acc, p) => acc + p.cantidad, 0);
  const totalPrecio = cart.reduce((acc, p) => acc + p.cantidad * p.precio, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalUnidades, totalPrecio }}
    >
      {children}
    </CartContext.Provider>
  );
}
