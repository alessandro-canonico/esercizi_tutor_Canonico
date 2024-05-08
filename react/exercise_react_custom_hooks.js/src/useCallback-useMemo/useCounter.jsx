import { useCallback, useState } from "react";

export function useCounter (initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    const handleIncrement = useCallback(function increment () {
        setCounter(c => c + 1)
    }, [])
    
    
    const handleDecrement = useCallback(function decrement () {
        setCounter(c => c - 1)
    }, []) 

    const resetCounter = useCallback(function reset () {
        setCounter(initialValue)
    }, [initialValue]) 

    return {
        counter,
        handleIncrement,
        handleDecrement,
        resetCounter
    }
}