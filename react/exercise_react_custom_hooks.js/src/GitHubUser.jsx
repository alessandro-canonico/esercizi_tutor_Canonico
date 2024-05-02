import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser ({username}) {
     const {data, error, loading, onFetch} = useGitHubUser(username)

     function handleFetch () {
        onFetch(username)
     }

     return (
        <div>
            <button onClick={handleFetch}>Click to fetch user</button>
            {loading && <h1>Loading...</h1>}
            {data && <h1>{data.name}</h1> }
            {error && <h1>Error</h1> }
        </div>
     )
} 