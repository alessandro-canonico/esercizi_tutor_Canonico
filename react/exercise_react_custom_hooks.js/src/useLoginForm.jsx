import { useState } from "react"

export function useLoginForm () {
    function createData() {
        return {
            username: ``,
            password: ``
        }
    }

    const [data, setData] = useState(createData())

    function handleInput (event) {
        event.preventDefault()
        const name = event.target.name
        const value = event.target.value

        setData((d) => {
            return {
                ...d,
                [name]: value,
            }
        })
    }

    function resetInput (event) {
        event.preventDefault()
        setData(createData())
    }

    function handleLogin (event) {
        event.preventDefault()
        console.log(`Log succesfully`, data);
    }

    return {
        data, handleInput, resetInput, handleLogin
    }
}