import { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GitHubUsers () {
    const [username, setUsername] = useState("")

    return (
        <div>
        <form>
            <input type="text" name="name" id="name" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="submit">Show</button>
        </form>

        <div>
        <ul>
            <li><GitHubUser username={username}/></li>
        </ul>
        </div>
        </div>
    )
}