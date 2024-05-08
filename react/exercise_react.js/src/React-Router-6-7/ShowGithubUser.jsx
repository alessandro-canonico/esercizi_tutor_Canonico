import { useEffect, useState } from "react";

export function ShowGithubUser() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`https://api.github.com/users`);
      const jsonData = await res.json();

      setData(jsonData);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>User</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {data &&
        data.map((users) => (
              users.url
        ))}
    </div>
  );
}
