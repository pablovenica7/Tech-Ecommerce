import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItemToCart = (producto, cantidad) => {
    const itemExistente = items.find((item) => item.id === producto.id);

    let nuevosItems;
    if (itemExistente) {
      nuevosItems = items.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      );
    } else {
      nuevosItems = [...items, { ...producto, cantidad }];
    }

    setItems(nuevosItems);
    setTotalPrice(
      nuevosItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    );
    setTotalQuantity(
      nuevosItems.reduce((acc, item) => acc + item.cantidad, 0)
    );
  };

  const removeItemFromCart = (id) => {
    const nuevosItems = items.filter((item) => item.id !== id);
    setItems(nuevosItems);
    setTotalPrice(
      nuevosItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    );
    setTotalQuantity(
      nuevosItems.reduce((acc, item) => acc + item.cantidad, 0)
    );
  };

  const clearCart = () => {
    setItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
  };

  return (
    <CartContext.Provider
      value={{ items, totalPrice, totalQuantity, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
