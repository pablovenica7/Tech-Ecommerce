import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItemToCart = (producto, delta) => {
    const stock = producto.stock ?? Infinity;
    const existe = items.find((it) => it.id === producto.id);

    let nuevosItems;
    if (existe) {
      const nuevaCant = Math.min(stock, Math.max(0, existe.cantidad + delta));
      if (nuevaCant === 0) {
        nuevosItems = items.filter((it) => it.id !== producto.id);
      } else {
        nuevosItems = items.map((it) =>
          it.id === producto.id ? { ...it, cantidad: nuevaCant } : it
        );
      }
    } else {
      const cantInicial = Math.min(stock, Math.max(1, delta));
      nuevosItems = [...items, { ...producto, cantidad: cantInicial }];
    }

    setItems(nuevosItems);
    setTotalPrice(
      nuevosItems.reduce((acc, it) => acc + it.precio * it.cantidad, 0)
    );
    setTotalQuantity(
      nuevosItems.reduce((acc, it) => acc + it.cantidad, 0)
    );
  };

  const removeItemFromCart = (id) => {
    const nuevosItems = items.filter((item) => item.id !== id);
    setItems(nuevosItems);
    setTotalPrice(
      nuevosItems.reduce((acc, it) => acc + it.precio * it.cantidad, 0)
    );
    setTotalQuantity(
      nuevosItems.reduce((acc, it) => acc + it.cantidad, 0)
    );
  };

  const clearCart = () => {
    setItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalPrice,
        totalQuantity,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
