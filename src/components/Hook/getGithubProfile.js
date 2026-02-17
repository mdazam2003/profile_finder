import { useState, useEffect } from 'react'

function useGithubProfile(profile) {
    
    const [data, setData] = useState("")
    useEffect(() => {
        fetch(`https://api.github.com/users/${profile}`)
        .then((res) =>  res.json())
        .then((result) => setData(result))

    }, [profile])
    return data;
}

export default useGithubProfile;