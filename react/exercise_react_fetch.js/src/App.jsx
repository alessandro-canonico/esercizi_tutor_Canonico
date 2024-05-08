import { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function App () {
    const [username, setUsername] = useState("")
    return (
        <div>
            <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <ul>
                <GitHubUser username={username}/>
            </ul>
        </div>
    )
}