import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState(""); // Локальний стан для введення

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введіть пошуковий запит"
      />
      <button type="submit">Шукати</button>
    </form>
  );
};

export default SearchBar;
