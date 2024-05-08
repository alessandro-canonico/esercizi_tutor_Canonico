import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

export function GithubUserList() {
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
      <h1>Github Users List</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {data &&
        data.map((users) => 
            <li key={users.id}>
              <Link to={`/user/${users.login}`} element={<ShowGithubUser/>}>{users.login}</Link>
            </li>
)}

        <hr />

        <Outlet/>
    </div>
  );
}
