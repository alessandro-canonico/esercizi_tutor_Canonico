import { useState } from "react";

export function useCounter (initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    function handleIncrement () {
        setCounter(c => c + 1)
    }

    function handleDecrement () {
        setCounter(c => c - 1)
    }

    function resetCounter () {
        setCounter(initialValue)
    }

    return {
        counter,
        handleIncrement,
        handleDecrement,
        resetCounter
    }
}