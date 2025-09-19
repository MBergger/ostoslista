import { createContext, useState } from "react";


export const ShoppingContext = createContext();


export const ShoppingProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  return (
    <ShoppingContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ShoppingContext.Provider>
  );
};
