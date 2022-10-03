import { useState } from "react"

export const AddCategory = ({ onSetCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newCategory = inputValue.trim();
    if (newCategory.length <= 0) return;

    onSetCategory(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search Gif..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}