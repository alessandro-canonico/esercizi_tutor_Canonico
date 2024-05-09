import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser ({username}) {
     const {data, error, isLoading, onFetch} = useGitHubUser(username)

    function fetchAgain () {
        onFetch()
    }

     return (
        <div>
            <button onClick={fetchAgain}>Click to fetch again</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error</h1> }
            {data && <h1>{data.login}</h1>}
        </div>
     )
} 