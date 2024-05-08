import { useState } from "react";

export function useGitHubUsers() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUsers(username) {
    setLoading(true);
    setError(null);

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

  return {
    data,
    loading,
    error,
    getUsers: fetchUsers,
  };
}
