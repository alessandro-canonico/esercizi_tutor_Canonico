import { useState } from "react"
import classes from "./Todo.module.scss"

export function TodoList () {
    const [todos, setTodos] = useState([])
    
    function handleAddToDo (event) {
        event.preventDefault()

        const todo = event.target.elements.namedItem("todo").value

        setTodos((todos) => [...todos, todo])

        event.target.elements.namedItem("todo").value = ''
    }

    function removeItem () {
        const newList = todos.filter((item) => item !== item)

        setTodos(newList)
    }

    function resetList () {
        setTodos([])
    }


    return (
        <div className={classes.container}>
            <ul className={classes.ul}>
                {todos.map((item, index) => (
                    <li className={classes.li} key={index}>{item} <button onClick={removeItem}>Remove</button></li>))}

            </ul>

            <form className={classes.form} onSubmit={handleAddToDo}>
                <label htmlFor="todo">Aggiungi un nuovo task: </label>
                <input name="todo" id="todo" type="text" />
                <button>Add</button>
                <button type="reset" onClick={resetList}>Reset</button>
            </form>
        </div>
    )
}