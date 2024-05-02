import { useCounter } from "./useCounter";

export function Counter ({initialValue = 0 }) {
    const {counter, handleIncrement, handleDecrement, resetCounter } = useCounter(initialValue)

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}