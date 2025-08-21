import React, { useState, useEffect } from 'react';

export const App = () => {
  const [inputNameValue, setNameInputValue] = useState('')
  const [inputPriceValue, setPriceInputValue] = useState(0)
  const [theCheck, setCheck] = useState(0)
  const [items, setItems] = useState([])

  const handleNameInputChange = (e) => {
    setNameInputValue(e.target.value)
  }
  const handlePriceInputChange = (e) => {
    setPriceInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    const newItemPrice = Number(inputPriceValue);

    setItems([...items, { name: inputNameValue, price: newItemPrice }]);

    setCheck((theCheck) => theCheck + newItemPrice);

    setNameInputValue('');
    setPriceInputValue(0);
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
            - {item.name} -
          </p>
          <p>
            {item.price}$
          </p>
          <button onClick={deleteItem}>In the cart!</button>
        </div>
      ))}
      <p>Name:</p>
      <input type="text" value={inputNameValue} onChange={handleNameInputChange}/>
      <p>Price:</p>
      <input type="number" value={inputPriceValue} onChange={handlePriceInputChange}/>
      <br />
      <button onClick={handleButtonClick}>Add to the cart</button>

      <div className='check'>
        <p>The check:</p>
        <p>- {theCheck}$ -</p>
      </div>
    </>
  )
}