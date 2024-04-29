import { useEffect, useRef } from "react";

export function FocusableInput () {

    const inputRef = useRef(null)

    const mounted = useRef(false)

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true  
            console.log(`mounted first time`);
        }

        inputRef.current?.focus()
    }, [])

    function handleSubmit (event) {
        event.preventDefault()

        const focused = event.target.elements.namedItem("focused").value
        const data = {
            focused,
        }

        console.log(data);
    }

    
    
    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} name="focused" type="text" />   
            <button>Login</button>
        </form>
    )

}