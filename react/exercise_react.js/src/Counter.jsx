import { useEffect, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter ({initialValue = 0, incrementValue, decrementValue}) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        console.log(`Counter current value ${counter}`);
    }, [counter])
    
    function incrementCounter () {
        setCounter(incrementValue)
    }

    function decrementCounter () {
        setCounter(decrementValue)
    }

    function resetValue () {
        setCounter(initialValue)
    }
    
    return (
        <div>
           <CounterDisplay counter={counter}/>
           <button onClick={incrementCounter}>Increment</button> 
           <button onClick={decrementCounter}>Decrement</button>
           <button onClick={resetValue}>Reset</button>
        </div>
    )
}