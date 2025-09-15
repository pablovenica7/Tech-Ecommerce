import { createContext, useState, useContext } from "react";

// 1. Crear contexto
const CartContext = createContext();

// 2. Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

// 3. Proveedor del carrito
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const addToCart = (producto, qty) => {
    const itemInCart = cart.find((item) => item.id === producto.id);

    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...item, qty: item.qty + qty }
            : item
        )
      );
    } else {
      setCart([...cart, { ...producto, qty }]);
    }
  };

  // Eliminar producto
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Calcular totales
  const totalUnidades = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrecio = cart.reduce(
    (acc, item) => acc + item.precio * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalUnidades,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
