import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); 

    const Increment = () => {
        setCount(count + 1);
    };

    const Decrement = () => {
        setCount(count - 1);
    };

    const Reset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1 className='head'>Counter: {count}</h1> 
            <button className='inc' onClick={Increment}>Increment</button>
            <button  className='reset' onClick={Reset}>Reset</button>
            <button className='dec' onClick={Decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
