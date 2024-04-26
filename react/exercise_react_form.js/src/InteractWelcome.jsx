import { useState } from "react";
import { Welcome } from "./Welcome";


export function InteractWelcome () {
    const [data, setData] = useState(``)

    function handleInput (event) {
        const name = event.target.name
        const value = event.target.value

        setData((d) => {
            return {
                ...d,
                [name] : value
            }
        })
    }

    
    return (
        <div>
            <input name="name" value={data.name} onChange={handleInput}/>
            <Welcome name={data.name} />
        </div>
    )
}