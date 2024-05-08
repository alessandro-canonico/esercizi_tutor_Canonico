import { useState } from "react";

export function Counter ({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)
    
    function handleIncrement () {
        setCounter((c) => c + 1)
    }

    function handleDecrement () {
        setCounter((c) => c - 1)
    }

    function reset () {
        setCounter(initialValue)
    }

    return (
        <div>  
            <h2>Counter: {counter} </h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}