import PropTypes from "prop-types";
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
    <form onSubmit={onSubmit} data-testid="form">
      <input
        type="text"
        placeholder="Search Gif..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onSetCategory: PropTypes.func.isRequired
}
