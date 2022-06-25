import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
