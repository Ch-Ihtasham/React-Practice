import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ch-ihtasham')
    //         .then(response => response.json())
    //         .then(data => setData(data))
    // }, [])
    return (
        <div>
            <div>
                <h1>github{data.followers}</h1>
            </div>
        </div>
    )
}

export default Github
// export const githubinfo = async () => {
//     const response = await fetch('https://api.github.com/users/ch-ihtasham')
//     return response.json()
// }
