import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function decrementCount() {
        setCount(prevCount => prevCount - 1);
    }
    
    function incrementCount() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div className="counter-container">
            <h1 className="main-heading">Counter for the HW from lesson 38</h1>
            <div className="counter">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>   
            </div>     
        </div>
    )
}

export default Counter;
