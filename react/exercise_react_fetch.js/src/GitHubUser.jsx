import { useGitHubUsers } from "./useGitHubUsers";

export function GitHubUser({ username }) {
  const { data, loading, error, getUsers } = useGitHubUsers(username);

  function handleGetUsers() {
    getUsers(username);
  }

  return (
    <div>
      <button onClick={handleGetUsers}>Find user</button>
      {loading && <h1>Loading</h1>}
      {error && <h1>Error</h1>}
      {data && 
        <li>
          <h5>{data.login}</h5>
        </li>
      }
    </div>
  );
}
