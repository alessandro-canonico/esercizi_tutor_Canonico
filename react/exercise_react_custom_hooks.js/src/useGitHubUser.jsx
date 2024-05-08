import {  useState } from "react";

export function useGitHubUser () {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchUserData (username) {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const jsonData = await response.json()

            if(response.status !== 200) {
                setError(new Error())
            }

            setData(jsonData)
        } catch (error) {
            setError(error)
            setData(null)
        } finally {
            setLoading(null)
        }
    }

    return {
        data,
        error,
        loading,
        onFetch: fetchUserData   
    }
}