import { useEffect, useState } from "react";

export function GithubUser ( { username }) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchData (username) {
        setError(null)
        setLoading(true)

        try {
            const res = await fetch(`https://api.github.com/users/${username}`)
            const jsonData = await res.json()

            setData(jsonData)
        } catch (error) {
            setError(error)
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(username)
    }, [username])

    return (
        <div>
            {loading && <h1>Loading...</h1> }
            {error && <h1>There has been an error</h1>}
            {data && <h1>{data.login}</h1> }
        </div>
    )
}