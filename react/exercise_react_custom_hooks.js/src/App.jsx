
import { SWRConfig } from "swr";
import { GitHubUser } from "./GitHubUser";

const fetcher = (url) => fetch(url).then((response) => response.json())

export function App () {
    return (
        <SWRConfig value={{fetcher}}>
        <div>
        <GitHubUser username="alessandro-canonico"/>
        </div>
        </SWRConfig>


    )
}