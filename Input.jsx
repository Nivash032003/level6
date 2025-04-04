import React, { useState } from 'react';

function InputComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div >
      <h2 className='head'>Input Handler</h2>
      <input className='i'
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type Here..."
        
      />
      <p className='p'>You typed: {inputValue}</p>
    </div>
  );
}

export default InputComponent;
