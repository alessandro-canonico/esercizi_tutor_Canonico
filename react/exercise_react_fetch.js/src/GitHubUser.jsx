import { useEffect, useState } from "react";

export function GitHubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUsers(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers(username);
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading</h1>}
      {data && (
        <div>
            <header>
              <p>User login:</p>
              {data.login}
            </header>
            <img src={data.avatar_url} alt="users-avatar" />
            <footer>
              <p>Name:</p>
              {data.name}
            </footer>
          </div> 
      )}
      {error && <h1>Error</h1>}
    </div>
  );
}
