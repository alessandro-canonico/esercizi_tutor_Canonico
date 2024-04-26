import { useState } from "react"

function createData () {
    return {
        username:``,
        password: ``,
        remember: false
    }
}

export function Login () {

    const [data, setData] = useState(createData())

    function handleInput (event) {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData((d) => {
            return {
                ...d,
                [name]: type === `checkbox` ? checked : value
            }
        })
    }

    function resetInput () {
        setData(createData())
    }

    function handleLog () {
        console.log(data);
    }


    return (
        <div>
            <input name="username"  type="text" value={data.username} onChange={handleInput}/>
            <input name="password" type="password" value={data.password} id="password" onChange={handleInput}/>
            <input name="remember" type="checkbox" checked={data.remember} id="remember" onChange={handleInput}/>
            <button disabled={!data.username || !data.password || !data.remember} onClick={handleLog}>Login</button>
            <button onClick={resetInput}>Reset</button>
        </div>
    )
}