import useSWR from "swr"


export function useGitHubUser (username) {
    const {data, error, mutate } = useSWR(username ? `https://api.github.com/users/${username}`: null)


    function handleFetch () {
        mutate()
    }

    return {
        data,
        error,
        isLoading: !data && !error,
        onFetch: handleFetch
    }
}
