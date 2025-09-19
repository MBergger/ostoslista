import { useState, useContext } from "react";
import { ShoppingContext } from "./ShoppingContext";

const AddItemForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { addItem } = useContext(ShoppingContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    addItem(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kirjoita ostos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Lisää</button>
    </form>
  );
};

export default AddItemForm;
