export function UncontrolledLogin () {
    
    function handleSubmit (event) {
        event.preventDefault()

        const username = event.target.elements.namedItem("username").value
        const password = event.target.elements.namedItem("password").value
        const checkbox = event.target.elements.namedItem("remember").checked

        const data = {
            username,
            password,
            checkbox,
        }

        console.log(data);
    }

    
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="username" type="text" />
            <input name="password" type="password" />
            <input name="remember" type="checkbox" />
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}