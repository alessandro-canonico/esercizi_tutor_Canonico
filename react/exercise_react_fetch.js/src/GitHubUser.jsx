import { useEffect, useState } from "react";

export function GitHubUser({ username }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchGitHubUser(username) {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const jsonData = await response.json();

      if (response.status !== 200) {
        setError(new Error());
      }

      setData(jsonData);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGitHubUser(username)
  }, [username])

  return (
    <div>
      {loading && <h1>Loading</h1>}
      {error && <h1>Error</h1>}
      {data &&
        <div>
          <h1>{data.login}</h1>
          <h2>{data.name}</h2>
          <img src={data.avatar_url}></img>
        </div>
      }
    </div>
  );
}
