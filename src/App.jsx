import React, { useState, useEffect } from 'react';

export const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    setItems([...items, inputValue]); 

    setInputValue('')
  }

  const deleteItem = (e) => {
    e.target.parentNode.remove()
  }

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [items])

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <p>
            - {item} -
          </p>
          <button onClick={deleteItem}>Bought!</button>
        </div>
      ))}
      <input type="text" value={inputValue} onChange={handleInputChange}/>
      <br />
      <button onClick={handleButtonClick}>Add to the cart</button>
    </>
  )
}