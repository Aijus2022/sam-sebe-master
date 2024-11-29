import React, { createContext, useContext, useState } from "react";

// Create the context
const BasketContext = createContext();

// Provide the context
export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Add an item to the basket
  const addItem = (newItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Increase the quantity of the existing item
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add the new item
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  // Remove an item from the basket
  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Decrease the quantity of an item
  const decreaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove items with 0 quantity
    );
  };

  // Clear all items from the basket
  const clearBasket = () => {
    setItems([]);
  };

  return (
    <BasketContext.Provider
      value={{ items, addItem, removeItem, decreaseQuantity, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

// Hook to use the BasketContext
export const useBasket = () => useContext(BasketContext);


