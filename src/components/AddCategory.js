import React from 'react'
import { useState } from 'react/cjs/react.development'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    // Previene el comportamiento del navegador por defecto. En este caso, refrescarse cuando ocurre el submit.
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(categories => [...categories, inputValue]);
      setInputValue('');

    }



  }


  return (
    <form onSubmit={ handleSubmit }>
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