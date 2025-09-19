import { useContext } from "react";
import { ShoppingContext } from "./ShoppingContext";

const ItemList = () => {
  const { items, removeItem } = useContext(ShoppingContext);

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => removeItem(item)}
          style={{ cursor: "pointer" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
