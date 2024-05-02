import { Counter } from "./Counter";
import { GitHubUser } from "./GitHubUser";
import { Login } from "./Login";

export function App () {
    return (
        <div>
        <Counter/>
        <hr />
        <Login/>
        <hr />
        <GitHubUser username="alessandro-canonico"/>
        </div>

    )
}