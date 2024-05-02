import { useLoginForm } from "./useLoginForm";

export function Login () {
    const {data, handleInput, handleLogin} = useLoginForm()

    return (
        <div>
            <h1>Login Form:</h1>
        <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" value={data.username} onChange={handleInput}/>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={data.password} onChange={handleInput}/>
            <button disabled={!data.username || !data.password}>Login</button>
        </form>
        </div>
    )
}