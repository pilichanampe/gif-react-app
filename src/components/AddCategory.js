import React from 'react';
import { useState } from 'react/cjs/react.development';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    console.log('handleInputChange llamado');
  }

  const handleSubmit = (e) => {
    // Previene el comportamiento del navegador por defecto. En este caso, refrescarse cuando ocurre el submit.
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories ]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <p> { inputValue } </p>
      <input
        type="text"
        value={inputValue}
        onChange={ handleInputChange }
      ></input>   
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}