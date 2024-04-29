import { useState } from "react"

export function TodoList () {
    const [todos, setTodos] = useState(``)
    
    function handleInput () {
        setTodos()
    }


    return (
        <ul>
            <li></li>
            <input type="text" />
            <button></button>
        </ul>
    )
}