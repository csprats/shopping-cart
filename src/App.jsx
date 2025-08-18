import React, { useState } from 'react';

export const App = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    setInputValue('')
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange}/>
      <br />
      <button onClick={handleButtonClick}>Add to the cart</button>
    </>
  )
}